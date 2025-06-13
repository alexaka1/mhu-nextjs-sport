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
    title: 'Asztalitenisz [női, férfi]',
    icon: (
      <IconPingPong
        className="me-2 size-4 text-gray-400 group-data-[hover]:text-secondary-600 group-data-[selected]:text-primary dark:text-gray-500 dark:group-data-[hover]:text-gray-300 group-data-[selected]:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Csocsó',
    icon: (
      <IconSoccerField
        className="me-2 size-4 text-gray-400 group-data-[hover]:text-secondary-600 group-data-[selected]:text-primary dark:text-gray-500 dark:group-data-[hover]:text-gray-300 group-data-[selected]:dark:text-primary-400"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Darts',
    icon: (
      <IconTargetArrow
        className="me-2 size-4 text-gray-400 group-data-[hover]:text-secondary-600 group-data-[selected]:text-primary dark:text-gray-500 dark:group-data-[hover]:text-gray-300 group-data-[selected]:dark:text-primary-400"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Férfi labdarúgás',
    icon: (
      <IconPlayFootball
        className="me-2 size-4 text-gray-400 group-data-[hover]:text-secondary-600 group-data-[selected]:text-primary dark:text-gray-500 dark:group-data-[hover]:text-gray-300 group-data-[selected]:dark:text-primary-400"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Íjászat',
    icon: (
      <IconBow
        className="me-2 size-4 text-gray-400 group-data-[hover]:text-secondary-600 group-data-[selected]:text-primary dark:text-gray-500 dark:group-data-[hover]:text-gray-300 group-data-[selected]:dark:text-primary-400"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Női és férfi síkfutás',
    icon: (
      <IconRun
        className={`me-2 size-4 text-gray-400 group-data-[hover]:text-secondary-600 group-data-[selected]:text-primary dark:text-gray-500 dark:group-data-[hover]:text-gray-300 group-data-[selected]:dark:text-primary-400`}
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Női és férfi súlylökés',
    icon: (
      <IconBallVolleyball
        className="me-2 size-4 text-gray-400 group-data-[hover]:text-secondary-600 group-data-[selected]:text-primary dark:text-gray-500 dark:group-data-[hover]:text-gray-300 group-data-[selected]:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Női kosárlabda',
    icon: (
      <IconBallBasketball
        className="me-2 size-4 text-gray-400 group-data-[hover]:text-secondary-600 group-data-[selected]:text-primary dark:text-gray-500 dark:group-data-[hover]:text-gray-300 group-data-[selected]:dark:text-primary-400"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Tollaslabda',
    icon: (
      <IconFeather
        className="me-2 size-4 text-gray-400 group-data-[hover]:text-secondary-600 group-data-[selected]:text-primary dark:text-gray-500 dark:group-data-[hover]:text-gray-300 group-data-[selected]:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Úszás',
    icon: (
      <IconSwimming
        className="me-2 size-4 text-gray-400 group-data-[hover]:text-secondary-600 group-data-[selected]:text-primary dark:text-gray-500 dark:group-data-[hover]:text-gray-300 group-data-[selected]:dark:text-primary-400"
        aria-hidden="true"
      />
    ),
  },
] as const;
