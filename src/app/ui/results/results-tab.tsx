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
  const canEdit = await canEditResults();
  const results = await getResults(result);

  return (
    <div className={className}>
      <ResultsTabLinks tabs={tabs} year={year} fallbackResult={fallbackResult} />
      <div className={`flex flex-col gap-1`}>
        <div className={`flex flex-row items-center justify-center pt-1`}>
          <UploadResult title={result} canEdit={canEdit} />
        </div>
        <ResultsContent results={results} canEdit={canEdit} />
      </div>
    </div>
  );
}
