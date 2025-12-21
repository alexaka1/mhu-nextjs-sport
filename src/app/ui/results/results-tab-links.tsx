'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type Tab } from '@/app/ui/results/results-tab-types';

export default function ResultsTabLinks({
  tabs,
  year,
  fallbackResult,
}: Readonly<{ tabs: Array<Tab>; year: number; fallbackResult: string }>) {
  const pathname = usePathname();

  return (
    <nav
      aria-label={`Sportágak`}
      className="-mb-px flex flex-wrap border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400"
    >
      {tabs.map((tab) => (
        <div
          key={tab.title}
          className="focus-visible:outline-primary-800 dark:focus-visible:outline-primary-600 me-2 focus-visible:outline-1"
        >
          <Link
            href={`/${year.toString()}/eredmenyek/${encodeURIComponent(tab.title)}`}
            className={`group hover:border-secondary-600 hover:text-secondary-600 data-active:border-primary data-active:text-primary data-active:dark:border-primary-400 data-active:dark:text-primary-400 inline-flex items-center justify-center rounded-t-lg border-b-2 border-transparent p-4 dark:hover:text-gray-300`}
            data-active={
              pathname === `/${year.toString()}/eredmenyek/${encodeURIComponent(tab.title)}` ||
              (pathname === `/${year.toString()}/eredmenyek` && tab.title === fallbackResult)
            }
          >
            {tab.icon}
            {tab.title}
          </Link>
        </div>
      ))}
    </nav>
  );
}
