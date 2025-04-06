import { UploadResult } from '@/app/ui/results/upload-result';
import ResultsContent from '@/app/ui/results/results-tab-content';
import ResultsTabLinks from '@/app/ui/results/results-tab-links';
import { canEditResults, getResults } from '@/app/lib/actions';
import { type Tab } from './results-tab-types';

export default async function ResultsTab({
  className,
  result,
  tabs,
  year,
  fallbackResult,
}: Readonly<{
  className?: string;
  result: string;
  tabs: Array<Tab>;
  year: number;
  fallbackResult: string;
}>) {
  const canEdit = await canEditResults({ year });
  const results = await getResults(result, year);

  return (
    <>
      <h1 className="sr-only">Eredmények - {year}. év</h1>
      <div className={className}>
        <ResultsTabLinks tabs={tabs} year={year} fallbackResult={fallbackResult} />
        <h2 className="sr-only">{result}</h2>
        <div className={`flex flex-col gap-2`}>
          <div className={`flex flex-row items-center justify-center pt-1`}>
            <UploadResult resultType={result} canEdit={canEdit} year={year} />
          </div>
          <ResultsContent results={results} canEdit={canEdit} year={year} />
        </div>
      </div>
    </>
  );
}
