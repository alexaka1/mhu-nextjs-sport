import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/app/db/db';
import { env } from '@/app/lib/env';
import { genericOAuth } from 'better-auth/plugins';
import { session, user, account, verification } from '../auth-schema';

interface SimpleLoginProfile {
  sub?: string;
  name?: string;
  email?: string;
  image?: string;
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
  logger: {
    level: process.env.NODE_ENV === 'production' ? 'warn' : 'debug',
  },
  // trustedOrigins: () => {
  //   if (process.env.NODE_ENV !== 'production') {
  //     return ['http://localhost:3000', 'https://sport.martossy.hu'];
  //   }
  //   return ['https://sport.martossy.hu'];
  // },
  databaseHooks: {
    account: {
      create: {
        after: async (account, _) => {
          // Update user avatar from social provider profile
          if (!account.userId) return;

          // const avatar: string | null = null;
          await Promise.resolve();
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
          return;
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
      prompt: 'select_account',
      clientId: env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: env.GOOGLE_CLIENT_SECRET ?? '',
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
          scopes: ['openid', 'email', 'profile'],
          // SimpleLogin does not implement PKCE; 1.7 defaults it on.
          pkce: false,
          // SimpleLogin id_tokens may omit nonce; keep the authorization-code flow working.
          disableIdTokenNonceBinding: true,
          // Keep sign-out local instead of redirecting to SimpleLogin's end-session endpoint.
          disableProviderLogout: true,
          // SimpleLogin profile mapping. Provider identity comes from OIDC `sub`, not `id`.
          mapProfileToUser: (profile) => {
            const simpleLoginProfile = profile as SimpleLoginProfile;
            const name =
              simpleLoginProfile.name === '' || simpleLoginProfile.name == null ?
                'SimpleLogin felhasználó'
              : simpleLoginProfile.name;
            return {
              name,
              email: simpleLoginProfile.email,
              image: simpleLoginProfile.avatar_url ?? simpleLoginProfile.image,
            };
          },
        },
      ],
    }),
  ],
});
