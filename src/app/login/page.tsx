'use client';
import { signIn } from 'next-auth/react';
import { IconPlayHandball } from '@tabler/icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const providers = [
  {
    id: 'github',
    button: (
      <>
        <FontAwesomeIcon icon={faGithub} className={`size-6 pr-4`} /> GitHub belépés
      </>
    ),
    onClick: (page: string) => {
      void signIn('github', { callbackUrl: page });
    },
  },
  {
    id: 'google',
    button: (
      <>
        <FontAwesomeIcon icon={faGoogle} className={`size-6 pr-4`} /> Google belépés
      </>
    ),
    onClick: (page: string) => {
      void signIn('google', { callbackUrl: page });
    },
  },
  // {
  //   id: 'twitter',
  //   button: (
  //     <>
  //       <FontAwesomeIcon icon={faXTwitter} className={`size-6 pr-4`} /> Twitter belépés
  //     </>
  //   ),
  //   onClick: (page: string) => {
  //     void signIn('twitter', { callbackUrl: page });
  //   },
  // },
  {
    id: 'simplelogin',
    button: (
      <>
        <div className={`pr-2`}>
          <Image
            alt={`SimpleLogin`}
            width={24}
            height={24}
            src={`/icons/simplelogin.svg`}
            className={`size-6 rounded-lg p-0.5 pr-1 bg-white`}
          />
        </div>{' '}
        SimpleLogin belépés
      </>
    ),
    onClick: (page: string) => {
      void signIn('simplelogin', { callbackUrl: page });
    },
  },
];

export default function Home({
  searchParams,
}: Readonly<{
  searchParams?: {
    returnUrl?: string;
  };
}>) {
  const page = searchParams?.returnUrl ?? '/eredmenyek';
  return (
    <>
      <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:prose sm:mx-auto sm:w-full sm:max-w-sm">
          <IconPlayHandball size={40} className={`mx-auto h-10 w-auto text-primary dark:text-bg-contrast`} />
          <h2 className="mt-10 text-center text-gray-900 dark:text-bg-contrast">Jelentkezz be az alkalmazásba!</h2>
          <h4 className={`text-center dark:text-bg-contrast`}>Válassz az alábbi lehetőségek közül</h4>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:mx-auto sm:w-full sm:max-w-sm sm:gap-4">
          {providers.map((provider) => (
            <button
              key={provider.id}
              type="submit"
              className="flex w-full justify-center
                rounded-md px-3 py-1.5
                text-sm font-semibold leading-6 shadow-sm transition-colors duration-200 bg-primary text-bg-contrast hover:bg-secondary-600
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
              onClick={() => provider.onClick(page)}
            >
              {provider.button}
            </button>
          ))}
        </div>
      </main>
    </>
  );
}
