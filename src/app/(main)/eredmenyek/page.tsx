import { Metadata } from 'next';
import ResultsTab from '@/app/ui/results-tab';

export const metadata: Metadata = {
  title: 'Eredmények',
};

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center bg-white dark:bg-gray-800">
      <ResultsTab className={`w-full lg:w-4/6`} />
    </main>
  );
}
