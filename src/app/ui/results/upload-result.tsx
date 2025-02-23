'use client';
import { type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { UploadButton } from '@/app/ui/uploadthing';

export function UploadResult({ title, canEdit }: { title: string; canEdit?: boolean }): ReactNode {
  const router = useRouter();
  if (!canEdit) {
    return null;
  }
  return (
    <UploadButton
      className={`duration-200 ut-button:transition-colors ut-button:bg-primary ut-allowed-content:text-bg-contrast ut-readying:ut-button:bg-primary-600 hover:ut-ready:ut-button:bg-primary-600 ut-uploading:ut-button:after:bg-primary-400/25`}
      endpoint="resultUploader"
      onClientUploadComplete={() => {
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
            return `Feltöltés: ${uploadProgress.toString()}%`;
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
