import LandingLink from '@/app/ui/buttons/landing-link';

const year = '2024';

export default function LandingLinks() {
  return (
    <nav
      aria-label={`Elsődleges`}
      className="bg-primary/95 grid rounded-lg text-center xl:w-full xl:max-w-7xl xl:grid-cols-3 xl:text-left"
    >
      <LandingLink href={`/${year}/koszonto`}>
        <h2 className={`mb-3 inline-block text-2xl font-semibold text-nowrap`}>
          Beköszöntő{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm text-white/75`}>A főügyész köszöntője</p>
      </LandingLink>
      <LandingLink href={`/${year}/sportagak`}>
        <h2 className={`mb-3 text-2xl font-semibold text-nowrap`}>
          Sportágak{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}></p>
      </LandingLink>
      <LandingLink href={`/${year}/helyszinek`}>
        <h2 className={`mb-3 text-2xl font-semibold text-nowrap`}>
          Helyszínek{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm text-white/75`}></p>
      </LandingLink>
      <LandingLink href={`/${year}/szallas`}>
        <h2 className={`mb-3 text-2xl font-semibold text-nowrap`}>
          Szállás{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm text-white/75`}>Sandra Hotel és Hotel Bessenyei</p>
      </LandingLink>
      <LandingLink href={`/${year}/programok`}>
        <h2 className={`mb-3 text-2xl font-semibold text-nowrap`}>
          Programok{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm text-balance opacity-50`}></p>
      </LandingLink>
      <LandingLink href={`/${year}/eredmenyek`}>
        <h2 className={`mb-3 text-2xl font-semibold text-nowrap`}>
          Eredmények{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm text-balance text-white/75`}></p>
      </LandingLink>
    </nav>
  );
}
