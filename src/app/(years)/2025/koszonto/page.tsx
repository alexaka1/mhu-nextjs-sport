import Image from 'next/image';
import { type Metadata } from 'next';
import LandingLinks from '@/app/ui/landing/2025/landing-links';
import LandingBackground from '@/app/ui/landing/2025/landing-background';
import LandingTitle from '@/app/ui/landing/2025/landing-title';

export const metadata: Metadata = {
  title: `Köszöntő`,
};

export default function Home() {
  return (
    <>
      <main className="relative flex min-h-svh flex-col items-center justify-between gap-1 p-4 md:p-24">
        <LandingBackground />
        <LandingTitle />

        <section className="grid overflow-hidden rounded-lg bg-primary-800/95 md:grid-cols-2">
          <div className="p-4 pb-0 md:flex md:items-center md:p-12 lg:px-16 lg:py-24">
            <div className="prose mx-auto max-w-xl text-balance text-center md:text-left rtl:md:text-right">
              <h2 className="sr-only">Főűgyész köszöntője</h2>
              {/*<span className="text-2xl font-bold capitalize text-bg-contrast md:text-3xl xl:text-5xl">*/}
              {/*  Kedves látogató!*/}
              {/*</span>*/}

              <blockquote className={`prose hyphens-auto italic text-bg-contrast xl:text-3xl`}>
                <p className="md:mt-4">
                  Az idei évben a{' '}
                  <em className={`font-bold capitalize`}>XLIII. Regionális Ügyészségi Sporttalálkozó</em> résztvevői
                  2025. június 27-29. napjain, Békéscsabán mérik össze tudásukat. A rendezvényre a hagyományoknak
                  megfelelően 12 csapat fogadta el a meghívást, a Legfőbb Ügyészség, a Központi Nyomozó Főügyészség, a
                  Duna-Tisza köz, valamint a Tiszántúl vármegyéinek képviselőit látja vendégül a Békés Vármegyei
                  Főügyészség. Békés vármegye székhelyének lehetőségeiből adódóan a sportversenyek több helyszínen, a
                  Gál Ferenc Egyetem sportcsarnokában, a Békéscsaba 1912 Előre műfüves edzőpályáján, a Békéscsabai
                  Atlétikai Club atlétikai pályáján, valamint az Árpád fürdőben kerülnek lebonyolításra. A szállás a Gál
                  Ferenc Egyetem kollégiumában és a közvetlenül mellette található Szent-Györgyi Albert Technikum és
                  Kollégiumban biztosított, az étkezés, valamint az esti zenés rendezvények helyszíne pedig a
                  kolbászfesztiváloknak is helyet adó CsabaPark Pálinkamúzeuma lesz.
                </p>
                <p className="md:mt-4">
                  A programok és a helyszínek közötti eligazodást remélhetőleg jól szolgálja majd ez az alkalmazás.
                </p>
                <p className="md:mt-4">
                  A résztvevőknek balesetmentes versenyzést és kellemes időtöltést kívánok, bízva abban, hogy mindenki
                  szép emlékekkel távozik majd Békéscsabáról, és szívesen gondol majd vissza az itt töltött néhány
                  napra.
                </p>
              </blockquote>

              <p className="hidden text-xl font-semibold text-bg-contrast before:content-['-_'] md:mt-4 md:block xl:text-4xl">
                <span className="inline-block max-w-full text-balance capitalize">Berg Márta</span> főügyész
              </p>
            </div>
          </div>

          <div className={`pb-2 md:p-0`}>
            <Image
              alt="dr. Berg Márta főügyész"
              src="https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhD2bpLa9gOqjnxQYNAfLeH1W870Gsdbygthp3"
              quality={100}
              width={704}
              height={907}
              priority
              className="h-56 w-full rounded-lg object-scale-down md:h-full md:rounded-l-none md:rounded-r-lg md:bg-center md:object-cover"
              aria-labelledby={'greetings-label'}
            />
            <p id="greetings-label" className="prose text-center text-xl text-bg-contrast md:hidden">
              <span className="inline-block max-w-full text-balance">Berg Márta</span> főügyész
            </p>
          </div>
        </section>

        <div className="md:pb-32 xl:pb-0">
          <LandingLinks />
        </div>
      </main>
    </>
  );
}
