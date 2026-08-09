import { db } from "@/lib/db";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.globaleexploretours.com";
  const [tours, blogPosts] = await Promise.all([
    db.tour.findMany({ select: { slug: true, updatedAt: true } }),
    db.blogPost.findMany({ select: { slug: true, updatedAt: true } }),
  ]);

  const staticRoutes = [
    { path: "/", priority: 1.0 },
    { path: "/excursions", priority: 0.9 },
    { path: "/sejours-multi-jours", priority: 0.8 },
    { path: "/a-propos", priority: 0.6 },
    { path: "/blog", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
  ].map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }));

  return [
    ...staticRoutes,
    ...tours.map((t) => ({
      url: `${base}/excursions/${t.slug}`,
      lastModified: t.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...blogPosts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
  ];
}
