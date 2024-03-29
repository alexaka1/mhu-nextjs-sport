'use client';
import { IconPlayHandball } from '@tabler/icons-react';
import Link from 'next/link';
import Button from '@/app/ui/buttons/link';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, ReactNode, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: faBars },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: faBars },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: faBars },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: faBars },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: faBars },
];
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: faBars },
  { name: 'Contact sales', href: '#', icon: faBars },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function DialogLink({ href, children }: Readonly<{ href: string; children: ReactNode }>) {
  return (
    <a
      href={href}
      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    >
      {children}
    </a>
  );
}

function DisclosureMenu({
  title,
  items,
  callsToAction,
}: Readonly<{
  title: string;
  items: { name: string; description: string; href: string; icon: IconDefinition }[];
  callsToAction: { name: string; href: string; icon: IconDefinition }[];
}>) {
  return (
    <Disclosure as="div" className="-mx-3">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
            {title}
            <ChevronDownIcon className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')} aria-hidden="true" />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 space-y-2">
            {[...items, ...callsToAction].map((item) => (
              <Disclosure.Button
                key={item.name}
                as={Link}
                href={item.href}
                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

function PopoverLink({ href, children }: Readonly<{ href: string; children: ReactNode }>) {
  return (
    <Link href={href} className="text-sm font-semibold leading-6 text-gray-900">
      {children}
    </Link>
  );
}

function PopoverMenu({
  title,
  items,
  callsToAction,
}: Readonly<{
  title: string;
  items: { name: string; description: string; href: string; icon: IconDefinition }[];
  callsToAction: { name: string; href: string; icon: IconDefinition }[];
}>) {
  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        {title}
        <ChevronDownIcon className="size-5 flex-none text-gray-400" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 bg-white ring-gray-900/5">
          <div className="p-4">
            {items.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
              >
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <FontAwesomeIcon
                    className="size-6 text-gray-600 group-hover:text-indigo-600"
                    aria-hidden="true"
                    icon={item.icon}
                  />
                </div>
                <div className="flex-auto">
                  <a href={item.href} className="block font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
              >
                <FontAwesomeIcon className="size-5 flex-none text-gray-400" aria-hidden="true" icon={item.icon} />
                {item.name}
              </a>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="{/*dark:bg-gray-900*/} bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link className="block text-primary dark:text-primary-600" href="/">
              <span className="sr-only">Főoldal</span>
              <IconPlayHandball size={40} />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon className={`size-6`} icon={faBars} aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <PopoverMenu title={'Product'} items={products} callsToAction={callsToAction} />

            <PopoverLink href={'#'}>Features</PopoverLink>
            <PopoverLink href={'#'}>Marketplace</PopoverLink>
            <PopoverLink href={'#'}>Company</PopoverLink>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button href={'/login'}>Bejelentkezés</Button>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto p-6 bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link className="block text-primary dark:text-primary-600" href="/">
                <span className="sr-only">Főoldal</span>
                <IconPlayHandball size={40} />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="size-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <DisclosureMenu title={'Product'} items={products} callsToAction={callsToAction} />
                  <DialogLink href={'#'}>Features</DialogLink>
                  <DialogLink href={'#'}>Marketplace</DialogLink>
                  <DialogLink href={'#'}>Company</DialogLink>
                </div>
                <div className="py-6">
                  <Button href={'/login'}>Bejelentkezés</Button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {/*<header className="bg-white dark:bg-gray-900">*/}
      {/*  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">*/}
      {/*    <div className="flex h-16 items-center justify-between">*/}
      {/*      <div className="flex-1 md:flex md:items-center md:gap-12">*/}
      {/*        <Link className="block text-primary dark:text-primary-600" href="/">*/}
      {/*          <span className="sr-only">Főoldal</span>*/}
      {/*          <IconPlayHandball size={48} />*/}
      {/*        </Link>*/}
      {/*      </div>*/}

      {/*      <div className="md:flex md:items-center md:gap-12">*/}
      {/*        <nav aria-label="Global" className="hidden md:block">*/}
      {/*          <ul className="flex items-center gap-6 text-sm">*/}
      {/*            <li>*/}
      {/*              <a*/}
      {/*                className="transition text-gray-500 hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"*/}
      {/*                href="#"*/}
      {/*              >*/}
      {/*                About*/}
      {/*              </a>*/}
      {/*            </li>*/}

      {/*            <li>*/}
      {/*              <a*/}
      {/*                className="transition text-gray-500 hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"*/}
      {/*                href="#"*/}
      {/*              >*/}
      {/*                Careers*/}
      {/*              </a>*/}
      {/*            </li>*/}

      {/*            <li>*/}
      {/*              <a*/}
      {/*                className="transition text-gray-500 hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"*/}
      {/*                href="#"*/}
      {/*              >*/}
      {/*                History*/}
      {/*              </a>*/}
      {/*            </li>*/}

      {/*            <li>*/}
      {/*              <a*/}
      {/*                className="transition text-gray-500 hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"*/}
      {/*                href="#"*/}
      {/*              >*/}
      {/*                Services*/}
      {/*              </a>*/}
      {/*            </li>*/}

      {/*            <li>*/}
      {/*              <a*/}
      {/*                className="transition text-gray-500 hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"*/}
      {/*                href="#"*/}
      {/*              >*/}
      {/*                Projects*/}
      {/*              </a>*/}
      {/*            </li>*/}

      {/*            <li>*/}
      {/*              <a*/}
      {/*                className="transition text-gray-500 hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"*/}
      {/*                href="#"*/}
      {/*              >*/}
      {/*                Blog*/}
      {/*              </a>*/}
      {/*            </li>*/}
      {/*          </ul>*/}
      {/*        </nav>*/}
      {/*        <div className="flex items-center gap-4">*/}
      {/*          <div className="invisible sm:invisible sm:gap-4">*/}
      {/*            <Button href={'/login'}>Bejelentkezés</Button>*/}
      {/*          </div>*/}

      {/*          <div className="block md:hidden">*/}
      {/*            <button*/}
      {/*              onClick={() => setMobileMenuOpen(true)}*/}
      {/*              className="rounded p-2 transition bg-gray-100 text-gray-600 hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"*/}
      {/*            >*/}
      {/*              <FontAwesomeIcon className={`size-5`} icon={faBars} />*/}
      {/*            </button>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</header>*/}
    </>
  );
}
