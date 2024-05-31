import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';
import { auth } from '@/app/lib/auth';
import { isAdmin } from '@/app/db/data';
import { isNullOrEmpty } from '@/app/utils';
import { uploadResult } from '@/app/lib/actions';
import { Result, ResultType, resultTypeSchema } from '@/app/lib/types';
import { FileRouterInputConfig } from '@uploadthing/shared';
import { FileUploadData } from 'uploadthing/types';

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
      const parsedResult = Result.safeParse(resultType);
      if (!parsedResult.success) {
        throw new UploadThingError('Ismeretlen eredménytípus');
      }
      const { authorized, userId } = await canEdit();

      if (!authorized) {
        throw new UploadThingError('Nincs jogosultság a feltöltéshez');
      }
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: userId, result: parsedResult.data };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      await uploadResult({ key: file.key, result: metadata.result, type: file.type as ResultType });
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId, result: metadata.result };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

async function canEdit(): Promise<{ authorized: false; userId: string | null } | { authorized: true; userId: string }> {
  const session = await auth();
  const email = session?.user?.email;
  if (!isNullOrEmpty(email)) {
    const admin = await isAdmin(email);
    return { authorized: admin, userId: email };
  }
  return { authorized: false, userId: null };
}

function validateFiles(files: Readonly<Array<FileUploadData>>) {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileType = file?.type;
    if (file?.size == null || file?.size > fileSize) {
      throw new UploadThingError(`Túl nagy fájl: ${file?.name}`);
    }
    if (isNullOrEmpty(fileType)) {
      throw new UploadThingError(`Ismeretlen fájltípus: ${file?.name}`);
    }
    const parsedResultType = resultTypeSchema.safeParse(fileType);
    if (!parsedResultType.success) {
      if (!fileType.startsWith('image/')) {
        throw new UploadThingError(`${allowed}: ${file?.name}`);
      }
    }
  }
}
