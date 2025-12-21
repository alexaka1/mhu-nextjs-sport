import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { type ReactNode } from 'react';
import './globals.css';
import { APP_DEFAULT_TITLE, APP_DESCRIPTION, APP_NAME, APP_TITLE_TEMPLATE } from './manifest';
import Footer from '@/app/ui/footer';
import InstallBanner from '@/app/ui/install-banner';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from 'uploadthing/server';
import { ourFileRouter } from '@/app/api/uploadthing/core';
import { Providers } from '@/app/providers';
import { Toaster } from '@/components/ui/sonner';
import { env } from '@/app/lib/env';

export const metadata: Metadata = {
  metadataBase:
    process.env.NODE_ENV === 'development' ?
      'http://localhost:3000'
    : (env.VERCEL_PROJECT_PRODUCTION_URL ?? 'https://sport.martossy.hu'),
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
        url: '/screenshots/landing-desktop-2025.webp',
        height: 1884,
        width: 1042,
      },
      {
        url: '/screenshots/landing-mobile-2025.webp',
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
    images: ['/screenshots/landing-desktop-2025.webp', '/screenshots/landing-mobile-2025.webp'],
    creator: '@alexaka1',
  },
  other: {
    'darkreader-lock': 'true',
  },
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${geistSans.variable} ${geistMono.variable} subpixel-antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="32x32" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/svg+xml" href="/favicon-dark.svg" media={`(prefers-color-scheme: dark)`} />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#650e1d" />
        <meta name="theme-color" content="#650e1d" />
      </head>
      <body className={`flex min-h-svh flex-col dark:bg-gray-800`}>
        <Providers>
          <InstallBanner />
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          {children}
          <Footer />
          <Toaster position={'top-center'} />
          <SpeedInsights />
          <Analytics debug={true} />
        </Providers>
      </body>
    </html>
  );
}
