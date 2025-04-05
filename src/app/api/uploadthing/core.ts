import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';
import { auth } from '@/app/lib/auth';
import { isAdmin } from '@/app/db/data';
import { isNullOrEmpty } from '@/app/utils';
import { MeetingYear, type MeetingYearType, Result, type ResultType, resultTypeSchema } from '@/app/lib/types';
import { type FileRouterInputConfig } from '@uploadthing/shared';
import { type FileUploadData } from 'uploadthing/types';
import { uploadResult } from '@/app/lib/private-actions';

const f = createUploadthing();
const fileSize = 8_000_000;
const allowed = 'Csak xlsx, pdf és kép fájlok tölthetőek fel';

const resultUploader = {
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
    maxFileSize: '8MB',
    maxFileCount: 2,
  },
  'application/pdf': {
    maxFileSize: '8MB',
    maxFileCount: 2,
  },
  image: {
    maxFileSize: '8MB',
    maxFileCount: 4,
  },
} as const satisfies FileRouterInputConfig;

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  resultUploader: f(resultUploader)
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req, files }) => {
      // This code runs on your server before upload
      const headers = req.headers;
      validateFiles(files);
      const resultType = decodeURIComponent(headers.get('resultType') ?? '');
      const year = decodeURIComponent(headers.get('year') ?? '');
      const parsedResult = Result.safeParse(resultType);
      if (!parsedResult.success) {
        // eslint-disable-next-line @typescript-eslint/only-throw-error
        throw new UploadThingError('Ismeretlen eredménytípus');
      }
      const parsedYear = MeetingYear.safeParse(year);
      if (!parsedYear.success) {
        // eslint-disable-next-line @typescript-eslint/only-throw-error
        throw new UploadThingError('Ismeretlen év');
      }
      const { authorized, userId } = await canEdit(parsedYear.data);

      if (!authorized) {
        // eslint-disable-next-line @typescript-eslint/only-throw-error
        throw new UploadThingError('Nincs jogosultság a feltöltéshez');
      }
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: userId, result: parsedResult.data, year: parsedYear.data };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      await uploadResult({
        key: file.key,
        result: metadata.result,
        type: file.type as ResultType,
        year: metadata.year,
      });
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId, result: metadata.result, year: metadata.year };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

async function canEdit(year: MeetingYearType): Promise<
  | { authorized: false; userId: string | null }
  | {
      authorized: true;
      userId: string;
    }
> {
  const session = await auth();
  const email = session?.user?.email;
  if (isNullOrEmpty(email)) {
    return { authorized: false, userId: null };
  }
  const admin = await isAdmin(email, parseInt(year, 10));
  return { authorized: admin, userId: email };
}

function validateFiles(files: Readonly<Array<FileUploadData>>) {
  for (const file of files) {
    const fileType = file.type;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (file.size == null || file.size > fileSize) {
      // eslint-disable-next-line @typescript-eslint/only-throw-error
      throw new UploadThingError(`Túl nagy fájl: ${file.name}`);
    }
    if (isNullOrEmpty(fileType)) {
      // eslint-disable-next-line @typescript-eslint/only-throw-error
      throw new UploadThingError(`Ismeretlen fájltípus: ${file.name}`);
    }
    const parsedResultType = resultTypeSchema.safeParse(fileType);
    if (!parsedResultType.success) {
      // eslint-disable-next-line @typescript-eslint/only-throw-error
      throw new UploadThingError(`${allowed}: ${file.name}`);
    }
  }
}
