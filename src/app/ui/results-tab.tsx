'use client';
import { Tab } from '@headlessui/react';
import XlsxTable from '@/app/ui/XlsxTable';

const tabs = [
  {
    title: 'Profile',
    icon: (
      <svg
        className="ui-selected:text-primary ui-selected:dark:text-primary-400 me-2 size-4 text-gray-400 group-hover:text-secondary-600 dark:text-gray-500 dark:group-hover:text-gray-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
      </svg>
    ),
    content: <XlsxTable xlsx={`https://utfs.io/f/527ff756-5125-43e4-a7a8-f9e69c212950-1adb5m.xlsx`} />,
  },
  {
    title: 'Dashboard',
    icon: (
      <svg
        className="ui-selected:text-primary ui-selected:dark:text-primary-400 me-2 size-4 text-gray-400 group-hover:text-secondary-600 dark:text-gray-500 dark:group-hover:text-gray-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 18"
      >
        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
      </svg>
    ),
    content: 'Content 2',
  },
];

export default function ResultsTab({ className }: Readonly<{ className?: string }>) {
  return (
    <Tab.Group as={`div`} className={className}>
      <Tab.List className="-mb-px flex flex-wrap border-b text-center text-sm font-medium border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400">
        {tabs.map((tab) => (
          <Tab
            key={tab.title}
            className="me-2 focus-visible:outline-1 focus-visible:outline-primary-800 dark:focus-visible:outline-primary-600"
          >
            <div className="ui-selected:border-primary ui-selected:text-primary ui-not-selected:border-transparent ui-selected:dark:border-primary-400 ui-selected:dark:text-primary-400 group inline-flex items-center justify-center rounded-t-lg border-b-2 p-4 hover:border-secondary-600 hover:text-secondary-600 dark:hover:text-gray-300">
              {tab.icon}
              {tab.title}
            </div>
          </Tab>
        ))}
        <Tab disabled>
          <a className="inline-block cursor-not-allowed rounded-t-lg p-4 text-gray-400 dark:text-gray-500">Disabled</a>
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel as={`div`} className={`flex flex-col gap-1`}>
          <XlsxTable xlsx={`https://utfs.io/f/527ff756-5125-43e4-a7a8-f9e69c212950-1adb5m.xlsx`} />
        </Tab.Panel>
        <Tab.Panel as={`div`} className={`flex flex-col gap-1 text-bg-contrast`}>
          Content 2
        </Tab.Panel>
        <Tab.Panel>Disabled content</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
