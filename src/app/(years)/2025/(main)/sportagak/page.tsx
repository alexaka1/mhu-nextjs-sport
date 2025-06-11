import { type Metadata } from 'next';
import { DataList, DataListEntry, Entry, EntryContent, Media, Title } from '@/app/ui/text-content';

export const metadata: Metadata = {
  title: 'Sportágak',
};

export default function Page() {
  return (
    <main className="flex flex-col bg-white dark:bg-gray-800">
      <div className={`mx-auto`}>
        <h1 className="sr-only">Sportágak</h1>
        {/*<EntryContent>*/}
        {/*  <p className={`p-1 pt-4`}>*/}
        {/*    A sporttalálkozó rendezésével és szervezésével kapcsolatos bármilyen kérdés vagy probléma esetén forduljatok*/}
        {/*    elsődlegesen{' '}*/}
        {/*    <span className={`inline-block max-w-full text-balance font-medium`}>dr. Mészáros Attilához</span> az ismert*/}
        {/*    telefonszámon, vagy az ismert e-mail címen. A helyszínen a kijelölt csapatfelelősökhöz, a sporttal*/}
        {/*    kapcsolatos kérdésekben pedig a helyszínen a sportági felelősökhöz.*/}
        {/*  </p>*/}
        {/*</EntryContent>*/}
      </div>
      <Entry>
        <EntryContent>
          <Title id={`Labdarúgás`}>Asztalitenisz [női, férfi]</Title>
          <DataList>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
              <dd className="mt-2 text-sm capitalize text-gray-500 dark:text-bg-contrast/80">
                Egyetemi Sportcsarnok – a teremben váltócipő kötelező. A rendező a labdákat biztosítja.
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpontok</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ul>
                  <li>
                    <time dateTime={`2025-06-27T15:00`}>2025. június 27. péntek 15:00-18:00</time>
                  </li>
                  <li>
                    <time dateTime={`2024-06-28T11:00`}>2025. június 28. szombat 11:00-12:00 és 14:30-kb. 16:00</time>
                  </li>
                </ul>
              </dd>
            </DataListEntry>
            {/*<DataListEntry>*/}
            {/*  <dt className="font-medium text-gray-900 dark:text-bg-contrast">Sportág felelős</dt>*/}
            {/*  <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">*/}
            {/*    <ul>*/}
            {/*      <li></li>*/}
            {/*      <li></li>*/}
            {/*    </ul>*/}
            {/*  </dd>*/}
            {/*</DataListEntry>*/}
          </DataList>
          <h3>Szabályok</h3>
          <p>
            A mérkőzések 2 nyert szettig tartanak. A játszmát az a játékos nyeri, aki előbb éri el a 11 pontot, kivéve,
            ha mindkét játékos 10 pontot szerzett. Ebben az esetben a játszmát az a játékos nyeri, akinek elsőként lesz
            2 ponttal többje, mint ellenfelének.
          </p>
          <p>
            A játékosok az adogatás és a fogadás rendjének a jogát sorsolással döntik el, és a győztes választhat, hogy
            elsőként adogat vagy elsőként fogad. A játékosok 3-3 adogatásonként cserélik az adogató személyét.
          </p>
          <p>
            A játékosok játszmánként térfelet cserélnek. A mérkőzések során az eredményt a versenyzők számolják, majd a
            mérkőzés végeredményét – <span className={`italic`}>az egyes játszmák eredményének megadásával</span> – a
            sportági felelősnek diktálják be.
          </p>
          <p>Fehér felsőben játszani nem lehet!</p>
          <p>
            A verseny lebonyolítása a labdarúgással azonos sorsolás alapján történik, de a helyosztók során a csoportok
            1-2. helyezettjei részére keresztbe játszás nincs. A csoportokban azonos helyezést elért játékosok játszanak
            az 1-4, 5-8, illetve 9-12. helyekért. A nők az 1-2, míg a férfiak a 3-4. asztalon játszanak.
          </p>
          <h3 className={`-mb-14 font-bold`}>Csoport beosztások</h3>
          <DataList>
            <DataListEntry>
              <dt className="font-bold text-gray-900 dark:text-bg-contrast">A csoport</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol>
                  <li>Főváros</li>
                  <li>Bács</li>
                  <li>Szolnok</li>
                </ol>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-bold text-gray-900 dark:text-bg-contrast">B csoport</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol>
                  <li>Szabolcs</li>
                  <li>Csongrád</li>
                  <li>Heves-Nógrád</li>
                </ol>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-bold text-gray-900 dark:text-bg-contrast">C csoport</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol>
                  <li>LegfÜ</li>
                  <li>Békés</li>
                  <li>KNYF</li>
                </ol>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-bold text-gray-900 dark:text-bg-contrast">D csoport</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol>
                  <li>Hajdú</li>
                  <li>Pest</li>
                  <li>Borsod</li>
                </ol>
              </dd>
            </DataListEntry>
          </DataList>
          <h3>Csoportmérkőzések [péntek]</h3>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>1. és 3. asztal</th>
                <th>2. és 4. asztal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>15:00</td>
                <td>A1-A2</td>
                <td>C1-C2</td>
              </tr>
              <tr>
                <td>15:30</td>
                <td>B1-B2</td>
                <td>D1-D2</td>
              </tr>
              <tr>
                <td>16:00</td>
                <td>A1-A3</td>
                <td>C1-C3</td>
              </tr>
              <tr>
                <td>16:30</td>
                <td>B1-B3</td>
                <td>D1-D3</td>
              </tr>
              <tr>
                <td>17:00</td>
                <td>A2-A3</td>
                <td>C2-C3</td>
              </tr>
              <tr>
                <td>17:30</td>
                <td>B2-B3</td>
                <td>D2-D3</td>
              </tr>
            </tbody>
          </table>
          <h3>Helyosztók [szombat]</h3>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>1. és 3. asztal</th>
                <th>2. és 4. asztal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11:00</td>
                <td>A/3-B/3 (13. mérkőzés)</td>
                <td>C/3-B/3 (14. m.)</td>
              </tr>
              <tr>
                <td>11:30</td>
                <td>A/2-B/2 (15. m.)</td>
                <td>C/2-D/2 (16. m.)</td>
              </tr>
              <tr>
                <td>14:30</td>
                <td>A/1-B/1 (17. m.)</td>
                <td>C/1-D/1 (18. m.)</td>
              </tr>
              <tr>
                <td>15:00</td>
                <td>13. m gy.-14. m. gy. (9. hely)</td>
                <td>13. m v.-14. m. v. (11. hely)</td>
              </tr>
              <tr>
                <td>15:30</td>
                <td>15. m.gy – 16. m. gy. (5. hely)</td>
                <td>15. m. v – 16. m. v. (7. hely)</td>
              </tr>
              <tr>
                <td>16:00</td>
                <td>17. m. gy – 18. m. gy. (1. hely)</td>
                <td>17. m. v – 18. m. v. (3. hely)</td>
              </tr>
            </tbody>
          </table>
        </EntryContent>
        {/*<Media*/}
        {/*  src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhV8k8UBIaqCemy7FiDRY8lQbSThu0twHgdZrJ'}*/}
        {/*  alt={'Labdarúgás'}*/}
        {/*  priority={true}*/}
        {/*/>*/}
      </Entry>
      <Entry>
        <EntryContent>
          <Title id={`Úszás`}>Úszás</Title>
          <DataList>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                Egyetemi uszoda (25 méteres medence)
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpont</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <time dateTime={`2024-06-29T09:00`}>2024. június 29. szombat 9:00 - 11:00</time>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Sportág felelős</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ul>
                  <li>Kruták Gyula</li>
                  <li>Kisné Tarsoly Ildikó</li>
                  <li>Reményiné Deák Mariann</li>
                  <li>Pasztucha Éva</li>
                </ul>
              </dd>
            </DataListEntry>
          </DataList>
          <h3>Szabályok</h3>
          <p>
            A teljesítendő táv csapatonként mellúszásban 4 &times; 50 méter, azaz csapattagonként 2 hossz (25 m-es
            medencében), amely a faltól indulással és a fal érintésével számít teljesítettnek. Bukóforduló nem
            engedélyezett!
          </p>
          <p>
            Az indulás a vízből, a medence falától való elrugaszkodással történik, a falat kézzel meg kell érinteni,
            majd ezt követően történhet a váltás, amelyek sorrendjét a csapatok döntik el.
          </p>
          <p>
            A végső sorrendet az elért időeredmények határozzák meg, tehát a versenyzők által leúszott időeredmények
            összegzését követően a legjobb időt úszó csapat a nyertes.
          </p>
          <p>
            Megyénként 4 fő indul, a férfiak-nők aránya 2-2. Egy személy egy távot úszhat, a csapatnak mindenképp 4
            főből kell állnia!
          </p>
          <p>
            Az uszodatérben papucs használata – a nézőknek is – kötelező. és a váltás is a medencében történik, a végső
            sorrendet az elért időeredmények határozzák meg.
          </p>
          <h3 className={`-mb-14 font-bold`}>
            <span className={`uppercase`}>Abc</span> sorrend!
          </h3>
          <DataList>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Első futam</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol>
                  <li className={``}>Bács-Kiskun</li>
                  <li className={``}>Békés</li>
                  <li className={``}>Borsod-Abaúj</li>
                  <li className={``}>Csongrád-Csanád</li>
                </ol>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Második futam</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol start={5}>
                  <li className={``}>Főváros</li>
                  <li className={``}>Hajdú-Bihar</li>
                  <li className={``}>Heves-Nógrád</li>
                  <li className={``}>Jász-Nagykun-Szolnok</li>
                </ol>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Harmadik futam</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol start={9}>
                  <li className={``}>Központi Nyomozó Főügyészség</li>
                  <li className={``}>Legfőbb Ügyészség</li>
                  <li className={``}>Pest</li>
                  <li className={``}>Szabolcs</li>
                </ol>
              </dd>
            </DataListEntry>
          </DataList>
        </EntryContent>
        <Media src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhSpyW3BG09GWq6DTeZPYVX2ymvS5pouUljONQ'} alt={'Úszás'} />
      </Entry>
      <Entry>
        <EntryContent>
          <Title id={`Futás`}>Női és Férfi Síkfutás</Title>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">atlétikai pálya</dd>
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpont</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <time dateTime={`2024-06-28`}>2024. június 28. péntek</time>
                <ul>
                  <li>
                    <time dateTime={`2024-06-28T13:00`}>13.00 óra</time>
                    (női futam)
                  </li>
                  <li>
                    <time dateTime={`2024-06-28T13:30`}>13.00 óra</time>
                    (férfi futam)
                  </li>
                </ul>
              </dd>
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Sportág felelős</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ul>
                  <li>Diczkó Mariann</li>
                  <li>Pasztucha Éva</li>
                  <li>Kruták Gyula</li>
                  <li>Csillám Enikő</li>
                </ul>
              </dd>
            </div>
          </dl>
          <h3>Szabályok</h3>
          <p>
            A résztvevő női és férfi versenyzők 400 méteres atlétika pályán (rekortán) futnak, a nők 200 méteres, a
            férfiak 400 méteres távon.
          </p>
          <p>
            Először a női, majd a férfi verseny zajlik, 3-3 futamban. A futamokban egyszerre 4-4 csapat képviselői
            indulnak, a női és férfi futambeosztások azonosak.
          </p>
          <p>Szöges cipő használata nem engedélyezett.</p>
          <h3 className={`-mb-14 font-bold italic underline`}>
            <span className={`uppercase`}>Abc</span> sorrend szerint a futás!
          </h3>
          <DataList>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Első futam</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol>
                  <li className={``}>Bács-Kiskun</li>
                  <li className={``}>Békés</li>
                  <li className={``}>Borsod-Abaúj</li>
                  <li className={``}>Csongrád-Csanád</li>
                </ol>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Második futam</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol>
                  <li className={``}>Főváros</li>
                  <li className={``}>Hajdú-Bihar</li>
                  <li className={``}>Heves-Nógrád</li>
                  <li className={``}>Jász-Nagykun-Szolnok</li>
                </ol>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Harmadik futam</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol>
                  <li className={``}>Központi Nyomozó Főügyészség</li>
                  <li className={``}>Legfőbb Ügyészség</li>
                  <li className={``}>Pest</li>
                  <li className={``}>Szabolcs</li>
                </ol>
              </dd>
            </DataListEntry>
          </DataList>
        </EntryContent>
        <Media src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhcGxtgUuI2lFLKzqZ8ibAPBoQ7uUtMSJNj01w'} alt={'Futás'} />
      </Entry>
      <Entry>
        <EntryContent>
          <Title id={`Asztalitenisz`}>Asztalitenisz (Női-Férfi)</Title>
          <DataList>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                Atlétika pálya melletti sportcsarnok
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpontok</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ul>
                  <li>
                    <time dateTime={`2024-06-28T13:00`}>2024. június 28. péntek 13:00 - 17:30</time>
                  </li>
                  <li>
                    <time dateTime={`2024-06-29T10:00`}>2024. június 29. szombat 10:00 - 12:00</time>
                  </li>
                </ul>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Sportág felelős</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ul>
                  <li>Sável Krisztina</li>
                  <li>Dobos Alexandra</li>
                </ul>
              </dd>
            </DataListEntry>
          </DataList>
          <h3>Szabályok</h3>
          <p>
            A mérkőzések 2 nyert szettig tartanak. A játszmát az a játékos nyeri, aki előbb éri el a 11 pontot, kivéve,
            ha mindkét játékos 10 pontot szerzett. Ebben az esetben a játszmát az a játékos nyeri, akinek elsőként lesz
            2 ponttal többje, mint ellenfelének.
          </p>
          <p>
            A játékosok az adogatás és a fogadás rendjének a jogát sorsolással döntik el, és a győztes választhat, hogy
            elsőként adogat vagy elsőként fogad. A játékosok 3-3 adogatásonként cserélik az adogató személyét.
          </p>
          <p>
            A játékosok játszmánként térfelet cserélnek. A mérkőzések során az eredményt a versenyzők számolják, majd a
            mérkőzés végeredményét – <span className={`italic`}>az egyes játszmák eredményének megadásával</span> – a
            sportági felelősnek diktálják be.
          </p>
          <p>Fehér felsőben játszani nem lehet!</p>
          <p>Labdát a szervezők biztosítanak, míg ütőt a játékosok hoznak magukkal.</p>
          <h3>Lebonyolítás</h3>
          <p>A verseny lebonyolítása az alábbi sorsolás alapján történik.</p>
          <DataList>
            <DataListEntry>
              <dt className="font-bold text-gray-900 dark:text-bg-contrast">A csoport</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol>
                  <li>Főváros</li>
                  <li>Csongrád</li>
                  <li>Heves-Nógrád</li>
                </ol>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-bold text-gray-900 dark:text-bg-contrast">B csoport</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol>
                  <li>Legfőbb Ügyészség</li>
                  <li>Szolnok</li>
                  <li>Békés</li>
                </ol>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-bold text-gray-900 dark:text-bg-contrast">C csoport</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol>
                  <li>Szabolcs</li>
                  <li>Központi Nyomozó Főügyészség</li>
                  <li>Bács</li>
                </ol>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-bold text-gray-900 dark:text-bg-contrast">D csoport</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol>
                  <li>Pest</li>
                  <li>Hajdú</li>
                  <li>Borsod</li>
                </ol>
              </dd>
            </DataListEntry>
          </DataList>
        </EntryContent>
        <Media
          src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3Hhnt80K7x39ku0hCXvmi4dqO1zWpJr7IjeKGyH'}
          alt={'Asztalitenisz'}
        />
      </Entry>
      <Entry>
        <EntryContent>
          <Title id={`Súlylökés`}>Női és Férfi Súlylökés</Title>
          <DataList>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">atlétikai pálya</dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpont</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <time dateTime={`2024-06-28T13:00:00`}>2024. június 28. 13:00</time>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Sportág felelős</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ul>
                  <li>Pintérné Varga Anita</li>
                  <li>Szekeres Zsuzsa</li>
                </ul>
              </dd>
            </DataListEntry>
          </DataList>
          <h3>Szabályok</h3>
          <p>
            A résztvevők a nevezett csapatok ABC sorrendjében dobnak, egy próbadobás, majd három mért kísérlet
            következik. Előbb a női, majd a férfi verseny zajlik.
          </p>
          <p>
            A végeredményt a három mért dobás közül a legjobb adja, egyenlőség esetén sorrendben a legjobb második, majd
            a legjobb harmadik dobás alakítja ki.
          </p>
          <h3>A dobások sorrendje</h3>
          <ol>
            <li>Bács-Kiskun</li>
            <li>Békés</li>
            <li>Borsod-Abaúj</li>
            <li>Csongrád-Csanád</li>
            <li>Főváros</li>
            <li>Hajdú-Bihar</li>
            <li>Heves-Nógrád</li>
            <li>Jász-Nagykun-Szolnok</li>
            <li>Központi Nyomozó Főügyészség</li>
            <li>Legfőbb Ügyészség</li>
            <li>Pest</li>
            <li>Szabolcs</li>
          </ol>
        </EntryContent>
        <Media src={'https://oeun8dfdch.ufs.sh/f/52daa2c7-ace9-478e-a9d0-09b09f11f48b-y6rnit.webp'} alt={'Súlylökés'} />
      </Entry>
      <Entry>
        <EntryContent>
          <Title id={`Darts`}>Darts</Title>
          <DataList>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                Nyíregyházi Egyetem Campus étterem (az esti rendezvény helyszíne)
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpont</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <time dateTime={`2024-06-28T21:00`}>2024. június 28. péntek 21:00</time>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Sportág felelős</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ul>
                  <li>Buss Emese</li>
                  <li>Tóth Tibor</li>
                </ul>
              </dd>
            </DataListEntry>
          </DataList>
          <h3>Szabályok</h3>
          <p>
            A női és férfi versenyzők külön-külön versenyeznek és eredményeik a csapatpontszámba külön-külön számítanak
            be. Egységes versenykiírás vonatkozik mindkét nemre.
          </p>
          <p>A versenyhez két tábla áll rendelkezésre, egy a férfiak, egy a nők részére.</p>
          <p>
            Női és férfi versenyzőnként egy meccs 12 sorozatnyi (1 sorozat 3 nyíl) dobásból áll. 301-ről kezdődő sima
            kiszállóval történik a verseny. A győzelemhez egy nyert parti szükséges. Az adott partin belül maximum (12)
            sorozat esetén az a győztes, aki közelebb áll a nullához. Amennyiben a kezdőjátékos eléri a nullát, a
            második játékos még ledobja a saját körét és ez alapján állapítjuk meg a parti eredményét. Pontegyenlőség
            esetén a már ledobott pontszámon kívül plusz egy dobás, aki nagyobbat dob, az nyer.
          </p>
          <p>A verseny sorsolása az alábbi:</p>
          <DataList>
            <DataListEntry>
              <dt className="font-bold text-gray-900 dark:text-bg-contrast">A csoport</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol>
                  <li>Csongrád</li>
                  <li>Hajdú</li>
                  <li>Szabolcs</li>
                  <li>Bács</li>
                </ol>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-bold text-gray-900 dark:text-bg-contrast">B csoport</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol start={5}>
                  <li>Pest</li>
                  <li>Békés</li>
                  <li>Központi Nyomozó Főügyészség</li>
                  <li>Szolnok</li>
                </ol>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-bold text-gray-900 dark:text-bg-contrast">C csoport</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol start={9}>
                  <li>Legfőbb Ügyészség</li>
                  <li>Heves-Nógrád</li>
                  <li>Borsod</li>
                  <li>Főváros</li>
                </ol>
              </dd>
            </DataListEntry>
          </DataList>
          <p>Három csoport győztese a döntőben mérkőzik.</p>
        </EntryContent>
        <Media src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3Hhp8qiLl6ZOr8hQaE9YlIB5Smef7sCcdvHyjMJ'} alt={'Darts'} />
      </Entry>
      <Entry>
        <EntryContent>
          <Title id={`Kosárlabda`}>Női Kosárlabda 1 palánkra</Title>
          <DataList>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                Sportcsarnok – öltöző biztosított, normál edzőcipő használható.
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpontok</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ul>
                  <li>
                    <time dateTime={`2024-06-28T13:00`}>2024. június 28. péntek 13:00 - 17:30</time>
                  </li>
                  <li>
                    <time dateTime={`2024-06-29T10:00`}>2024. június 29. szombat 10:00 - 12:00</time>
                  </li>
                </ul>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Sportág felelős</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ul>
                  <li>Birta Alíz</li>
                  <li>Tóth Adél</li>
                </ul>
              </dd>
            </DataListEntry>
          </DataList>
          <h3>Szabályok</h3>
          <p>
            A csapatokat sorsolással állítottuk csoportba, a csoportokban körmérkőzéseket játszanak. Az 1-4. helyekért
            játszanak a végjátékban.
          </p>
          <p>A játékidő 10 perc vagy 15 pont. Döntetlen esetén 2 perc hosszabbítás lesz.</p>
          <p>
            A 6,75 méter körön belüli kosár 2 pont, a 6,75 méteren kívüli kosár 3 pontot ér, míg a büntető dobás 1
            pontot ér.
          </p>
          <p>
            A játékosoknál nincs kipontozódás, kivéve, ha sportszerűtlen játék miatt kiállítják. 6 csapatszemély után
            van 1 büntetődobás, 3 pontos dobáskísérlet esetén 2 büntetődobás jár.
          </p>
          <p>
            A kosarat kapó csapat támadása úgy történik, hogy a labdát a 6,75 méteres félköríven kívülre kell juttatni.
          </p>
          <p>
            Passzív játék esetén a játékvezető figyelmezteti a csapatot és hangosan számol vissza 5 másodpercről, mely
            idő alatt kosárra kell dobni vagy a játékvezető elveszi a labdát passzív játék miatt.
          </p>
          <p>5-8, 9-12 helyezések eldöntése 3 büntetődobás, mindig másnak kell dobnia.</p>
          <DataList>
            <DataListEntry>
              <dt className="font-bold text-gray-900 dark:text-bg-contrast">A csoport</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol>
                  <li>Pest</li>
                  <li>Hajdú</li>
                  <li>Heves-Nógrád</li>
                </ol>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-bold text-gray-900 dark:text-bg-contrast">B csoport</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol>
                  <li>Borsod</li>
                  <li>Központi Nyomozó Főügyészség</li>
                  <li>Békés</li>
                </ol>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-bold text-gray-900 dark:text-bg-contrast">C csoport</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol>
                  <li>Legfőbb Ügyészség</li>
                  <li>Bács</li>
                  <li>Szabolcs</li>
                </ol>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-bold text-gray-900 dark:text-bg-contrast">D csoport</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ol>
                  <li>Csongrád</li>
                  <li>Főváros</li>
                  <li>Szolnok</li>
                </ol>
              </dd>
            </DataListEntry>
          </DataList>
        </EntryContent>
        <Media
          src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhnPcT3Vx39ku0hCXvmi4dqO1zWpJr7IjeKGyH'}
          alt={'Kosárlabda'}
        />
      </Entry>
      <Entry>
        <EntryContent>
          <Title id={`Főügyésziverseny`}>Főügyészi verseny</Title>
          <DataList>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">kosárlabdapálya</dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpont</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <time dateTime={`2024-06-29T10:00`}>2024. június 29. szombat 10:00</time>
              </dd>
            </DataListEntry>
            <DataListEntry>
              <dt className="font-medium text-gray-900 dark:text-bg-contrast">Sportág felelős</dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                <ul>
                  <li className={`inline-block`}>Martossy György</li>
                </ul>
              </dd>
            </DataListEntry>
          </DataList>
          <h3>Szabályok</h3>
          <p>
            A versenyszám az összesített eredménybe beszámít! Kizárólag maguk a csapatvezetők állhatnak rajthoz,
            személyesen!
          </p>
          <p>
            Minden csapat, amelynek vezetője rajthoz áll, 2 pontot kap. A részt nem vevő csapat nem kap pontot. Az 1-3.
            helyen végző csapatvezető csapata egységesen 3 pontot kap!{' '}
          </p>
          <h3>Lebonyolítás</h3>
          <p>
            A csapatvezetők a csapatok névsorrendjében dobnak 5-5 büntetődobást. A legjobb eredményt elérő 3 versenyző
            jut a döntőbe (egyenlőség esetén újabb 3-3 dobással döntik el a holtversenyt).
          </p>
          <p>A legjobb 3 versenyző újra 5-5-öt dob, így alakul ki köztük a legjobb 3 sorrendje.</p>
          <p>A verseny előtt gyakorlásra lesz lehetőség.</p>
        </EntryContent>
        <Media
          src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhW3IthrXSwz75tgJrv6Uy1hoxuce0I29sfRPL'}
          alt={'Kosárlabda'}
        />
      </Entry>
    </main>
  );
}
