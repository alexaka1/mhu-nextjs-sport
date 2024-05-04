import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import DarkModeToggle from '@/app/ui/dark-mode-toggle';

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-50 dark:bg-gray-900 print:hidden">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className={`flex flex-col items-start gap-2`}>
            {/*<a*/}
            {/*  className="pointer-events-none flex place-items-center gap-2 p-8 text-bg-contrast lg:pointer-events-auto lg:p-0"*/}
            {/*  href="https://vercel.com"*/}
            {/*  target="_blank"*/}
            {/*  rel="noopener noreferrer"*/}
            {/*>*/}
            {/*  <Image src="/vercel.svg" alt="Vercel Logó" className="h-6 dark:invert" width={100} height={24} /> -en*/}
            {/*  hosztolva.*/}
            {/*</a>*/}
            <p className="prose text-balance text-bg-contrast">
              Ez a weboldal egy hobbi projekt keretében készült. Nem hivatalos. Nem kapcsolódik semmilyen hivatalos
              szervezethez. A forráskód elérhető a GitHub-on.
            </p>
            <DarkModeToggle />
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-6 sm:mt-0 sm:flex-nowrap sm:justify-end">
            <li>
              <a
                href="https://www.facebook.com/Magyarorsz%C3%A1g-%C3%9Cgy%C3%A9szs%C3%A9ge-104594918109266"
                rel="noreferrer"
                target="_blank"
                className="transition text-primary hover:opacity-75 dark:text-bg-contrast"
              >
                <span className="sr-only">Facebook</span>

                <FontAwesomeIcon icon={faFacebook} className={`size-6`} />
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/@MagyarorszagUgyeszsege"
                rel="noreferrer"
                target="_blank"
                className="transition text-primary hover:opacity-75 dark:text-bg-contrast"
              >
                <span className="sr-only">YouTube</span>
                <FontAwesomeIcon icon={faYoutube} className={`size-6`} />
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/ProsecutionHu"
                rel="noreferrer"
                target="_blank"
                className="transition text-primary hover:opacity-75 dark:text-bg-contrast"
              >
                <span className="sr-only">X</span>

                <FontAwesomeIcon icon={faXTwitter} className={`size-6`} />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/alexaka1/mhu-nextjs-sport"
                rel="noreferrer"
                target="_blank"
                className="transition text-primary hover:opacity-75 dark:text-bg-contrast"
              >
                <span className="sr-only">GitHub</span>

                <FontAwesomeIcon icon={faGithub} className={`size-6`} />
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t pt-8 border-gray-100 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16 dark:border-gray-800">
          {/*<div>*/}
          {/*  <p className="font-medium text-gray-900 dark:text-white">Services</p>*/}

          {/*  <ul className="mt-6 space-y-4 text-sm">*/}
          {/*    <li>*/}
          {/*      <a href="#" className="transition text-gray-700 hover:opacity-75 dark:text-gray-200">*/}
          {/*        1on1 Coaching*/}
          {/*      </a>*/}
          {/*    </li>*/}

          {/*    <li>*/}
          {/*      <a href="#" className="transition text-gray-700 hover:opacity-75 dark:text-gray-200">*/}
          {/*        Company Review*/}
          {/*      </a>*/}
          {/*    </li>*/}

          {/*    <li>*/}
          {/*      <a href="#" className="transition text-gray-700 hover:opacity-75 dark:text-gray-200">*/}
          {/*        Accounts Review*/}
          {/*      </a>*/}
          {/*    </li>*/}

          {/*    <li>*/}
          {/*      <a href="#" className="transition text-gray-700 hover:opacity-75 dark:text-gray-200">*/}
          {/*        HR Consulting*/}
          {/*      </a>*/}
          {/*    </li>*/}

          {/*    <li>*/}
          {/*      <a href="#" className="transition text-gray-700 hover:opacity-75 dark:text-gray-200">*/}
          {/*        SEO Optimisation*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>
        <p className="prose whitespace-nowrap text-balance text-xs text-bg-contrast">
          &copy; 2024. <span className="inline-block max-w-full text-balance">Martossy Alex Márk.</span> Minden jog
          fenntartva.
        </p>
      </div>
    </footer>
  );
}
