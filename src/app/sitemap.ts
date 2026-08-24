import { db } from "@/lib/db";
import { MetadataRoute } from "next";
import { LOCALES } from "@/lib/i18n/locales";

const BASE = "https://www.globaleexploretours.com";

// Every entry is emitted once per locale, with hreflang alternates pointing at its
// siblings — this is what makes each language crawlable and indexable on its own URL.
function withLocales(
  path: string,
  lastModified: Date,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number
): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(LOCALES.map((l) => [l, `${BASE}/${l}${path}`]));
  return LOCALES.map((locale) => ({
    url: `${BASE}/${locale}${path}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [tours, blogPosts, regions, destinations, experienceTypes] = await Promise.all([
    db.tour.findMany({
      select: { slug: true, updatedAt: true, destination: { select: { slug: true, regionSlug: true } } },
    }),
    db.blogPost.findMany({ select: { slug: true, updatedAt: true } }),
    db.region.findMany({ select: { slug: true, updatedAt: true } }),
    db.destination.findMany({ select: { slug: true, regionSlug: true, updatedAt: true } }),
    db.experienceType.findMany({ select: { slug: true, updatedAt: true } }),
  ]);

  const now = new Date();
  const staticRoutes = [
    { path: "", priority: 1.0 },
    { path: "/trouver-mon-voyage", priority: 0.9 },
    { path: "/experience-types", priority: 0.8 },
    { path: "/a-propos", priority: 0.7 },
    { path: "/blog", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
    { path: "/faire-une-demande", priority: 0.6 },
    { path: "/mentions-legales", priority: 0.2 },
    { path: "/politique-de-confidentialite", priority: 0.2 },
    { path: "/conditions-de-reservation", priority: 0.2 },
  ].flatMap(({ path, priority }) => withLocales(path, now, "weekly", priority));

  const tourRoutes = tours.flatMap((t) =>
    withLocales(`/destinations/${t.destination.regionSlug}/${t.destination.slug}/${t.slug}`, t.updatedAt, "monthly", 0.85)
  );

  const blogRoutes = blogPosts.flatMap((p) => withLocales(`/blog/${p.slug}`, p.updatedAt, "weekly", 0.75));

  const regionRoutes = regions.flatMap((r) => withLocales(`/destinations/${r.slug}`, r.updatedAt, "weekly", 0.85));
  const destinationRoutes = destinations.flatMap((d) =>
    withLocales(`/destinations/${d.regionSlug}/${d.slug}`, d.updatedAt, "weekly", 0.85)
  );

  const experienceTypeRoutes = experienceTypes.flatMap((e) =>
    withLocales(`/experience-types/${e.slug}`, e.updatedAt, "monthly", 0.75)
  );

  return [
    ...staticRoutes,
    ...tourRoutes,
    ...blogRoutes,
    ...regionRoutes,
    ...destinationRoutes,
    ...experienceTypeRoutes,
  ];
}
