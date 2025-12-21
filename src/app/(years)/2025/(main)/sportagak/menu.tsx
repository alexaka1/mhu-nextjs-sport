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
import { faSection } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const tabs = [
  {
    title: 'Asztalitenisz [női, férfi]',
    icon: (
      <IconPingPong
        className="group-data-hover:text-secondary-600 group-data-selected:text-primary group-data-selected:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-data-hover:text-gray-300"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Csocsó',
    icon: (
      <IconSoccerField
        className="group-data-hover:text-secondary-600 group-data-selected:text-primary group-data-selected:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-data-hover:text-gray-300"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Darts',
    icon: (
      <IconTargetArrow
        className="group-data-hover:text-secondary-600 group-data-selected:text-primary group-data-selected:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-data-hover:text-gray-300"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Férfi labdarúgás',
    icon: (
      <IconPlayFootball
        className="group-data-hover:text-secondary-600 group-data-selected:text-primary group-data-selected:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-data-hover:text-gray-300"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Íjászat',
    icon: (
      <IconBow
        className="group-data-hover:text-secondary-600 group-data-selected:text-primary group-data-selected:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-data-hover:text-gray-300"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Női és férfi síkfutás',
    icon: (
      <IconRun
        className={`group-data-hover:text-secondary-600 group-data-selected:text-primary group-data-selected:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-data-hover:text-gray-300`}
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Női és férfi súlylökés',
    icon: (
      <IconBallVolleyball
        className="group-data-hover:text-secondary-600 group-data-selected:text-primary group-data-selected:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-data-hover:text-gray-300"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Női kosárlabda',
    icon: (
      <IconBallBasketball
        className="group-data-hover:text-secondary-600 group-data-selected:text-primary group-data-selected:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-data-hover:text-gray-300"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Tollaslabda',
    icon: (
      <IconFeather
        className="group-data-hover:text-secondary-600 group-data-selected:text-primary group-data-selected:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-data-hover:text-gray-300"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Úszás',
    icon: (
      <IconSwimming
        className="group-data-hover:text-secondary-600 group-data-selected:text-primary group-data-selected:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-data-hover:text-gray-300"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Főügyészi megmérettetés',
    icon: (
      <FontAwesomeIcon
        className="group-data-hover:text-secondary-600 group-data-selected:text-primary group-data-selected:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-data-hover:text-gray-300"
        aria-hidden="true"
        icon={faSection}
      />
    ),
  },
] as const;
