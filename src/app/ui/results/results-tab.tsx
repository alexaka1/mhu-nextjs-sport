import { UploadResult } from '@/app/ui/results/upload-result';
import ResultsContent from '@/app/ui/results/results-tab-content';
import ResultsTabLinks from '@/app/ui/results/results-tab-links';
import { canEditResults, getResults } from '@/app/lib/actions';

export default async function ResultsTab({
  className,
  result,
}: Readonly<{
  className?: string;
  result: string;
}>) {
  const canEdit = await canEditResults();
  const results = await getResults(result);

  return (
    <div className={className}>
      <ResultsTabLinks />
      <div className={`flex flex-col gap-1`}>
        <div className={`flex flex-row items-center justify-center pt-1`}>
          <UploadResult title={result} canEdit={canEdit} />
        </div>
        <ResultsContent results={results} canEdit={canEdit} />
      </div>
    </div>
  );
}
