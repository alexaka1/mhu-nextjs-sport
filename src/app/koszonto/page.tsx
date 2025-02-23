import Image from 'next/image';
import { type Metadata } from 'next';
import LandingLinks from '@/app/ui/landing/landing-links';
import LandingBackground from '@/app/ui/landing/landing-background';
import LandingTitle from '@/app/ui/landing/landing-title';

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
            <div className="prose mx-auto max-w-xl text-balance text-center md:text-left md:rtl:text-right">
              <h2 className="text-2xl font-bold capitalize text-bg-contrast md:text-3xl xl:text-5xl">
                Kedves látogató!
              </h2>

              <blockquote className={`prose hyphens-auto italic text-bg-contrast xl:text-3xl`}>
                <p className="md:mt-4">
                  Idén negyvenkettedik alkalommal kerül megrendezésre a{' '}
                  <span className={`font-bold capitalize`}>Regionális ügyészségi sporttalálkozó</span>. 2024. június
                  28-29-én a Szabolcs-Szatmár-Bereg Vármegyei Főügyészség látja vendégül a Kelet-Magyarországi vármegyék
                  csapatait. Az esemény a Nyíregyházi Egyetem sportpályáin és kollégiumaiban kerül megrendezésre.
                </p>
                <p className="md:mt-4">
                  A résztvevőknek jó sportolást és kellemes időtöltést kívánok! Bízom benne, hogy maradandó szép
                  emlékekkel térnek majd haza Nyíregyházáról.
                </p>
              </blockquote>

              <p className="hidden text-xl font-semibold text-bg-contrast before:content-['-_'] md:mt-4 md:block xl:text-4xl">
                <span className="inline-block max-w-full text-balance capitalize">Martossy György</span> főügyész
              </p>
            </div>
          </div>

          <div className={`pb-2 md:p-0`}>
            <Image
              alt="dr. Martossy György főügyész"
              src="https://oeun8dfdch.ufs.sh/f/ce34ec0d-6cae-41de-b552-0059d9b027ef-c9cbbw.jpg"
              quality={100}
              width={704}
              height={907}
              priority
              className="h-56 w-full rounded-lg object-scale-down md:h-full md:rounded-l-none md:rounded-r-lg md:bg-center md:object-cover"
              aria-labelledby={'greetings-label'}
            />
            <p id="greetings-label" className="prose text-center text-xl text-bg-contrast md:hidden">
              <span className="inline-block max-w-full text-balance">Martossy György</span> főügyész
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
