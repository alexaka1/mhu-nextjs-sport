import { db } from '@/app/db/db';
import { results, users } from '@/app/db/schema';
import { and, eq, ne } from 'drizzle-orm/sql/expressions/conditions';
import { captureException } from '@sentry/nextjs';
import { ResultItem } from '@/app/lib/types';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

const insertResultSchema = createInsertSchema(results).pick({ result: true, key: true });
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

export async function deleteResultByUrl(url: string): Promise<void> {
  try {
    console.log('Delete result in DB', url);
    await Promise.resolve();
  } catch (e) {
    console.error(e);
    captureException(e);
  }
}

export async function insertResult({ key, result }: InsertResult): Promise<void> {
  try {
    console.log('Insert result into DB', key, result);
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

export async function getResultItems(): Promise<ResultItem[]> {
  try {
    await Promise.resolve();
    return [
      {
        url: 'https://utfs.io/f/ddbfe101-56a4-48f6-84ce-48a24d090c44-nxmxdm.xlsx',
        type: 'xlsx',
        title: `Labdarúgás`,
      },
    ];
  } catch (e) {
    console.error(e);
    captureException(e);
  }
  return [];
}
