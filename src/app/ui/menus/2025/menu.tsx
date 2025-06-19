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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons/faPeopleGroup';
import type { Tab } from '@/app/ui/results/results-tab-types';
import { faSection } from '@fortawesome/free-solid-svg-icons';

export const tabs = [
  {
    title: 'Női síkfutás',
    icon: (
      <IconRun
        className={`me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400`}
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Férfi síkfutás',
    icon: (
      <IconRun
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Női súlylökés',
    icon: (
      <IconBallVolleyball
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Férfi súlylökés',
    icon: (
      <IconBallVolleyball
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Női asztalitenisz',
    icon: (
      <IconPingPong
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Férfi asztalitenisz',
    icon: (
      <IconPingPong
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Tollas',
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
    title: 'Labdarúgás',
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
    title: 'Női darts',
    icon: (
      <IconTargetArrow
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Férfi darts',
    icon: (
      <IconTargetArrow
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Női íjászat',
    icon: (
      <IconBow
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Férfi íjászat',
    icon: (
      <IconBow
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Női kosár',
    icon: (
      <IconBallBasketball
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
      />
    ),
  },
  {
    title: 'Főügyészi verseny',
    icon: (
      <FontAwesomeIcon
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
        icon={faSection}
      />
    ),
  },
  {
    title: 'Csapatverseny',
    icon: (
      <FontAwesomeIcon
        className="me-2 size-4 text-gray-400 group-hover:text-secondary-600 group-data-active:text-primary dark:text-gray-500 dark:group-hover:text-gray-300 group-data-active:dark:text-primary-400"
        aria-hidden="true"
        icon={faPeopleGroup}
      />
    ),
  },
] as const satisfies Array<Tab>;
