"use client";

import { useLanguage } from "@/lib/i18n/context";
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

type Destination = {
  slug: string;
  heroImage: string;
  description: string;
  descriptionEn: string;
  descriptionEs: string;
  overviewHeading: string;
  overviewHeadingEn: string;
  overviewHeadingEs: string;
  descriptionMore: string;
  descriptionMoreEn: string;
  descriptionMoreEs: string;
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
// "d'Italie", "des Maldives"...) — not a simple vowel rule, so known names are mapped explicitly
// rather than guessed. English/Spanish "the best of"/"lo mejor de" don't need this at all.
const FR_DE_CONTRACTION: Record<string, string> = {
  Maroc: "du Maroc",
  Japon: "du Japon",
  Kenya: "du Kenya",
  Islande: "d’Islande",
  Italie: "d’Italie",
  Maldives: "des Maldives",
};

function bestOfTitle(language: string, t: (key: string) => string, place: string) {
  if (language === "fr") {
    const contraction = FR_DE_CONTRACTION[place] ?? `de ${place}`;
    return `${t("destinationsPage.bestOfPrefix")} ${contraction}`;
  }
  return `${t("destinationsPage.bestOfPrefix")} ${place}`;
}

export function CountryPageClient({
  destination,
  countryLabel,
  breadcrumb,
  blocks,
  faqs,
  team,
  tours,
  otherDestinations,
}: {
  destination: Destination;
  countryLabel: string;
  breadcrumb: BreadcrumbItem[];
  blocks: Block[];
  faqs: Faq[];
  team: Team[];
  tours: TourCardData[];
  otherDestinations: OtherDestinationItem[];
}) {
  const { language, t } = useLanguage();
  const overviewHeading = localized(language, destination.overviewHeading, destination.overviewHeadingEn, destination.overviewHeadingEs);
  const intro = localized(language, destination.description, destination.descriptionEn, destination.descriptionEs);
  const descriptionMore = localized(language, destination.descriptionMore, destination.descriptionMoreEn, destination.descriptionMoreEs);

  const tabs = [
    { id: "overview", label: t("destinationsPage.overview") },
    { id: "trips", label: t("destinationsPage.trips") },
    { id: "see-and-do", label: t("destinationsPage.seeAndDo") },
    { id: "team", label: t("destinationsPage.team") },
    { id: "faq", label: t("destinationsPage.faq") },
  ];

  return (
    <div>
      <DestinationHero image={destination.heroImage} title={countryLabel} />

      <DestinationSubNav tabs={tabs} />

      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
        <Breadcrumb items={breadcrumb} />
      </div>

      <div id="overview" className="scroll-mt-40 px-6 pb-6 lg:px-10">
        <DestinationOverview heading={overviewHeading} paragraphs={[intro, descriptionMore]} />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-12 lg:px-10">
        <div id="trips" className="scroll-mt-40">
          <TripsShowcase heading={t("destinationsPage.topTrips")} blurb={t("destinationsPage.topTripsBlurb")} tours={tours} />
        </div>

        <div id="see-and-do" className="scroll-mt-40 space-y-16">
          <ContentBlockSection
            title={t("destinationsPage.seeAndDo")}
            blocks={blocks.filter((b) => b.section === "seeAndDo")}
          />

          <BestOfGrid
            title={bestOfTitle(language, t, countryLabel)}
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

        <OtherDestinationsCarousel title={t("destinationsPage.otherCountries")} items={otherDestinations} />
      </div>
    </div>
  );
}
