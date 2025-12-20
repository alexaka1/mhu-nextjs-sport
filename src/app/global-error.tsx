'use client';

import { captureException } from '@sentry/nextjs';
import { useEffect } from 'react';
import BackToHome from './ui/buttons/back-to-home';

export default function GlobalError({ error }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <main className="grid min-h-full grow place-items-center px-6 py-24 bg-white sm:py-32 lg:px-8 dark:bg-gray-950">
          <div className="text-center">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-primary-800 dark:text-primary-200">
              Megoldhatatlan hiba történt!
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <BackToHome />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
