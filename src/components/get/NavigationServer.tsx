import { db } from "@/lib/db";
import { Navigation } from "@/components/get/Navigation";

export async function NavigationServer() {
  const destinations = await db.destination.findMany({
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
  });

  return <Navigation destinations={destinations} />;
}
