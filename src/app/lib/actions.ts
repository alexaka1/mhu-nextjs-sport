'use server';

import { revalidatePath } from 'next/cache';
import { deleteResultByUrl, getResultItems, insertResult, isAdmin, updateAvatar } from '../db/data';
import { auth } from '@/app/lib/auth';
import { isNullOrEmpty } from '@/app/utils';
import { type Result, ResultItem, ResultType } from '@/app/lib/types';
import utapi from '@/app/lib/uploadthing';

export async function deleteResult(url: string) {
  console.log('Delete result', url);
  await deleteResultByUrl(url);
  revalidatePath('/eredmenyek');
}

export async function uploadResult(result: { key: string; result: Result; type: ResultType }) {
  await insertResult(result);
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

export async function getResults(): Promise<ResultItem[]> {
  const results = await getResultItems();
  const urls = await utapi.getFileUrls(results.map((r) => r.key));
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    if (result != null) {
      result.url = urls.find((u) => u.key === result.key)?.url;
    }
  }
  return results;
}
