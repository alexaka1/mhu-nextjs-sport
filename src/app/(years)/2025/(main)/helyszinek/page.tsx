import { type Metadata } from 'next';
import { EntryContent, Title } from '@/app/ui/text-content';
import Image from 'next/image';
import ZoomWrapper from '@/app/ui/zoom-wrapper';
import { env } from '@/app/lib/env';

export const metadata: Metadata = {
  title: 'Helyszínek',
};

const mapsApiKey = env.NEXT_PUBLIC_MAPS_API_KEY ?? 'null';

export default function Page() {
  return (
    <main className="mx-auto flex flex-col gap-8 p-4 bg-white dark:bg-gray-800">
      <h1 className="sr-only">Helyszínek</h1>
      <EntryContent>
        <a className={`print:hidden`} href={`#map`}>
          Ugrás a térképhez...
        </a>
      </EntryContent>
      <EntryContent>
        <Title id={`SZEGYA`}>1. SZEGYA Kollégium és Alma Mater Hostel </Title>
        <ul>
          <li>szállások</li>
          <li>VIP terem</li>
          <li>VIP terem</li>
        </ul>
      </EntryContent>
      <EntryContent>
        <Title id={`Egyetemisportcsarnok`}>2. Egyetemi sportcsarnok és műfüves pálya</Title>
        <ul>
          <li>megnyitó kosárlabda</li>
          <li>tollaslabda</li>
          <li>asztalitenisz</li>
          <li>íjászat</li>
          <li>labdarúgás (vasárnap)</li>
          <li>záróünnepség</li>
        </ul>
      </EntryContent>

      <EntryContent>
        <Title id={`CsabaPark`}>3. Csaba Park</Title>
        <ul>
          <li>étkezések</li>
          <li>darts</li>
          <li>csocsó</li>
          <li>főügyészi megmérettetés</li>
          <li>esti rendezvények</li>
        </ul>
      </EntryContent>
      <EntryContent>
        <Title id={`Fu2`}>
          4. Kórház utcai <q>Fű2</q> műfüves pálya
        </Title>
        <ul>
          <li>labdarúgás (péntek, szombat)</li>
        </ul>
      </EntryContent>

      <EntryContent>
        <Title id={`TundeUtca`}>5. Tünde utcai atlétikai pálya</Title>
        <ul>
          <li>síkfutás</li>
          <li>súlylökés</li>
          <li>csocsó</li>
          <li>főügyészi megmérettetés</li>
          <li>esti rendezvények</li>
        </ul>
      </EntryContent>
      <EntryContent>
        <Title id={`ArpadFurdo`}>6. Árpád Fürdő</Title>
        <ul>
          <li>úszás</li>
        </ul>
      </EntryContent>
      <EntryContent>
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
      </EntryContent>
    </main>
  );
}
