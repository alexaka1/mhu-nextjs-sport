import { Metadata } from 'next';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainSun } from '@fortawesome/free-solid-svg-icons/faMountainSun';

export const metadata: Metadata = {
  title: 'Szállás',
};

// const features = [
//   { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
//   { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
//   { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
//   { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
//   { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
//   { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
// ];

export default function Lodging() {
  return (
    <main className="bg-white dark:bg-gray-800">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 [&>div:first-of-type]:even:lg:order-last">
        <div className={`prose`}>
          <Link className={``} href={`https://sandraifjusagiszallo.hu/`} target={'_blank'} prefetch={false}>
            <h2 className="text-3xl font-bold tracking-tight underline decoration-primary decoration-2 transition-colors duration-200 text-gray-900 hover:text-primary-600 sm:text-4xl dark:decoration-primary-400 dark:text-bg-contrast dark:hover:text-primary-400/75">
              Sandra Hotel
            </h2>
          </Link>
          <p className="hyphens-auto text-balance text-gray-600 dark:text-bg-contrast">
            Magyarország Észak – Keleti részén, Szabolcs megye központjában Nyíregyházán a Sóstói u 31/B. alatt
            található. A szálló közvetlenül a Nyíregyházi Egyetem területén található de közvetlen szomszédja a Városi
            stadionnak és a lőtérnek is.
          </p>
          <div className={``}>
            <iframe
              className={`min-h-96 w-full border-0`}
              loading="lazy"
              allowFullScreen={true}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJSeMFrnefOEcRfHvxkjnMl70&key=AIzaSyDUNPmeSfczknA0DtaSmUQS8RPugT_NCrU"
            ></iframe>
          </div>
          {/*<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">*/}
          {/*  {features.map((feature) => (*/}
          {/*    <div key={feature.name} className="border-t pt-4 border-gray-200">*/}
          {/*      <dt className="font-medium text-gray-900">{feature.name}</dt>*/}
          {/*      <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</dl>*/}
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <FontAwesomeIcon icon={faMountainSun} className={`size-20 rounded-lg bg-gray-100`} title={`Kép helye`} />
          <FontAwesomeIcon icon={faMountainSun} className={`size-20 rounded-lg bg-gray-100`} title={`Kép helye`} />
          <FontAwesomeIcon icon={faMountainSun} className={`size-20 rounded-lg bg-gray-100`} title={`Kép helye`} />
          <FontAwesomeIcon icon={faMountainSun} className={`size-20 rounded-lg bg-gray-100`} title={`Kép helye`} />
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 [&>div:first-of-type]:even:lg:order-last">
        <div className={`prose`}>
          <Link className={``} href={`https://bessenyeihotel.hu/`} target={'_blank'} prefetch={false}>
            <h2 className="text-3xl font-bold tracking-tight underline decoration-primary decoration-2 transition-colors duration-200 text-gray-900 hover:text-primary-600 sm:text-4xl dark:decoration-primary-400 dark:text-bg-contrast dark:hover:text-primary-400/75">
              Hotel Bessenyei
            </h2>
          </Link>
          <p className="hyphens-auto text-balance text-gray-600 dark:text-bg-contrast">
            A környék látványosságai percek alatt elérhetőek. Nyíregyháza hangulatos belvárosával, szellemi életével,
            történelmi emlékeivel, kiránduló- és üdülőövezetével, és az utóbbi évek dinamikus és látványos fejlődésével
            nagy népszerűségnek örvend az idelátogató turisták, vendégek körében. A város és Sóstógyógyfürdő között
            elhelyezkedő Sóstói erdő sokféle lehetőséget kínál a kikapcsolódásra fiataloknak és időseknek egyaránt,
            ezért az itt élők méltán nevezik a város &quot;gyöngyszemének, ékességének&quot;.
          </p>
          <div>
            <iframe
              className={`min-h-96 w-full border-0`}
              loading="lazy"
              allowFullScreen={true}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJSeMFrnefOEcRTc8ve48eU88&key=AIzaSyDUNPmeSfczknA0DtaSmUQS8RPugT_NCrU"
            ></iframe>
          </div>
          {/*<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">*/}
          {/*  {features.map((feature) => (*/}
          {/*    <div key={feature.name} className="border-t pt-4 border-gray-200">*/}
          {/*      <dt className="font-medium text-gray-900">{feature.name}</dt>*/}
          {/*      <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</dl>*/}
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <FontAwesomeIcon icon={faMountainSun} className={`size-20 rounded-lg bg-gray-100`} title={`Kép helye`} />
          <FontAwesomeIcon icon={faMountainSun} className={`size-20 rounded-lg bg-gray-100`} title={`Kép helye`} />
          <FontAwesomeIcon icon={faMountainSun} className={`size-20 rounded-lg bg-gray-100`} title={`Kép helye`} />
          <FontAwesomeIcon icon={faMountainSun} className={`size-20 rounded-lg bg-gray-100`} title={`Kép helye`} />
        </div>
      </div>
    </main>
  );
}
