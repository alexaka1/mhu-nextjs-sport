export function isNullOrEmpty(value: string | null | undefined): value is null | undefined | '' {
  return value == null || value === '';
}
