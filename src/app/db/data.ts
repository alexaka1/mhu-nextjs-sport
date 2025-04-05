import { db } from '@/app/db/db';
import { results, users } from '@/app/db/schema';
import { and, eq, ne } from 'drizzle-orm/sql/expressions/conditions';
import { captureException } from '@sentry/nextjs';
import { Result, type ResultItem, resultMimeTypeSchema } from '@/app/lib/types';
import { z } from 'zod';
import { desc } from 'drizzle-orm/sql/expressions/select';

const insertResultSchema = z.object({
  key: z.string(),
  result: Result,
  type: resultMimeTypeSchema,
  year: z.number(),
});
type InsertResult = z.infer<typeof insertResultSchema>;

export async function isAdmin(email: string, year: number): Promise<boolean> {
  try {
    const user = await db
      .select({
        isAdmin: users.isAdmin,
        roles: users.roles,
      })
      .from(users)
      .where(eq(users.email, email));
    if (user.length === 0) {
      return false;
    }
    return user.every((u) => u.isAdmin === 1 && (u.roles?.roles?.some((r) => r.years.includes(year)) ?? false));
  } catch (e) {
    console.error(e);
    captureException(e);
  }
  return false;
}

export async function deleteResultByKey(key: string): Promise<void> {
  try {
    await db.update(results).set({ isDeleted: true, deletedAt: new Date() }).where(eq(results.key, key));
  } catch (e) {
    console.error(e);
    captureException(e);
  }
}

export async function insertResult({ key, result, type, year }: InsertResult): Promise<void> {
  try {
    console.log(key, result, type, year);
    const parsed = insertResultSchema.parse({ key, result, type, year });
    console.log(parsed);
    await db.insert(results).values(parsed);
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
    const usersResult = await db
      .select({
        userId: users.id,
      })
      .from(users)
      .where(and(eq(users.id, id), ne(users.image, avatar ?? '')));
    if (usersResult == null || usersResult.length !== 1 || usersResult[0] == null) {
      return { updatedId: '' };
    }
    const user = usersResult[0];
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

export async function getResultItems(sportag: string, year: number): Promise<Array<ResultItem>> {
  try {
    let where: unknown = and(eq(results.isDeleted, false));
    const parsed = Result.safeParse(sportag);
    if (sportag !== '' && parsed.success) {
      where = and(eq(results.isDeleted, false), eq(results.result, parsed.data), eq(results.year, year));
    } else {
      return [];
    }
    const result = await db
      .select({ key: results.key, result: results.result, type: results.type })
      .from(results)
      .orderBy(desc(results.createdAt))
      .where(where as never);
    if (result.length === 0) {
      return [];
    }
    return result;
  } catch (e) {
    console.error(e);
    captureException(e);
  }
  return [];
}
