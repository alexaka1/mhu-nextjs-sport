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

export const resultTypeSchema = z
  .enum(['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/pdf', 'image/'] as const)
  .or(
    z.custom<`image/${string}`>().and(
      z
        .string()
        .startsWith('image/')
        .regex(/^[a-z]+\/[a-z0-9.\-+]+$/i),
    ),
  );
export type ResultType = z.infer<typeof resultTypeSchema>;
export type ResultItem = { key: string; type: ResultType; result: Result; url?: string };

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
