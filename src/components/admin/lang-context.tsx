"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Lang = "fr" | "en" | "es";

export const LANG_SUFFIX: Record<Lang, string> = { fr: "", en: "En", es: "Es" };

const LangContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void } | null>(null);

// Every trilingual field on a form page used to own an independent FR/EN/ES tab switcher,
// so reviewing "all the English copy" meant clicking EN separately in every single field.
// One shared active language, set once at the top of the page, fixes that — every
// <TrilingualField> just reads from here instead of managing its own tab state.
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside a <LangProvider>");
  return ctx;
}

const LANGS: { code: Lang; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

// `incomplete` lights up a small dot on EN/ES when some field that has French content is
// still untranslated for that language — an at-a-glance translation-completeness check
// that replaces having to open every field's tab individually.
export function LangSwitcher({ incomplete }: { incomplete?: Partial<Record<Lang, boolean>> }) {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex items-center gap-0.5 rounded-lg bg-muted p-0.5" role="group" aria-label="Langue affichée">
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          className={cn(
            "relative cursor-pointer rounded-md px-2.5 py-1 text-xs font-semibold transition-colors",
            lang === l.code
              ? "bg-background text-foreground shadow-sm ring-1 ring-foreground/10"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {l.label}
          {incomplete?.[l.code] && (
            <span
              aria-label="Traduction incomplète"
              className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-brand-accent"
            />
          )}
        </button>
      ))}
    </div>
  );
}
