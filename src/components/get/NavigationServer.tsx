import { db } from "@/lib/db";
import { Navigation } from "@/components/get/Navigation";

export async function NavigationServer() {
  const [destinations, experienceTypes] = await Promise.all([
    db.destination.findMany({
      orderBy: [{ regionSlug: "asc" }, { order: "asc" }],
      select: {
        slug: true,
        name: true,
        nameEn: true,
        nameEs: true,
        region: true,
        regionEn: true,
        regionEs: true,
        regionSlug: true,
        heroImage: true,
        order: true,
        featured: true,
      },
    }),
    db.experienceType.findMany({
      orderBy: { order: "asc" },
      select: {
        slug: true,
        kind: true,
        cardImage: true,
        cardTitle: true,
        cardTitleEn: true,
        cardTitleEs: true,
        cardDescription: true,
        cardDescriptionEn: true,
        cardDescriptionEs: true,
      },
    }),
  ]);

  return <Navigation destinations={destinations} experienceTypes={experienceTypes} />;
}
