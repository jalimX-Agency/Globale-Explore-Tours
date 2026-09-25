import { db } from "@/lib/db";
import { getTestimonials } from "@/lib/testimonials";
import { homeFaqs } from "@/lib/homeFaq";
import { faqJsonLd } from "@/lib/seo";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locales";
import { Hero } from "@/components/get/Hero";
import { Mission } from "@/components/get/Mission";
import { Testimonials } from "@/components/get/Testimonials";
import { TravelerTypes } from "@/components/get/TravelerTypes";
import { FeaturedTours } from "@/components/get/FeaturedTours";
import { OurApproach } from "@/components/get/OurApproach";
import { TrustStrip } from "@/components/get/TrustStrip";
import { ClosingCta } from "@/components/get/ClosingCta";
import { FaqAccordion } from "@/components/get/FaqAccordion";

// Content only changes when an admin publishes — see the revalidatePath("/[locale]", "layout")
// calls in every admin action. Without this, Prisma calls below aren't cached at all (unlike
// fetch(), Next.js doesn't cache raw DB queries), so every visit would hit Postgres directly.
export const revalidate = 3600;

function pick(locale: Locale, frText: string, enText: string, esText: string) {
  if (locale === "en") return enText || frText;
  if (locale === "es") return esText || frText;
  return frText;
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

  const [experienceTypes, testimonials, destinationCount, regionCount, tourCount] = await Promise.all([
    db.experienceType.findMany({
      where: { kind: "who", parentId: null },
      orderBy: { order: "asc" },
      select: { slug: true, cardImage: true, cardTitle: true, cardTitleEn: true, cardTitleEs: true },
    }),
    getTestimonials(),
    db.destination.count(),
    db.region.count(),
    db.tour.count(),
  ]);
  const travelerTypeCards = experienceTypes.map((e) => ({
    key: e.slug,
    href: `/experience-types/${e.slug}`,
    image: e.cardImage,
    title: e.cardTitle,
    titleEn: e.cardTitleEn,
    titleEs: e.cardTitleEs,
  }));

  const faqs = homeFaqs({ destinations: destinationCount, regions: regionCount, tours: tourCount });
  const faqSchema = faqJsonLd(
    faqs.map((f) => ({
      question: pick(locale, f.question, f.questionEn, f.questionEs),
      answer: pick(locale, f.answer, f.answerEn, f.answerEs),
    }))
  );

  return (
    <main className="flex-1">
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />}
      <Hero />
      <Mission />
      <Testimonials items={testimonials} />
      <TravelerTypes types={travelerTypeCards} />
      <FeaturedTours />
      <OurApproach />
      <TrustStrip />
      <section id="faq" className="scroll-mt-40 bg-white px-6 py-16 sm:py-20 lg:px-10">
        <FaqAccordion faqs={faqs} />
      </section>
      <ClosingCta />
    </main>
  );
}
