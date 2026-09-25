import type { Metadata } from "next";
import { HtmlDocument } from "@/components/HtmlDocument";
import "../globals.css";

// Root layout for /admin — see HtmlDocument for why the app has two root layouts instead of
// one app/layout.tsx.
export const metadata: Metadata = {
  metadataBase: new URL("https://www.globaleexploretours.com"),
  title: "Globale Explore Tours",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <HtmlDocument lang="fr">{children}</HtmlDocument>;
}
