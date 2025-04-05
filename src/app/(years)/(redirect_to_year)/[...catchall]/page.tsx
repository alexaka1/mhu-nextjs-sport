import { redirect, RedirectType } from 'next/navigation';
import { currentYear } from '@/app/(years)/(redirect_to_year)/current-year';

import NotFound from '@/app/not-found';

export default async function RedirectToCurrentYear({ params }: { params: Promise<{ catchall: string[] }> }) {
  const { catchall } = await params;
  if (catchall.length === 0) {
    redirect(`/`, RedirectType.replace);
  }
  if (catchall[0] === currentYear.toString()) {
    return <NotFound />;
  }
  redirect(`/${currentYear.toString()}/${catchall.join('/')}`, RedirectType.replace);
}
