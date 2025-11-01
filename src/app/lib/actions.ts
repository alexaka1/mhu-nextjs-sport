'use server';

import { revalidatePath } from 'next/cache';
import { deleteResultByKey, getResultItems, isAdmin } from '../db/data';
import { auth } from '@/auth';
import { isNullOrEmpty } from '@/app/utils';
import { type ResultItem } from '@/app/lib/types';
import { env } from '@/app/lib/env';
import { headers } from 'next/headers';

export async function deleteResult(key: string, year: number) {
  if (!(await canEditResults({ year }))) {
    return {
      error: 'Hiba történt a törlés során! Nincs jogosultság a törléshez.',
    };
  }
  await deleteResultByKey(key);
  revalidatePath(`/${year.toString()}/eredmenyek`);
  return null;
}

export async function canEditResults({ year }: Readonly<{ year: number }>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const email = session?.user.email;
  return !isNullOrEmpty(email) && (await isAdmin(email, year));
}

export async function getResults(sportag: string, year: number): Promise<ResultItem[]> {
  const results = await getResultItems(sportag, year);
  for (const result of results) {
    result.url = `https://${env.UPLOADTHING_APP_ID}.ufs.sh/f/${result.key}`;
  }
  return results;
}
