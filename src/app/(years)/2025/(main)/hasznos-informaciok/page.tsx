import type { Metadata } from 'next';
import { Entry, EntryContent, Title } from '@/app/ui/text-content';
import ZoomWrapper from '@/app/ui/zoom-wrapper';
import Image from 'next/image';

export const metadata = {
  title: 'Hasznos tudnivalók',
} as const satisfies Metadata;

export default function Page() {
  return (
    <main className="mx-auto flex flex-col gap-8 p-4 bg-white [counter-reset:h2-counter] dark:bg-gray-800">
      <h1 className="sr-only">{metadata.title}</h1>
      <Entry>
        <EntryContent>
          <Title id={`Asporttalálkozómegközelítése`}>
            <span data-counter>A sporttalálkozó megközelítése</span>
          </Title>
          <p>
            Békéscsabát Budapest felől az M44-es gyorsforgalmi autóúton lehet legkényelmesebben megközelíteni. A város
            észak, illetve dél felől a 47-es főúton érhető el.
          </p>
          <p>
            A sporttalálkozó fő helyszíne [szállás és teremsportok] a Gál Ferenc Egyetem kampusza:{' '}
            <a
              href={`https://maps.app.goo.gl/a9F6sxMzXn6JJNVE6`}
              target={`_blank`}
              rel={`nofollow`}
              className={`inline-block max-w-full text-balance`}
            >
              Békéscsaba, Bajza utca 33. szám
            </a>
            . Megközelítése: a Bajza utcáról lekanyarodva, az egyetem főépülete mögötti úton végig haladva lehetséges.
            Az út végén jobbról található az Alma Mater Hostel, a bejelentkezés helyszíne.
          </p>
          <Title id={`Helyszínek`}>
            <span data-counter>Helyszínek</span>
          </Title>
          <p>
            A csapatok szállása az egyetem Alma Mater Hostelében [Bajza utca 33. szám], illetve a szomszédos
            Szent-Györgyi Albert Technikum kollégiumában [Gyulai út 53. szám] lesz. Az ünnepélyes megnyitóra és a
            záróünnepségre is itt, a belső udvaron kerül sor.
          </p>
          <p>
            Étkezés, főügyészi verseny és esti bulik helyszíne a Csaba Park Pálinkamúzeum [Gyulai út 61/2. szám], ami a
            szállástól a belső udvaron át megközelíthető pár perces sétával. A tájékozódást eligazító táblák segítik
            majd.
          </p>
          <p>
            Az atlétika versenyek – síkfutás és súlylökés - helyszíne a Békéscsabai Atlétika Club Tünde utca
            sportpályája [Tünde utca – Vandháti út sarok], a szállásoktól kb. 10-12 perc séta, a „körgáton” keresztül. A
            tájékozódást eligazító táblák segítik majd.
          </p>
          <p>
            Labdarúgás: a Békéscsaba 1912 Előre Sporttelepén, a „Fű 2” műfüves pályán [Kórház utca 6. szám], az atlétika
            pályától 2 perc séta. A tájékozódást eligazító táblák segítik majd. A pálya mellett büfé üzemel majd, és itt
            lesz az egészségügyi ügyelet központja is.
          </p>
          <p>Asztalitenisz, kosárlabda, tollaslabda helyszíne a szállás mellett található egyetemi sportcsarnok.</p>
          <p>Az íjászat az egyetemi sportcsarnok mögötti füves térségen lesz.</p>
          <p>Darts és csocsó a Csaba Parkban, az esti bulihelyszín melletti Kolbászmúzeumban.</p>
          <p>
            Úszás az Árpád Gyógy- és Strandfürdőben [Árpád sor 3.], a szállástól kb. 20 perc gyalog. Bejárat az Árpád
            sori nyári főbejáratnál. A fürdőbe kizárólag az úszócsapatok tagjai léphetnek be díjmentesen, a neveket
            előre le kell adni!
          </p>
          <h3>Helyszínek térképen</h3>
          <p>
            <ZoomWrapper>
              <Image
                id={`map`}
                alt={`Térkép`}
                src={`https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhUPlXIKvLyBPcCq6vgGKUhVzHIwY3efJRk9da`}
                width={600}
                height={1000}
                quality={100}
                priority={true}
                unoptimized
                className={`size-auto`}
                aria-labelledby={`map-list`}
              />
            </ZoomWrapper>
            <ol id={`map-list`} className={`list-inside list-decimal`}>
              <li>
                SZEGYA Kollégium és Alma Mater Hostel
                <ul>
                  <li>szállások, VIP terem, versenyközpont</li>
                </ul>
              </li>
              <li>
                Egyetemi sportcsarnok és műfüves pálya
                <ul>
                  <li>
                    megnyitó, kosárlabda, tollaslabda, asztalitenisz, íjászat, labdarúgás (vasárnap), záróünnepség
                  </li>
                </ul>
              </li>
              <li>
                Csaba Park
                <ul>
                  <li>étkezések, darts, csocsó, főügyészi megmérettetés, esti rendezvények</li>
                </ul>
              </li>
              <li>
                Kórház utcai <q>Fű2</q> műfüves pálya
                <ul>
                  <li>labdarúgás (péntek, szombat)</li>
                </ul>
              </li>
              <li>
                Tünde utcai atlétikai pálya
                <ul>
                  <li>síkfutás, súlylökés</li>
                </ul>
              </li>
              <li>
                Árpád Fürdő
                <ul>
                  <li>úszás</li>
                </ul>
              </li>
            </ol>
            <p>
              A piros szaggatott vonal{' '}
              <span className={`tracking-[0.5em]`} aria-hidden={true}>
                (<span className={`font-bold text-red-700 dark:text-red-400`}>---</span>)
              </span>
              jelzi a sportpályák (<span className={`font-bold text-red-700 dark:text-red-400`}>4, 5</span>) leggyorsabb
              gyalogos megközelítését a Körgáton
            </p>
          </p>
          <Title id={`Asporttalálkozóidőbeosztása`}>
            <span data-counter>A sporttalálkozó időbeosztása</span>
          </Title>
          <h3 className={`underline`}>2025. június 27., péntek</h3>
          <p>
            <span className={`font-bold`}>11:00 Érkezés, szállás elfoglalása.</span> Az Alma Mater Hostel aulájában a
            csapatfelelősök fogadják a résztvevőket. A csapatok sportfelelőseinek fogjuk átadni az étkezési jegyeket,
            valamint a karszalagokat is, amely nélkül nem lehet bejutni a kollégiumba, illetve az étkezés és az esti
            rendezvényekre. A szobabeosztást és kulcsokat érkezéskor átadjuk.{' '}
          </p>
          <strong className={`font-bold`}>
            Figyelem! Kérjük, mindenki vigyázzon az átvett elektronikus kulcskártyákra, mert azokat – elvesztésük,
            sérülésük esetén - ki kell fizetni!
          </strong>
          <p>
            <span className={'font-bold'}>12:00 Technikai értekezlet</span> a sportfelelősöknek az Alma Mater Hostel
            földszinti sportközpontjában.
          </p>
          <p>
            <span className={`font-bold`}>14:00 Ünnepélyes megnyitó</span>, Gál Ferenc Egyetem műfüves pályája
          </p>
          <p className={`font-bold`}>Sportversenyek 15:00 – 18:30, majd 20:30 órától</p>
          <p>Kezdési időpontok:</p>
          <ul>
            <li>15:00: síkfutás, atlétika pálya</li>
            <li>15:15: súlylökés, atlétika pálya</li>
            <li>16:00: labdarúgás, labdarúgó pályák</li>
            <li>16:00: asztalitenisz, kosárlabda, tollaslabda, sportcsarnok</li>
            <li>20:30: főügyészi táncbemutató, Pálinkamúzeum</li>
            <li>21.00: darts, Kolbászmúzeum</li>
          </ul>
          <h3 className={`underline`}>2025. június 28., szombat</h3>
          <p>
            10:00 – 12:00 óra között VIP vendégek számára: idegenvezetéses séta a Munkácsy negyedben. [Kizárólag a
            meghívott vendégek számára szervezett, zártkörű program!]
          </p>
          <p className={`font-bold`}>Sportversenyek 09:00 – 12:00, 14:00 – 18:00, majd 20:00 órától</p>
          <p className={`font-bold`}>Kezdési időpontok:</p>
          <ul>
            <li>09:00: úszás, Árpád fürdő</li>
            <li>10:00: íjászat, sportcsarnok mögötti füves tér</li>
            <li>11:00: asztalitenisz, kosárlabda, tollaslabda, sportcsarnok</li>
            <li>14:00: labdarúgás, labdarúgó pályák</li>
            <li>14:30: asztalitenisz, kosárlabda, tollaslabda, sportcsarnok</li>
            <li>20:00: csocsó, Kolbászmúzeum</li>
          </ul>
          <h3 className={`font-bold`}>2025. június 29., vasárnap</h3>
          <p className={`font-bold`}>Sportversenyek 10:00 órától</p>
          <p className={`font-bold`}>Kezdési időpontok:</p>
          <ul>
            <li>10:00: labdarúgás bronzmérkőzés, majd döntő, egyetemi sportcsarnok mögötti műfüves pálya</li>
            <li>11:00: eredményhirdetés, záróünnepség ugyanott</li>
          </ul>
          <Title id={`Vármegyefelelősökéssportágifelelősök`}>
            <span data-counter>Vármegye felelősök és sportági felelősök</span>
          </Title>
          <p>A vármegyék csapatainak a rendezők egy kontaktszemélyt biztosítanak a sporttalálkozó idejére.</p>
          <p>
            A vármegye felelősök várják a csapatokat pénteken, a szállás elfoglalásához, elvezetik őket a részükre
            biztosított szobákhoz. Ha bármilyen gond, kérdés merül fel, a megadott elérhetőségen keresztül lehet a
            felelőst keresni, aki segíteni fog a problémát megoldani, vagy a kérdést megválaszolni.
          </p>
          <table>
            <thead>
              <tr>
                <th>Csapat neve</th>
                <th>Felelős neve</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bács-Kiskun</td>
                <td>dr. Kovács-Kulcsár Emese</td>
              </tr>
              <tr>
                <td>Borsod-Abaúj-Zemplén</td>
                <td>Gajdáné dr. Fehér Ildikó</td>
              </tr>
              <tr>
                <td>Csongrád-Csanád</td>
                <td>dr. Kismarton Annamária</td>
              </tr>
              <tr>
                <td>Főváros</td>
                <td>dr. Szelezsán Annamária</td>
              </tr>
              <tr>
                <td>Hajdú-Bihar</td>
                <td>dr. Molnár Edina</td>
              </tr>
              <tr>
                <td>Heves-Nógrád</td>
                <td>Gyüre Tibor</td>
              </tr>
              <tr>
                <td>Jász-Nagykun-Szolnok</td>
                <td>dr. Futó Sándor</td>
              </tr>
              <tr>
                <td>KNYF</td>
                <td>dr. Rozgonyi-Szabó Éva</td>
              </tr>
              <tr>
                <td>Legfőbb Ügyészség</td>
                <td>Havasiné dr. Varga Anikó</td>
              </tr>
              <tr>
                <td>Pest</td>
                <td>dr. Pap Tamás</td>
              </tr>
              <tr>
                <td>Szabolcs</td>
                <td>Gróh Tibor</td>
              </tr>
            </tbody>
          </table>
          <p>
            A versenyhelyszíneken, a rendezők mellett, jelen lesznek az adott sportágért felelős munkatársaink. Az ő
            feladatuk lesz - adott sportágban a játékvezetőkkel együttműködve - a vitás esetek eldöntése.
          </p>
          <table>
            <thead>
              <tr>
                <th>Csapat neve</th>
                <th>Felelős neve</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>asztalitenisz</td>
                <td>Bónusné dr. Lehoczki Anett</td>
              </tr>
              <tr>
                <td>csocsó</td>
                <td>dr. Kismarton Annamária</td>
              </tr>
              <tr>
                <td>darts</td>
                <td>dr. Herédi Kitti</td>
              </tr>
              <tr>
                <td>íjászat</td>
                <td>dr. Pap Tamás</td>
              </tr>
              <tr>
                <td>kosárlabda</td>
                <td>dr. Molnár Edina</td>
              </tr>
              <tr>
                <td>labdarúgás</td>
                <td>dr. Képiró Tibor</td>
              </tr>
              <tr>
                <td>síkfutás</td>
                <td>Havasiné dr. Varga Anikó</td>
              </tr>
              <tr>
                <td>súlylökés</td>
                <td>Gyüre Tibor</td>
              </tr>
              <tr>
                <td>tollaslabda</td>
                <td>Juhosné dr. Pleskó Ágnes</td>
              </tr>
              <tr>
                <td>úszás</td>
                <td>Havasiné dr. Varga Anikó</td>
              </tr>
            </tbody>
          </table>
          <Title id={`Étkezésselkapcsolatosinformációk`}>
            <span data-counter>Étkezéssel kapcsolatos információk</span>
          </Title>
          <p>
            Minden étkezés a szállással szomszédos telken található Csaba Park Rendezvényhelyszín területén található
            Pálinkaházban lesz, ahová az étkezések idején{' '}
            <span className={`inline-block max-w-full text-balance underline`}>karszalaggal és étkezési jeggyel</span>{' '}
            rendelkező személyek mehetnek be.
          </p>
          <table>
            <thead>
              <tr>
                <th colSpan={2}>Péntek:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>vacsora</td>
                <td>18:30-20:00 óra között</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th colSpan={2}>Szombat:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reggeli</td>
                <td>07:00-09:00 óra között</td>
              </tr>
              <tr>
                <td>Ebéd</td>
                <td>12:00-14:00 óra között</td>
              </tr>
              <tr>
                <td>Vacsora</td>
                <td>18:00-19:30 óra között</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th colSpan={2}>Vasárnap:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reggeli</td>
                <td>07:00-09:00 óra között</td>
              </tr>
              <tr>
                <td>Ebéd</td>
                <td>12:00-14:00 óra között</td>
              </tr>
            </tbody>
          </table>

          <table>
            <caption>A menütervezet</caption>
            <thead>
              <tr>
                <th colSpan={2}>Péntek, 2025.06.27.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>vacsora</td>
                <td>pankómorzsás rántott csirkemell, rizi-bizi</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th colSpan={2}>Szombat, 2025.06.28.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reggeli</td> <td>zsemle, szalámi, felvágott, mini vaj, paradicsom, paprika, tea</td>
              </tr>
              <tr>
                <td>Ebéd</td>
                <td>
                  csontleves gazdagon csigatésztával; sajttal-sonkával töltött rántott sertésszelet steak burgonyával
                </td>
              </tr>
              <tr>
                <td>Vacsora</td>
                <td>gödöllői töltött csirkecomb, burgonyapüré</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th colSpan={2}>Vasárnap, 2025.06.29.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reggeli</td>
                <td>füstölt csabai kolbász, vaj, szeletelt sonka, tea</td>
              </tr>
              <tr>
                <td>Ebéd</td>
                <td>húsleves gazdagon csigatésztával; cigánypecsenye szalonna taréjjal, hagymás tört burgonya</td>
              </tr>
            </tbody>
          </table>
          <p>
            A különleges igényű étrendet [vega, gluténmentes, stb.] a kitöltött igénybejelentő táblázat alapján
            biztosítjuk!
          </p>
          <Title id={`Estiprogramokvendéglátás`}>
            <span data-counter>Esti programok, vendéglátás</span>
          </Title>
          <p>
            Az esti programok helyszíne a Csaba Park Pálinkamúzeuma, a szállástól könnyed sétával megközelíthető. Az
            utcára sem kell kimenni, mert a 2 szomszédos telek közötti kerítést a rendezők a sporttalálkozó idejére
            kinyitják, és a közvilágítást is megoldják.
          </p>
          <p>
            Pénteken az esti program a főügyészek táncbemutatójával indul, 20.30 órától. Előtte a helyszínt át kell
            rendezni, ezért a vacsora 20.00 óráig vehető igénybe. 21.00 órától DISCO ugyanott, míg a mellette lévő
            épületben, a Kolbászmúzeumban kerül sor a darts verseny lebonyolítására. A buli helyszínén – jó idő esetén –
            kiülős terasz is lesz.
          </p>
          <p>Szombat este 21.00 órától ismét DISCO, vele párhuzamosan, a darts helyszínén kerül sor a csocsótornára.</p>
          <p>
            A buli helyszínén büfé üzemel majd, valamint ugyancsak lesz kitelepült büfé a labdarúgó torna helyszínén, a
            Kórház utcában. Az Alma Mater Hostel aulájában italautomata működik.
          </p>
          <Title id={`Egészségügyibiztosítás`}>
            <span data-counter>Egészségügyi biztosítás</span>
          </Title>
          <p>A sportrendezvények idején gyalogos járőrös egészségügyi biztosítás lesz a helyszíneken.</p>
          <p>Az egészségügyi biztosítás kontaktja: Varga Adrián.</p>
        </EntryContent>
      </Entry>
    </main>
  );
}
