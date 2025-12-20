import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { DarkModeToggle } from '@/app/ui/dark-mode-toggle';
import Link from 'next/link';

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
            <p className="prose text-balance text-gray-900 dark:text-white">
              Ez a weboldal egy hobbi projekt keretében készült. Nem hivatalos. Nem kapcsolódik semmilyen hivatalos
              szervezethez. A forráskód elérhető a GitHub-on.
            </p>
            <DarkModeToggle />
          </div>
          <h2 id={`social-links`} className={`sr-only`}>
            Közösségi oldalak
          </h2>
          <nav aria-labelledby={`social-links`}>
            <menu className="mt-8 flex flex-wrap justify-center gap-6 sm:mt-0 sm:flex-nowrap sm:justify-end">
              <li>
                <a
                  href="https://www.facebook.com/Magyarorsz%C3%A1g-%C3%9Cgy%C3%A9szs%C3%A9ge-104594918109266"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary transition hover:opacity-75 dark:text-gray-900 dark:text-white"
                >
                  <span className="sr-only">Facebook</span>

                  <FontAwesomeIcon icon={faFacebook} className={`size-6`} />
                </a>
              </li>

              <li>
                <a
                  href="https://youtube.com/channel/UCouE-RnAm6zOsykseIe1wUA"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary transition hover:opacity-75 dark:text-white"
                >
                  <span className="sr-only">YouTube</span>
                  <FontAwesomeIcon icon={faYoutube} className={`size-6`} />
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/ProsecutionHu"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary transition hover:opacity-75 dark:text-white"
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
                  className="text-primary transition hover:opacity-75 dark:text-white"
                >
                  <span className="sr-only">GitHub</span>

                  <FontAwesomeIcon icon={faGithub} className={`size-6`} />
                </a>
              </li>
            </menu>
          </nav>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16 dark:border-gray-800">
          <div>
            <p id="year-links" className="font-medium text-gray-900 dark:text-white">
              Sporttalálkozók
            </p>

            <nav aria-labelledby="year-links">
              <menu className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/2025" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    2025 - Békéscsaba
                  </Link>
                </li>
                <li>
                  <Link href="/2024" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    2024 - Nyíregyháza
                  </Link>
                </li>

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
              </menu>
            </nav>
          </div>
        </div>
        <p className="prose text-xs text-balance whitespace-nowrap text-gray-900 dark:text-white">
          &copy; {new Date().getFullYear()}.{' '}
          <span className="inline-block max-w-full text-balance">Martossy Alex Márk.</span> Minden jog fenntartva.
        </p>
      </div>
    </footer>
  );
}
