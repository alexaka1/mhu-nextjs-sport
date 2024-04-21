import { db } from '@/app/db/db';
import { users } from '@/app/db/schema';
import { and, eq, ne } from 'drizzle-orm/sql/expressions/conditions';
import { captureException } from '@sentry/nextjs';
import { Result } from '@/app/lib/types';

export async function isAdmin(email: string): Promise<boolean> {
  try {
    const user = await db.select({ isAdmin: users.isAdmin }).from(users).where(eq(users.email, email));
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

export async function updateAvatar({
  id,
  avatar,
}: Readonly<{
  id: string;
  avatar: string | null;
}>): Promise<Readonly<{ updatedId: string }>> {
  try {
    // select user where image is not the same as the new avatar
    const user = await db
      .select({
        userId: users.id,
      })
      .from(users)
      .where(and(eq(users.id, id), ne(users.image, avatar ?? '')))
      .get();
    if (user == null) {
      return { updatedId: '' };
    }
    const returning = await db
      .update(users)
      .set({ image: avatar })
      .where(eq(users.id, user.userId))
      .returning({ updatedId: users.id });
    return returning[0] ?? { updatedId: '' };
  } catch (e) {
    console.error(e);
    captureException(e);
  }
  return { updatedId: '' };
}
