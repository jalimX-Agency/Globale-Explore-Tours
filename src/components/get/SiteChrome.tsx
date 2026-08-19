"use client";

import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/context";
import { Footer } from "@/components/get/Footer";

export function SiteChrome({ nav, children }: { nav: React.ReactNode; children: React.ReactNode }) {
  const pathname = usePathname();
  const { language } = useLanguage();
  const isHome = pathname === `/${language}`;
  // Destination hub pages (region/country) open on a full-bleed hero too, same treatment as
  // home — no top offset, the header stays transparent over the hero until scrolled (mirrors
  // Navigation.tsx's `hasDarkHero` check, including the 2-segment cap that excludes the
  // trip-detail route one level deeper, which has no hero on the standard trip template).
  // Same treatment for /experience-types and its traveler-type / family sub-pages.
  const hasDarkHero =
    isHome ||
    /^\/[a-z]{2}\/destinations(\/[^/]+){0,2}\/?$/.test(pathname ?? "") ||
    /^\/[a-z]{2}\/experience-types(\/[^/]+){0,2}\/?$/.test(pathname ?? "");

  return (
    <>
      {nav}
      {/* Home's hero sits under the transparent header; every other page needs the offset. */}
      <div className={hasDarkHero ? undefined : "pt-20"}>{children}</div>
      <Footer />
    </>
  );
}
