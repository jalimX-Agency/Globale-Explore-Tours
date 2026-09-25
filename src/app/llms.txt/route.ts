import { db } from "@/lib/db";
import { SITE_URL, SITE_NAME, TRIPADVISOR_RATING } from "@/lib/seo";

// /llms.txt (https://llmstxt.org) — a plain-markdown map of the site for LLM-based answer
// engines: who the agency is, the facts they're most often asked, and every destination and
// trip with its canonical URL. Built from the DB, so it tracks the catalogue on its own; English
// URLs are listed since that's what these engines mostly query in, with the FR/ES equivalents
// following the same paths under /fr and /es.
export const revalidate = 3600;

function line(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

export async function GET() {
  const [destinations, experienceTypes, blogPosts, regionCount] = await Promise.all([
    db.destination.findMany({
      orderBy: [{ regionSlug: "asc" }, { order: "asc" }, { name: "asc" }],
      select: {
        slug: true,
        name: true,
        nameEn: true,
        region: true,
        regionEn: true,
        regionSlug: true,
        tours: {
          orderBy: [{ featured: "desc" }, { order: "asc" }],
          select: { slug: true, name: true, nameEn: true, durationEn: true, duration: true, price: true, currency: true, description: true, descriptionEn: true },
        },
      },
    }),
    db.experienceType.findMany({
      where: { parentId: null },
      orderBy: { order: "asc" },
      select: { slug: true, cardTitle: true, cardTitleEn: true, cardDescription: true, cardDescriptionEn: true },
    }),
    db.blogPost.findMany({
      orderBy: [{ featured: "desc" }, { order: "asc" }],
      select: { slug: true, title: true, titleEn: true, excerpt: true, excerptEn: true },
    }),
    db.region.count(),
  ]);

  const tourCount = destinations.reduce((n, d) => n + d.tours.length, 0);
  const en = `${SITE_URL}/en`;

  const out: string[] = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_NAME} is a tailor-made travel agency based in Valenciennes, France. It designs private trips and tours in ${destinations.length} destinations across ${regionCount} world regions (${tourCount} itineraries), led by local guides, and is rated ${TRIPADVISOR_RATING.value}/5 on TripAdvisor from ${TRIPADVISOR_RATING.count} reviews.`,
    "",
    "The site is available in English (/en), French (/fr, default) and Spanish (/es); every path below exists in all three languages.",
    "",
    "## Key facts",
    "",
    "- Type: tailor-made (private, custom-built) travel agency; every itinerary is a starting point that is adapted to the traveller.",
    "- Address: 5 Avenue du Sénateur Girard, 59300 Valenciennes, France.",
    "- Contact: +33 6 67 58 64 62 (phone and WhatsApp), contact@globaleexploretours.com.",
    "- How to book: send a request through the online form, by phone, WhatsApp or email; the team replies with a tailor-made proposal within 24 hours. Up to two quotes per request are free; a quote is valid for 7 days. No online payment: a booking is confirmed once the deposit (or full payment) is received.",
    "- Payment: bank transfer, cash, ANCV Chèques-Vacances or card; prices in euros, taxes included.",
    "- Cancellation by the client after payment: €150 more than 30 days before departure; 50% at 30-21 days; 70% at 20-8 days; 75% at 7-2 days; 100% the day before or on the day. Full refund if the agency cancels.",
    `- Reviews: ${TRIPADVISOR_RATING.value}/5 on TripAdvisor (${TRIPADVISOR_RATING.count} reviews).`,
    "",
    "## Main pages",
    "",
    `- [Home](${en}): overview of the agency and its approach to tailor-made travel`,
    `- [Trip Finder](${en}/trouver-mon-voyage): find a trip by month, mood and type of traveller`,
    `- [Travel experiences](${en}/experience-types): trips by type of traveller and by activity`,
    `- [Make a request](${en}/faire-une-demande): request a tailor-made proposal`,
    `- [About us](${en}/a-propos): the team and how the agency works`,
    `- [Contact](${en}/contact)`,
    `- [Booking terms](${en}/conditions-de-reservation)`,
    "",
  ];

  if (experienceTypes.length > 0) {
    out.push("## Travel experiences", "");
    for (const e of experienceTypes) {
      const title = e.cardTitleEn || e.cardTitle;
      const desc = line(e.cardDescriptionEn || e.cardDescription);
      out.push(`- [${title}](${en}/experience-types/${e.slug})${desc ? `: ${desc}` : ""}`);
    }
    out.push("");
  }

  out.push("## Destinations and trips", "");
  let currentRegion = "";
  for (const d of destinations) {
    if (d.regionSlug !== currentRegion) {
      currentRegion = d.regionSlug;
      out.push(`### ${d.regionEn || d.region}`, "", `- [${d.regionEn || d.region} overview](${en}/destinations/${d.regionSlug})`, "");
    }
    const destinationUrl = `${en}/destinations/${d.regionSlug}/${d.slug}`;
    out.push(`- [${d.nameEn || d.name}](${destinationUrl})`);
    for (const t of d.tours) {
      const details = [t.durationEn || t.duration, t.price ? `from ${t.price} ${t.currency} per person` : ""]
        .filter(Boolean)
        .join(", ");
      const desc = line(t.descriptionEn || t.description);
      out.push(`  - [${t.nameEn || t.name}](${destinationUrl}/${t.slug})${details ? ` (${details})` : ""}${desc ? `: ${desc}` : ""}`);
    }
  }
  out.push("");

  if (blogPosts.length > 0) {
    out.push("## Travel journal", "");
    for (const p of blogPosts) {
      const desc = line(p.excerptEn || p.excerpt);
      out.push(`- [${p.titleEn || p.title}](${en}/blog/${p.slug})${desc ? `: ${desc}` : ""}`);
    }
    out.push("");
  }

  return new Response(out.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
