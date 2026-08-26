import type { Metadata } from "next";
import { isLocale, DEFAULT_LOCALE } from "@/lib/i18n/locales";
import { pageMetadata } from "@/lib/seo";

// Page is a content stub ("En construction") — noindex until real copy is written, so an
// empty page doesn't get indexed as thin content under a business-relevant URL.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  return { ...pageMetadata({ locale, path: "/mentions-legales", title: "Mentions légales" }), robots: { index: false, follow: true } };
}

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="label-eyebrow text-neutral-400">En construction</p>
        <h1 className="font-display text-3xl mt-2">Mentions légales</h1>
      </div>
    </main>
  );
}
