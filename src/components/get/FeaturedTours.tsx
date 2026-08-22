import { db } from "@/lib/db";
import { FeaturedToursShowcase } from "./FeaturedToursShowcase";

export async function FeaturedTours() {
  const tours = await db.tour.findMany({
    where: { featured: true },
    orderBy: { order: "asc" },
    take: 10,
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
      format: true,
      destination: { select: { slug: true, regionSlug: true } },
    },
  });

  if (tours.length === 0) return null;

  const toursWithHref = tours.map(({ destination, ...t }) => ({
    ...t,
    destinationSlug: destination.slug,
    regionSlug: destination.regionSlug,
  }));

  return <FeaturedToursShowcase tours={toursWithHref} />;
}
