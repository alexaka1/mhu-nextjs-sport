'use client';
import { type ReactNode, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faShareNodes, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { canEditResults, deleteResult } from '@/app/lib/actions';

export default function ResultsTable({
  file,
  title,
  canEdit,
  fileKey,
  children,
}: Readonly<{
  file: string;
  title: string;
  canEdit?: boolean;
  children: ReactNode;
  fileKey: string;
}>) {
  const [url, setUrl] = useState<string>('');
  useEffect(() => {
    const location = new URL(window.location.href);
    location.hash = fileKey;
    setUrl(location.toString());
  }, [fileKey]);
  return (
    <>
      <div
        className={`relative flex h-svh grow flex-col overflow-auto shadow-md sm:rounded-lg lg:h-full lg:overflow-x-auto`}
      >
        <div className="text-bg-contrast flex flex-row items-center justify-end gap-6 px-6 py-2">
          <DeleteButton fileKey={fileKey} canEdit={canEdit} />
          <button
            onClick={() => share(url, title)}
            className={`hover:text-primary dark:hover:text-primary-600 transition-colors duration-200`}
            title={`Megosztás`}
          >
            <FontAwesomeIcon icon={faShareNodes} className={`text-2xl`} />
          </button>
          <Link
            href={file}
            target={'_blank'}
            className={`hover:text-primary dark:hover:text-primary-600 transition-colors duration-200`}
            title={'Táblázat letöltése'}
          >
            <FontAwesomeIcon icon={faDownload} className={`text-2xl`} />
          </Link>
        </div>
        {children}
      </div>
    </>
  );
}

function DeleteButton({ fileKey, canEdit }: { fileKey: string; canEdit?: boolean }): ReactNode {
  const router = useRouter();
  if (!canEdit) {
    return null;
  }
  return (
    <form
      action={async () => {
        try {
          if (!(await canEditResults())) {
            alert(`Hiba történt a törlés során! Nincs jogosultság a törléshez.`);
            return;
          }
          await deleteResult(fileKey);
        } catch (e) {
          console.error(e);
          if (e instanceof Error) {
            alert(`Hiba történt a törlés során! ${e.message}`);
          }
          return;
        }
        // alert('Sikeres törlés! (Szimulált)');
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
        className={`hover:text-primary dark:hover:text-primary-600 transition-colors duration-200`}
        title={`Törlés`}
      >
        <FontAwesomeIcon icon={faTrashCan} className={`text-2xl`} />
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
