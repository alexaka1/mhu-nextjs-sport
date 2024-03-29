'use client';
import { IconPlayHandball } from '@tabler/icons-react';
import Link from 'next/link';
import Button from '@/app/ui/buttons/link';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, ReactNode, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';

type SimpleLink = { href: string; children: ReactNode };
type DropDownLinks = {
  title: string;
  items: { name: string; description: string; href: string; icon: IconDefinition }[];
  callsToAction: { name: string; href: string; icon: IconDefinition }[];
};
type Menu =
  | {
      type: 'simple';
      node: SimpleLink;
    }
  | {
      type: 'dialog';
      node: DropDownLinks;
    };
const menus: Menu[] = [
  {
    type: 'simple',
    node: { href: '/sportagak', children: 'Sportágak' },
  },
  {
    type: 'simple',
    node: { href: '/helyszinek', children: 'Helyszínek' },
  },
  {
    type: 'simple',
    node: { href: '/szallas', children: 'Szállás' },
  },
  {
    type: 'simple',
    node: { href: '/programok', children: 'Programok' },
  },
  {
    type: 'simple',
    node: { href: '/eredmenyek', children: 'Eredmények' },
  },
  // {
  //   type: 'simple',
  //   node: { href: '/koszonto', children: 'Beköszöntő' },
  // },
];

function DialogLink({ href, children }: Readonly<{ href: string; children: ReactNode }>) {
  return (
    <a
      href={href}
      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-bg-contrast hover:bg-gray-50"
    >
      {children}
    </a>
  );
}

function DisclosureMenu({ title, items, callsToAction }: Readonly<DropDownLinks>) {
  return (
    <Disclosure as="div" className="-mx-3">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-bg-contrast hover:bg-gray-50">
            {title}
            <ChevronDownIcon className={`${open ? 'rotate-180' : ''} size-5 flex-none`} aria-hidden="true" />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 space-y-2">
            {[...items, ...callsToAction].map((item) => (
              <Disclosure.Button
                key={item.name}
                as={Link}
                href={item.href}
                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-bg-contrast hover:bg-gray-50"
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

function PopoverLink({ href, children }: Readonly<SimpleLink>) {
  return (
    <Link href={href} className="text-sm font-semibold leading-6 text-bg-contrast">
      {children}
    </Link>
  );
}

function PopoverMenu({ title, items, callsToAction }: Readonly<DropDownLinks>) {
  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-bg-contrast">
        {title}
        <ChevronDownIcon className="size-5 flex-none text-gray-400" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 motion-safe:translate-y-1"
        enterTo="opacity-100 motion-safe:translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 motion-safe:translate-y-0"
        leaveTo="opacity-0 motion-safe:translate-y-1"
      >
        <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl border shadow-lg bg-white border-primary ring-primary ring-offset-primary dark:bg-gray-800">
          <div className="p-4">
            {items.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-950 group-hover:dark:bg-gray-800">
                  <FontAwesomeIcon
                    className="size-6 text-gray-600 group-hover:text-primary dark:text-gray-400 group-hover:dark:text-primary-400/75"
                    aria-hidden="true"
                    icon={item.icon}
                  />
                </div>
                <div className="flex-auto">
                  <a href={item.href} className="block font-semibold text-bg-contrast">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600 dark:text-bg-contrast/95">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:bg-gray-700">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 dark:text-bg-contrast dark:hover:bg-gray-600"
              >
                <FontAwesomeIcon
                  className="size-5 flex-none text-gray-400 group-hover:text-primary group-hover:dark:text-primary-400/75"
                  aria-hidden="true"
                  icon={item.icon}
                />
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
      <header className="bg-gray-100 dark:bg-gray-900">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link
              className="block text-primary hover:text-primary/75 dark:text-primary-600 dark:hover:text-primary-400/75"
              href="/"
            >
              <span className="sr-only">Főoldal</span>
              <IconPlayHandball size={40} />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type={'button'}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary hover:text-primary/75 dark:text-primary-600 dark:hover:text-primary-400/75"
              onClick={() => setMobileMenuOpen(true)}
            >
              {/*<input type="checkbox" id="toggler" className={``} />*/}
              <span className="sr-only">Fő menü megnyitása</span>
              <FontAwesomeIcon className={`size-6`} icon={faBars} aria-hidden="true" />
            </button>
          </div>
          <Popover.Group as={'menu'} className="hidden lg:flex lg:gap-x-12">
            {menus.map((menu) => {
              switch (menu.type) {
                case 'simple':
                  return (
                    <PopoverLink key={menu.node.href} href={menu.node.href}>
                      {menu.node.children}
                    </PopoverLink>
                  );
                case 'dialog':
                  return (
                    <PopoverMenu
                      key={menu.node.title}
                      title={menu.node.title}
                      items={menu.node.items}
                      callsToAction={menu.node.callsToAction}
                    />
                  );
              }
            })}
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button href={'/login'}>Bejelentkezés</Button>
          </div>
          {/*<div className="hidden lg:flex lg:flex-1 lg:justify-end">*/}
          {/*  <Link href={`/fiok`} title={`Fiókom`}>*/}
          {/*    <Image*/}
          {/*      className="inline-block size-12 rounded-full ring-1 ring-white"*/}
          {/*      src="https://utfs.io/f/ce34ec0d-6cae-41de-b552-0059d9b027ef-c9cbbw.jpg"*/}
          {/*      alt="Avatar"*/}
          {/*      width={0}*/}
          {/*      height={0}*/}
          {/*      quality={100}*/}
          {/*    />*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </nav>
        <Transition as={Fragment} show={mobileMenuOpen}>
          <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10 " />
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 motion-safe:translate-x-full"
              enterTo="opacity-100 motion-safe:translate-x-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 motion-safe:translate-x-0"
              leaveTo="opacity-0 motion-safe:translate-x-full"
            >
              <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto p-6 bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900">
                <div className="flex items-center justify-between">
                  <Link
                    className="block text-primary hover:text-primary/75 dark:text-primary-600 dark:hover:text-primary-400/75"
                    href="/"
                  >
                    <span className="sr-only">Főoldal</span>
                    <IconPlayHandball size={40} />
                  </Link>
                  <button
                    type={'button'}
                    onClick={() => setMobileMenuOpen(false)}
                    // htmlFor="toggler"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-bg-contrast"
                  >
                    <span className="sr-only">Menü bezárása</span>
                    <XMarkIcon className="size-6 hover:scale-105" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {menus.map((menu) => {
                        switch (menu.type) {
                          case 'simple':
                            return (
                              <DialogLink key={menu.node.href} href={menu.node.href}>
                                {menu.node.children}
                              </DialogLink>
                            );
                          case 'dialog':
                            return (
                              <DisclosureMenu
                                key={menu.node.title}
                                title={menu.node.title}
                                items={menu.node.items}
                                callsToAction={menu.node.callsToAction}
                              />
                            );
                        }
                      })}
                    </div>
                    <div className="py-6">
                      <Button href={'/login'}>Bejelentkezés</Button>
                    </div>
                    {/*<div className="py-6">*/}
                    {/*  <Link href={`/fiok`} title={`Fiókom`}>*/}
                    {/*    <Image*/}
                    {/*      className="inline-block size-12 rounded-full ring-1 ring-white"*/}
                    {/*      src="https://utfs.io/f/ce34ec0d-6cae-41de-b552-0059d9b027ef-c9cbbw.jpg"*/}
                    {/*      alt="Avatar"*/}
                    {/*      width={0}*/}
                    {/*      height={0}*/}
                    {/*      quality={100}*/}
                    {/*    />*/}
                    {/*  </Link>*/}
                    {/*</div>*/}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition>
      </header>
    </>
  );
}
