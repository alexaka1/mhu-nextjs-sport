import { db } from '@/app/db/db';
import { results, users } from '@/app/db/schema';
import { and, eq, ne } from 'drizzle-orm/sql/expressions/conditions';
import { captureException } from '@sentry/nextjs';
import { Result, ResultItem, resultTypeSchema } from '@/app/lib/types';
import { z } from 'zod';
import { desc } from 'drizzle-orm/sql/expressions/select';

const insertResultSchema = z.object({ key: z.string(), result: Result, type: resultTypeSchema });
type InsertResult = z.infer<typeof insertResultSchema>;

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

export async function deleteResultByKey(key: string): Promise<void> {
  try {
    await db.update(results).set({ isDeleted: true, deletedAt: new Date() }).where(eq(results.key, key)).execute();
  } catch (e) {
    console.error(e);
    captureException(e);
  }
}

export async function insertResult({ key, result, type }: InsertResult): Promise<void> {
  try {
    const parsed = insertResultSchema.parse({ key, result, type });
    await db.insert(results).values(parsed).execute();
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

export async function getResultItems(): Promise<Array<ResultItem>> {
  try {
    const result = await db
      .select({ key: results.key, result: results.result, type: results.type })
      .from(results)
      .orderBy(desc(results.createdAt))
      .where(eq(results.isDeleted, false))
      .all();
    if (result?.length === 0) {
      return [];
    }
    return result;
  } catch (e) {
    console.error(e);
    captureException(e);
  }
  return [];
}
