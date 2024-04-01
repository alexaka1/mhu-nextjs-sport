import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ReactNode } from 'react';
import './globals.css';
import { APP_DEFAULT_TITLE, APP_DESCRIPTION, APP_NAME, APP_TITLE_TEMPLATE } from './manifest';
import Footer from '@/app/ui/footer';
import InstallBanner from '@/app/ui/install-banner';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  creator: '@alexaka1',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [
      {
        url: 'https://sport.martossy.hu/screenshots/landing-desktop.webp',
        height: 1884,
        width: 1042,
      },
      {
        url: 'https://sport.martossy.hu/screenshots/landing-mobile.webp',
        height: 944,
        width: 1169,
      },
    ],
    locale: 'hu_HU',
    url: 'https://sport.martossy.hu/',
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [
      'https://sport.martossy.hu/screenshots/landing-desktop.webp',
      'https://sport.martossy.hu/screenshots/landing-mobile.webp',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="hu" className={`${GeistSans.variable} ${GeistMono.variable} subpixel-antialiased`}>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="32x32" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/svg+xml" href="/favicon-dark.svg" media={`(prefers-color-scheme: dark)`} />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#650e1d" />
        <meta name="theme-color" content="#650e1d" />
      </head>
      <body className={`flex min-h-svh flex-col dark:bg-gray-800`}>
        <InstallBanner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
