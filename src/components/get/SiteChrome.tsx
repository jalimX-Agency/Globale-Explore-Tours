"use client";

import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/context";
import { Footer } from "@/components/get/Footer";

export function SiteChrome({ nav, children }: { nav: React.ReactNode; children: React.ReactNode }) {
  const pathname = usePathname();
  const { language } = useLanguage();
  const isHome = pathname === `/${language}`;
  // Destination pages open on a full-bleed hero too, same treatment as home — no top offset,
  // the header stays transparent over the hero until scrolled (mirrors Navigation.tsx's
  // `hasDarkHero` check).
  const hasDarkHero = isHome || /^\/[a-z]{2}\/destinations(\/|$)/.test(pathname ?? "");

  return (
    <>
      {nav}
      {/* Home's hero sits under the transparent header; every other page needs the offset. */}
      <div className={hasDarkHero ? undefined : "pt-20"}>{children}</div>
      <Footer />
    </>
  );
}
