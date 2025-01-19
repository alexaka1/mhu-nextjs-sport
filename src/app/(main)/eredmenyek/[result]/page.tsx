import { Metadata } from 'next';
import ResultsTab from '@/app/ui/results/results-tab';
import { Suspense } from 'react';
import Skeleton from '@/app/ui/skeleton';
import { Result } from '@/app/lib/types';
import ResultsTabLinks from '@/app/ui/results/results-tab-links';

type Props = {
  params?: Promise<{
    result?: string;
  }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  return {
    title: `${decodeURIComponent(params?.result || ('Labdarúgás' as Result))} eredmények`,
  };
}
export default async function Page(props: Props) {
  const params = await props.params;
  const sportag = decodeURIComponent(params?.result || ('Labdarúgás' as Result));
  return (
    <main className="flex flex-col items-center justify-center bg-white dark:bg-gray-800">
      <Suspense
        key={sportag}
        fallback={
          <div className={`w-full`}>
            <ResultsTabLinks />
            <div className={`mx-auto flex flex-col gap-1`}>
              <Skeleton />
            </div>
          </div>
        }
      >
        <ResultsTab className={`w-full`} result={sportag} />
      </Suspense>
    </main>
  );
}
