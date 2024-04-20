import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';
import { auth } from '@/app/lib/auth';
import { isAdmin } from '@/app/db/data';
import { isNullOrEmpty } from '@/app/utils';
import { uploadResult } from '@/app/lib/actions';
import { Result } from '@/app/lib/types';

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  resultUploader: f({
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
      maxFileSize: '8MB',
    },
    pdf: {
      maxFileSize: '8MB',
    },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const headers = req.headers;
      const resultType = headers.get('resultType');
      const parsedResult = Result.safeParse(resultType);
      if (!parsedResult.success) {
        throw new UploadThingError('Ismeretlen eredménytípus');
      }
      const { authorized, userId } = await canEdit();
      console.log('Authorized:', authorized, 'userId:', userId, 'resultType:', parsedResult.data);

      if (!authorized) {
        throw new UploadThingError('Nincs jogosultság a feltöltéshez');
      }
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: userId, result: parsedResult.data };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      await uploadResult({ url: file.url, resultType: metadata.result });
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId, result: metadata.result };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

async function canEdit(): Promise<{ authorized: boolean; userId: string | null }> {
  const session = await auth();
  const email = session?.user?.email;
  if (!isNullOrEmpty(email)) {
    const admin = await isAdmin(email);
    return { authorized: admin, userId: email };
  }
  return { authorized: false, userId: null };
}
