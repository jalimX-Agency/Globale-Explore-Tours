"use client";
import { usePathname } from "next/navigation";
import { LOCALES } from "./locales";

// Strips the leading /fr, /en, /es segment so the language switcher can rebuild the
// same page under a different locale (e.g. /en/excursions -> /fr/excursions).
export function usePathWithoutLocale(): string {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/");
  if (segments.length > 1 && (LOCALES as readonly string[]).includes(segments[1])) {
    const rest = "/" + segments.slice(2).join("/");
    return rest === "/" ? "" : rest;
  }
  return pathname === "/" ? "" : pathname;
}
