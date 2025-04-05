import LandingLink from '@/app/ui/buttons/landing-link';

const year = 2025;

export default function LandingLinks() {
  return (
    <div className="grid rounded-lg text-center bg-primary/95 xl:w-full xl:max-w-7xl xl:grid-cols-3 xl:text-left">
      {/*<LandingLink href={`/${year}/koszonto`}>*/}
      {/*  <h2 className={`mb-3 inline-block text-nowrap text-2xl font-semibold`}>*/}
      {/*    Beköszöntő{' '}*/}
      {/*    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">*/}
      {/*      -&gt;*/}
      {/*    </span>*/}
      {/*  </h2>*/}
      {/*  <p className={`m-0 max-w-[30ch] text-sm text-bg-contrast/75`}>A főügyész köszöntője</p>*/}
      {/*</LandingLink>*/}
      <LandingLink href={`/${year}/sportagak`}>
        <h2 className={`mb-3 text-nowrap text-2xl font-semibold`}>
          Sportágak{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}></p>
      </LandingLink>
      <LandingLink href={`/${year}/helyszinek`}>
        <h2 className={`mb-3 text-nowrap text-2xl font-semibold`}>
          Helyszínek{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm text-bg-contrast/75`}></p>
      </LandingLink>
      <LandingLink href={`/${year}/szallas`}>
        <h2 className={`mb-3 text-nowrap text-2xl font-semibold`}>
          Szállás{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm text-bg-contrast/75`}></p>
      </LandingLink>
      <LandingLink href={`/${year}/programok`}>
        <h2 className={`mb-3 text-nowrap text-2xl font-semibold`}>
          Programok{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-balance text-sm opacity-50`}></p>
      </LandingLink>
      <LandingLink href={`/${year}/eredmenyek`}>
        <h2 className={`mb-3 text-nowrap text-2xl font-semibold`}>
          Eredmények{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-balance text-sm text-bg-contrast/75`}></p>
      </LandingLink>
    </div>
  );
}
