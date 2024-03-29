import { ReactNode } from 'react';
import Header from '@/app/ui/header';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
