import { type Metadata } from 'next';
import Sports from '@/app/(years)/2025/(main)/sportagak/sports';
import { Suspense } from 'react';
import Skeleton from '@/app/ui/skeleton';

export const metadata: Metadata = {
  title: 'Sportágak',
};

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center bg-white dark:bg-gray-800">
      <Suspense fallback={<Skeleton />}>
        <Sports />
      </Suspense>
    </main>
  );
}
