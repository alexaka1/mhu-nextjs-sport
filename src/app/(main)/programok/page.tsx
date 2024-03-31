import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Programok',
};

function Entry({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <article
      className={`border-b border-solid pb-1 border-green-400
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
    <div className="gap-1 sm:grid sm:grid-flow-col sm:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr_1fr_2fr]">
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <main className={`prose m-auto box-border max-w-7xl p-2`}>
        <h1>Events</h1>
        <section>
          <h2 className={`font-medium`}>2 December</h2>
          <Grid>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>9:00 AM</h3>
              <p className={`text-base`}>Life finds a way. You know what? It is beets. </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>10:00 AM</h3>
              <p className={`text-base`}>I&apos;ve crashed into a beet truck </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>12:30 AM</h3>
              <p className={`text-base`}>I was part of something special. </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>13:30 AM</h3>
              <p className={`text-base`}>
                Yeah, but your scientists were so preoccupied with whether or not they could, they didn&apos;t stop to
                think if they should.{' '}
              </p>
              <img
                className={`h-[250px] w-full rounded-md object-cover sm:h-min sm:object-none`}
                src="https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg"
                alt="Black and white photo of a lake"
              />
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>14:30 AM</h3>
              <p className={`text-base`}>Just my luck, no ice. God help us, we&apos;re in the hands of engineers. </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>15:30 AM</h3>
              <p className={`text-base`}>I gave it a cold? I gave it a virus. A computer virus. </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>16:30 AM</h3>
              <p className={`text-base`}>
                God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.{' '}
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>17:30 AM</h3>
              <p className={`text-base`}>What do they got in there? King Kong? </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg/1200px-Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg"
                alt="Black and White Eiffel Tower"
              />
            </Entry>
          </Grid>
        </section>
        <section>
          <h2 className={`font-medium`}>3 Jan</h2>
          <Grid>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>9:00 AM</h3>
              <p className={`text-base`}>Life finds a way. You know what? It is beets. </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>10:00 AM</h3>
              <p className={`text-base`}>I&apos;ve crashed into a beet truck </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>12:30 AM</h3>
              <p className={`text-base`}>I was part of something special. </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>13:30 AM</h3>
              <p className={`text-base`}>
                Yeah, but your scientists were so preoccupied with whether or not they could, they didn&apos;t stop to
                think if they should.{' '}
              </p>
              <img
                src=" https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg/1200px-Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg"
                alt="Black and White Eiffel Tower"
              />
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>14:30 AM</h3>
              <p className={`text-base`}>Just my luck, no ice. God help us, we&apos;re in the hands of engineers. </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>15:30 AM</h3>
              <p className={`text-base`}>I gave it a cold? I gave it a virus. A computer virus. </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>16:30 AM</h3>
              <p className={`text-base`}>
                God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.{' '}
              </p>
            </Entry>
            <Entry>
              <h3 className={`mx-0.5 my-0 font-medium`}>17:30 AM</h3>
              <p className={`text-base`}>What do they got in there? King Kong? </p>
              <img
                src="https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg"
                alt="Black and white Mountian view"
              />
            </Entry>
          </Grid>
        </section>
      </main>
      {/*<main className={`flex flex-col items-center p-4`}>*/}
      {/*  <ol className="relative border-s border-gray-200 dark:border-gray-700">*/}
      {/*    <li className="mb-10 ms-6">*/}
      {/*      <span className="/!*ring-8*!/ absolute -start-3 flex size-6 items-center justify-center rounded-full bg-blue-100 ring-white dark:bg-blue-900 dark:ring-gray-800">*/}
      {/*        <svg*/}
      {/*          className="size-2.5 text-blue-800 dark:text-blue-300"*/}
      {/*          aria-hidden="true"*/}
      {/*          xmlns="http://www.w3.org/2000/svg"*/}
      {/*          fill="currentColor"*/}
      {/*          viewBox="0 0 20 20"*/}
      {/*        >*/}
      {/*          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />*/}
      {/*        </svg>*/}
      {/*      </span>*/}
      {/*      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">*/}
      {/*        February 2022*/}
      {/*      </time>*/}
      {/*      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>*/}
      {/*      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">*/}
      {/*        Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order*/}
      {/*        E-commerce & Marketing pages.*/}
      {/*      </p>*/}
      {/*      <a*/}
      {/*        href="#"*/}
      {/*        className="inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium bg-white border-gray-200 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:text-blue-700 focus:ring-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"*/}
      {/*      >*/}
      {/*        Learn more*/}
      {/*      </a>*/}
      {/*    </li>*/}
      {/*    <li className="mb-10 ms-6">*/}
      {/*      <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full border bg-gray-200 border-white dark:bg-gray-700 dark:border-gray-900"></div>*/}
      {/*      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>*/}
      {/*      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>*/}
      {/*      <p className="text-base font-normal text-gray-500 dark:text-gray-400">*/}
      {/*        All of the pages and components are first designed in Figma and we keep a parity between the two versions*/}
      {/*        even as we update the project.*/}
      {/*      </p>*/}
      {/*    </li>*/}
      {/*    <li className="mb-10 ms-6">*/}
      {/*      <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full border bg-gray-200 border-white dark:bg-gray-700 dark:border-gray-900"></div>*/}
      {/*      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>*/}
      {/*      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>*/}
      {/*      <p className="text-base font-normal text-gray-500 dark:text-gray-400">*/}
      {/*        Get started with dozens of web components and interactive elements built on top of Tailwind CSS.*/}
      {/*      </p>*/}
      {/*    </li>*/}
      {/*  </ol>*/}
      {/*</main>*/}
    </>
  );
}
