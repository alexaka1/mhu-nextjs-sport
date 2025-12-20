import BackToHome from '@/app/ui/buttons/back-to-home';
import React from 'react';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons/faScrewdriverWrench';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UnderConstruction() {
  return (
    <main className="grid min-h-full grow place-items-center px-6 py-24 bg-white sm:py-32 lg:px-8 dark:bg-gray-950">
      <div className="mx-auto max-w-screen-md px-4 py-8 text-center lg:px-12 lg:py-16">
        <FontAwesomeIcon
          className={`mx-auto mb-4 size-12 text-primary dark:text-primary-800 dark:text-primary-200`}
          icon={faScrewdriverWrench}
        />
        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:mb-6 xl:text-6xl dark:text-primary-800 dark:text-primary-200">
          Fejlesztés alatt
        </h1>
        <p className="prose text-balance font-light text-gray-500 md:text-lg xl:text-xl dark:text-primary-800 dark:text-primary-200">
          Az oldal jelenleg fejlesztés alatt áll. Kérjük, látogass vissza később.
        </p>
        <div className="flex items-center justify-center gap-x-6">
          <BackToHome />
        </div>
      </div>
    </main>
  );
}
