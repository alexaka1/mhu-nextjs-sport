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
      className="group relative inline-block rounded-lg border border-transparent px-5 py-4 text-white transition-colors duration-200 hover:border-gray-300 hover:bg-gray-100 not-dark:hover:text-black focus:border-gray-300 focus:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 focus:dark:border-neutral-700 focus:dark:bg-neutral-800/30"
    >
      {children}
    </Link>
  );
}
