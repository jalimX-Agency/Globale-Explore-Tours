"use client";

import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/context";
import { Navigation } from "@/components/get/Navigation";
import { Footer } from "@/components/get/Footer";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { language } = useLanguage();
  const isHome = pathname === `/${language}`;

  return (
    <>
      <Navigation />
      {/* Home's hero sits under the transparent header; every other page needs the offset. */}
      <div className={isHome ? undefined : "pt-20"}>{children}</div>
      <Footer />
    </>
  );
}
