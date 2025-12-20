'use client';
import { type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { UploadButton } from '@/app/ui/uploadthing';

export function UploadResult({
  resultType,
  canEdit,
  year,
}: {
  resultType: string;
  canEdit?: boolean;
  year: number;
}): ReactNode {
  const router = useRouter();
  if (!canEdit) {
    return null;
  }
  return (
    <UploadButton
      className={`duration-200 ut-button:transition-colors ut-button:bg-primary ut-allowed-content:text-primary-800 dark:text-primary-200 ut-button:ut-readying:bg-primary-600 ut-button:ut-ready:hover:bg-primary-600 ut-button:ut-uploading:after:bg-primary-400/25`}
      endpoint="resultUploader"
      onClientUploadComplete={() => {
        router.refresh();
      }}
      onUploadError={(error: Error) => {
        console.error(`ERROR! ${error.message}`);
        alert(`Hiba történt a feltöltés során: ${error.message}`);
      }}
      headers={{ resultType: encodeURIComponent(resultType), year: year.toString() }}
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
