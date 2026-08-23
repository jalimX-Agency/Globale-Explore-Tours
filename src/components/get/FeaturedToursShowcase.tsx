"use client";

import { useLanguage } from "@/lib/i18n/context";
import { TripsShowcase } from "@/components/get/TripsShowcase";
import type { TourCardData } from "@/components/get/TourCard";

export function FeaturedToursShowcase({ tours }: { tours: TourCardData[] }) {
  const { t } = useLanguage();

  return (
    <TripsShowcase
      heading={t("featured.title")}
      blurb={t("featured.subtitle")}
      ctaLabel={t("featured.viewAll")}
      ctaHref="/trouver-mon-voyage"
      tours={tours}
    />
  );
}
