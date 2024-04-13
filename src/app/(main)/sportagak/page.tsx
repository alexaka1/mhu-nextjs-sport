import { Metadata } from 'next';
import { ReactNode } from 'react';
import Image from 'next/image';
import XlsxTable from '@/app/ui/XlsxTable';

export const metadata: Metadata = {
  title: 'Sportágak',
};

function Title({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <h2 className="text-3xl font-bold tracking-tight transition-colors duration-200 text-gray-900 sm:text-4xl dark:text-bg-contrast">
      {children}
    </h2>
  );
}

function Media({ src, alt }: Readonly<{ src: string; alt: string }>) {
  return (
    <div className="grid gap-4 sm:gap-6 lg:gap-8">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        priority={false}
        className={`hidden rounded-lg object-scale-down lg:block`}
      />
    </div>
  );
}

function Entry({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 [&>div:first-of-type]:even:lg:order-last">
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <main className="bg-white dark:bg-gray-800">
      <Entry>
        <div className={`prose`}>
          <Title>Labdarúgás</Title>
          <p className="text-balance text-gray-600 dark:text-bg-contrast">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
            enim cursus gravida.
          </p>
          {/*<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">*/}
          {/*  {features.map((feature) => (*/}
          {/*    <div key={feature.name} className="border-t pt-4 border-gray-200">*/}
          {/*      <dt className="font-medium text-gray-900">{feature.name}</dt>*/}
          {/*      <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</dl>*/}
        </div>
        <Media src={'https://source.unsplash.com/person-playing-soccer-mY2ZHBU6GRk'} alt={'Labdarúgás'} />
        {/*<object data={``}></object>*/}
        <object
          data="https://utfs.io/f/4eb74c62-71af-475a-8d21-dee655cd6263-c1xsmp.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p className={`text-bg-contrast`}>
            Alternative text - include a link{' '}
            <a href="https://utfs.io/f/4eb74c62-71af-475a-8d21-dee655cd6263-c1xsmp.pdf">to the PDF!</a>
          </p>
        </object>
        <object
          data="https://utfs.io/f/527ff756-5125-43e4-a7a8-f9e69c212950-1adb5m.xlsx"
          type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          width="100%"
          height="100%"
        >
          <p className={`text-bg-contrast`}>
            Alternative text - include a link{' '}
            <a href="https://utfs.io/f/527ff756-5125-43e4-a7a8-f9e69c212950-1adb5m.xlsx">to the XLSX!</a>
          </p>
        </object>
        <XlsxTable />
        {/*<div className={`text-bg-contrast`} dangerouslySetInnerHTML={{ __html: html[0] as string }}></div>*/}
      </Entry>
      <Entry>
        <div className={`prose`}>
          <Title>Úszás</Title>
          <p className="text-balance text-gray-600 dark:text-bg-contrast">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
            enim cursus gravida.
          </p>

          {/*<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">*/}
          {/*  {features.map((feature) => (*/}
          {/*    <div key={feature.name} className="border-t pt-4 border-gray-200">*/}
          {/*      <dt className="font-medium text-gray-900">{feature.name}</dt>*/}
          {/*      <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</dl>*/}
        </div>
        <Media src={'https://source.unsplash.com/people-in-swimming-pool-TVOAbbLL050'} alt={'Úszás'} />
      </Entry>
      <Entry>
        <div className={`prose`}>
          <Title>Futás</Title>
          <p className="text-balance text-gray-600 dark:text-bg-contrast">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
            enim cursus gravida.
          </p>

          {/*<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">*/}
          {/*  {features.map((feature) => (*/}
          {/*    <div key={feature.name} className="border-t pt-4 border-gray-200">*/}
          {/*      <dt className="font-medium text-gray-900">{feature.name}</dt>*/}
          {/*      <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</dl>*/}
        </div>
        <Media src={'https://source.unsplash.com/group-of-people-running-on-stadium-atSaEOeE8Nk'} alt={'Futás'} />
      </Entry>
      <Entry>
        <div className={`prose`}>
          <Title>Asztalitenisz</Title>
          <p className="text-balance text-gray-600 dark:text-bg-contrast">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
            enim cursus gravida.
          </p>

          {/*<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">*/}
          {/*  {features.map((feature) => (*/}
          {/*    <div key={feature.name} className="border-t pt-4 border-gray-200">*/}
          {/*      <dt className="font-medium text-gray-900">{feature.name}</dt>*/}
          {/*      <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</dl>*/}
        </div>
        <Media
          src={'https://source.unsplash.com/red-and-brown-wooden-table-tennis-racket-i0kB5B9J8Ds'}
          alt={'Asztalitenisz'}
        />
      </Entry>
      <Entry>
        <div className={`prose`}>
          <Title>Súlylökés</Title>
          <p className="text-balance text-gray-600 dark:text-bg-contrast">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
            enim cursus gravida.
          </p>

          {/*<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">*/}
          {/*  {features.map((feature) => (*/}
          {/*    <div key={feature.name} className="border-t pt-4 border-gray-200">*/}
          {/*      <dt className="font-medium text-gray-900">{feature.name}</dt>*/}
          {/*      <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</dl>*/}
        </div>
        {/*<Media src={'https://source.unsplash.com/basketball-on-ring-QAX5Ylx-lKo'} alt={'Súlylökés'} />*/}
      </Entry>
      <Entry>
        <div className={`prose`}>
          <Title>Darts</Title>
          <p className="text-balance text-gray-600 dark:text-bg-contrast">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
            enim cursus gravida.
          </p>

          {/*<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">*/}
          {/*  {features.map((feature) => (*/}
          {/*    <div key={feature.name} className="border-t pt-4 border-gray-200">*/}
          {/*      <dt className="font-medium text-gray-900">{feature.name}</dt>*/}
          {/*      <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</dl>*/}
        </div>
        <Media src={'https://source.unsplash.com/red-white-and-black-round-wheel-RjqCk9MqhNg'} alt={'Darts'} />
      </Entry>
      <Entry>
        <div className={`prose`}>
          <Title>Kosárlabda</Title>
          <p className="text-balance text-gray-600 dark:text-bg-contrast">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
            enim cursus gravida.
          </p>

          {/*<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">*/}
          {/*  {features.map((feature) => (*/}
          {/*    <div key={feature.name} className="border-t pt-4 border-gray-200">*/}
          {/*      <dt className="font-medium text-gray-900">{feature.name}</dt>*/}
          {/*      <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</dl>*/}
        </div>
        <Media src={'https://source.unsplash.com/ball-under-basketball-ring-BfphcCvhl6E'} alt={'Kosárlabda'} />
      </Entry>
    </main>
  );
}
