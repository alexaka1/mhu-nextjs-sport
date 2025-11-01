'use client';

import { signIn, type SignInMethods } from '@/app/lib/auth-client';
import { setLastUsedProvider } from '@/app/lib/last-used-provider';
import { type ReactNode } from 'react';

const BADGE_BASE_CLASSES =
  'absolute -right-0.5 -top-2 z-10 whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm font-semibold text-bg-contrast';

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
      className="relative flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm transition-colors duration-200 bg-primary text-bg-contrast hover:bg-secondary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
    >
      {recommended ?
        <span className={`${BADGE_BASE_CLASSES} bg-hun-green`}>Javasolt</span>
      : null}
      {isLastUsed && !recommended ?
        <span className={`${BADGE_BASE_CLASSES} bg-secondary`}>utoljára használt</span>
      : null}
      {children}
    </button>
  );
}
