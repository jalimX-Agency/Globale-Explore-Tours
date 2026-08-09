"use client";
import { useEffect } from "react";

// The root <html lang> can't read the [locale] segment (Next.js layouts don't receive
// params from segments below them), so we patch it client-side once hydrated. The
// crawlable page content itself is already server-rendered in the right language —
// this only fixes the lang attribute metadata.
export function SetHtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
