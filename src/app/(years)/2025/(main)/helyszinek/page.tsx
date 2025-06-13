import { type Metadata } from 'next';
import { Entry, EntryContent, Media, Title } from '@/app/ui/text-content';
import Image from 'next/image';
import ZoomWrapper from '@/app/ui/zoom-wrapper';
import { env } from '@/app/lib/env';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainSun } from '@fortawesome/free-solid-svg-icons/faMountainSun';
import GoogleMapsEmbedded from '@/app/ui/google-maps-embed';

export const metadata: Metadata = {
  title: 'Helyszínek',
};

export default function Page() {
  return (
    <main className="mx-auto flex flex-col gap-8 p-4 bg-white dark:bg-gray-800">
      <h1 className="sr-only">Helyszínek</h1>
      <a
        className={`prose mx-auto underline decoration-dashed decoration-2 prose-p:text-justify prose-p:text-gray-600 dark:text-primary-600 print:hidden`}
        href={`#map`}
      >
        Ugrás a térképhez...
      </a>
      <Entry>
        <EntryContent>
          <Title id={`SZEGYA`}>1. SZEGYA Kollégium és Alma Mater Hostel </Title>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">szállások</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">VIP terem</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">versenyközpont</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
          </dl>
          <div className={``}>
            <GoogleMapsEmbedded title={`SZEGYA Kollégium`} placeId={`ChIJl9V4v6ArREcRmjTFbLQMVT0`} />
            <GoogleMapsEmbedded title={`Alma Mater Hostel`} placeId={`ChIJNeTWnQorREcRbTQR_jqibAg`} />
          </div>
        </EntryContent>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-4 sm:gap-6 lg:gap-8">
          <Media
            src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3Hh67CNZGNTwNGqIZlAQS0HgEKvLCbODJdx3Wf1'}
            alt={'Alma Mater Hostel'}
            alwaysShow={true}
          />
          <Media
            src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhP84FQ4E0K7ohCt1LN3QrwA2zfMREGvTOpPas'}
            alt={'Alma Mater Hostel'}
            alwaysShow={true}
          />
        </div>
      </Entry>
      <Entry>
        <EntryContent>
          <Title id={`Egyetemisportcsarnok`}>2. Egyetemi sportcsarnok és műfüves pálya</Title>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">megnyitó kosárlabda</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">tollaslabda</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">asztalitenisz</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">íjászat</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">labdarúgás (vasárnap)</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">záróünnepség</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
          </dl>
          <div className={``}>
            <GoogleMapsEmbedded title={`Egyetemi sportcsarnok`} placeId={`ChIJw0LcEQsrREcR8k7NjIYZ8xM`} />
          </div>
        </EntryContent>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-4 sm:gap-6 lg:gap-8">
          <Media
            alwaysShow={true}
            src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3Hh9B4jvqfI6QosfZhX37bT4H8GNrJnDtd5UmWl'}
            alt={'Egyetemi sportcsarnok'}
          />
          <Media
            alwaysShow={true}
            src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhPWtMPZhE0K7ohCt1LN3QrwA2zfMREGvTOpPa'}
            alt={'Egyetemi sportcsarnok'}
          />
        </div>
      </Entry>

      <Entry>
        <EntryContent>
          <Title id={`CsabaPark`}>3. Csaba Park</Title>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">étkezések</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">darts</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">csocsó</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">főügyészi megmérettetés</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">esti rendezvények</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
          </dl>
          <GoogleMapsEmbedded title={`Csaba Park`} placeId={`ChIJhyMpVwwrREcR7Nwsh2NhdC0`} />
        </EntryContent>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-4 sm:gap-6 lg:gap-8">
          <Media
            alwaysShow={true}
            src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhqQB8gqRO1lM8Px3cBNfAXjphoQirKYHFIaSs'}
            alt={'Csaba Park étterem'}
          />
          <Media
            alwaysShow={true}
            src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3Hhx9Wb8nH9A3Hh72PtKgXWYs1OqfriZBcpRzva'}
            alt={'Csaba Park étterem'}
          />
          <Media
            alwaysShow={true}
            src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhUSHz9jvLyBPcCq6vgGKUhVzHIwY3efJRk9da'}
            alt={'Csaba Park étterem'}
          />
        </div>
      </Entry>
      <Entry>
        <EntryContent>
          <Title id={`Fu2`}>
            4. Kórház utcai <q>Fű2</q> műfüves pálya
          </Title>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">labdarúgás (péntek, szombat)</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
          </dl>
          <GoogleMapsEmbedded title={`Kórház utcai Fű2 műfüves pálya`} placeId={`ChIJY_hmAaUrREcRspqFmck9BEI`} />
        </EntryContent>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-4 sm:gap-6 lg:gap-8">
          <Media
            alwaysShow={true}
            src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3Hhv3I1SLzVLc9DdG1X2JM8Numk7WqCPbl6h4IY'}
            alt={'Fű2 műfüves pálya'}
          />
          <Media
            alwaysShow={true}
            src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhtDMa5Trh8OKkR5wrCPuZMo4TLySlFAYjivNg'}
            alt={'Fű2 műfüves pálya'}
          />
        </div>
      </Entry>

      <Entry>
        <EntryContent>
          <Title id={`TundeUtca`}>5. Tünde utcai atlétikai pálya</Title>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">síkfutás</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">súlylökés</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">csocsó</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">főügyészi megmérettetés</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">esti rendezvények</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
          </dl>
          <GoogleMapsEmbedded title={`Tünde utcai atlétikai pálya`} placeId={`ChIJYfVJA3orREcRlRI1fbm5nm0`} />
        </EntryContent>
        {/*<div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-4 sm:gap-6 lg:gap-8">*/}
        {/*  <Media*/}
        {/*    alwaysShow={true}*/}
        {/*    src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhSpyW3BG09GWq6DTeZPYVX2ymvS5pouUljONQ'}*/}
        {/*    alt={'Úszás'}*/}
        {/*  />*/}
        {/*  <Media*/}
        {/*    alwaysShow={true}*/}
        {/*    src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhSpyW3BG09GWq6DTeZPYVX2ymvS5pouUljONQ'}*/}
        {/*    alt={'Úszás'}*/}
        {/*  />*/}
        {/*  <Media*/}
        {/*    alwaysShow={true}*/}
        {/*    src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhSpyW3BG09GWq6DTeZPYVX2ymvS5pouUljONQ'}*/}
        {/*    alt={'Úszás'}*/}
        {/*  />*/}
        {/*  <Media*/}
        {/*    alwaysShow={true}*/}
        {/*    src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhSpyW3BG09GWq6DTeZPYVX2ymvS5pouUljONQ'}*/}
        {/*    alt={'Úszás'}*/}
        {/*  />*/}
        {/*</div>*/}
      </Entry>
      <Entry>
        <EntryContent>
          <Title id={`ArpadFurdo`}>6. Árpád Fürdő</Title>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t pt-4 border-gray-200">
              <dt className="font-medium text-bg-contrast">úszás</dt>
              {/*<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
            </div>
          </dl>
          <GoogleMapsEmbedded title={`Árpád Fürdő`} placeId={`ChIJfZ8jaKIrREcRqGhI9Wb_MnA`} />
        </EntryContent>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-4 sm:gap-6 lg:gap-8">
          <Media
            alwaysShow={true}
            src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3HhxD6JRYH9A3Hh72PtKgXWYs1OqfriZBcpRzva'}
            alt={'Árpád Fürdő'}
          />
          <Media
            alwaysShow={true}
            src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3Hhuz9N5Kpbv8eiWkM46EOAh3PCcGI7nXzF0yx1'}
            alt={'Árpád Fürdő'}
          />
          <Media
            alwaysShow={true}
            src={'https://oeun8dfdch.ufs.sh/f/x6mUVjH9A3Hhn93RZdx39ku0hCXvmi4dqO1zWpJr7IjeKGyH'}
            alt={'Árpád Fürdő'}
          />
        </div>
      </Entry>
      <Entry>
        <EntryContent>
          <Title id={`terkep`}>Térkép</Title>
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
            />
          </ZoomWrapper>
          <p>
            A piros szaggatott vonal{' '}
            <span className={`tracking-[0.5em]`} aria-hidden={true}>
              (<span className={`font-bold text-red-700 dark:text-red-400`}>---</span>)
            </span>
            jelzi a sportpályák (<span className={`font-bold text-red-700 dark:text-red-400`}>4, 5</span>) leggyorsabb
            gyalogos megközelítését a Körgáton
          </p>
        </EntryContent>
      </Entry>
    </main>
  );
}
