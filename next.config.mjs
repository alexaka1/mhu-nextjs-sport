import { withSentryConfig } from '@sentry/nextjs';
import withSerwistInit from '@serwist/next';

// CSP headers here is set based on Next.js recommendations:
// https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy

/**
 * @param nonce {string | undefined}
 * @returns {string}
 */
export const createCspHeaders = (nonce) => {
  const defaultsCSPHeaders = `
    style-src 'self';
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `;

  // when environment is preview enable unsafe-inline scripts for vercel preview feedback/comments feature
  // and whitelist vercel's domains based on:
  // https://vercel.com/docs/workflow-collaboration/comments/specialized-usage#using-a-content-security-policy
  // and white-list vitals.vercel-insights
  // based on: https://vercel.com/docs/speed-insights#content-security-policy
  if (process.env?.VERCEL_ENV === "preview") {
    return `
      ${defaultsCSPHeaders}
      default-src 'none';
      script-src 'self' https://vercel.live/ https://vercel.com 'unsafe-inline';
      connect-src 'self' https://vercel.live/ https://vercel.com https://vitals.vercel-insights.com https://sockjs-mt1.pusher.com/ wss://ws-mt1.pusher.com/;
      img-src 'self' https://vercel.live/ https://vercel.com https://sockjs-mt1.pusher.com/ data: blob:;
      frame-src 'self' https://vercel.live/ https://vercel.com;
      `;
  }

  // for production environment white-list vitals.vercel-insights
  // based on: https://vercel.com/docs/speed-insights#content-security-policy
  if (process.env.NODE_ENV === "production") {
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
      script-src 'self' 'strict-dynamic';
      img-src 'self' blob: data:;
      connect-src 'self' https://vitals.vercel-insights.com;
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
    script-src 'self' 'strict-dynamic' 'unsafe-eval';
    img-src 'self' blob: data:;
  `;
}


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy-Report-Only',
            value: createCspHeaders(undefined).replace(/\n/g, ''),
          },
        ],
      },
    ];
  },
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        '@sentry/utils': false,
      };
    }

    return config;
  },
};

const withSerwist = withSerwistInit({
  swSrc: 'src/app/lib/sw.ts',
  swDest: 'public/sw.js',
});

export default withSentryConfig(
  withSerwist(nextConfig),
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: 'alexaka1',
    project: 'mhu-nextjs-sport',
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers. (increases server load)
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    tunnelRoute: '/monitoring',

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors.
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  },
);
