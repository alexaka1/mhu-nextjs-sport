import NextAuth from 'next-auth';
import GitHub, { GitHubProfile } from 'next-auth/providers/github';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '@/app/db/db';
import Google, { GoogleProfile } from 'next-auth/providers/google';
import SimpleLogin, { SimpleLoginProfile } from '@/app/lib/simple-login';
import { env } from '@/app/lib/env';
import { updateUserAvatar } from '@/app/lib/actions';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    GitHub({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    SimpleLogin<SimpleLoginProfile>({
      clientId: env.SIMPLELOGIN_CLIENT_ID,
      clientSecret: env.SIMPLELOGIN_CLIENT_SECRET,
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
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      if (!user || !account || !profile) {
        return true;
      }
      const { provider } = account;
      let avatar: string | null = null;
      switch (provider) {
        case 'github': {
          const castProfile = profile as unknown as GitHubProfile;
          avatar = user.image !== castProfile.avatar_url ? castProfile.avatar_url : null;
          break;
        }
        case 'google': {
          const castProfile = profile as GoogleProfile;
          avatar = user.image !== castProfile.picture ? castProfile.picture : null;
          break;
        }
        case 'simplelogin': {
          const castProfile = profile as unknown as SimpleLoginProfile;
          avatar = (user.image !== castProfile.avatar_url ? castProfile.avatar_url : null) ?? null;
          break;
        }
      }
      await updateUserAvatar({ id: user.id, avatar, provider: account.provider });

      return true;
    },
  },
  pages: {
    signIn: '/login',
  },
});
