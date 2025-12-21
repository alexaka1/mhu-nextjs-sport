import { type Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Programok',
};

function Entry({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <article className={`border-primary dark:border-primary-600 border-collapse border-b border-solid pb-1`}>
      {children}
    </article>
  );
}

function Grid({ children }: Readonly<{ children: ReactNode }>) {
  return <div className={`grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-1`}>{children}</div>;
}

export default function Page() {
  return (
    <>
      <main className={`prose prose-sm dark:prose-headings:text-white m-auto box-border max-w-7xl p-2 dark:text-white`}>
        <h1 className={`dark:text-white`}>Programok - 2024</h1>
        <section>
          <h2 className={`font-medium`}>Június 28. péntek</h2>
          <Grid>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-28T10:30:00`}>10:00</time>- <time dateTime={`2024-06-28T12:00:00`}>12:00</time>
              </h3>
              <p className={`text-base text-balance`}>Érkezés, szállás elfoglalása és regisztráció.</p>
              <p className={`text-base text-balance`}>
                A vármegye felelősök segítenek az érkező csapatoknak a regisztrációban és a szállás elfoglalásában:
              </p>
              <ul className={`grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-1`}>
                <li>
                  Békés: <span className={`inline-block max-w-full text-balance`}>Horváth Mihály</span>,{' '}
                  <span className={`inline-block max-w-full text-balance`}>Tóth Adél</span>
                </li>
                <li>
                  Bács: <span className={`inline-block max-w-full text-balance`}>Aranyosi János</span>
                </li>
                <li>
                  Borsod: <span className={`inline-block max-w-full text-balance`}>Vass Vivien</span>
                </li>
                <li>
                  Csongrád: <span className={`inline-block max-w-full text-balance`}>Csillám Enikő</span>
                </li>
                <li>
                  Főváros: <span className={`inline-block max-w-full text-balance`}>Birta Aliz</span>
                </li>
                <li>
                  Hajdú: <span className={`inline-block max-w-full text-balance`}>Kazuska Melinda</span>
                </li>
                <li>
                  Heves-Nógrád: <span className={`inline-block max-w-full text-balance`}>Doroginé Szegedi Klára</span>
                </li>
                <li>
                  Szolnok: <span className={`inline-block max-w-full text-balance`}>Szlávik Emese</span>,{' '}
                  <span className={`inline-block max-w-full text-balance`}>Balogh Emese</span>
                </li>
                <li>
                  KNYF: <span className={`inline-block max-w-full text-balance`}>Buss Emese</span>
                </li>
                <li>
                  LÜ: <span className={`inline-block max-w-full text-balance`}>Zeleiné Vajkó Edit</span>,{' '}
                  <span className={`inline-block max-w-full text-balance`}>Hegedűs Judit</span>
                </li>
                <li>
                  Pest: <span className={`inline-block max-w-full text-balance`}>Visóczki Éva</span>
                </li>
                <li>
                  Szabolcs-Szatmár-Bereg:{' '}
                  <span className={`inline-block max-w-full text-balance`}>Mészáros Attila</span>
                </li>
              </ul>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-28T12:00:00`}>12:00</time>
              </h3>
              <p className={`text-base text-balance`}>
                Technikai értekezlet a Nyíregyházi Egyetem közös helyiségben 12:00 órától, ezért{' '}
                <span className={`font-bold`}>
                  kérjük a sportfelelősöket, hogy ezen időpontig a helyszínre mindenképp érkezzenek meg!
                </span>
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-28T12:30:00`}>12:30</time>
              </h3>
              <p className={`text-base text-balance`}>Megnyitó a Nyíregyházi Egyetem sportudvarán.</p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-28T13:00:00`}>13:00</time>
              </h3>
              <p className={`text-base text-balance`}>Futás - atlétikai pálya.</p>
              {/*<FontAwesomeIcon*/}
              {/*  icon={faMountainSun}*/}
              {/*  className={`h-[250px] w-full rounded-md object-cover bg-gray-100 sm:h-min sm:object-none`}*/}
              {/*  title={`Kép helye`}*/}
              {/*/>*/}
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-28T13:00:00`}>13:00</time>
              </h3>
              <p className={`text-base text-balance`}>Labdarúgás - futballpályák.</p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-28T13:00:00`}>13:00</time>
              </h3>
              <p className={`text-base text-balance`}>Súlylökés - atlétikai pálya.</p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-28T13:00:00`}>13:00</time>
              </h3>
              <p className={`text-base text-balance`}>Kosárlabda - sportcsarnok T2 terem.</p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-28T13:00:00`}>13:00</time>
              </h3>
              <p className={`text-base text-balance`}>Asztalitenisz - atlétika pálya melletti sportcsarnok.</p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-28T18:00:00`}>18:00</time>- <time dateTime={`2024-06-28T20:00:00`}>20:00</time>
              </h3>
              <p className={`text-base text-balance`}>Vacsora</p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-28T20:00:00`}>20:00</time>
              </h3>
              <p className={`text-base text-balance`}>Esti zenés rendezvény: Campus Étterem és Bistro</p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-28T21:00:00`}>21:00</time>
              </h3>
              <p className={`text-base text-balance`}>Darts - Campus Étterem és Bistro.</p>
            </Entry>
          </Grid>
        </section>
        <section>
          <h2 className={`font-medium`}>Június 29. szombat</h2>
          <Grid>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-29T07:00:00`}>7:00</time>- <time dateTime={`2024-06-29T09:00:00`}>9:00</time>
              </h3>
              <p className={`text-base text-balance`}>Reggeli.</p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-29T09:00:00`}>9:00</time>- <time dateTime={`2024-06-29T11:00:00`}>11:00</time>
              </h3>
              <p className={`text-base text-balance`}>Úszás - egyetemi uszoda.</p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-29T10:00:00`}>10:00</time>
              </h3>
              <p className={`text-base text-balance`}>Labdarúgás folytatás - futballpályák.</p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-29T10:00:00`}>10:00</time>
              </h3>
              <p className={`text-base text-balance`}>Kosárlabda folytatás - sportcsarnok T2 terem.</p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-29T10:00:00`}>10:00</time>
              </h3>
              <p className={`text-base text-balance`}>Főügyészi verseny</p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-29T10:00:00`}>10:00</time>
              </h3>
              <p className={`text-base text-balance`}>
                asztalitenisz folytatás - atlétika pálya melletti sportcsarnok.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-29T07:00:00`}>13:00</time>
              </h3>
              <p className={`text-base text-balance`}>Eredményhirdetés</p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2024-06-29T14:00:00`}>14:00</time>
              </h3>
              <p className={`text-base text-balance`}>Ebéd</p>
            </Entry>
          </Grid>
        </section>
      </main>
    </>
  );
}
