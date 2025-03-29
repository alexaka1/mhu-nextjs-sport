'use server';

import { revalidatePath } from 'next/cache';
import { deleteResultByKey, getResultItems, insertResult, isAdmin, updateAvatar } from '../db/data';
import { auth } from '@/app/lib/auth';
import { isNullOrEmpty } from '@/app/utils';
import { type Result, type ResultItem, type ResultType } from '@/app/lib/types';
import { env } from '@/app/lib/env';

export async function deleteResult(key: string) {
  await deleteResultByKey(key);
  revalidatePath('/eredmenyek');
}

export async function uploadResult(result: { key: string; result: Result; type: ResultType }) {
  await insertResult({ ...result, year: 0 });
  revalidatePath('/eredmenyek');
}

export async function canEditResults() {
  const session = await auth();
  const email = session?.user?.email;
  return !isNullOrEmpty(email) && (await isAdmin(email));
}

export async function updateUserAvatar({
  id,
  avatar,
}: Readonly<{
  id: string | null | undefined;
  avatar: string | null;
  provider: string | null | undefined;
}>) {
  if (isNullOrEmpty(id)) {
    return;
  }
  return await updateAvatar({ id, avatar: avatar ?? null });
}

export async function getResults(sportag: string): Promise<ResultItem[]> {
  const results = await getResultItems(sportag);
  for (const result of results) {
    result.url = `https://${env.UPLOADTHING_APP_ID}.ufs.sh/f/${result.key}`;
  }
  return results;
}
