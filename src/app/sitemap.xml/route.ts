import { sitemapEntries } from "@/lib/sitemap";

// /sitemap.xml as a route handler rather than the app/sitemap.ts metadata convention: on Vercel
// the metadata version was served from the build-time cache indefinitely (26h+ old, x-vercel-cache
// HIT) despite `revalidate = 3600`, so posts published after a deploy — including the daily ones
// from /api/blog-posts — never reached the sitemap. Route handlers revalidate reliably (llms.txt
// uses the same setup), and revalidatePath("/sitemap.xml") after a publish now takes effect.
export const revalidate = 3600;

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

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
