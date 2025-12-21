import {
  IconBallBasketball,
  IconBallFootball,
  IconBallVolleyball,
  IconPingPong,
  IconRun,
  IconSwimming,
  IconTargetArrow,
} from '@tabler/icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSection } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons/faPeopleGroup';
import type { Tab } from '@/app/ui/results/results-tab-types';

export const tabs = [
  {
    title: 'Labdarúgás',
    icon: (
      <IconBallFootball
        className={`group-hover:text-secondary-600 group-data-active:text-primary group-data-active:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-hover:text-gray-300`}
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Úszás',
    icon: (
      <IconSwimming
        className="group-hover:text-secondary-600 group-data-active:text-primary group-data-active:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-hover:text-gray-300"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Futás',
    icon: (
      <IconRun
        className="group-hover:text-secondary-600 group-data-active:text-primary group-data-active:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-hover:text-gray-300"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Asztalitenisz',
    icon: (
      <IconPingPong
        className="group-hover:text-secondary-600 group-data-active:text-primary group-data-active:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-hover:text-gray-300"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Súlylökés',
    icon: (
      <IconBallVolleyball
        className="group-hover:text-secondary-600 group-data-active:text-primary group-data-active:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-hover:text-gray-300"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Darts',
    icon: (
      <IconTargetArrow
        className="group-hover:text-secondary-600 group-data-active:text-primary group-data-active:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-hover:text-gray-300"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Kosárlabda',
    icon: (
      <IconBallBasketball
        className="group-hover:text-secondary-600 group-data-active:text-primary group-data-active:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-hover:text-gray-300"
        aria-hidden="true"
        stroke={1.5}
      />
    ),
  },
  {
    title: 'Főügyészi verseny',
    icon: (
      <FontAwesomeIcon
        className="group-hover:text-secondary-600 group-data-active:text-primary group-data-active:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-hover:text-gray-300"
        aria-hidden="true"
        icon={faSection}
      />
    ),
  },
  {
    title: 'Csapatverseny',
    icon: (
      <FontAwesomeIcon
        className="group-hover:text-secondary-600 group-data-active:text-primary group-data-active:dark:text-primary-400 me-2 size-4 text-gray-400 dark:text-gray-500 dark:group-hover:text-gray-300"
        aria-hidden="true"
        icon={faPeopleGroup}
      />
    ),
  },
] as const satisfies Array<Tab>;
