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
  'Főügyészi verseny',
]);
export type Result = z.infer<typeof Result>;

export const resultTypeSchema = z.enum([
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/pdf',
] as const);
export type ResultType = z.infer<typeof resultTypeSchema>;
export type ResultItem = { key: string; type: ResultType; result: Result; url?: string };
