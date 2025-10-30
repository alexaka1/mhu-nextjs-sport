import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/app/db/db';
import { env } from '@/app/lib/env';
import { genericOAuth } from 'better-auth/plugins';
import { session, user, account, verification } from '../auth-schema';
import { updateUserAvatar } from '@/app/lib/private-actions';

interface SimpleLoginProfile {
  sub: string;
  name: string;
  email: string;
  avatar_url?: string;
}

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'sqlite',
    schema: {
      user: user,
      session: session,
      account: account,
      verification: verification,
    },
  }),
  databaseHooks: {
    account: {
      create: {
        async after(account) {
          // Update user avatar from social provider profile
          if (!account.userId) return;
          
          let avatar: string | null = null;
          
          // Extract avatar based on provider
          switch (account.providerId) {
            case 'github':
              // GitHub stores avatar in idToken or we can fetch from API
              // For now, better-auth will populate the image field during account creation
              break;
            case 'google':
              // Google profile picture is handled by better-auth
              break;
            case 'simplelogin':
              // SimpleLogin avatar is handled by mapProfileToUser
              break;
          }
          
          // Note: better-auth automatically updates user.image from social profiles
          // This hook is here in case we need custom avatar update logic in the future
        },
      },
    },
  },
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    },
    google: {
      clientId: env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: env.GOOGLE_CLIENT_SECRET ?? '',
      allowDangerousEmailAccountLinking: true,
    },
  },
  plugins: [
    genericOAuth({
      config: [
        {
          providerId: 'simplelogin',
          clientId: env.SIMPLELOGIN_CLIENT_ID,
          clientSecret: env.SIMPLELOGIN_CLIENT_SECRET,
          discoveryUrl: 'https://app.simplelogin.io/.well-known/openid-configuration',
          // SimpleLogin profile mapping
          mapProfileToUser: (profile: Record<string, unknown>) => {
            const simpleLoginProfile = profile as unknown as SimpleLoginProfile;
            return {
              id: simpleLoginProfile.sub,
              name: simpleLoginProfile.name === '' ? 'SimpleLogin felhasználó' : simpleLoginProfile.name,
              email: simpleLoginProfile.email,
              image: simpleLoginProfile.avatar_url,
            };
          },
        },
      ],
    }),
  ],
});
