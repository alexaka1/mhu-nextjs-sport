import { redirect, RedirectType } from 'next/navigation';
import { currentYear } from '../current-year';

export default async function Home() {
  redirect(`/${currentYear}/helyszinek`, RedirectType.replace);
}
