import { type MetadataRoute } from 'next';
import { Result } from '@/app/lib/types';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sport.martossy.hu/',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://sport.martossy.hu/koszonto',
      lastModified: new Date(),
    },
    {
      url: 'https://sport.martossy.hu/helyszinek',
      lastModified: new Date(),
    },
    {
      url: 'https://sport.martossy.hu/programok',
      lastModified: new Date(),
    },
    {
      url: 'https://sport.martossy.hu/sportagak',
      lastModified: new Date(),
    },
    {
      url: 'https://sport.martossy.hu/szallas',
      lastModified: new Date(),
    },
    {
      url: 'https://sport.martossy.hu/eredmenyek',
      lastModified: new Date(),
    },
    ...results(),
  ];
}

function results(): MetadataRoute.Sitemap {
  return Result.options.map((result) => ({
    url: `https://sport.martossy.hu/eredmenyek/${encodeURIComponent(result)}`,
    lastModified: new Date(),
    changeFrequency: 'hourly',
  }));
}
