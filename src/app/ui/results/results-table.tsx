'use client';
import { type ReactNode, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faShareNodes, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { deleteResult } from '@/app/lib/actions';

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
        <div className="flex flex-row items-center justify-end gap-6 px-6 py-2 text-primary-800 dark:text-primary-200">
          <DeleteButton fileKey={fileKey} canEdit={canEdit} year={year} />
          <button
            onClick={() => share(url, title)}
            className={`transition-colors duration-200 hover:text-primary hover:dark:text-primary-600`}
            title={`Megosztás`}
          >
            <FontAwesomeIcon icon={faShareNodes} className={`size-6`} />
          </button>
          <Link
            href={file}
            target={'_blank'}
            className={`transition-colors duration-200 hover:text-primary hover:dark:text-primary-600`}
            title={'Táblázat letöltése'}
          >
            <FontAwesomeIcon icon={faDownload} className={`size-6`} />
          </Link>
        </div>
        {children}
      </div>
    </>
  );
}

function DeleteButton({ fileKey, canEdit, year }: { fileKey: string; canEdit?: boolean; year: number }): ReactNode {
  const router = useRouter();
  if (!canEdit) {
    return null;
  }
  return (
    <form
      action={async () => {
        try {
          const result = await deleteResult(fileKey, year);
          if (result?.error != null) {
            alert(result.error);
          }
        } catch (e) {
          console.error(e);
          if (e instanceof Error) {
            alert(`Hiba történt a törlés során! ${e.message}`);
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
    >
      <button
        type={'submit'}
        className={`transition-colors duration-200 hover:text-primary hover:dark:text-primary-600`}
        title={`Törlés`}
      >
        <FontAwesomeIcon icon={faTrashCan} className={`size-6`} />
      </button>
    </form>
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
