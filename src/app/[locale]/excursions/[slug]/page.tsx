import { notFound, redirect } from "next/navigation";
import { db } from "@/lib/db";
import { isLocale, DEFAULT_LOCALE } from "@/lib/i18n/locales";

// Legacy flat URL — every trip now lives at its canonical nested destination URL
// (/destinations/[region]/[country]/[slug]). This route only exists so old links
// (bookmarks, external references, the sitemap before it was updated) keep working.
export default async function LegacyExcursionRedirect({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  const tour = await db.tour.findUnique({
    where: { slug },
    select: { slug: true, destination: { select: { slug: true, regionSlug: true } } },
  });
  if (!tour) notFound();

  redirect(`/${locale}/destinations/${tour.destination.regionSlug}/${tour.destination.slug}/${tour.slug}`);
}
