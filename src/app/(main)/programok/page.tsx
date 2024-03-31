import { Metadata } from 'next';
import { ReactNode } from 'react';
import { faMountainSun } from '@fortawesome/free-solid-svg-icons/faMountainSun';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const metadata: Metadata = {
  title: 'Programok',
};

function Entry({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <article
      className={`border-b border-solid pb-1 border-primary dark:border-primary-600
              [&:nth-child(4)]:col-start-2 [&:nth-child(4)]:col-end-3 [&:nth-child(4)]:row-start-1 [&:nth-child(4)]:row-end-4
              lg:[&:nth-child(4)]:border-r lg:[&:nth-child(4)]:border-solid lg:[&:nth-child(4)]:pr-1
              sm:[&:nth-child(4n)]:border-b-0
              sm:[&:nth-child(4n)]:border-l sm:[&:nth-child(4n)]:pl-1 lg:[&:nth-child(4n+3)]:border-b-0 sm:[&:nth-child(8)]:col-start-2
              sm:[&:nth-child(8)]:col-end-3 sm:[&:nth-child(8)]:row-start-4 sm:[&:nth-child(8)]:row-end-8 lg:[&:nth-child(8)]:col-start-4
              lg:[&:nth-child(8)]:col-end-[-1] lg:[&:nth-child(8)]:row-start-1 lg:[&:nth-child(8)]:row-end-4`}
    >
      {children}
    </article>
  );
}

function Grid({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="gap-1 sm:grid sm:grid-flow-col sm:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr_1fr_2fr_1fr]">
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <main
        className={`prose prose-sm m-auto box-border max-w-7xl p-2 dark:text-bg-contrast dark:prose-headings:text-bg-contrast`}
      >
        <h1 className={`dark:text-bg-contrast`}>Programok - 2024</h1>
        <section>
          <h2 className={`font-medium`}>December 2.</h2>
          <Grid>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium text-primary dark:text-primary-600`}>
                <time dateTime={`2011-12-02T09:00:00Z`}>9:00 AM</time>
              </h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>10:00 AM</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.{' '}
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>12:30 AM</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>13:30 AM</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
              <FontAwesomeIcon
                icon={faMountainSun}
                className={`h-[250px] w-full rounded-md object-cover bg-gray-100 sm:h-min sm:object-none`}
                title={`Kép helye`}
              />
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>14:30 AM</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>15:30 AM</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>16:30 AM</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>17:30 AM</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
              <FontAwesomeIcon
                icon={faMountainSun}
                className={`h-[250px] w-full rounded-md object-cover bg-gray-100 sm:h-min sm:object-none`}
                title={`Kép helye`}
              />
            </Entry>
          </Grid>
        </section>
        <section>
          <h2 className={`font-medium`}>Január 3.</h2>
          <Grid>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>
                <time dateTime={`2012-01-03T09:00:00Z`}>9:00 AM</time>
              </h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>10:00 AM</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>12:30 AM</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>13:30 AM</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
              <FontAwesomeIcon
                icon={faMountainSun}
                className={`h-[250px] w-full rounded-md object-cover bg-gray-100 sm:h-min sm:object-none`}
                title={`Kép helye`}
              />
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>14:30 AM</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>15:30 AM</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>16:30 AM</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>17:30 AM</h3>
              <p className={`text-balance text-base`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet vehicula ipsum. Vivamus eu leo id
                enim cursus gravida.
              </p>
              <FontAwesomeIcon
                icon={faMountainSun}
                className={`h-[250px] w-full rounded-md object-cover bg-gray-100 sm:h-min sm:object-none`}
                title={`Kép helye`}
              />
            </Entry>
          </Grid>
        </section>
      </main>
    </>
  );
}
