'use client';
import { type ReactNode, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { deleteResult } from '@/app/lib/actions';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { toast } from 'sonner';
import { Download, Share2, Trash2 } from 'lucide-react';

export default function ResultsTable({
  file,
  title,
  canEdit,
  fileKey,
  year,
  children,
}: Readonly<{
  file: string;
  title: string;
  canEdit?: boolean;
  children: ReactNode;
  fileKey: string;
  year: number;
}>) {
  // Compute URL with hash on the client side
  const url = useMemo(() => {
    if (typeof window === 'undefined') return '';
    const location = new URL(window.location.href);
    location.hash = fileKey;
    return location.toString();
  }, [fileKey]);
  return (
    <>
      <div className={`relative flex grow flex-col overflow-auto shadow-md sm:rounded-lg lg:h-full lg:overflow-x-auto`}>
        <DeleteForm fileKey={fileKey} canEdit={canEdit} year={year} />
        <div className="flex flex-row items-center justify-end gap-6 px-6 py-2 text-gray-900 dark:text-white">
          <ButtonGroup aria-label={`Eredmény akciók`}>
            {canEdit && (
              <Button form={`delete_form_${fileKey}`} type={'submit'} title={`Törlés`} variant={'ghost'} size={'icon'}>
                <Trash2 />
              </Button>
            )}
            <Button variant={'ghost'} size={'icon'} onClick={() => share(url, title)} title={`Megosztás`}>
              <Share2 />
            </Button>
            <Button
              variant={'ghost'}
              size={'icon'}
              title={'Táblázat letöltése'}
              nativeButton={false}
              render={<Link href={file} target={'_blank'} />}
            >
              <Download />
            </Button>
          </ButtonGroup>
        </div>
        {children}
      </div>
    </>
  );
}

function DeleteForm({ fileKey, canEdit, year }: { fileKey: string; canEdit?: boolean; year: number }): ReactNode {
  const router = useRouter();
  if (!canEdit) {
    return null;
  }
  return (
    <form
      id={`delete_form_${fileKey}`}
      className={'sr-only'}
      action={async () => {
        try {
          const result = await deleteResult(fileKey, year);
          if (result?.error != null) {
            toast.error(result.error);
          } else {
            toast.success('Sikeres törlés');
          }
        } catch (e) {
          console.error(e);
          if (e instanceof Error) {
            toast.error(`Hiba történt a törlés során! ${e.message}`);
          }
          return;
        }
        router.refresh();
      }}
      onSubmit={(e) => {
        const next = confirm('Biztosan törölni szeretnéd az eredményt?');
        if (!next) {
          e.preventDefault();
        }
      }}
    />
  );
}

async function share(url: string, title: string) {
  if (typeof navigator.canShare === 'function') {
    const data: ShareData = {
      url,
      title: `${title} eredmények`,
      text: `${title} - ${document.title}`,
    };
    if (navigator.canShare(data)) {
      await navigator.share(data);
    }
  }
}
