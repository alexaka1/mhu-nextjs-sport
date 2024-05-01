import { withSentryConfig } from '@sentry/nextjs';
import withSerwistInit from '@serwist/next';
import { fileURLToPath } from 'node:url';
import createJiti from 'jiti';
import { withAxiom } from 'next-axiom';

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti('./src/app/lib/env');

const imageSrc = `https://utfs.io/ https://source.unsplash.com/ https://avatars.githubusercontent.com/ https://*.googleusercontent.com/ https://*.upcloudobjects.com/ https://app.simplelogin.io/`;
const cspEndpoint = {
  group: 'csp-endpoint',
  max_age: 10886400,
  endpoints: [
    {
      url: process.env.NEXT_PUBLIC_SENTRY_REPORT_URI,
    },
  ],
  include_subdomains: true,
};
const reportUris = cspEndpoint.endpoints.map((endpoint) => new URL(endpoint.url).origin).join(' ');

// CSP headers here is set based on Next.js recommendations:
// https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy
/**
 * @param nonce {string | undefined}
 * @returns {string}
 */
function createCspHeaders(nonce) {
  const defaultsCSPHeaders = `
    style-src 'self' 'unsafe-inline';
    object-src https://utfs.io/;
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
    report-uri ${cspEndpoint.endpoints.at(0)?.url};
  `;
  //report-to ${cspEndpoint.group};

  // when environment is preview enable unsafe-inline scripts for vercel preview feedback/comments feature
  // and whitelist vercel's domains based on:
  // https://vercel.com/docs/workflow-collaboration/comments/specialized-usage#using-a-content-security-policy
  // and white-list vitals.vercel-insights
  // based on: https://vercel.com/docs/speed-insights#content-security-policy
  if (process.env.VERCEL_ENV === 'preview') {
    return `
      ${defaultsCSPHeaders}
      default-src 'none';
      script-src 'self' https://vercel.live/ https://vercel.com 'unsafe-inline';
      connect-src 'self' https://vercel.live/ https://vercel.com https://vitals.vercel-insights.com https://*.pusher.com/ wss://*.pusher.com/ https://utfs.io/ ${reportUris} https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/ https://uploadthing.com/api/serverCallback;
      img-src 'self' https://vercel.live/ https://vercel.com https://sockjs-mt1.pusher.com/ data: blob: ${imageSrc};
      frame-src 'self' https://vercel.live/ https://vercel.com https://www.google.com/ https://utfs.io/ https://docs.google.com/;
      style-src-elem 'self' 'unsafe-inline' https://vercel.live/;
      manifest-src 'self';
      worker-src 'self' blob:;
      font-src 'self' https://vercel.live/;
      `;
  }

  // for production environment white-list vitals.vercel-insights
  // based on: https://vercel.com/docs/speed-insights#content-security-policy
  if (process.env.NODE_ENV === 'production') {
    // return `
    //   ${defaultsCSPHeaders}
    //   default-src 'none';
    //   script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    //   img-src 'self' blob: data:;
    //   connect-src 'self' https://vitals.vercel-insights.com;
    //   `;
    return `
      ${defaultsCSPHeaders}
      default-src 'none';
      script-src 'self' 'unsafe-inline';
      manifest-src 'self';
      worker-src 'self' blob:;
      img-src 'self' blob: data: ${imageSrc};
      connect-src 'self' https://vitals.vercel-insights.com ${reportUris} ${imageSrc} https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/ https://uploadthing.com/api/serverCallback;
      font-src 'self';
      frame-src https://www.google.com/ https://utfs.io/ https://docs.google.com/;
      `;
  }
  // for dev environment enable unsafe-eval for hot-reload
  // return `
  //   ${defaultsCSPHeaders}
  //   default-src 'self';
  //   script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval';
  //   img-src 'self' blob: data:;
  // `;
  return `
    ${defaultsCSPHeaders}
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.vercel-scripts.com/;
    worker-src 'self' blob:;
    img-src 'self' blob: data: ${imageSrc};
    connect-src 'self' ${reportUris} https://utfs.io/ https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/ https://uploadthing.com/api/serverCallback;
    font-src 'self';
    frame-src 'self' https://www.google.com/ https://utfs.io/ https://docs.google.com/;
  `;
}

const cspHeaders = {
  source: '/(.*)',
  headers: [
    {
      key: 'Content-Security-Policy',
      value: createCspHeaders(undefined).replace(/\n/g, ''),
    },
    {
      key: 'Report-To',
      value: JSON.stringify(cspEndpoint).replace(/\n/g, ''),
    },
  ],
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '*.upcloudobjects.com',
      },
    ],
  },
  async headers() {
    return [cspHeaders];
  },
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withAxiomConfig = withAxiom(nextConfig);

const withSerwist = withSerwistInit({
  swSrc: 'src/app/lib/sw.ts',
  swDest: 'public/sw.js',
});

export default withSentryConfig(
  withSerwist(withAxiomConfig),
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: false,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers. (increases server load)
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of
    // client-side errors will fail.
    // tunnelRoute: '/monitoring',

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: process.env.NODE_ENV !== 'development',

    // Enables automatic instrumentation of Vercel Cron Monitors.
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  },
);
