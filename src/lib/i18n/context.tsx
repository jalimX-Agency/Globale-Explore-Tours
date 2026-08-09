"use client";
import { createContext, useContext } from "react";
import { fr } from "./translations/fr";
import { en } from "./translations/en";
import { es } from "./translations/es";
import type { Locale } from "./locales";

const translations = { fr, en, es };

function getNestedValue(obj: Record<string, unknown>, key: string): string | undefined {
  return key.split(".").reduce((acc: unknown, k) => {
    if (acc && typeof acc === "object") return (acc as Record<string, unknown>)[k];
    return undefined;
  }, obj) as string | undefined;
}

interface LanguageContextType {
  language: Locale;
  t: (key: string) => string;
  tArray: (key: string) => string[];
}

const LanguageContext = createContext<LanguageContextType>({
  language: "fr",
  t: (k) => k,
  tArray: () => [],
});

// The locale is the URL segment (/fr/..., /en/..., /es/...), resolved server-side by the
// [locale] route — never guessed client-side, so search engines and first paint always agree.
export function LanguageProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  function t(key: string): string {
    const val = getNestedValue(translations[locale] as Record<string, unknown>, key);
    if (!val || val === key) {
      const fallback = getNestedValue(translations.fr as Record<string, unknown>, key);
      return fallback ?? key;
    }
    return val;
  }

  function tArray(key: string): string[] {
    const val = getNestedValue(translations[locale] as unknown as Record<string, unknown>, key);
    return Array.isArray(val) ? (val as unknown as string[]) : [];
  }

  return (
    <LanguageContext.Provider value={{ language: locale, t, tArray }}>{children}</LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
export type { Locale as Language };
