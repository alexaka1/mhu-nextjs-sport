import { auth, signIn } from '@/app/lib/auth';
import { IconPlayHandball } from '@tabler/icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import BackToHome from '@/app/ui/buttons/back-to-home';
import { type ReactNode } from 'react';

type LoginButton = {
  id: string;
  button: ReactNode;
  recommended: true | undefined;
};

const providers: LoginButton[] = [
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
    recommended: undefined,
  } as LoginButton,
  {
    id: 'github',
    button: (
      <>
        <FontAwesomeIcon icon={faGithub} className={`size-6 pr-4`} /> GitHub belépés
      </>
    ),
    recommended: undefined,
  },
  {
    id: 'google',
    button: (
      <>
        <FontAwesomeIcon icon={faGoogle} className={`size-6 pr-4`} /> Google belépés
      </>
    ),
    recommended: undefined,
  },
  // {
  //   id: 'twitter',
  //   button: (
  //     <>
  //       <FontAwesomeIcon icon={faXTwitter} className={`size-6 pr-4`} /> Twitter belépés
  //     </>
  //   ),
  // },
];

export default async function Home(
  props: Readonly<{
    searchParams?: Promise<{
      returnUrl?: string;
    }>;
  }>,
) {
  const searchParams = await props.searchParams;
  let page = searchParams?.returnUrl ?? '/eredmenyek';
  if (page === '/login' || !page.startsWith('/')) {
    page = '/eredmenyek';
  }
  const session = await auth();
  if (session?.user != null) {
    return (
      <main className="prose flex min-h-full flex-1 flex-col justify-center px-6 py-12 sm:mx-auto sm:w-full sm:max-w-md lg:px-8">
        <h2 className={`text-center text-gray-900 dark:text-bg-contrast`}>Már be van jelentkezve.</h2>
        <div className="mt-10 flex flex-col gap-3 sm:mx-auto sm:w-full sm:max-w-sm sm:gap-4">
          <BackToHome />
        </div>
      </main>
    );
  }
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
            <form
              key={provider.id}
              id={provider.id}
              action={async () => {
                'use server';
                await signIn(provider.id, { redirectTo: page });
              }}
            >
              <button
                form={provider.id}
                type="submit"
                className="relative flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm transition-colors duration-200 bg-primary text-bg-contrast hover:bg-secondary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
              >
                {provider.recommended ?
                  <span className="absolute -right-0.5 -top-2 z-10 whitespace-nowrap rounded-full px-2.5 py-0.5 text-sm font-semibold bg-hun-green text-bg-contrast">
                    Javasolt
                  </span>
                : null}
                {provider.button}
              </button>
            </form>
          ))}
        </div>
      </main>
    </>
  );
}
