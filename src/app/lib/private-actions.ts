import { isNullOrEmpty } from '@/app/utils';
import { insertResult, updateAvatar } from '@/app/db/data';
import { type MeetingYearType, Result, ResultType } from '@/app/lib/types';
import { revalidatePath } from 'next/cache';

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

export async function uploadResult(result: { key: string; result: Result; type: ResultType; year: MeetingYearType }) {
  await insertResult({ ...result, year: parseInt(result.year, 10) });
  revalidatePath(`/${result.year}/eredmenyek`);
}
