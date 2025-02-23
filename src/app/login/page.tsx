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
            className={`size-6 rounded-lg bg-white p-0.5 pr-1`}
          />
        </div>{' '}
        SimpleLogin belépés
      </>
    ),
    recommended: true,
  } as LoginButton,
  {
    id: 'github',
    button: (
      <>
        <FontAwesomeIcon icon={faGithub} className={`pr-4 text-2xl`} /> GitHub belépés
      </>
    ),
    recommended: undefined,
  },
  {
    id: 'google',
    button: (
      <>
        <FontAwesomeIcon icon={faGoogle} className={`pr-4 text-2xl`} /> Google belépés
      </>
    ),
    recommended: undefined,
  },
  // {
  //   id: 'twitter',
  //   button: (
  //     <>
  //       <FontAwesomeIcon icon={faXTwitter} className={`text-2xl pr-4`} /> Twitter belépés
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
        <h2 className={`dark:text-bg-contrast text-center text-gray-900`}>Már be van jelentkezve.</h2>
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
          <IconPlayHandball size={40} className={`text-primary dark:text-bg-contrast mx-auto h-10 w-auto`} />
          <h2 className="dark:text-bg-contrast mt-10 text-center text-gray-900">Jelentkezz be az alkalmazásba!</h2>
          <h4 className={`dark:text-bg-contrast text-center`}>Válassz az alábbi lehetőségek közül</h4>
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
                className="bg-primary text-bg-contrast hover:bg-secondary-600 focus-visible:outline-primary-400 relative flex w-full justify-center rounded-md px-3 py-1.5 text-sm leading-6 font-semibold shadow-xs transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {provider.recommended ?
                  <span className="bg-hun-green text-bg-contrast absolute -top-2 -right-0.5 z-10 rounded-full px-2.5 py-0.5 text-sm font-semibold whitespace-nowrap">
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
