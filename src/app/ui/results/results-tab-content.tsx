'use client';
import type { ResultItem } from '@/app/lib/types';
import ResultsTable from '@/app/ui/results/results-table';
import XlsxTable from '@/app/ui/results/xlsx-table';

export default function ResultsContent({ results, canEdit }: Readonly<{ results: ResultItem[]; canEdit?: boolean }>) {
  const tables = results.map((result) => {
    if (result.url == null) {
      return (
        <p key={result.key} className={`prose text-balance p-2 text-bg-contrast`}>
          Valami hiba történt.
        </p>
      );
    }
    switch (result.type) {
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
        return (
          <>
            <ResultsTable
              key={result.key}
              file={result.url}
              canEdit={canEdit}
              title={result.result}
              fileKey={result.key}
            >
              <XlsxTable fileUrl={result.url} id={result.key} />
            </ResultsTable>
          </>
        );
      case 'application/pdf': {
        const pdfIframe = new URL(`https://docs.google.com/viewerng/viewer`);
        pdfIframe.searchParams.set('url', result.url);
        pdfIframe.searchParams.set('embedded', 'true');

        return (
          <>
            <ResultsTable
              key={result.key}
              file={result.url}
              canEdit={canEdit}
              title={result.result}
              fileKey={result.key}
            >
              <object data={result.url} type={result.type} className={`h-dvh w-full`}>
                <iframe
                  src={pdfIframe.toString()}
                  loading={'eager'}
                  referrerPolicy={'no-referrer'}
                  className={`h-svh w-full`}
                  allow={`fullscreen`}
                >
                  <p className={`prose text-balance p-2 text-bg-contrast`}>
                    Ez az eszköz nem támogatja a PDF-ek megjelenítését. Kérjük, töltsd le a PDF-et:{' '}
                    <a className={`decoration-primary text-primary dark:text-primary-400`} href={result.url}>
                      PDF letöltése
                    </a>
                    .
                  </p>
                </iframe>
              </object>
            </ResultsTable>
          </>
        );
      }
      default:
        return null;
    }
  });
  return tables.length > 0 ? tables : <h1 className={`prose text-bg-contrast`}>Nincs eredmény az adott sportágban.</h1>;
}
