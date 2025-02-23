import type { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons/faHashtag';
import Image from 'next/image';

export function Title({ children, id }: Readonly<{ children: ReactNode; id: string }>) {
  return (
    <h2
      id={id}
      className="group/title dark:text-bg-contrast flex flex-row text-3xl font-bold tracking-tight text-gray-900 transition-colors duration-200 sm:text-4xl"
    >
      <a href={`#${id}`} className={`standalone:hidden flex items-center align-middle print:hidden`}>
        <FontAwesomeIcon
          icon={faHashtag}
          className={`dark:text-bg-contrast invisible text-2xl group-hover/title:visible`}
        />
      </a>
      {children}
    </h2>
  );
}

export function Media({ src, alt, priority }: Readonly<{ src: string; alt: string; priority?: boolean }>) {
  return (
    <div className="grid gap-4 sm:gap-6 lg:gap-8">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        priority={priority}
        className={`hidden size-auto rounded-lg object-scale-down lg:block print:hidden`}
      />
    </div>
  );
}

export function Entry({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-[repeat(auto-fit,minmax(min(350px,100%),1fr))] items-center gap-x-8 px-4 py-6 sm:gap-y-16 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 print:grid-cols-1 print:py-0 print:[page-break-after:always] lg:even:[&>div:first-of-type]:order-last">
      {children}
    </div>
  );
}

export function EntryContent({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div
      className={`prose prose-headings:text-gray-600 prose-p:hyphens-auto prose-p:text-justify prose-p:text-gray-600 prose-ol:text-gray-600 prose-ul:hyphens-auto prose-ul:text-justify prose-ul:text-gray-600 dark:prose-headings:text-bg-contrast dark:prose-p:text-bg-contrast dark:prose-a:text-primary-600 dark:prose-ol:text-bg-contrast dark:prose-ul:text-bg-contrast`}
    >
      {children}
    </div>
  );
}

export function DataListEntry({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="border-t border-gray-200 pt-4">{children}</div>;
}

export function DataList({ children }: Readonly<{ children: ReactNode }>) {
  return <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">{children}</dl>;
}
