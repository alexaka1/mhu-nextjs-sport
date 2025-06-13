import type { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons/faHashtag';
import Image from 'next/image';

export function Title({ children, id }: Readonly<{ children: ReactNode; id: string }>) {
  return (
    <h2
      id={id}
      className="group/title flex flex-row text-3xl font-bold tracking-tight transition-colors duration-200 text-gray-900 sm:text-4xl dark:text-bg-contrast"
    >
      <a
        href={`#${id}`}
        aria-labelledby={id}
        className={`flex items-center align-middle standalone:hidden print:hidden`}
      >
        <FontAwesomeIcon
          icon={faHashtag}
          className={`invisible size-6 group-hover/title:visible dark:text-bg-contrast`}
        />
      </a>
      {children}
    </h2>
  );
}

export function Media({
  src,
  alt,
  priority,
  alwaysShow,
}: Readonly<{ src: string; alt: string; priority?: boolean; alwaysShow?: true }>) {
  return (
    <div className="grid gap-4 sm:gap-6 lg:gap-8">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        priority={priority}
        data-show={alwaysShow}
        className={`hidden size-auto rounded-lg object-scale-down data-[show=true]:block lg:block print:hidden data-[show=true]:print:hidden`}
      />
    </div>
  );
}

export function Entry({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <article className="mx-auto grid max-w-2xl grid-cols-[repeat(auto-fit,minmax(min(350px,100%),1fr))] items-center gap-x-8 px-4 py-6 sm:gap-y-16 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 print:grid-cols-1 print:py-0 print:[page-break-after:always] [&>div:first-of-type]:even:lg:order-last">
      {children}
    </article>
  );
}

export function EntryContent({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div
      className={`prose prose-headings:text-gray-600 prose-p:hyphens-auto prose-p:text-justify prose-p:text-gray-600 prose-ol:text-gray-600 prose-ul:hyphens-auto prose-ul:text-justify prose-ul:text-gray-600 dark:prose-headings:text-bg-contrast prose-p:dark:text-bg-contrast prose-a:dark:text-primary-600 prose-strong:dark:text-bg-contrast prose-ol:dark:text-bg-contrast prose-ul:dark:text-bg-contrast prose-td:dark:text-bg-contrast`}
    >
      {children}
    </div>
  );
}

export function DataListEntry({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="border-t pt-4 border-gray-200">{children}</div>;
}

export function DataList({ children }: Readonly<{ children: ReactNode }>) {
  return <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">{children}</dl>;
}
