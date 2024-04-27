import { Metadata } from 'next';
import ResultsTab from '@/app/ui/results/results-tab';
import { Suspense } from 'react';
import Skeleton from '@/app/ui/skeleton';
import { Result } from '@/app/lib/types';

export const metadata: Metadata = {
  title: 'Eredmények',
};

export default function Page({
  params,
}: {
  params?: {
    result?: string;
  };
}) {
  const sportag = decodeURIComponent(params?.result || ('Labdarúgás' as Result));
  return (
    <main className="flex flex-col items-center justify-center bg-white dark:bg-gray-800">
      <Suspense key={sportag} fallback={<Skeleton />}>
        <ResultsTab className={`w-full`} result={sportag} />
      </Suspense>
    </main>
  );
}
