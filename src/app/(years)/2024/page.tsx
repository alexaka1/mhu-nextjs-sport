import { type Metadata } from 'next';
import { APP_DEFAULT_TITLE } from '@/app/manifest';
import LandingLinks from '@/app/ui/landing/2024/landing-links';
import LandingBackground from '@/app/ui/landing/2024/landing-background';
import LandingTitle from '@/app/ui/landing/2024/landing-title';

export const metadata: Metadata = {
  title: `2024 - Nyíregyháza | ${APP_DEFAULT_TITLE}`,
};

export default function Home() {
  return (
    <>
      <main className="relative flex min-h-svh flex-col items-center justify-between gap-1 p-4 md:p-24">
        <LandingBackground />
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>

        <LandingTitle />
        <div className="md:pb-32 xl:pb-0">
          <LandingLinks />
        </div>
      </main>
    </>
  );
}
