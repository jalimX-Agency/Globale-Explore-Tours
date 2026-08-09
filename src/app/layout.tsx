import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/context";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.globaleexploretours.com"),
  title: {
    default: "Globale Explore Tours | Excursions & Circuits sur-mesure à Agadir",
    template: "%s | Globale Explore Tours",
  },
  description:
    "Excursions et circuits sur-mesure à Agadir avec des guides locaux reconnus — désert, océan, médina. Noté 4.9/5 sur TripAdvisor, #1 des activités à Agadir.",
  keywords: [
    "excursions Agadir",
    "circuits Maroc",
    "désert Agadir",
    "Paradise Valley",
    "Taghazout",
    "tours Agadir",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US", "es_ES"],
    url: "https://www.globaleexploretours.com",
    siteName: "Globale Explore Tours",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.globaleexploretours.com" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const travelAgencySchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Globale Explore Tours",
    description:
      "Agence d'excursions et de circuits sur-mesure basée à Agadir, Maroc.",
    url: "https://www.globaleexploretours.com",
    telephone: "+212706259077",
    email: "contac@globaleexploretours.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Agadir",
      addressCountry: "MA",
    },
    areaServed: "Agadir, Morocco",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "105",
      bestRating: "5",
    },
    sameAs: [
      "https://www.tripadvisor.com/Attraction_Review-g293731-d27487904-Reviews-Globale_Explore_Tours-Agadir_Souss_Massa.html",
    ],
  });

  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: travelAgencySchema }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
