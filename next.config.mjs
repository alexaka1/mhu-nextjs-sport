import withSerwistInit from '@serwist/next';

// CSP headers here is set based on Next.js recommendations:
// https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy
export const createCspHeaders = (nonce: string) => {
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
    return `
      ${defaultsCSPHeaders}
      default-src 'none';
      script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
      img-src 'self' blob: data:;
      connect-src 'self' https://vitals.vercel-insights.com;
      `;
  }

  // for dev environment enable unsafe-eval for hot-reload
  return `
    ${defaultsCSPHeaders}
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval';
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
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },
};

const withSerwist = withSerwistInit({
  swSrc: 'src/app/lib/sw.ts',
  swDest: 'public/sw.js',
});

export default withSerwist(nextConfig);
