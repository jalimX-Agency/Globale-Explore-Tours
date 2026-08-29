import type { Metadata } from "next";
import { oswald, inter } from "@/lib/fonts";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { GoogleTagManagerScript, GoogleTagManagerNoscript } from "@/components/GoogleTagManager";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.globaleexploretours.com"),
  title: "Globale Explore Tours",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${oswald.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <GoogleTagManagerScript />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <GoogleTagManagerNoscript />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
