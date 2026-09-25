import { oswald, inter } from "@/lib/fonts";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { GoogleTagManagerScript, GoogleTagManagerNoscript } from "@/components/GoogleTagManager";
import { TrustpilotWidgetScript } from "@/components/TrustpilotWidget";

// Shared <html>/<body> shell for the app's two root layouts — the public site's
// (app/[locale]/layout.tsx) and the admin's (app/admin/layout.tsx). The public site is its own
// root layout (instead of sitting under a single app/layout.tsx) so `lang` can come from the
// [locale] segment and ship in the server-rendered HTML: a single top-level root layout can't
// read params below it, which left every EN/ES page served as <html lang="fr"> to any crawler
// that doesn't run JavaScript (most AI answer-engine crawlers don't).
export function HtmlDocument({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${oswald.variable} ${inter.variable} h-full antialiased`}>
      {/* The rule targets pages/-router files; this only ever renders inside App Router root
          layouts, where a literal <head> is the documented pattern. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <GoogleTagManagerScript />
        <TrustpilotWidgetScript />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <GoogleTagManagerNoscript />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
