import { type Metadata } from 'next';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainSun } from '@fortawesome/free-solid-svg-icons/faMountainSun';
import GoogleMapsEmbedded from '@/app/ui/google-maps-embed';

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
      <h1 className="sr-only">Szállás</h1>
      <div className="mx-auto grid max-w-2xl grid-cols-[repeat(auto-fit,minmax(min(350px,100%),1fr))] items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 [&>div:first-of-type]:even:lg:order-last">
        <div className={`prose`}>
          <Link className={``} href={`https://sandraifjusagiszallo.hu/`} target={'_blank'} prefetch={false}>
            <h2
              id={`sandra`}
              className="decoration-primary hover:text-primary-600 dark:decoration-primary-400 dark:hover:text-primary-400/75 text-3xl font-bold tracking-tight text-gray-900 underline decoration-2 transition-colors duration-200 sm:text-4xl dark:text-white"
            >
              Sandra Hotel
            </h2>
          </Link>
          <p className="text-balance hyphens-auto text-gray-600 dark:text-white">
            Magyarország Észak – Keleti részén, Szabolcs megye központjában Nyíregyházán a Sóstói u 31/B. alatt
            található. A szálló közvetlenül a Nyíregyházi Egyetem területén található de közvetlen szomszédja a Városi
            stadionnak és a lőtérnek is.
          </p>
          <div className={``}>
            <GoogleMapsEmbedded title={`Sandra Hotel`} placeId={`ChIJSeMFrnefOEcRfHvxkjnMl70`} />
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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-4 sm:gap-6 lg:gap-8">
          <FontAwesomeIcon icon={faMountainSun} className={`size-20 rounded-lg bg-gray-100`} aria-label={`Kép helye`} />
          <FontAwesomeIcon icon={faMountainSun} className={`size-20 rounded-lg bg-gray-100`} aria-label={`Kép helye`} />
          <FontAwesomeIcon icon={faMountainSun} className={`size-20 rounded-lg bg-gray-100`} aria-label={`Kép helye`} />
          <FontAwesomeIcon icon={faMountainSun} className={`size-20 rounded-lg bg-gray-100`} aria-label={`Kép helye`} />
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-[repeat(auto-fit,minmax(min(350px,100%),1fr))] items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 [&>div:first-of-type]:even:lg:order-last">
        <div className={`prose`}>
          <Link className={``} href={`https://bessenyeihotel.hu/`} target={'_blank'} prefetch={false}>
            <h2
              id={`bessenyei`}
              className="decoration-primary hover:text-primary-600 dark:decoration-primary-400 dark:hover:text-primary-400/75 text-3xl font-bold tracking-tight text-gray-900 underline decoration-2 transition-colors duration-200 sm:text-4xl dark:text-white"
            >
              Hotel Bessenyei
            </h2>
          </Link>
          <p className="text-balance hyphens-auto text-gray-600 dark:text-white">
            A környék látványosságai percek alatt elérhetőek. Nyíregyháza hangulatos belvárosával, szellemi életével,
            történelmi emlékeivel, kiránduló- és üdülőövezetével, és az utóbbi évek dinamikus és látványos fejlődésével
            nagy népszerűségnek örvend az idelátogató turisták, vendégek körében. A város és Sóstógyógyfürdő között
            elhelyezkedő Sóstói erdő sokféle lehetőséget kínál a kikapcsolódásra fiataloknak és időseknek egyaránt,
            ezért az itt élők méltán nevezik a város &quot;gyöngyszemének, ékességének&quot;.
          </p>
          <div>
            <GoogleMapsEmbedded title={`Hotel Bessenyei`} placeId={`ChIJSeMFrnefOEcRTc8ve48eU88`} />
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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-4 sm:gap-6 lg:gap-8">
          <FontAwesomeIcon icon={faMountainSun} className={`size-20 rounded-lg bg-gray-100`} aria-label={`Kép helye`} />
          <FontAwesomeIcon icon={faMountainSun} className={`size-20 rounded-lg bg-gray-100`} aria-label={`Kép helye`} />
          <FontAwesomeIcon icon={faMountainSun} className={`size-20 rounded-lg bg-gray-100`} aria-label={`Kép helye`} />
          <FontAwesomeIcon icon={faMountainSun} className={`size-20 rounded-lg bg-gray-100`} aria-label={`Kép helye`} />
        </div>
      </div>
    </main>
  );
}
