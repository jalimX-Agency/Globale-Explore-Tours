export const LOCALES = ["fr", "en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

const OG_LOCALES: Record<Locale, string> = { fr: "fr_FR", en: "en_US", es: "es_ES" };
export function ogLocale(locale: Locale): string {
  return OG_LOCALES[locale];
}
