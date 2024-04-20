import { z } from 'zod';
export const Result = z.enum([
  'Labdarúgás',
  'Úszás',
  'Futás',
  'Asztalitenisz',
  'Súlylökés',
  'Darts',
  'Kosárlabda',
  'Csapatverseny',
]);
export type Result = z.infer<typeof Result>;
