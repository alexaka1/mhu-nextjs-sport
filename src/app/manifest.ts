import { type MetadataRoute } from 'next';
import { currentYear } from '@/app/ui/menus/current-year';

export const APP_NAME = 'Ügyészségi sporttalálkozó';
export const APP_DEFAULT_TITLE = 'Ügyészségi sporttalálkozó';
export const APP_TITLE_TEMPLATE = '%s | Ügyészségi sporttalálkozó';
export const APP_DESCRIPTION = 'Ügyészségi sporttalálkozó weboldala.';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_NAME,
    short_name: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    id: '/?source=pwa',
    start_url: '/',
    scope: '/',
    icons: [
      {
        sizes: '1024x1024',
        src: '/favicon/maskable_icon.png',
        type: 'image/png',
        // @ts-expect-error until Next officially supports it
        purpose: 'any maskable',
      },
      {
        sizes: '512x512',
        src: '/favicon/maskable_icon_x512.png',
        type: 'image/png',
        // @ts-expect-error until Next officially supports it
        purpose: 'any maskable',
      },
      {
        sizes: '192x192',
        src: '/favicon/maskable_icon_x192.png',
        type: 'image/png',
      },
      {
        sizes: 'any',
        src: '/favicon.svg',
        purpose: 'monochrome',
      },
    ],
    theme_color: '#650e1d',
    background_color: '#650e1d',
    display_override: ['standalone', 'fullscreen', 'minimal-ui', 'browser'],
    display: 'standalone',
    orientation: 'portrait-primary',
    screenshots: [
      {
        src: '/screenshots/landing-desktop-2025.webp',
        sizes: '1920x1080',
        type: 'image/webp',
        form_factor: 'wide',
        label: 'Főoldal 2025',
      },
      {
        src: '/screenshots/landing-desktop.webp',
        sizes: '1920x1080',
        type: 'image/webp',
        form_factor: 'wide',
        label: 'Főoldal',
      },
      {
        src: '/screenshots/greeting-desktop.webp',
        sizes: '1920x1080',
        type: 'image/webp',
        form_factor: 'wide',
        label: 'Köszöntő',
      },
      {
        src: '/screenshots/landing-mobile-2025.webp',
        sizes: '721x1601',
        type: 'image/webp',
        form_factor: 'narrow',
        label: 'Főoldal 2025',
      },
      {
        src: '/screenshots/landing-mobile.webp',
        sizes: '721x1601',
        type: 'image/webp',
        form_factor: 'narrow',
        label: 'Főoldal',
      },
      {
        src: '/screenshots/greeting-mobile.webp',
        sizes: '721x1601',
        type: 'image/webp',
        form_factor: 'narrow',
        label: 'Köszöntő',
      },
      {
        src: '/screenshots/menus-mobile.webp',
        sizes: '721x1601',
        type: 'image/webp',
        form_factor: 'narrow',
        label: 'Menü',
      },
    ],
    shortcuts: [
      {
        name: 'Eredmények megtekintése',
        short_name: 'Eredmények',
        description: 'Eredmények megtekintése',
        url: `/${currentYear}/eredmenyek?utm_source=homescreen`,
        icons: [
          {
            src: '/icons/report-analytics.svg',
            sizes: '96x96',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Programok megtekintése',
        short_name: 'Programok',
        description: 'Programok megtekintése az eseményen',
        url: `/${currentYear}/programok?utm_source=homescreen`,
        icons: [{ src: '/icons/calendar.svg', sizes: '96x96', type: 'image/svg+xml' }],
      },
      {
        name: 'Helyszínek megtekintése',
        short_name: 'Helyszínek',
        description: 'Helyszínek megtekintése az eseményen',
        url: `/${currentYear}/helyszinek?utm_source=homescreen`,
        icons: [{ src: '/icons/soccer-field.svg', sizes: '96x96', type: 'image/svg+xml' }],
      },
    ],
  };
}
