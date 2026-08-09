"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { fr } from "./translations/fr";
import { en } from "./translations/en";
import { es } from "./translations/es";

export type Language = "fr" | "en" | "es";
const translations = { fr, en, es };

function getNestedValue(obj: Record<string, unknown>, key: string): string | undefined {
  return key.split(".").reduce((acc: unknown, k) => {
    if (acc && typeof acc === "object") return (acc as Record<string, unknown>)[k];
    return undefined;
  }, obj) as string | undefined;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
}

const LanguageContext = createContext<LanguageContextType>({
  language: "fr",
  setLanguage: () => {},
  t: (k) => k,
  tArray: () => [],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("site-language") as Language | null;
    if (saved && ["fr", "en", "es"].includes(saved)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration of a client-only preference (localStorage), not a render-cascade
      setLanguageState(saved);
    }
  }, []);

  function setLanguage(lang: Language) {
    setLanguageState(lang);
    localStorage.setItem("site-language", lang);
    document.documentElement.lang = lang;
  }

  function t(key: string): string {
    const val = getNestedValue(translations[language] as Record<string, unknown>, key);
    if (!val || val === key) {
      const fallback = getNestedValue(translations.fr as Record<string, unknown>, key);
      return fallback ?? key;
    }
    return val;
  }

  function tArray(key: string): string[] {
    const val = getNestedValue(translations[language] as unknown as Record<string, unknown>, key);
    return Array.isArray(val) ? (val as unknown as string[]) : [];
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
