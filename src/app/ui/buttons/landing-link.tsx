import { type ReactNode } from 'react';
import Link from 'next/link';

export default function LandingLink({
  children,
  href,
}: Readonly<{
  children: ReactNode;
  href: string;
}>) {
  return (
    <Link
      href={href}
      className="group relative inline-block rounded-lg border px-5 py-4 transition-colors duration-200 border-transparent text-primary-800 dark:text-primary-200 hover:bg-gray-100 hover:border-gray-300 focus:bg-gray-100 focus:border-gray-300 hover:dark:bg-neutral-800/30 hover:dark:border-neutral-700 focus:dark:bg-neutral-800/30 focus:dark:border-neutral-700"
    >
      {children}
    </Link>
  );
}
