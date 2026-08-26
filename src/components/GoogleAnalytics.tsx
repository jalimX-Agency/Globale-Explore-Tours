"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Renders nothing until NEXT_PUBLIC_GA_ID is set (see .env.local) — inert by default, and
// skipped on /admin so the owner's own dashboard usage never pollutes visitor analytics.
export function GoogleAnalytics() {
  const pathname = usePathname();
  if (!GA_ID || pathname?.startsWith("/admin")) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
