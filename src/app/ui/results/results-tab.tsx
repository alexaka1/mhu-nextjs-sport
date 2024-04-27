import { type ResultItem } from '@/app/lib/types';
import { UploadResult } from '@/app/ui/results/upload-result';
import ResultsContent from '@/app/ui/results/results-tab-content';
import ResultsTabLinks from '@/app/ui/results/results-tab-links';

export default function ResultsTab({
  className,
  canEdit,
  results,
  result,
}: Readonly<{
  className?: string;
  canEdit?: boolean;
  results: ResultItem[];
  result: string;
}>) {
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
