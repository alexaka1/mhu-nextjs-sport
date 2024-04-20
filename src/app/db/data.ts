import { db } from '@/app/db/db';
import { users } from '@/app/db/schema';
import { eq } from 'drizzle-orm/sql/expressions/conditions';
import { captureException } from '@sentry/nextjs';
import { Result } from '@/app/lib/types';

export async function isAdmin(email: string): Promise<boolean> {
  try {
    const user = await db.select().from(users).where(eq(users.email, email)).all();
    if (user.length === 0) {
      return false;
    }
    return user.every((u) => u.isAdmin === 1);
  } catch (e) {
    console.error(e);
    captureException(e);
  }
  return false;
}

export async function deleteResultByUrl(url: string): Promise<void> {
  try {
    console.log('Delete result in DB', url);
    await Promise.resolve();
  } catch (e) {
    console.error(e);
    captureException(e);
  }
}

export async function insertResult({ url, resultType }: { url: string; resultType: Result }): Promise<void> {
  try {
    console.log('Insert result into DB', url, resultType);
    await Promise.resolve();
  } catch (e) {
    console.error(e);
    captureException(e);
  }
}
