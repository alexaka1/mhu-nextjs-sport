import { Metadata } from 'next';
import { EntryContent, Title } from '@/app/ui/text-content';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Helyszínek',
};

export default function Page() {
  return (
    <main className="mx-auto flex flex-col gap-8 p-4 bg-white dark:bg-gray-800">
      <EntryContent>
        <Title id={`Szállás`}>Szállás: Nyíregyházi egyetem</Title>
        <ul>
          <li>
            <Link href={`/szallas#bessenyei`}>Bessenyei Hotel</Link>
          </li>
          <li>
            <Link href={`/szallas#sandra`}>Sandra Hotel</Link>
          </li>
        </ul>
      </EntryContent>
      <EntryContent>
        <Title id={`Parkolás`}>Parkolás</Title>
        <p>A kollégiumtól kb. 50 méterre, a városi stadion mögötti betonozott nagy parkoló.</p>
      </EntryContent>

      <EntryContent>
        <Title id={`Étkezés`}>Étkezés és esti rendezvény</Title>
        <ul>
          <li>Nyíregyházi Egyetem</li>
          <li>Campus Étterem és Bistro</li>
        </ul>
      </EntryContent>
      <EntryContent>
        <Title id={`Sportesemények`}>Sportesemények</Title>
        <p>Nyíregyházi Egyetem sportpályái és tornaterme:</p>
        <ul>
          <li>Futás</li>
          <li>Kosárlabda</li>
          <li>Asztalitenisz</li>
          <li>Súlylökés</li>
          <li>Úszás</li>
        </ul>
        <p>Az Egyetemi sportpályáktól és kollégiumoktól kb. 200 méterre lévő városi stadion műfüvespályái:</p>
        <ul>
          <li>Labdarúgás</li>
        </ul>
        <p>Campus Étterem és Bistro (az esti rendezvény helyszíne):</p>
        <ul>
          <li>Darts</li>
        </ul>
      </EntryContent>

      <EntryContent>
        <Title id={`eredményhirdetés`}>Megnyitó ünnepség és eredményhirdetés</Title>
        <p>Nyíregyházi Egyetem sportudvara, a futópálya mellett</p>
      </EntryContent>
    </main>
  );
}
