'use client';
import { IconPlayHandball } from '@tabler/icons-react';
import Link from 'next/link';
import Button from '@/app/ui/buttons/link';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, MouseEventHandler, ReactNode, useEffect, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { usePathname } from 'next/navigation';
import { signOut, getSession } from 'next-auth/react';
import Image from 'next/image';
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';

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

function DialogLink({
  href,
  children,
  onClick,
}: Readonly<{
  href: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLElement> | undefined;
}>) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200 text-bg-contrast hover:bg-gray-50 ${pathname === href ? 'bg-primary dark:bg-primary-600' : ''}`}
    >
      {children}
    </Link>
  );
}

function DisclosureMenu({
  title,
  items,
  callsToAction,
  onClick,
}: Readonly<DropDownLinks & { onClick?: MouseEventHandler<HTMLElement> | undefined }>) {
  const pathname = usePathname();
  return (
    <Disclosure as="div" className="-mx-3">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 transition-colors duration-200 text-bg-contrast hover:bg-gray-50 ${items.some(({ href }) => href === pathname) ? 'bg-primary  dark:bg-primary-600' : ''}`}
          >
            {title}
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`${open ? 'rotate-180' : ''} size-5 flex-none`}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 space-y-2">
            {[...items, ...callsToAction].map((item) => (
              <Disclosure.Button
                key={item.name}
                as={Link}
                href={item.href}
                onClick={onClick}
                className={`block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 transition-colors duration-200 text-bg-contrast hover:bg-gray-50 ${pathname === item.href ? 'bg-primary dark:bg-primary-600' : ''}`}
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
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`text-sm leading-6 transition-colors duration-200 hover:underline hover:decoration-primary hover:decoration-1 hover:text-bg-contrast/80 hover:dark:decoration-primary-400 ${pathname === href ? 'font-extrabold underline decoration-primary decoration-2 drop-shadow-lg text-primary dark:text-primary-600' : 'font-semibold text-bg-contrast'}`}
    >
      {children}
    </Link>
  );
}

function PopoverMenu({ title, items, callsToAction }: Readonly<DropDownLinks>) {
  const pathname = usePathname();
  const isActive = items.some(({ href }) => href === pathname);
  return (
    <Popover className="relative">
      <Popover.Button
        className={`${isActive ? 'font-extrabold underline decoration-primary decoration-2 drop-shadow-lg dark:text-primary-600' : 'font-semibold text-bg-contrast'} flex items-center gap-x-1 text-sm leading-6 text-primary`}
      >
        {title}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`size-4 flex-none ${isActive ? 'dark:text-primary-600' : 'text-gray-400'}`}
          aria-hidden="true"
        />
      </Popover.Button>
      <Popover.Overlay className="fixed inset-0 opacity-30 bg-black" />

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
                className={`group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-900 ${pathname === item.href ? 'bg-primary-600 dark:bg-primary-600' : ''}`}
              >
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-950 group-hover:dark:bg-gray-800">
                  <FontAwesomeIcon
                    className="size-6 text-gray-600 group-hover:text-primary dark:text-gray-400 group-hover:dark:text-primary-400/75"
                    aria-hidden="true"
                    icon={item.icon}
                  />
                </div>
                <div className="flex-auto">
                  <Popover.Button as={Link} href={item.href} className="block font-semibold text-bg-contrast">
                    {item.name}
                    <span className="absolute inset-0" />
                  </Popover.Button>
                  <p
                    className={`mt-1 text-balance dark:text-bg-contrast/95 ${pathname === item.href ? 'text-bg-contrast' : 'text-gray-600'}`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:bg-gray-700">
            {callsToAction.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 transition-colors duration-200 text-gray-900 hover:bg-gray-100 dark:text-bg-contrast dark:hover:bg-gray-600"
              >
                <FontAwesomeIcon
                  className="size-5 flex-none text-gray-400 group-hover:text-primary group-hover:dark:text-primary-400/75"
                  aria-hidden="true"
                  icon={item.icon}
                />
                {item.name}
              </Link>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

function LoginButton({ returnUrl, auth }: Readonly<{ returnUrl: string; auth: boolean }>): ReactNode {
  if (!auth) {
    return <Button href={`/login?${returnUrl}`}>Bejelentkezés</Button>;
  }
  return null;
}

function UserInfo({
  name,
  email,
  avatar,
  pathname,
  auth,
}: Readonly<{
  name: string;
  email: string;
  avatar: string;
  pathname: string;
  auth: boolean;
}>): ReactNode {
  if (!auth) {
    return null;
  }

  function Avatar({ src, alt }: Readonly<{ src: string; alt: string }>) {
    if (src === '') {
      return (
        <FontAwesomeIcon
          icon={faUser}
          className={`size-6 items-center justify-center rounded-full text-bg-contrast`}
          aria-hidden="true"
        />
      );
    }
    return (
      <img className="size-8 items-center justify-center rounded-full" src={src} alt={alt} width={36} height={36} />
    );
  }

  return (
    <>
      <Popover className="relative">
        <Popover.Button
          className={`flex rounded-full text-sm focus:ring-4 focus:ring-primary-600 md:me-0 dark:focus:ring-primary-200`}
        >
          <Avatar src={avatar} alt={`${name} profilképe`} />
        </Popover.Button>
        <Popover.Overlay className="fixed inset-0 opacity-30 bg-black" />
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 motion-safe:translate-y-1"
          enterTo="opacity-100 motion-safe:translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 motion-safe:translate-y-0"
          leaveTo="opacity-0 motion-safe:translate-y-1"
        >
          <Popover.Panel className="absolute -left-8 z-50 my-4 list-none divide-y rounded-lg text-base shadow divide-gray-100 bg-white dark:divide-gray-600 dark:bg-gray-700">
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-bg-contrast" title={name}>
                {name}
              </span>
              <span className="block truncate text-sm text-gray-500 dark:text-bg-contrast/80" title={email}>
                {email}
              </span>
            </div>
            <ul className="py-2">
              <li>
                <Popover.Button
                  onClick={() => {
                    void signOut({ redirect: true, callbackUrl: pathname });
                  }}
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Kijelentkezés
                </Popover.Button>
              </li>
            </ul>
          </Popover.Panel>
        </Transition>
      </Popover>

      <button
        className={`hidden rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-colors
            duration-200
            ease-in-out bg-primary text-bg-contrast hover:bg-primary-600 focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-2 focus-visible:outline-primary-600 active:bg-primary-800`}
        onClick={() => {
          void signOut({ redirect: true, callbackUrl: pathname });
        }}
      >
        Kijelentkezés
      </button>
    </>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const pathname = usePathname();
  useEffect(() => {
    async function checkAuth() {
      const session = await getSession();
      if (session?.user != null) {
        setName(session.user.name ?? '');
        setEmail(session.user.email ?? '');
        setAvatar(session.user.image ?? '');
      }
      setAuth(session?.user != null);
    }

    void checkAuth();
  }, []);

  const returnUrl = new URLSearchParams({ returnUrl: pathname });
  return (
    <>
      <header className="bg-gray-100 dark:bg-gray-900">
        <nav className="mx-auto flex max-w-7xl items-center p-6 lg:justify-between lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link
              className="block transition-colors duration-200 text-primary hover:text-primary/75 dark:text-primary-600 dark:hover:text-primary-400/75"
              href="/"
            >
              <span className="sr-only">Főoldal</span>
              <IconPlayHandball size={40} />
            </Link>
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
          <span className={`px-4 lg:hidden`}></span>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <span className={`hidden lg:block`}>
              <LoginButton returnUrl={returnUrl.toString()} auth={auth} />
            </span>
            <UserInfo name={name} email={email} avatar={avatar} pathname={pathname} auth={auth} />
          </div>
          <span className={`grow lg:hidden`}></span>
          <div className="flex lg:hidden">
            <button
              type={'button'}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors duration-200 text-primary hover:text-primary/75 dark:text-primary-600 dark:hover:text-primary-400/75"
              onClick={() => setMobileMenuOpen(true)}
            >
              {/*<input type="checkbox" id="toggler" className={``} />*/}
              <span className="sr-only">Fő menü megnyitása</span>
              <FontAwesomeIcon className={`size-6`} icon={faBars} aria-hidden="true" />
            </button>
          </div>
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
                    className="block transition-colors duration-200 text-primary hover:text-primary/75 dark:text-primary-600 dark:hover:text-primary-400/75"
                    href="/"
                  >
                    <span className="sr-only">Főoldal</span>
                    <IconPlayHandball size={40} />
                  </Link>
                  <button
                    type={'button'}
                    onClick={() => setMobileMenuOpen(false)}
                    // htmlFor="toggler"
                    className="-m-2.5 rounded-md p-2.5 transition-transform duration-200 text-gray-700 dark:text-bg-contrast"
                  >
                    <span className="sr-only">Menü bezárása</span>
                    <FontAwesomeIcon icon={faXmark} className="size-6 hover:scale-105" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {menus.map((menu) => {
                        switch (menu.type) {
                          case 'simple':
                            return (
                              <DialogLink
                                key={menu.node.href}
                                href={menu.node.href}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {menu.node.children}
                              </DialogLink>
                            );
                          case 'dialog':
                            return (
                              <DisclosureMenu
                                key={menu.node.title}
                                title={menu.node.title}
                                items={menu.node.items}
                                onClick={() => setMobileMenuOpen(false)}
                                callsToAction={menu.node.callsToAction}
                              />
                            );
                        }
                      })}
                    </div>
                    <div className="py-6">
                      <LoginButton returnUrl={returnUrl.toString()} auth={auth} />
                    </div>
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
