import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '@/app/db/db';
import * as process from 'process';
import * as schema from '@/app/db/schema';
import { Adapter } from '@auth/core/adapters';
import { and, eq } from 'drizzle-orm/sql/expressions/conditions';
import Google from '@auth/core/providers/google';
import SimpleLogin from '@/app/lib/simple-login';

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
    Google({
      clientId: process.env['GOOGLE_CLIENT_ID'] as string,
      clientSecret: process.env['GOOGLE_CLIENT_SECRET'] as string,
      allowDangerousEmailAccountLinking: true,
    }),
    SimpleLogin({
      clientId: process.env['SIMPLELOGIN_CLIENT_ID'] as string,
      clientSecret: process.env['SIMPLELOGIN_CLIENT_SECRET'] as string,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name === '' ? 'SimpleLogin felhasználó' : profile.name,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
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
    // @tss-expect-error simplelogin adds `user` to the data
    // linkAccount: async ({ user, ...data }) => await db.insert(schema.accounts).values(data).get(),
  };
}
