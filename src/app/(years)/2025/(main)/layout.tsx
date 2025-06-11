import { type ReactNode } from 'react';
import Header from '@/app/ui/header';
import { type Menu } from '@/app/ui/menu-types';

const menus: Menu[] = [
  {
    type: 'simple',
    node: { href: '/2025/sportagak', children: 'Sportágak' },
  },
  // {
  //   type: 'simple',
  //   node: { href: '/2025/helyszinek', children: 'Helyszínek' },
  // },
  // {
  //   type: 'simple',
  //   node: { href: '/2025/szallas', children: 'Szállás' },
  // },
  // {
  //   type: 'simple',
  //   node: { href: '/2025/programok', children: 'Programok' },
  // },
  {
    type: 'simple',
    node: { href: '/2025/eredmenyek', children: 'Eredmények' },
  },
  // {
  //   type: 'simple',
  //   node: { href: '/koszonto', children: 'Beköszöntő' },
  // },
];

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header menus={menus} />
      {children}
    </>
  );
}
