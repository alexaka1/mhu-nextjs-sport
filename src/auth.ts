import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/app/db/db';
import { env } from '@/app/lib/env';
import { genericOAuth } from 'better-auth/plugins';

interface SimpleLoginProfile {
  sub: string;
  name: string;
  email: string;
  avatar_url?: string;
}

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'sqlite',
  }),
  // Field mapping for next-auth v5 compatibility
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 minutes cache
    },
    fields: {
      expiresAt: 'expires',
      token: 'sessionToken',
    },
  },
  account: {
    fields: {
      accountId: 'providerAccountId',
      providerId: 'provider',
      refreshToken: 'refresh_token',
      accessToken: 'access_token',
      accessTokenExpiresAt: 'expires_at',
      idToken: 'id_token',
    },
  },
  user: {
    fields: {
      emailVerified: 'emailVerified',
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
          mapProfileToUser: (profile: SimpleLoginProfile) => {
            return {
              id: profile.sub,
              name: profile.name === '' ? 'SimpleLogin felhasználó' : profile.name,
              email: profile.email,
              image: profile.avatar_url,
            };
          },
        },
      ],
    }),
  ],
});

