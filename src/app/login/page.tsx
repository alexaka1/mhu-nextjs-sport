import { Metadata } from 'next';
import UnderConstruction from '@/app/ui/under-construction';

export const metadata: Metadata = {
  title: `Bejelentkezés`,
};

export default function Home() {
  return (
    <>
      <UnderConstruction />
    </>
  );
}
