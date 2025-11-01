import * as z from 'zod';

export const events2024 = z.enum([
  'Labdarúgás',
  'Úszás',
  'Futás',
  'Asztalitenisz',
  'Súlylökés',
  'Darts',
  'Kosárlabda',
  'Csapatverseny',
  'Főügyészi verseny',
] as const);
export const events2025 = z.enum([
  'Női síkfutás',
  'Férfi síkfutás',
  'Női súlylökés',
  'Férfi súlylökés',
  'Női asztalitenisz',
  'Férfi asztalitenisz',
  'Tollas',
  'Úszás',
  'Labdarúgás',
  'Csocsó',
  'Női darts',
  'Férfi darts',
  'Női íjászat',
  'Férfi íjászat',
  'Női kosár',
] as const);
export const Result = z.union([events2024, events2025]);
export type Result = z.infer<typeof Result>;

export const resultMimeTypeSchema = z
  .enum(['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/pdf', 'image/'] as const)
  .or(
    z.custom<`image/${string}`>().and(
      z
        .string()
        .startsWith('image/')
        .regex(/^[a-z]+\/[a-z0-9.\-+]+$/i),
    ),
  );
export type ResultMimeType = z.infer<typeof resultMimeTypeSchema>;
export type ResultItem = { key: string; type: ResultMimeType; result: Result; url?: string };

export const UserRoles = z.object({
  roles: z.array(
    z.object({
      years: z.array(z.number()),
    }),
  ),
});
export type UserRolesType = z.infer<typeof UserRoles>;
export const MeetingYear = z.enum(['2025', '2024'] as const);
export type MeetingYearType = z.infer<typeof MeetingYear>;
