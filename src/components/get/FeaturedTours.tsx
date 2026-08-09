import { db } from "@/lib/db";
import { FeaturedToursClient } from "./FeaturedToursClient";

export async function FeaturedTours() {
  const tours = await db.tour.findMany({
    where: { featured: true },
    orderBy: { order: "asc" },
    take: 6,
    select: {
      slug: true,
      name: true,
      nameEn: true,
      nameEs: true,
      tagline: true,
      taglineEn: true,
      taglineEs: true,
      price: true,
      originalPrice: true,
      currency: true,
      duration: true,
      durationEn: true,
      durationEs: true,
      theme: true,
      image: true,
    },
  });

  if (tours.length === 0) return null;

  return <FeaturedToursClient tours={tours} />;
}
