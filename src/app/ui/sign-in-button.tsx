'use client';

import { signIn } from '@/app/lib/auth-client';
import { type ReactNode } from 'react';

export function SignInButton({
  providerId,
  callbackURL,
  recommended,
  children,
}: Readonly<{
  providerId: string;
  callbackURL: string;
  recommended: true | undefined;
  children: ReactNode;
}>) {
  const handleSignIn = async () => {
    await signIn.social({
      provider: providerId,
      callbackURL,
    });
  };

  return (
    <button
      onClick={handleSignIn}
      type="button"
      className="relative flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm transition-colors duration-200 bg-primary text-bg-contrast hover:bg-secondary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
    >
      {recommended ?
        <span className="absolute -right-0.5 -top-2 z-10 whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm font-semibold bg-hun-green text-bg-contrast">
          Javasolt
        </span>
      : null}
      {children}
    </button>
  );
}
