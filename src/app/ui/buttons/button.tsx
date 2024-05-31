import { ReactNode } from 'react';

export default function Button({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <button
      className={`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-colors duration-200 ease-in-out bg-primary text-bg-contrast hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 active:bg-primary-800`}
    >
      {children}
    </button>
  );
}
