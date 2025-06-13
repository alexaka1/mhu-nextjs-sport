import {
  IconBallBasketball,
  IconBallVolleyball,
  IconBow,
  IconFeather,
  IconPingPong,
  IconPlayFootball,
  IconRun,
  IconSoccerField,
  IconSwimming,
  IconTargetArrow,
} from '@tabler/icons-react';

export const tabs = [
  {
    title: 'Női és férfi síkfutás',
    icon: (
      <IconRun
        className={`me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400`}
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Női és férfi súlylökés',
    icon: (
      <IconBallVolleyball
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Asztalitenisz [női, férfi]',
    icon: (
      <IconPingPong
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Tollaslabda',
    icon: (
      <IconFeather
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Úszás',
    icon: (
      <IconSwimming
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Férfi labdarúgás',
    icon: (
      <IconPlayFootball
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Csocsó',
    icon: (
      <IconSoccerField
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Darts',
    icon: (
      <IconTargetArrow
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Íjászat',
    icon: (
      <IconBow
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Női kosárlabda',
    icon: (
      <IconBallBasketball
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
      />
    ),
  },
] as const;
