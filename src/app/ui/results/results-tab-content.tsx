'use client';
import type { ResultItem } from '@/app/lib/types';
import ResultsTable from '@/app/ui/results/results-table';
import XlsxTable from '@/app/ui/results/xlsx-table';
import ZoomWrapper from '@/app/ui/zoom-wrapper';

export default function ResultsContent({
  results,
  canEdit,
  year,
}: Readonly<{ results: ResultItem[]; canEdit?: boolean; year: number }>) {
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
          <ResultsTable
            key={result.key}
            file={result.url}
            canEdit={canEdit}
            title={result.result}
            fileKey={result.key}
            year={year}
          >
            <XlsxTable fileUrl={result.url} id={result.key} />
          </ResultsTable>
        );
      case 'application/pdf': {
        const pdfIframe = new URL(`https://docs.google.com/viewerng/viewer`);
        pdfIframe.searchParams.set('url', result.url);
        pdfIframe.searchParams.set('embedded', 'true');

        return (
          <ResultsTable
            key={result.key}
            file={result.url}
            canEdit={canEdit}
            title={result.result}
            fileKey={result.key}
            year={year}
          >
            <object
              data={result.url}
              type={result.type}
              className={`flex h-[36rem] w-full flex-col sm:h-svh`}
              title={`PDF megjelenítő`}
            >
              <iframe
                title={`PDF megjelenítő`}
                src={pdfIframe.toString()}
                loading={'eager'}
                className={`size-full`}
                allow={`fullscreen`}
              ></iframe>
              <p className="prose text-balance p-0.5 text-sm text-bg-contrast">
                Ez az eszköz nem támogatja a PDF-ek megjelenítését{' '}
                <span className={`hidden browser:inline-block`}>böngészőben</span>
                <span className={`hidden standalone:inline-block`}>progresszív web alkalmazásban</span>. Helyette a
                Google Docs Viewer van használva. Ez külső szolgáltatás, ezért ha nem jelenik meg semmi, akkor másik
                fülre lapozással újra próbálhatod, vagy próbáld meg{' '}
                <a className={`decoration-primary text-primary dark:text-primary-400`} href={result.url}>
                  letölteni a PDF-et
                </a>
                , vagy nyisd meg asztali webböngészőben.
              </p>
            </object>
          </ResultsTable>
        );
      }
      default:
        return (
          <ResultsTable
            key={result.key}
            file={result.url}
            canEdit={canEdit}
            title={result.result}
            fileKey={result.key}
            year={year}
          >
            <div className={`sm:mx-auto`}>
              <ZoomWrapper>
                {/* !eslint-disable-next-line @next/next/no-img-element */}
                <img alt={result.url} src={result.url} className={`size-auto`} />
              </ZoomWrapper>
            </div>
          </ResultsTable>
        );
    }
  });
  return tables.length > 0 ?
      tables
    : <h1 className={`prose mx-auto p-4 text-bg-contrast`}>Nincs eredmény az adott sportágban.</h1>;
}
