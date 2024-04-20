'use server';

import { revalidatePath } from 'next/cache';
import { deleteResultByUrl, insertResult, isAdmin } from '../db/data';
import { auth } from '@/app/lib/auth';
import { isNullOrEmpty } from '@/app/utils';
import { type Result } from '@/app/lib/types';

export async function deleteResult(url: string) {
  console.log('Delete result', url);
  await deleteResultByUrl(url);
  revalidatePath('/eredmenyek');
}

export async function uploadResult(result: { url: string; resultType: Result }) {
  console.log('Upload result', result);
  await insertResult(result);
  revalidatePath('/eredmenyek');
}

export async function canEditResults() {
  const session = await auth();
  const email = session?.user?.email;
  return !isNullOrEmpty(email) && (await isAdmin(email));
}
