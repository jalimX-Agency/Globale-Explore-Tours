import { db } from "@/lib/db";
import { Hero } from "@/components/get/Hero";
import { Mission } from "@/components/get/Mission";
import { Testimonials } from "@/components/get/Testimonials";
import { TravelerTypes } from "@/components/get/TravelerTypes";
import { FeaturedTours } from "@/components/get/FeaturedTours";
import { OurApproach } from "@/components/get/OurApproach";
import { TrustStrip } from "@/components/get/TrustStrip";
import { ClosingCta } from "@/components/get/ClosingCta";

// Content only changes when an admin publishes — see the revalidatePath("/[locale]", "layout")
// calls in every admin action. Without this, Prisma calls below aren't cached at all (unlike
// fetch(), Next.js doesn't cache raw DB queries), so every visit would hit Postgres directly.
export const revalidate = 3600;

export default async function Home() {
  const experienceTypes = await db.experienceType.findMany({
    where: { kind: "who", parentId: null },
    orderBy: { order: "asc" },
    select: { slug: true, cardImage: true, cardTitle: true, cardTitleEn: true, cardTitleEs: true },
  });
  const travelerTypeCards = experienceTypes.map((e) => ({
    key: e.slug,
    href: `/experience-types/${e.slug}`,
    image: e.cardImage,
    title: e.cardTitle,
    titleEn: e.cardTitleEn,
    titleEs: e.cardTitleEs,
  }));

  return (
    <main className="flex-1">
      <Hero />
      <Mission />
      <Testimonials />
      <TravelerTypes types={travelerTypeCards} />
      <FeaturedTours />
      <OurApproach />
      <TrustStrip />
      <ClosingCta />
    </main>
  );
}
