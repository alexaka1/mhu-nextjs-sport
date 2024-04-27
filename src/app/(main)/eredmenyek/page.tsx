import { Metadata } from 'next';
import ResultsTab from '@/app/ui/results/results-tab';
import { Suspense } from 'react';
import Skeleton from '@/app/ui/skeleton';
import { canEditResults, getResults } from '@/app/lib/actions';

// export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Eredmények',
};

export default async function Page() {
  const canEdit = await canEditResults();
  const sportag = 'Labdarúgás';
  const results = await getResults(sportag);
  return (
    <main className="flex flex-col items-center justify-center bg-white dark:bg-gray-800">
      <Suspense key={sportag} fallback={<Skeleton />}>
        <ResultsTab className={`w-full`} result={sportag} canEdit={canEdit} results={results} />
      </Suspense>
    </main>
  );
}
