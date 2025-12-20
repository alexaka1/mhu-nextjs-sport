'use client';
import { IconPlayHandball } from '@tabler/icons-react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, type MouseEventHandler, type ReactNode, useEffect, useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from '@/app/lib/auth-client';
import { setTag } from '@sentry/nextjs';
import * as z from 'zod';
import { type DropDownLinks, type Menu, type SimpleLink } from '@/app/ui/menu-types';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon, User, X } from 'lucide-react';
import { AvatarFallback, AvatarImage, Avatar as AvatarShadcn } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DarkModeToggle } from '@/app/ui/dark-mode-toggle';

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
      className={`data-active:bg-primary data-active:dark:bg-primary-600 -mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-50 hover:text-gray-900 data-active:text-white dark:text-white dark:hover:text-gray-900`}
      data-active={pathname === href}
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
          <DisclosureButton
            className={`data-active:bg-primary data-active:dark:bg-primary-600 flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base leading-7 font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-50 dark:text-white`}
            data-active={items.some(({ href }) => href === pathname)}
          >
            {title}
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`${open ? 'rotate-180' : ''} size-5 flex-none`}
              aria-hidden="true"
            />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 space-y-2">
            {[...items, ...callsToAction].map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                href={item.href}
                onClick={onClick}
                className={`data-active:bg-primary data-active:dark:bg-primary-600 block rounded-lg py-2 pr-3 pl-6 text-sm leading-7 font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-50 dark:text-white`}
                data-active={pathname === item.href}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </DisclosurePanel>
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
      className={`hover:decoration-primary data-active:decoration-primary data-active:text-primary hover:dark:decoration-primary-400 data-active:dark:text-primary-600 text-sm leading-6 font-semibold text-gray-900 transition-colors duration-200 hover:text-white/80 hover:underline hover:decoration-1 data-active:font-extrabold data-active:underline data-active:decoration-2 data-active:drop-shadow-lg dark:text-white`}
      data-active={pathname === href || pathname.startsWith(href)}
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
      <PopoverButton
        className={`data-active:decoration-primary data-active:dark:text-primary-600 flex items-center gap-x-1 text-sm leading-6 font-semibold text-gray-900 data-active:font-extrabold data-active:underline data-active:decoration-2 data-active:drop-shadow-lg dark:text-white`}
        data-active={isActive}
      >
        {title}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`size-4 flex-none ${isActive ? 'dark:text-primary-600' : 'text-gray-400'}`}
          aria-hidden="true"
        />
      </PopoverButton>
      <PopoverBackdrop className="fixed inset-0 bg-black opacity-30" />

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 motion-safe:translate-y-1"
        enterTo="opacity-100 motion-safe:translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 motion-safe:translate-y-0"
        leaveTo="opacity-0 motion-safe:translate-y-1"
      >
        <PopoverPanel className="border-primary ring-primary ring-offset-primary absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl border bg-white shadow-lg dark:bg-gray-800">
          <div className="p-4">
            {items.map((item) => (
              <div
                key={item.name}
                className={`group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-900 ${pathname === item.href ? 'bg-primary-600 dark:bg-primary-600' : ''}`}
              >
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-950 group-hover:dark:bg-gray-800">
                  <FontAwesomeIcon
                    className="group-hover:text-primary group-hover:dark:text-primary-400/75 size-6 text-gray-600 dark:text-gray-400"
                    aria-hidden="true"
                    icon={item.icon}
                  />
                </div>
                <div className="flex-auto">
                  <PopoverButton
                    as={Link}
                    href={item.href}
                    className="block font-semibold text-gray-900 dark:text-white"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </PopoverButton>
                  <p
                    className={`mt-1 text-balance dark:text-white/95 ${pathname === item.href ? 'text-white' : 'text-gray-600'}`}
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
                className="group flex items-center justify-center gap-x-2.5 p-3 text-sm leading-6 font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              >
                <FontAwesomeIcon
                  className="group-hover:text-primary group-hover:dark:text-primary-400/75 size-5 flex-none text-gray-400"
                  aria-hidden="true"
                  icon={item.icon}
                />
                {item.name}
              </Link>
            ))}
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}

function LoginButton({ returnUrl, auth }: Readonly<{ returnUrl: string; auth: boolean }>): ReactNode {
  if (!auth) {
    return (
      <Button nativeButton={false} render={<Link href={`/login?${returnUrl}`} />}>
        Bejelentkezés
      </Button>
    );
  }
  return null;
}

function Avatar({ src, alt }: Readonly<{ src: string; alt: string }>) {
  return (
    <AvatarShadcn>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>
        <User />
      </AvatarFallback>
    </AvatarShadcn>
  );
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

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar src={avatar} alt={`${name} profilképe`} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>
              <span className="block text-sm" title={name}>
                {name}
              </span>
              <span className="block truncate text-sm opacity-80" title={email}>
                {email}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant={'destructive'}
              onClick={() => {
                void signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      window.location.href = pathname;
                    },
                  },
                });
              }}
            >
              Kijelentkezés
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

const deviceTypeSchema = z.enum(['browser', 'standalone']);

export default function Header({ menus }: Readonly<{ menus: Array<Menu> }>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const auth = session?.user != null;
  const name = session?.user.name ?? '';
  const email = session?.user.email ?? '';
  const avatar = session?.user.image ?? '';

  useEffect(() => {
    const deviceType = document.getElementById('device-type');
    if (deviceType != null) {
      const style = window.getComputedStyle(deviceType, '::after');
      const parsed = deviceTypeSchema.safeParse(style.content);
      setTag('device-type', parsed.success ? parsed.data : 'unknown');
    }
  }, []);

  const returnUrl = new URLSearchParams({ returnUrl: pathname });
  return (
    <>
      <header className="bg-gray-100 dark:bg-gray-900 print:hidden">
        <nav className="mx-auto flex max-w-7xl items-center p-6 lg:justify-between lg:px-8" aria-label="Elsődleges">
          <div className="flex lg:flex-1">
            <Link
              className="text-primary hover:text-primary/75 dark:text-primary-600 dark:hover:text-primary-400/75 block transition-colors duration-200"
              href="/"
            >
              <span className="sr-only">Főoldal</span>
              <div
                aria-hidden="true"
                className={`browser:after:content-['browser'] standalone:after:content-['standalone'] sr-only`}
                id={`device-type`}
              ></div>
              <IconPlayHandball size={40} />
            </Link>
          </div>
          <PopoverGroup as={'menu'} className="hidden lg:flex lg:gap-x-12">
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
          </PopoverGroup>
          <span className={`px-4 lg:hidden`}></span>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <span className={`hidden lg:block`}>
              <LoginButton returnUrl={returnUrl.toString()} auth={auth} />
            </span>
            <UserInfo name={name} email={email} avatar={avatar} pathname={pathname} auth={auth} />
          </div>
          <span className={`grow lg:hidden`}></span>
          <div className="flex lg:hidden">
            <Button
              type={'button'}
              variant={'ghost'}
              size={'icon'}
              onClick={() => {
                setMobileMenuOpen(true);
              }}
            >
              <span className="sr-only">Fő menü megnyitása</span>
              <MenuIcon aria-hidden="true" />
            </Button>
          </div>
        </nav>
        <Transition as={Fragment} show={mobileMenuOpen}>
          <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 motion-safe:translate-x-full"
              enterTo="opacity-100 motion-safe:translate-x-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 motion-safe:translate-x-0"
              leaveTo="opacity-0 motion-safe:translate-x-full"
            >
              <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900">
                <div className="flex items-center justify-between">
                  <Link
                    className="text-primary hover:text-primary/75 dark:text-primary-600 dark:hover:text-primary-400/75 block transition-colors duration-200"
                    href="/"
                  >
                    <span className="sr-only">Főoldal</span>
                    <IconPlayHandball size={40} />
                  </Link>
                  <Button
                    type={'button'}
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                    variant={'ghost'}
                    size={'icon'}
                  >
                    <span className="sr-only">Menü bezárása</span>
                    <X aria-hidden="true" />
                  </Button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <nav aria-label="Elsődleges" className="space-y-2 py-6">
                      {menus.map((menu) => {
                        switch (menu.type) {
                          case 'simple':
                            return (
                              <DialogLink
                                key={menu.node.href}
                                href={menu.node.href}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                }}
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
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                }}
                                callsToAction={menu.node.callsToAction}
                              />
                            );
                        }
                      })}
                    </nav>
                    <div className="py-6">
                      <LoginButton returnUrl={returnUrl.toString()} auth={auth} />
                      <DarkModeToggle />
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </Dialog>
        </Transition>
      </header>
    </>
  );
}
