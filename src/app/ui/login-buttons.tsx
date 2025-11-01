'use client';

import { SignInButton } from '@/app/ui/sign-in-button';
import { getLastUsedProvider } from '@/app/lib/last-used-provider';
import { type ReactNode, useEffect, useState } from 'react';

type LoginButton = {
  id: string;
  button: ReactNode;
  recommended: true | undefined;
};

export function LoginButtons({
  providers,
  callbackURL,
}: Readonly<{
  providers: LoginButton[];
  callbackURL: string;
}>) {
  const [lastUsedProvider, setLastUsedProvider] = useState<string | null>(null);

  useEffect(() => {
    // Read last used provider from localStorage on mount
    setLastUsedProvider(getLastUsedProvider());
  }, []);

  return (
    <>
      {providers.map((provider) => (
        <SignInButton
          key={provider.id}
          providerId={provider.id}
          callbackURL={callbackURL}
          recommended={provider.recommended}
          isLastUsed={provider.id === lastUsedProvider}
        >
          {provider.button}
        </SignInButton>
      ))}
    </>
  );
}
