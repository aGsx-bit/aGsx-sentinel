export const DEFAULT_LOCALE = "en";
export const SUPPORTED_LOCALES = [DEFAULT_LOCALE, "ckb"] as const;
export type AppLocale = (typeof SUPPORTED_LOCALES)[number];
export const LOCALE_STORAGE_KEY = "agsx_locale";

export function resolveLocale(value: string | null | undefined): AppLocale {
  return /^c?kb(?:-|$)/i.test(value ?? "") ? "ckb" : DEFAULT_LOCALE;
}
