"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";
import { Breadcrumb, type BreadcrumbItem } from "@/components/get/Breadcrumb";
import { DestinationHero } from "@/components/get/DestinationHero";
import { DestinationSubNav } from "@/components/get/DestinationSubNav";
import { DestinationOverview } from "@/components/get/DestinationOverview";
import { ContentBlockSection } from "@/components/get/ContentBlockSection";
import { BestOfGrid } from "@/components/get/BestOfGrid";
import { ClientLovedGrid } from "@/components/get/ClientLovedGrid";
import { TeamGrid } from "@/components/get/TeamGrid";
import { TripsShowcase } from "@/components/get/TripsShowcase";
import { FaqAccordion } from "@/components/get/FaqAccordion";
import { OtherDestinationsCarousel, type OtherDestinationItem } from "@/components/get/OtherDestinationsCarousel";
import type { TourCardData } from "@/components/get/TourCard";
import { isVideoUrl } from "@/lib/media";

type Region = {
  id: string;
  slug: string;
  heroImage: string;
  heading: string;
  headingEn: string;
  headingEs: string;
  intro: string;
  introEn: string;
  introEs: string;
  introMore: string;
  introMoreEn: string;
  introMoreEs: string;
};
type DestinationLite = {
  slug: string;
  name: string;
  nameEn: string;
  nameEs: string;
  region: string;
  regionEn: string;
  regionEs: string;
  heroImage: string;
  featured: boolean;
};
type Block = {
  section: string;
  title: string;
  titleEn: string;
  titleEs: string;
  description: string;
  descriptionEn: string;
  descriptionEs: string;
  image: string;
  ctaLabel: string;
  ctaLabelEn: string;
  ctaLabelEs: string;
  ctaHref: string;
};
type Faq = { question: string; questionEn: string; questionEs: string; answer: string; answerEn: string; answerEs: string };
type Team = { name: string; role: string; roleEn: string; roleEs: string; photo: string };

function localized(language: string, fr: string, en: string, es: string) {
  if (language === "en") return en || fr;
  if (language === "es") return es || fr;
  return fr;
}

// French "de" contracts differently depending on the place name's gender/article ("du Maroc",
// "d'Italie", "des Maldives", "d'Afrique"...) — not a simple vowel rule, so known names are
// mapped explicitly rather than guessed. English/Spanish "the best of"/"lo mejor de" don't need
// this at all.
const FR_DE_CONTRACTION: Record<string, string> = {
  Maroc: "du Maroc",
  Japon: "du Japon",
  Kenya: "du Kenya",
  Islande: "d’Islande",
  Italie: "d’Italie",
  Maldives: "des Maldives",
  Afrique: "d’Afrique",
  Asie: "d’Asie",
  Europe: "d’Europe",
  "Océan Indien": "de l’Océan Indien",
};

function bestOfTitle(language: string, t: (key: string) => string, place: string) {
  if (language === "fr") {
    const contraction = FR_DE_CONTRACTION[place] ?? `de ${place}`;
    return `${t("destinationsPage.bestOfPrefix")} ${contraction}`;
  }
  return `${t("destinationsPage.bestOfPrefix")} ${place}`;
}

export function RegionPageClient({
  region,
  regionLabel,
  breadcrumb,
  destinations,
  blocks,
  faqs,
  team,
  tours,
  otherRegions,
}: {
  region: Region;
  regionLabel: string;
  breadcrumb: BreadcrumbItem[];
  destinations: DestinationLite[];
  blocks: Block[];
  faqs: Faq[];
  team: Team[];
  tours: TourCardData[];
  otherRegions: OtherDestinationItem[];
}) {
  const { language, t } = useLanguage();
  const overviewHeading = localized(language, region.heading, region.headingEn, region.headingEs);
  const intro = localized(language, region.intro, region.introEn, region.introEs);
  const introMore = localized(language, region.introMore, region.introMoreEn, region.introMoreEs);

  const tabs = [
    { id: "overview", label: t("destinationsPage.overview") },
    { id: "countries", label: t("destinationsPage.countries") },
    { id: "trips", label: t("destinationsPage.trips") },
    { id: "see-and-do", label: t("destinationsPage.seeAndDo") },
    { id: "team", label: t("destinationsPage.team") },
    { id: "faq", label: t("destinationsPage.faq") },
  ];

  return (
    <div>
      <DestinationHero image={region.heroImage} title={regionLabel} />

      <DestinationSubNav tabs={tabs} />

      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
        <Breadcrumb items={breadcrumb} />
      </div>

      <div id="overview" className="scroll-mt-40 px-6 pb-6 lg:px-10">
        <DestinationOverview heading={overviewHeading} paragraphs={[intro, introMore]} />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-12 lg:px-10">
        <div id="countries" className="scroll-mt-40">
          <h2 className="font-display text-3xl font-normal tracking-wide text-neutral-800 sm:text-4xl">
            {t("destinationsPage.countries")}
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {destinations.map((d) => {
              const name = localized(language, d.name, d.nameEn, d.nameEs);
              return (
                <LocaleLink key={d.slug} href={`/destinations/${region.slug}/${d.slug}`} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    {d.heroImage ? (
                      isVideoUrl(d.heroImage) ? (
                        <video
                          src={d.heroImage}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <Image
                          src={d.heroImage}
                          alt={name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(min-width: 640px) 33vw, 50vw"
                        />
                      )
                    ) : (
                      <div className="h-full w-full bg-neutral-200" />
                    )}
                    <div className="absolute inset-0 bg-black/25" />
                    <span className="font-display absolute inset-0 flex items-center justify-center text-center text-white">
                      {name}
                    </span>
                  </div>
                </LocaleLink>
              );
            })}
          </div>
        </div>

        <div id="trips" className="scroll-mt-40">
          <TripsShowcase heading={t("destinationsPage.topTrips")} blurb={t("destinationsPage.topTripsBlurb")} tours={tours} />
        </div>

        <div id="see-and-do" className="scroll-mt-40 space-y-16">
          <ContentBlockSection
            title={t("destinationsPage.seeAndDo")}
            blocks={blocks.filter((b) => b.section === "seeAndDo")}
          />

          <BestOfGrid
            title={bestOfTitle(language, t, regionLabel)}
            blocks={blocks.filter((b) => b.section === "bestOf")}
          />

          <ClientLovedGrid
            title={t("destinationsPage.clientLoved")}
            blocks={blocks.filter((b) => b.section === "clientLoved")}
          />
        </div>

        <div id="team" className="scroll-mt-40">
          <TeamGrid title={t("destinationsPage.team")} members={team} />
        </div>

        <div id="faq" className="scroll-mt-40">
          <FaqAccordion faqs={faqs} />
        </div>

        <OtherDestinationsCarousel title={t("destinationsPage.otherRegions")} items={otherRegions} />
      </div>
    </div>
  );
}
