import { type MetadataRoute } from 'next';
import { events2024 } from '@/app/lib/types';

const years: Array<{ year: number; pages: MetadataRoute.Sitemap }> = [
  {
    year: 2025,
    pages: [
      {
        url: 'https://sport.martossy.hu/2025',
        lastModified: new Date(),
        changeFrequency: 'daily',
      },
    ],
  },
  {
    year: 2024,
    pages: [
      {
        url: 'https://sport.martossy.hu/2024',
        lastModified: new Date(),
        changeFrequency: 'never',
      },
      {
        url: 'https://sport.martossy.hu/2024/koszonto',
        lastModified: new Date(),
        changeFrequency: 'never',
      },
      {
        url: 'https://sport.martossy.hu/2024/sportagak',
        lastModified: new Date(),
        changeFrequency: 'never',
      },
      {
        url: 'https://sport.martossy.hu/2024/helyszinek',
        lastModified: new Date(),
        changeFrequency: 'never',
      },
      {
        url: 'https://sport.martossy.hu/2024/szallas',
        lastModified: new Date(),
        changeFrequency: 'never',
      },
      {
        url: 'https://sport.martossy.hu/2024/programok',
        lastModified: new Date(),
        changeFrequency: 'never',
      },
      {
        url: 'https://sport.martossy.hu/2024/eredmenyek',
        lastModified: new Date(),
        changeFrequency: 'never',
      },
    ],
  },
];

// this page is static, so new Date() will be the time of last deployment
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sport.martossy.hu/',
      lastModified: new Date(),
      priority: 1,
      changeFrequency: 'monthly',
    },
    ...years.flatMap(({ pages }) => pages),
    ...results2024(),
  ];
}

function results2024(): MetadataRoute.Sitemap {
  return events2024.options.map((result) => ({
    url: `https://sport.martossy.hu/2024/eredmenyek/${encodeURIComponent(result)}`,
    lastModified: new Date(),
    changeFrequency: 'never',
  }));
}
