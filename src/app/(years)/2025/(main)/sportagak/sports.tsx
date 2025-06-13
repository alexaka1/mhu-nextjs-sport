'use client';

import { DataList, DataListEntry, Entry, EntryContent, Media, Title } from '@/app/ui/text-content';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { tabs } from './menu';

export default function Sports() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // parse tab index from URL, default to 0, clamp to [0..tabs.length-1]
  const raw = parseInt(searchParams.get('tab') ?? '0', 10);
  const selectedIndex = Number.isNaN(raw) || raw < 0 || raw >= tabs.length ? 0 : raw;

  const handleTabChange = (index: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', index.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className={`w-full`}>
        <TabGroup selectedIndex={selectedIndex} onChange={handleTabChange}>
          <TabList
            as={`nav`}
            aria-label={`Sportágak`}
            className="-mb-px flex flex-wrap border-b text-center text-sm font-medium border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400"
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.title}
                className="group me-2 inline-flex items-center justify-center rounded-t-lg border-b-2 p-4 border-transparent focus-visible:outline-1 focus-visible:outline-primary-800 data-[hover]:border-secondary-600 data-[selected]:border-primary data-[hover]:text-secondary-600 data-[selected]:text-primary dark:focus-visible:outline-primary-600 data-[selected]:dark:border-primary-400 dark:data-[hover]:text-gray-300 data-[selected]:dark:text-primary-400"
              >
                {tab.icon}
                {tab.title}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel>
              <Entry>
                <EntryContent>
                  <Title id={`Asztalitenisz`}>Asztalitenisz [női, férfi]</Title>
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
                            <time dateTime={`2025-06-28T11:00`}>
                              2025. június 28. szombat 11:00-12:00 és 14:30-kb. 16:00
                            </time>
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
                    A mérkőzések 2 nyert szettig tartanak. A játszmát az a játékos nyeri, aki előbb éri el a 11 pontot,
                    kivéve, ha mindkét játékos 10 pontot szerzett. Ebben az esetben a játszmát az a játékos nyeri,
                    akinek elsőként lesz 2 ponttal többje, mint ellenfelének.
                  </p>
                  <p>
                    A játékosok az adogatás és a fogadás rendjének a jogát sorsolással döntik el, és a győztes
                    választhat, hogy elsőként adogat vagy elsőként fogad. A játékosok 3-3 adogatásonként cserélik az
                    adogató személyét.
                  </p>
                  <p>
                    A játékosok játszmánként térfelet cserélnek. A mérkőzések során az eredményt a versenyzők számolják,
                    majd a mérkőzés végeredményét –{' '}
                    <span className={`italic`}>az egyes játszmák eredményének megadásával</span> – a sportági felelősnek
                    diktálják be.
                  </p>
                  <p>Fehér felsőben játszani nem lehet!</p>
                  <p>
                    A verseny lebonyolítása a labdarúgással azonos sorsolás alapján történik, de a helyosztók során a
                    csoportok 1-2. helyezettjei részére keresztbe játszás nincs. A csoportokban azonos helyezést elért
                    játékosok játszanak az 1-4, 5-8, illetve 9-12. helyekért. A nők az 1-2, míg a férfiak a 3-4.
                    asztalon játszanak.
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
            </TabPanel>
            <TabPanel>
              <Entry>
                <EntryContent>
                  <Title id={`Csocso`}>Csocsó</Title>
                  <DataList>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        Csaba Park rendezvénysátor
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpont</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <time dateTime={`2025-06-28T21:00`}>2025. június 28. szombat 21:00 órától</time>
                      </dd>
                    </DataListEntry>
                    {/*<DataListEntry>*/}
                    {/*  <dt className="font-medium text-gray-900 dark:text-bg-contrast">Sportág felelős</dt>*/}
                    {/*  <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">*/}
                    {/*    <ul>*/}
                    {/*      <li></li>*/}
                    {/*      <li></li>*/}
                    {/*      <li></li>*/}
                    {/*      <li></li>*/}
                    {/*    </ul>*/}
                    {/*  </dd>*/}
                    {/*</DataListEntry>*/}
                  </DataList>
                  <h3>Szabályok</h3>
                  <p>
                    A csapatot egy férfi és egy női versenyző alkotja. A verseny két asztalon zajlik, 4 csoportban úgy,
                    hogy a csoportokban mindenki játszik mindenkivel.
                  </p>
                  <p>
                    Ezt követően a csoportok azonos helyén végzettek játszanak egymással az 1-4., 5-8. és 9-12. helyeken
                    A-B és C-D beosztásban, majd a győztesek az 1., 5. és 9. helyért, stb.
                  </p>
                  <p>
                    A mérkőzést az nyeri, aki a meccs folyamán előbb eléri a hat lőtt gólt. Csoportbeosztás a futballal
                    azonos.
                  </p>
                  <h3 className={`-mb-14 font-bold`}>Csoportbeosztás</h3>
                  <DataList>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">A csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>Borsod</li>
                          <li>Szolnok</li>
                          <li>LegfÜ</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">B csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>Szabolcs</li>
                          <li>Hajdú</li>
                          <li>Békés</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">C csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>Bács</li>
                          <li>KNYF</li>
                          <li>Heves-Nógrád</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">D csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>Pest</li>
                          <li>Főváros</li>
                          <li>Csongrád</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                  </DataList>
                  <h3>Csoportmérkőzések</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>1. asztal</th>
                        <th>2. asztal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>A1-A2</td>
                        <td>C1-C2</td>
                      </tr>
                      <tr>
                        <td>B1-B2</td>
                        <td>D1-D2</td>
                      </tr>
                      <tr>
                        <td>A1-A3</td>
                        <td>C1-C3</td>
                      </tr>
                      <tr>
                        <td>B1-B3</td>
                        <td>D1-D3</td>
                      </tr>
                      <tr>
                        <td>A2-A3</td>
                        <td>C2-C3</td>
                      </tr>
                      <tr>
                        <td>B2-B3</td>
                        <td>D2-D3</td>
                      </tr>
                    </tbody>
                  </table>
                  <h3>Helyosztók</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>1. asztal</th>
                        <th>2. asztal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>A/3-B/3 (13. mérkőzés)</td>
                        <td>C/3-B/3 (14. m.)</td>
                      </tr>
                      <tr>
                        <td>A/2-B/2 (15. m.)</td>
                        <td>C/2-D/2 (16. m.)</td>
                      </tr>
                      <tr>
                        <td>A/1-B/1 (17. m.)</td>
                        <td>C/1-D/1 (18. m.)</td>
                      </tr>
                      <tr>
                        <td>13. m gy.-14. m. gy. (9. hely)</td>
                        <td>13. m v.-14. m. v. (11. hely)</td>
                      </tr>
                      <tr>
                        <td>15. m.gy – 16. m. gy. (5. hely)</td>
                        <td>15. m. v – 16. m. v. (7. hely)</td>
                      </tr>
                      <tr>
                        <td>17. m. gy – 18. m. gy. (1. hely)</td>
                        <td>17. m. v – 18. m. v. (3. hely)</td>
                      </tr>
                    </tbody>
                  </table>
                </EntryContent>
                {/*<Media src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhSpyW3BG09GWq6DTeZPYVX2ymvS5pouUljONQ'} alt={'Úszás'} />*/}
              </Entry>
            </TabPanel>
            <TabPanel>
              {' '}
              <Entry>
                <EntryContent>
                  <Title id={`Darts`}>Darts</Title>
                  <DataList>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        Csaba Park rendezvénysátor
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpont</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <time dateTime={`2025-06-28T21:00`}>2025. június 27. péntek 21:00 órától</time>
                      </dd>
                    </DataListEntry>
                    {/*<DataListEntry >*/}
                    {/*  <dt className="font-medium text-gray-900 dark:text-bg-contrast">Sportág felelős</dt>*/}
                    {/*  <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">*/}
                    {/*    <ul>*/}
                    {/*      <li></li>*/}
                    {/*      <li></li>*/}
                    {/*      <li></li>*/}
                    {/*      <li></li>*/}
                    {/*    </ul>*/}
                    {/*  </dd>*/}
                    {/*</DataListEntry>*/}
                  </DataList>
                  <h3>Szabályok</h3>
                  <p>
                    A női és férfi versenyzők külön-külön versenyeznek és eredményeik a csapatpontszámba külön-külön
                    számítanak be. Egységes versenykiírás vonatkozik mindkét nemre.
                  </p>
                  <p>
                    A verseny sorsolása azonos a labdarúgáséval, lebonyolítása pedig a sportcsarnokban rendezett
                    sportágakéval.
                  </p>
                  <p>A versenyhez két tábla áll rendelkezésre, egy a férfiak, egy a nők részére. </p>
                  <p>
                    Női és férfi versenyzőnként egy meccs 12 sorozatnyi (1 sorozat 3 nyíl) dobásból áll. 301-ről kezdődő
                    sima kiszállóval történik a verseny. A győzelemhez egy nyert parti szükséges. Az adott partin belül
                    maximum (12) sorozat esetén az a győztes, aki közelebb áll a nullához. Amennyiben a kezdőjátékos
                    eléri a nullát, a második játékos még ledobja a saját körét és ez alapján állapítjuk meg a parti
                    eredményét. Pontegyenlőség esetén a már ledobott pontszámon kívül plusz egy dobás, aki nagyobbat
                    dob, az nyer.
                  </p>
                  <h3 className={`-mb-14 font-bold italic underline`}>Csoportbeosztás</h3>
                  <DataList>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">A csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>Szolnok</li>
                          <li>Pest</li>
                          <li>Főváros</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">B csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>Csongrád</li>
                          <li>Bács</li>
                          <li>Hajdú</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">C csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>KNYF</li>
                          <li>Békés</li>
                          <li>Borsod</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">D csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>LegfÜ</li>
                          <li>Szabolcs</li>
                          <li>Heves-Nógrád</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                  </DataList>
                  <h3>Darts, nők az 1. táblán, férfiak a 2. táblán</h3>
                  <h4>Csoportmérkőzések</h4>
                  <table>
                    <tbody>
                      <tr>
                        <td>A1-A2</td>
                        <td>B1-B3</td>
                      </tr>
                      <tr>
                        <td>C1-C2</td>
                        <td>D1-D3</td>
                      </tr>
                      <tr>
                        <td>B1-B2</td>
                        <td>A2-A3</td>
                      </tr>
                      <tr>
                        <td>D1-D2</td>
                        <td>C2-C3</td>
                      </tr>
                      <tr>
                        <td>A1-A3</td>
                        <td>B2-B3</td>
                      </tr>
                      <tr>
                        <td>C1-C3</td>
                        <td>D2-D3</td>
                      </tr>
                    </tbody>
                  </table>
                  <h4>Helyosztók</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>1. asztal</th>
                        <th>2. asztal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>A/3-B/3 (13. mérkőzés)</td>
                        <td> C/3-B/3 (14. m.)</td>
                      </tr>
                      <tr>
                        <td>A/2-B/2 (15. m.)</td>
                        <td>C/2-D/2 (16. m.)</td>
                      </tr>
                      <tr>
                        <td>A/1-B/1 (17. m.)</td>
                        <td>C/1-D/1 (18. m.)</td>
                      </tr>
                      <tr>
                        <td>13. m gy.-14. m. gy. (9. hely)</td>
                        <td>13. m v.-14. m. v. (11. hely)</td>
                      </tr>
                      <tr>
                        <td>15. m.gy – 16. m. gy. (5. hely)</td>
                        <td>15. m. v – 16. m. v. (7. hely)</td>
                      </tr>
                      <tr>
                        <td>17. m. gy – 18. m. gy. (1. hely)</td>
                        <td>17. m. v – 18. m. v. (3. hely)</td>
                      </tr>
                    </tbody>
                  </table>
                </EntryContent>
                {/*<Media src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhcGxtgUuI2lFLKzqZ8ibAPBoQ7uUtMSJNj01w'} alt={'Futás'} />*/}
              </Entry>
            </TabPanel>
            <TabPanel>
              <Entry>
                <EntryContent>
                  <Title id={`Labdarugas`}>Férfi labdarúgás</Title>
                  <DataList>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        Kórház utcai „Fű2” műfüves pálya [péntek-szombat], valamint a Gál Ferenc Egyetem műfüves pályája
                        [vasárnap]
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpontok</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ul>
                          <li>
                            <time dateTime={`2025-06-27T15:00`}>2025. június 27, péntek 15:00-18:00 óra</time>
                          </li>
                          <li>
                            <time dateTime={`2025-06-28T14:00`}>2025. június 28, szombat 14.00-18:00 óra</time>
                          </li>
                          <li>
                            <time dateTime={`2025-06-29T10:00`}>
                              2025. június 29, vasárnap éremosztó mérkőzések 10:00-11:00 óra
                            </time>
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
                  <h3>Fontosabb szabályok</h3>
                  <p>
                    A résztvevő csapatokat négy 3 csapatos csoportba sorsoljuk. A mérkőzések két pályán kerülnek
                    megrendezésre. A csoportmeccseken a győzelemért három pont jár, döntetlen esetén mindkét csapat
                    egy-egy pontot kap. A csoportok sorrendje a körmérkőzések után alakul ki.
                  </p>
                  <p>Pontazonosság esetén a csoportok sorrendjét az alábbiak szerint állapítjuk meg:</p>
                  <ol>
                    <li>Egymás elleni eredmény</li>
                    <li>Gólkülönbség</li>
                    <li>Rúgott gólok száma</li>
                    <li>Sorsolás</li>
                  </ol>
                  <p>
                    Mivel a nagyméretű műfüves pályán kerül kialakításra két kispálya, a vonalak részben bólyázással
                    lesznek kialakítva!
                  </p>
                  <p>
                    A játékosok csak terem- vagy salak/műfüves cipőt használhatnak. STOPLIS CIPŐ HASZNÁLATA TILOS! A
                    mérkőzések 2*12 percig tartanak, a csapatok 5 fő mezőnyjátékosból és 1 fő kapusból, továbbá
                    mérkőzésenként maximum 5 fő cserejátékosból állnak. A mérkőzésekről külön jegyzőkönyvek készülnek, a
                    csapatkapitány a kijelölt sportági felelősöknél előre le kell adja a mérkőzésre nevezett játékosok
                    nevét és mezszámát.
                  </p>
                  <h3>
                    A mérkőzések a kispályás labdarúgás szabályi szerint kerülnek megrendezésre az alábbiak szerint
                  </h3>
                  <ul>
                    <li>
                      a támadó csapat tagjáról az alapvonalon túlra került labdát a kapus kidobással vagy kirúgással,
                      akár a felezővonalon túlra is játékba hozhatja, de a játékba hozatalhoz a labda el kell, hogy
                      hagyja a büntető területet
                    </li>
                    <li>a játékban lévő labdával a kapus is érhet el gólt, akár kidobásból is</li>
                    <li>az oldalbedobást és hazaadást a kapus kézzel nem foghatja meg</li>
                    <li>
                      az oldalbedobást és <span className={`underline`}>hazaadást</span> a kapus kézzel nem foghatja meg
                    </li>
                    <li>
                      a védekező csapat tagjáról – beleértve a kapust is – az alapvonalon túlra került labda
                      szögletrúgással, míg az oldalvonalon túlra került labda bedobással és{' '}
                      <span className={`underline`}>berúgással</span> is játékba hozható
                    </li>
                    <li>
                      a kiállítás 2 perces, vagy végleges lehet, a 2 perces kiállítást követően akár a kiállított
                      játékos, vagy a csapat másik tagja is pályára léphet
                    </li>
                    <li>
                      végleges kiállítás esetén a kiállított játékos helyére 5 perc elteltével új játékos léphet pályára
                    </li>
                    <li>
                      <q>becsúszás</q> nem engedélyezett, ezt a játékvezető szabadrúgással bünteti
                    </li>
                    <li>
                      a csoportmérkőzéseket követően, az <q>egyenes</q> kieséses szakaszban döntetlen esetén 3-3
                      büntetőrúgás dönti el a mérkőzést, majd amennyiben továbbra is döntetlen, 1-1 rúgó, felváltva
                      következik, azzal, hogy a csapatok minden tagjának (ideértve a kapust is) büntetőjét követően
                      lőhet újra az, aki már korábban is szerepelt.
                    </li>
                  </ul>
                  <h3 className={`-mb-14 font-bold italic underline`}>Csoportbeosztás</h3>
                  <DataList>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">A csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>KNYF</li>
                          <li>Bács</li>
                          <li>LegfÜ</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">B csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>Borsod</li>
                          <li>Heves-Nógrád</li>
                          <li>Békés</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">C csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>Pest</li>
                          <li>Főváros</li>
                          <li>Szabolcs</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">D csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>Csongrád</li>
                          <li>Szolnok</li>
                          <li>Hajdú-Bihar</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                  </DataList>
                  <h3>Csoportmérkőzések [péntek]</h3>
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>1. pálya</th>
                        <th>2. pálya</th>
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
                  <h3>Play off kör [szombat]</h3>
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>1. pálya</th>
                        <th>2. pálya</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>14:30</td>
                        <td>A/1-B/2 (13. mérkőzés)</td>
                        <td>C/1-D/2 (14. m.)</td>
                      </tr>
                      <tr>
                        <td>15:00</td>
                        <td>B/1-A/2 (15. m.)</td>
                        <td>D/1-C/2 (16. m.)</td>
                      </tr>
                      <tr>
                        <td>15:30</td>
                        <td>A/3-B/3 (17. m.)</td>
                        <td>C/3-D/3 (18. m.)</td>
                      </tr>
                      <tr>
                        <td>16:00</td>
                        <td>13. m v-14. m. v. (19. m.)</td>
                        <td>15. m. v-16. m. v. (20. m.)</td>
                      </tr>
                      <tr>
                        <td>16:30</td>
                        <td>17. m. gy – 18. m. gy. (9. hely)</td>
                        <td>17. m. v – 18. m. v. (11. hely)</td>
                      </tr>
                      <tr>
                        <td>17:00</td>
                        <td>19. m. gy – 20. m. gy. (5. hely)</td>
                        <td>19. m. v – 20. m. v. (7. hely)</td>
                      </tr>
                    </tbody>
                  </table>
                  <h3>Elődöntők</h3>
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>1. pálya</th>
                        <th>2. pálya</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>17:30</td>
                        <td>13. m. gy. – 14. m. gy (ed.1).</td>
                        <td>15. m. gy.-16. m. gy. (ed. 2.)</td>
                      </tr>
                    </tbody>
                  </table>
                  <h3>Bronzmérkőzés és döntő [vasárnap], egyetemi pálya</h3>
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>10:00</td>
                        <td>ed. 1. v. – ed. 2. v. (bronzmérkőzés)</td>
                      </tr>
                      <tr>
                        <td>10:30</td>
                        <td>ed. 1. gy. – ed. 2. gy. (döntő)</td>
                      </tr>
                    </tbody>
                  </table>
                </EntryContent>
                {/*<Media*/}
                {/*  src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3Hhnt80K7x39ku0hCXvmi4dqO1zWpJr7IjeKGyH'}*/}
                {/*  alt={'Asztalitenisz'}*/}
                {/*/>*/}
              </Entry>
            </TabPanel>
            <TabPanel>
              <Entry>
                <EntryContent>
                  <Title id={`Ijaszat`}>Íjászat</Title>
                  <DataList>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        Egyetemi sportcsarnok mögötti tér
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpont</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <time dateTime={`2025-06-28T10:00:00`}>2025. június 28. szombat 10:00-12:00</time>
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
                    A női és férfi versenyzők külön-külön versenyeznek és eredményeik a csapatpontszámba külön-külön
                    számítanak be. Egységes versenykiírás vonatkozik mindkét nemre.
                  </p>
                  <p>
                    Lőtáv: 10 méter, céltábla átmérője: 80 cm.
                    <br />
                    A verseny 4 céltáblára zajlik, táblánként 1-1 vármegye versenyzői lőnek [a vármegyék
                    névsorrendjében]. A versenyzők ABC sorrendben 3 próbalövést, majd 3x3 sorozatot, összesen 9 éles
                    lövést tesznek.
                    <br />
                    A helyszínen avatott szakember irányítja a versenyt, aki a verseny megkezdése előtt részletes
                    ismertetőt tart.
                    <br />A sportszereket [tábla, íj, nyílvesszők] a rendező biztosítja.
                  </p>
                  <h3>Lövési sorrend</h3>
                  <ol>
                    <li>Bács</li>
                    <li>Békés</li>
                    <li>Borsod-Abaúj-Zemplén</li>
                    <li>Csongrád-Csanád</li>
                    <li>Főváros</li>
                    <li>Hajdú-Bihar</li>
                    <li>Heves-Nógrád</li>
                    <li>Jász-Nagykun-Szolnok</li>
                    <li>KNYF</li>
                    <li>Legfőbb Ügyészség</li>
                    <li>Pest</li>
                    <li>Szabolcs-Szatmár</li>
                  </ol>
                </EntryContent>
                {/*<Media src={'https://oeun8dfdch.ufs.sh/f/52daa2c7-ace9-478e-a9d0-09b09f11f48b-y6rnit.webp'} alt={'Súlylökés'} />*/}
              </Entry>
            </TabPanel>
            <TabPanel>
              <Entry>
                <EntryContent>
                  <Title id={`Sikfutas`}>Női és férfi síkfutás</Title>
                  <DataList>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        Tünde utcai atlétikai pálya
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpont</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <time dateTime={`2025-06-27T14:00`}>
                          2025. június 27. péntek 14:00-15:00 óra [női, majd férfi futamok]
                        </time>
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
                    A résztvevő női és férfi versenyzők 400 méteres rekortán atlétika pályán futnak, egyaránt 400
                    méteres távon.
                  </p>
                  <p>
                    Először a női, majd a férfi verseny zajlik, 3-3 futamban. A futamokban egyszerre 4-4 csapat
                    képviselői indulnak, a női és férfi futambeosztások azonosak.
                  </p>
                  <p>A futamokba a vármegyék ABC sorrendben kapnak besorolást.</p>
                  <p>Szöges cipő használata nem engedélyezett.</p>
                  <DataList>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Első futam</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>Bács</li>
                          <li>Békés</li>
                          <li>Borsod-Abaúj</li>
                          <li>Csongrád-Csanád</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Második futam</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>Főváros</li>
                          <li>Hajdú-Bihar</li>
                          <li>Heves-Nógrád</li>
                          <li>Jász-Nagykun-Szolnok</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Harmadik futam</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>KNYF</li>
                          <li>Legfőbb Ügyészség</li>
                          <li>Pest</li>
                          <li>Szabolcs-Szatmár</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                  </DataList>
                </EntryContent>
                {/*<Media src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3Hhp8qiLl6ZOr8hQaE9YlIB5Smef7sCcdvHyjMJ'} alt={'Darts'} />*/}
              </Entry>
            </TabPanel>
            <TabPanel>
              <Entry>
                <EntryContent>
                  <Title id={`Sulylokes`}>Női és férfi súlylökés</Title>
                  <DataList>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        Tünde utcai atlétikai pálya
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpont</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <time dateTime={`2025-06-27T14:00`}>
                          2025. június 27. péntek 14.00-15:00 óra [női, majd férfi verseny]
                        </time>
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
                    A résztvevők a nevezett csapatok ABC sorrendjében dobnak, egy próbadobás, majd három mért kísérlet
                    következik. A nőknél 3 kg-os, a férfiaknál 5 kg-os súlygolyóval történik a dobás.
                  </p>
                  <p>
                    A végeredményt a három mért dobás közül a legjobb adja, egyenlőség esetén sorrendben a legjobb
                    második, majd a legjobb harmadik dobás alakítja ki.
                  </p>
                  <h3>A dobások sorrendje</h3>
                  <ol>
                    <li>Bács</li>
                    <li>Békés</li>
                    <li>Borsod-Abaúj-Zemplén</li>
                    <li>Csongrád-Csanád</li>
                    <li>Főváros</li>
                    <li>Hajdú-Bihar</li>
                    <li>Heves-Nógrád</li>
                    <li>Jász-Nagykun-Szolnok</li>
                    <li>KNYF</li>
                    <li>Legfőbb Ügyészség</li>
                    <li>Pest</li>
                    <li>Szabolcs-Szatmár</li>
                  </ol>
                </EntryContent>
                {/*<Media*/}
                {/*  src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhnPcT3Vx39ku0hCXvmi4dqO1zWpJr7IjeKGyH'}*/}
                {/*  alt={'Kosárlabda'}*/}
                {/*/>*/}
              </Entry>
            </TabPanel>
            <TabPanel>
              <Entry>
                <EntryContent>
                  <Title id={`Kosarlabda`}>Női Kosárlabda</Title>
                  <DataList>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
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
                            <time dateTime={`2025-06-28T11:00`}>
                              2025. június 28. szombat 11:00-12:00 és 14:30-kb. 16:00
                            </time>
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
                    A verseny lebonyolítása a labdarúgással azonos csoport sorsolás alapján történik, de a helyosztók
                    során a csoportok 1-2. helyezettjei részére keresztbe játszás nincs. A csoportokban azonos helyezést
                    elért csapatok játszanak az 1-4, 5-8, illetve 9-12. helyekért. A játékidő 10 perc vagy 15 pont.
                    Döntetlen esetén 2 perc hosszabbítás következik.
                  </p>
                  <p>
                    A 6,75 méter körön belüli kosár 2 pont, a 6,75 méteren kívüli kosár 3 pontot ér, míg a büntető dobás
                    1 pontot ér.
                  </p>
                  <p>A csapatok létszáma 3 fő + legfeljebb 3 fő cserejátékos.</p>
                  <p>
                    A játékosoknál nincs kipontozódás, kivéve, ha sportszerűtlen játék miatt kiállítják. 6
                    csapatszemélyi után van 1 büntetődobás, 2 pontos dobáskísérlet közben elkövetett szabálytalanság
                    esetén 2, míg 3 pontos dobáskísérlet esetén 3 büntetődobás jár.
                  </p>
                  <p>
                    A kosarat kapó csapat támadása úgy történik, hogy a labdát a 6,75 méteres félköríven kívülre kell
                    juttatni.
                  </p>
                  <p>
                    Passzív játék esetén a játékvezető figyelmezteti a csapatot és hangosan számol vissza 5
                    másodpercről, mely idő alatt kosárra kell dobni vagy a játékvezető elveszi a labdát passzív játék
                    miatt.
                  </p>
                  <h3 className={`-mb-14 font-bold`}>Csoportbeosztás</h3>
                  <DataList>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">A csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>Hajdú</li>
                          <li>Szabolcs</li>
                          <li>Szolnok</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">B csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>Bács</li>
                          <li>Heves-Nógrád</li>
                          <li>Békés</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">C csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>Csongrád</li>
                          <li>LegfÜ</li>
                          <li>KNYF</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">D csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>Főváros</li>
                          <li>Borsod</li>
                          <li>Pest</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                  </DataList>
                  <h3>Csoportmérkőzések [péntek]</h3>
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>1. pálya</th>
                        <th>2. pálya</th>
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
                        <th>1. pálya</th>
                        <th>2. pálya</th>
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
                <Media
                  src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhnPcT3Vx39ku0hCXvmi4dqO1zWpJr7IjeKGyH'}
                  alt={'Kosárlabda'}
                />
              </Entry>
            </TabPanel>
            <TabPanel>
              <Entry>
                <EntryContent>
                  <Title id={`Tollaslabda`}>Tollaslabda vegyespáros</Title>
                  <DataList>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
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
                            <time dateTime={`2025-06-28T11:00`}>
                              2025. június 28. szombat 11:00-12:00 és 14:30-kb. 16:00
                            </time>
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
                    A két fős csapatokat egy-egy női és férfi versenyző alkotja [szükség esetén két nő is alkothat egy
                    csapatot]. A mérkőzést egy nyert szettig, 21 nyert pontig játsszák. Ha a pontállás 20-20, a 22.
                    pontot szerző oldal nyeri a játszmát, azaz a végeredmény ekkor 22-20 vagy 22-21 lehet. Második
                    adogatás nincs, első labdavesztés után az adogatás joga a másik csapathoz kerül át. A labdamenetet
                    nyerő oldal minden esetben eggyel növeli pontjai számát. A 11. nyert pontot térfélcsere követi.
                  </p>
                  <p>
                    Az adogató oldal játékosa a jobboldali adogató térből adogat, ha az adogató oldalnak nulla, vagy
                    páros számú pontja van az adott játszmában. Az adogató oldal játékosa a bal adogató térből adogat,
                    ha az adogató oldalnak páratlan számú pontja van az adott játszmában. A játékostársakra a fordított
                    séma vonatkozik. A fogadó oldal azon játékosa, aki utoljára adogatott, ugyanabban az adogató térben
                    áll, ahonnan utoljára adogatott, játékostársa pedig a másik adogató térben. A fogadó oldalnak az a
                    játékosa lesz a fogadó, aki az adogatóval átlósan szemben lévő adogató térben áll. A játékosok csak
                    akkor cserélnek adogató teret, amikor adogatóként nyernek pontot. Az adogatást az adogató oldal
                    pontszámának megfelelő adogató térből kell elvégezni.
                  </p>
                  <p>
                    A szerva akkor szabályos, ha a labdát a játékos a csípővonal alól fonákkal, vagy tenyeressel,
                    alulról megütve hozza játékba, és a labda az adogatás térfeléről indulva átlósan, keresztbe a fogadó
                    udvarba érkezik. A játék során már a teljes pályaterület, tehát az adogató és a fogadó udvarok
                    közötti sávok is érvényes területnek számítanak. A felfestett vonalak a pálya részét képezik, tehát
                    a vonalat akár kívülről érintő labda érvényes ütésnek minősül. Ha az adogató nyeri a labdamenetet,
                    pontot ér el, és ismét adogat a másik adogató térből. Ha a fogadó nyeri a labdamenetet, pontot ér
                    el, és a következő adogatást ő végzi el nulla vagy páros pont esetén a jobb oldali, páratlan pont
                    esetén a bal oldali adogató térből. A játék közben a háló sem testtel, sem ütővel nem érinthető, a
                    labdát csak a saját térfélen lehet megütni, de az ütés után az ütő – lendületénél fogva – átnyúlhat
                    a másik térfélre, a háló azonban ilyenkor sem érinthető.
                  </p>
                  <h3 className={`-mb-14 font-bold`}>Csoportbeosztás</h3>
                  <DataList>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">A csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>KNYF</li>
                          <li>Szabolcs</li>
                          <li>Hajdú-Bihar</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">B csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>Borsod</li>
                          <li>Bács</li>
                          <li>Csongrád</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">C csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>Pest</li>
                          <li>LegfÜ</li>
                          <li>Heves-Nógrád</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-bold text-gray-900 dark:text-bg-contrast">D csoport</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li>Főváros</li>
                          <li>Békés</li>
                          <li>Szolnok</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                  </DataList>
                  <h3>Csoportmérkőzések [péntek]</h3>
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>1. pálya</th>
                        <th>2. pálya</th>
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
                        <th>1. pálya</th>
                        <th>2. pálya</th>
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
                {/*  src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhnPcT3Vx39ku0hCXvmi4dqO1zWpJr7IjeKGyH'}*/}
                {/*  alt={'Kosárlabda'}*/}
                {/*/>*/}
              </Entry>
            </TabPanel>
            <TabPanel>
              <Entry>
                <EntryContent>
                  <Title id={`Uszas`}>Úszás</Title>
                  <DataList>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Helyszín</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        Árpád Fürdő [50 méteres versenymedence] – öltöző biztosított.
                      </dd>
                    </DataListEntry>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Időpont</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <time dateTime={`2025-06-28T09:00`}>2025. június 28. szombat 09:00-10:00.</time>{' '}
                        <strong>Verseny kezdete 09.30.</strong>
                      </dd>
                    </DataListEntry>
                    {/*<DataListEntry>*/}
                    {/*  <dt className="font-medium text-gray-900 dark:text-bg-contrast">Sportág felelős</dt>*/}
                    {/*  <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">*/}
                    {/*    <ul>*/}
                    {/*      <li></li>*/}
                    {/*      <li></li>*/}
                    {/*      <li></li>*/}
                    {/*      <li></li>*/}
                    {/*    </ul>*/}
                    {/*  </dd>*/}
                    {/*</DataListEntry>*/}
                  </DataList>
                  <h3>Szabályok</h3>
                  <p>
                    <strong>A versenyzők számára úszósapka használata kötelező!</strong>
                  </p>
                  <p>A csapatok ABC sorrendben – futamonként 4 csapat – teljesítik a távot.</p>
                  <p>
                    A teljesítendő táv csapatonként mellúszásban 4 &times; 50 méter, azaz csapattagonként 1 hossz, amely
                    a faltól indulással és a fal érintésével számít teljesítettnek.
                  </p>
                  <p>
                    Az indulás a vízből, a medence falától való elrugaszkodással történik, a falat kézzel meg kell
                    érinteni, majd ezt követően történhet a váltás, amelyek sorrendjét a csapatok döntik el.{' '}
                    <strong>A falat váltáskor a beérkező versenyzőnek a vízfelszín felett kell megérinteni!</strong>
                  </p>
                  <p>
                    A végső sorrendet az elért időeredmények határozzák meg, tehát a versenyzők által leúszott
                    időeredmények összegzését követően a legjobb időt úszó csapat a nyertes.
                  </p>
                  <p>
                    Megyénként 4 fő indul, a férfiak-nők aránya 2-2. Egy versenyző csak egy hosszt úszhat,{' '}
                    <q>duplázás</q> nem engedélyezett!
                  </p>
                  <p>
                    Az első versenyző sípszóra indul. Rajtot követően a versenyző csak a sávelválasztón lévő 5 méteres
                    jelzésig úszhat víz alatt. Annak a csapattagnak, aki leúszta saját távját, a többi versenyző
                    zavarása nélkül ki kell szállnia a medencéből.
                  </p>
                  <p>
                    <strong>
                      A verseny startjánál egy „kiugrás” esetén figyelmeztetés következik, a második kiugrás a csapat
                      kizárásával jár!
                    </strong>
                  </p>
                  <h3>Fontos!</h3>
                  <p>
                    Az uszodában a bemelegítésre, valamint a verseny lebonyolítására 4 úszósáv áll rendelkezésünkre. A
                    versenyzőkön, és a szervezőkön kívül a sporttalálkozóról nézők [szurkolók] korlátozott számban, és
                    csak előzetes névlista leadásával, csoportos jeggyel – azaz egyszerre - mehetnek be az uszodába. Az
                    uszodát a versenyszám lebonyolítását követően el kell hagynunk, ezért aki a versenyt követően az
                    Árpád fürdő szolgáltatásait igénybe akarja venni, csak normál belépő megvásárlásával teheti ezt meg.
                    A fenti szabályok miatt a versenyzők és szurkolók megértését kérik a szervezők!
                  </p>
                  <h3 className={`-mb-14 font-bold`}>Csoportbeosztás</h3>
                  <DataList>
                    <DataListEntry>
                      <dt className="font-medium text-gray-900 dark:text-bg-contrast">Első futam</dt>
                      <dd className="mt-2 text-sm text-gray-500 dark:text-bg-contrast/80">
                        <ol>
                          <li className={``}>Bács</li>
                          <li className={``}>Békés</li>
                          <li className={``}>Borsod-Abaúj-Zemplén</li>
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
                          <li className={``}>Szabolcs-Szatmár</li>
                        </ol>
                      </dd>
                    </DataListEntry>
                  </DataList>
                </EntryContent>
                <Media
                  src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhSpyW3BG09GWq6DTeZPYVX2ymvS5pouUljONQ'}
                  alt={'Úszás'}
                />
              </Entry>
            </TabPanel>
          </TabPanels>
        </TabGroup>
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
    </>
  );
}
