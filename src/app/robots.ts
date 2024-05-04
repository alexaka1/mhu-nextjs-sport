import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/login', '/koszonto'],
    },
    sitemap: 'https://sport.martossy.hu/sitemap.xml',
  };
}
