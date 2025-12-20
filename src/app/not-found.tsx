import BackToHome from '@/app/ui/buttons/back-to-home';

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full grow place-items-center px-6 py-24 bg-white sm:py-32 lg:px-8 dark:bg-gray-950">
        <div className="text-center">
          <p className="font-mono text-base font-semibold text-secondary dark:text-secondary-400">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-bg-contrast">
            Az oldal nem található
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-bg-contrast">
            Sajnáljuk, a keresett oldal nem található.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <BackToHome />
          </div>
        </div>
      </main>
    </>
  );
}
