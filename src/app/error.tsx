'use client';

import { useEffect } from 'react';
import BackToHome from '@/app/ui/buttons/back-to-home';
import { captureException } from '@sentry/nextjs';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    captureException(error);
  }, [error]);

  return (
    <main className="grid min-h-full grow place-items-center px-6 py-24 bg-white sm:py-32 lg:px-8 dark:bg-gray-950">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-bg-contrast">
          Valami hiba történt!
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            className={`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm bg-primary text-bg-contrast hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600`}
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => {
                reset();
              }
            }
          >
            Próbáld újra
          </button>
          <BackToHome />
        </div>
      </div>
    </main>
  );
}
