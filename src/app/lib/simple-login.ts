import { type OAuthConfig, type OAuthUserConfig } from 'next-auth/providers';

export type SimpleLoginProfile = {
  id: number;
  sub: string;
  email: string;
  email_verified: boolean;
  name: string;
  avatar_url: string | undefined;
  client: string;
};

export default function SimpleLogin<P extends SimpleLoginProfile>(config: OAuthUserConfig<P>): OAuthConfig<P> {
  return {
    id: 'simplelogin',
    name: 'SimpleLogin',
    type: 'oidc',
    issuer: 'https://app.simplelogin.io',
    profile(profile) {
      return {
        id: profile.sub,
        name: profile.name === '' ? 'Anonymous' : profile.name,
        email: profile.email,
        image: profile.avatar_url,
      };
    },
    options: config,
  };
}
