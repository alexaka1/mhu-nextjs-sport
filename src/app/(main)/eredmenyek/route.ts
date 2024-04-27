import { redirect } from 'next/navigation';

export function GET() {
  redirect(`/eredmenyek/${encodeURIComponent('Labdarúgás')}`);
}
