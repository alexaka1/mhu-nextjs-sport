import { redirect, RedirectType } from 'next/navigation';
import { currentYear } from '@/app/ui/menus/current-year';
import NotFound from '@/app/not-found';

export default async function FallbackToCurrentYear({ params }: { params: Promise<{ catchall: string[] }> }) {
  const { catchall } = await params;
  if (catchall.length === 0) {
    redirect(`/`, RedirectType.replace);
  }
  if (catchall[0] === currentYear) {
    return <NotFound />;
  }
  redirect(`/${currentYear}/${catchall.join('/')}`, RedirectType.replace);
}
