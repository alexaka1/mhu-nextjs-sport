'use client';

import { signIn, type SignInMethods } from '@/app/lib/auth-client';
import { setLastUsedProvider } from '@/app/lib/last-used-provider';
import { LoginBadge } from '@/app/ui/login-badge';
import { type ReactNode } from 'react';

export function SignInButton({
  providerId,
  callbackURL,
  recommended,
  isLastUsed,
  children,
  type,
}: Readonly<{
  providerId: string;
  callbackURL: string;
  recommended: true | undefined;
  isLastUsed?: boolean;
  children: ReactNode;
  type: SignInMethods;
}>) {
  const handleSignIn = async () => {
    // Store the provider in localStorage before signing in
    setLastUsedProvider(providerId);
    switch (type) {
      case 'social':
        await signIn.social({
          provider: providerId,
          callbackURL,
        });
        break;
      case 'oauth2':
        await signIn.oauth2({
          providerId,
          callbackURL,
        });
        break;
    }
  };

  return (
    <button
      onClick={handleSignIn}
      type="button"
      className="bg-primary hover:bg-secondary-600 focus-visible:outline-primary-400 relative flex w-full justify-center rounded-md px-3 py-1.5 text-sm leading-6 font-semibold text-white shadow-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {recommended ?
        <LoginBadge>Javasolt</LoginBadge>
      : null}
      {isLastUsed && !recommended ?
        <LoginBadge>utoljára használt</LoginBadge>
      : null}
      {children}
    </button>
  );
}
