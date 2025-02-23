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
      className="group relative inline-block rounded-lg border px-5 py-4 transition-colors duration-200 border-transparent text-bg-contrast hover:bg-gray-100 hover:border-gray-300 dark:hover:bg-neutral-800/30 dark:hover:border-neutral-700"
    >
      {children}
    </Link>
  );
}
