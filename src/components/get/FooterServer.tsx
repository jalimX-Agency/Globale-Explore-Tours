import { db } from "@/lib/db";
import { Footer } from "@/components/get/Footer";

export async function FooterServer() {
  const [destinations, experienceTypes] = await Promise.all([
    db.destination.findMany({
      orderBy: [{ featured: "desc" }, { order: "asc" }],
      take: 10,
      select: { slug: true, name: true, nameEn: true, nameEs: true, regionSlug: true },
    }),
    db.experienceType.findMany({
      where: { parentId: null }, // same rule as the nav mega-menu — sub-pages surface via their parent only
      orderBy: { order: "asc" },
      select: { slug: true, kind: true, cardTitle: true, cardTitleEn: true, cardTitleEs: true },
    }),
  ]);

  return <Footer destinations={destinations} experienceTypes={experienceTypes} />;
}
