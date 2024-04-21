import { generateUploadButton, generateUploadDropzone } from '@uploadthing/react';

import type { OurFileRouter } from '@/app/api/uploadthing/core';
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

export function Upload({ title, canEdit }: { title: string; canEdit?: boolean }): ReactNode {
  const router = useRouter();
  if (!canEdit) {
    return null;
  }
  return (
    <UploadButton
      className={`duration-200 ut-button:transition-colors ut-button:bg-primary ut-allowed-content:text-bg-contrast ut-button:ut-readying:bg-primary-600 ut-button:ut-ready:hover:bg-primary-600 ut-button:ut-uploading:after:bg-primary-400/25`}
      endpoint="resultUploader"
      onClientUploadComplete={(res) => {
        console.log('Files: ', res);
        alert('Sikeres feltöltés! (Szimulált)');
        router.refresh();
      }}
      onUploadError={(error: Error) => {
        console.error(`ERROR! ${error.message}`);
        alert(`Hiba történt a feltöltés során: ${error.message}`);
      }}
      headers={{ resultType: encodeURIComponent(title) }}
      content={{
        button: ({ ready, uploadProgress, isUploading }) => {
          if (uploadProgress) {
            return `Feltöltés: ${uploadProgress}%`;
          }
          if (isUploading) {
            return 'Folyamatban...';
          }
          if (ready) {
            return 'Feltöltés';
          }
          return 'Kérlek várj...';
        },
        allowedContent: () => {
          return 'Max. 8MB/fájl';
        },
      }}
    />
  );
}