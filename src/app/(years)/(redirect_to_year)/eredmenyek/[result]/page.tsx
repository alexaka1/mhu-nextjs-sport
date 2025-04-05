import { redirect, RedirectType } from 'next/navigation';
import { currentYear } from '../../current-year';

type Props = {
  params?: Promise<{
    result?: string;
  }>;
};
export default async function Home(props: Props) {
  const params = await props.params;
  redirect(`/${currentYear}/eredmenyek/${encodeURIComponent(params?.result ?? '')}`, RedirectType.replace);
}
