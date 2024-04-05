import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '@/app/db/db';
import * as process from 'process';
import * as schema from '@/app/db/schema';
import { Adapter } from '@auth/core/adapters';
import { and, eq } from 'drizzle-orm/sql/expressions/conditions';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: getAdapter(),
  providers: [
    GitHub({
      clientId: process.env['GITHUB_CLIENT_ID'] as string,
      clientSecret: process.env['GITHUB_CLIENT_SECRET'] as string,
    }),
  ],
  pages: {
    signIn: '/login',
  },
});

function getAdapter(): Adapter {
  return {
    ...DrizzleAdapter(db),
    async getUserByAccount(providerAccountId) {
      const results = await db
        .select()
        .from(schema.accounts)
        .leftJoin(schema.users, eq(schema.users.id, schema.accounts.userId))
        .where(
          and(
            eq(schema.accounts.provider, providerAccountId.provider),
            eq(schema.accounts.providerAccountId, providerAccountId.providerAccountId),
          ),
        )
        .get();

      return results?.user ?? null;
    },
  };
}
