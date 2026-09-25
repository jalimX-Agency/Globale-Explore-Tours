import type { Metadata } from "next";
import { HtmlDocument } from "@/components/HtmlDocument";
import "./globals.css";

// The app has two root layouts (app/[locale] and app/admin — see HtmlDocument) and no
// app/layout.tsx, so a URL that matches neither has no layout to render a normal not-found.tsx
// inside. Next.js returns this page directly for those instead (experimental.globalNotFound in
// next.config.ts). Unknown paths under a locale (/fr/whatever) never get here — they 404 inside
// the [locale] root layout like any other page.
export const metadata: Metadata = {
  title: "Page introuvable | Globale Explore Tours",
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/fr", label: "Retour à l'accueil" },
  { href: "/en", label: "Back to the homepage" },
  { href: "/es", label: "Volver a la página de inicio" },
];

export default function GlobalNotFound() {
  return (
    <HtmlDocument lang="fr">
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="label-eyebrow text-neutral-400">404</p>
        <h1 className="font-display mt-2 text-3xl sm:text-4xl">Page introuvable</h1>
        <ul className="font-body mt-8 space-y-2 text-neutral-600">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="underline underline-offset-4 hover:opacity-60">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </HtmlDocument>
  );
}
