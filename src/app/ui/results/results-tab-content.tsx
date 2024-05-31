'use client';
import type { ResultItem } from '@/app/lib/types';
import ResultsTable from '@/app/ui/results/results-table';
import XlsxTable from '@/app/ui/results/xlsx-table';
import ZoomWrapper from '@/app/ui/zoom-wrapper';

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
          <ResultsTable key={result.key} file={result.url} canEdit={canEdit} title={result.result} fileKey={result.key}>
            <XlsxTable fileUrl={result.url} id={result.key} />
          </ResultsTable>
        );
      case 'application/pdf': {
        const pdfIframe = new URL(`https://docs.google.com/viewerng/viewer`);
        pdfIframe.searchParams.set('url', result.url);
        pdfIframe.searchParams.set('embedded', 'true');

        return (
          <ResultsTable key={result.key} file={result.url} canEdit={canEdit} title={result.result} fileKey={result.key}>
            <object
              data={result.url}
              type={result.type}
              className={`h-[36rem] w-full sm:h-svh`}
              title={`PDF megjelenítő`}
            >
              <iframe
                title={`PDF megjelenítő`}
                src={pdfIframe.toString()}
                loading={'eager'}
                referrerPolicy={'no-referrer'}
                className={`size-full`}
                allow={`fullscreen`}
              ></iframe>
              <p className={`prose text-balance p-2 text-bg-contrast`}>
                Ez az eszköz nem támogatja a PDF-ek megjelenítését. Ha a szöveg felett nem jelent meg semmi, akkor
                próbáld meg{' '}
                <a className={`decoration-primary text-primary dark:text-primary-400`} href={result.url}>
                  letölteni a PDF-et
                </a>
                .
              </p>
            </object>
          </ResultsTable>
        );
      }
      default:
        return (
          <ResultsTable key={result.key} file={result.url} canEdit={canEdit} title={result.result} fileKey={result.key}>
            <ZoomWrapper>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt={result.url} src={result.url} className={`size-auto`} />
            </ZoomWrapper>
          </ResultsTable>
        );
    }
  });
  return tables.length > 0 ?
      tables
    : <h1 className={`prose mx-auto p-4 text-bg-contrast`}>Nincs eredmény az adott sportágban.</h1>;
}
