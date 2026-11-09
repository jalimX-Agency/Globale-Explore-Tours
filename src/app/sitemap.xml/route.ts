import { sitemapEntries } from "@/lib/sitemap";

// /sitemap.xml is generated per request and cached by Vercel's CDN through Cache-Control,
// not by Next's ISR. Both ISR attempts left it frozen in production: the app/sitemap.ts
// metadata route, and then this route handler with `revalidate = 3600`, which a week after the
// deploy still served (x-vercel-cache HIT) without any post published since. Daily posts from
// /api/blog-posts never reached it, while llms.txt with the same setup did refresh. A CDN cache
// with a plain max-age has no regeneration step to get stuck in: a new post shows up within
// ~6 h (plus up to a day of stale-while-revalidate). It was 15 min until Nov 2026, when the Neon bill showed the database was never allowed to sleep: every request that reaches the database postpones its 5-minute scale-to-zero.
export const dynamic = "force-dynamic";

const CACHE_CONTROL = "public, max-age=0, s-maxage=21600, stale-while-revalidate=86400";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const entries = await sitemapEntries();

  const urls = entries.map((entry) => {
    const alternates = Object.entries(entry.alternates?.languages ?? {}).map(
      ([lang, href]) => `<xhtml:link rel="alternate" hreflang="${lang}" href="${escapeXml(String(href))}" />`
    );
    const lastModified = entry.lastModified ? new Date(entry.lastModified).toISOString() : null;
    return [
      "<url>",
      `<loc>${escapeXml(entry.url)}</loc>`,
      ...alternates,
      lastModified && `<lastmod>${lastModified}</lastmod>`,
      entry.changeFrequency && `<changefreq>${entry.changeFrequency}</changefreq>`,
      entry.priority !== undefined && `<priority>${entry.priority}</priority>`,
      "</url>",
    ]
      .filter(Boolean)
      .join("\n");
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": CACHE_CONTROL } });
}
