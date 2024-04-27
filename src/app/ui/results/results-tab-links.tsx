'use client';
import Link from 'next/link';
import type { Result } from '@/app/lib/types';
import { ReactNode } from 'react';
import {
  IconBallBasketball,
  IconBallFootball,
  IconBallVolleyball,
  IconPingPong,
  IconRun,
  IconSwimming,
  IconTargetArrow,
} from '@tabler/icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons/faPeopleGroup';
import { usePathname } from 'next/navigation';

type Tab = {
  title: Result;
  icon: ReactNode;
};

const tabs = [
  {
    title: 'Labdarúgás',
    icon: (
      <IconBallFootball
        className={`me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-[selected=true]:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-[selected=true]:dark:text-primary-400`}
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Úszás',
    icon: (
      <IconSwimming
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-[selected=true]:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-[selected=true]:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Futás',
    icon: (
      <IconRun
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-[selected=true]:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-[selected=true]:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Asztalitenisz',
    icon: (
      <IconPingPong
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-[selected=true]:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-[selected=true]:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Súlylökés',
    icon: (
      <IconBallVolleyball
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-[selected=true]:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-[selected=true]:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Darts',
    icon: (
      <IconTargetArrow
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-[selected=true]:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-[selected=true]:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Kosárlabda',
    icon: (
      <IconBallBasketball
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-[selected=true]:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-[selected=true]:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Csapatverseny',
    icon: (
      <FontAwesomeIcon
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-[selected=true]:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-[selected=true]:dark:text-primary-400"
        aria-hidden="true"
        icon={faPeopleGroup}
      />
    ),
  },
] as const satisfies Array<Tab>;
export default function ResultsTabLinks() {
  const pathname = usePathname();

  return (
    <div className="-mb-px flex flex-wrap border-b text-center text-sm font-medium border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400">
      {tabs.map((tab) => (
        <div
          key={tab.title}
          className="me-2 focus-visible:outline-1 focus-visible:outline-primary-800 dark:focus-visible:outline-primary-600"
        >
          <Link
            href={`/eredmenyek/${encodeURIComponent(tab.title)}`}
            className={`group inline-flex items-center justify-center rounded-t-lg border-b-2 p-4 hover:border-secondary-600 hover:text-secondary-600
              data-[selected=false]:border-transparent data-[selected=true]:border-primary data-[selected=true]:text-primary dark:hover:text-gray-300 data-[selected=true]:dark:border-primary-400 data-[selected=true]:dark:text-primary-400`}
            data-selected={pathname === `/eredmenyek/${encodeURIComponent(tab.title)}`}
          >
            {tab.icon}
            {tab.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
