import { type Metadata } from 'next';
import ResultsTab from '@/app/ui/results/results-tab';
import { Suspense } from 'react';
import Skeleton from '@/app/ui/skeleton';
import { type Result } from '@/app/lib/types';
import ResultsTabLinks from '@/app/ui/results/results-tab-links';
import { tabs } from '@/app/ui/menus/2025/menu';

export const metadata: Metadata = {
  title: 'Csapatverseny eredmények',
};

export default function Page() {
  const sportag: Result = 'Csapatverseny';
  return (
    <main className="flex flex-col items-center justify-center bg-white dark:bg-gray-800">
      <Suspense
        key={sportag}
        fallback={
          <div className={`w-full`}>
            <ResultsTabLinks fallbackResult={sportag} year={2025} tabs={tabs} />
            <div className={`mx-auto flex flex-col gap-1`}>
              <Skeleton />
            </div>
          </div>
        }
      >
        <ResultsTab fallbackResult={sportag} year={2025} tabs={tabs} className={`w-full`} result={sportag} />
      </Suspense>
    </main>
  );
}
