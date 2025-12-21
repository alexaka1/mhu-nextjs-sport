import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BackToHome() {
  return (
    <Button nativeButton={false} render={<Link href="/" />}>
      Vissza a főoldalra
    </Button>
  );
}
