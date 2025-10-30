import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/app/db/db';
import { env } from '@/app/lib/env';
import { genericOAuth } from 'better-auth/plugins';
import { session, user, account, verification } from '../auth-schema';

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
