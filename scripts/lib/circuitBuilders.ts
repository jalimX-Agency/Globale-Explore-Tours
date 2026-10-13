import type { NewJourneyTrip } from "./seedTripsRunner";

// Shared builders for supplier-circuit batches: every text is a [fr, en, es] triple, and images
// are referenced by a short key under journeys/<prefix>-<key>.jpg (see the matching
// upload-images-* script). Import with a dynamic import() after process.loadEnvFile(".env").

export type L3 = [fr: string, en: string, es: string];

export type Season = { label: L3; months: string };

export function circuitBuilders(opts: { destinationSlug: string; imagePrefix: string; season: Season }) {
  const R2 = process.env.NEXT_PUBLIC_R2_URL!;
  const img = (key: string) => `${R2}/journeys/${opts.imagePrefix}-${key}.jpg`;

  const day = (dayNumber: number, title: L3, description: L3, image: string) => ({
    dayNumber,
    title: title[0], titleEn: title[1], titleEs: title[2],
    description: description[0], descriptionEn: description[1], descriptionEs: description[2],
    image: img(image),
    images: "",
  });

  const chapter = (title: L3, intro: L3, gallery: string[], days: ReturnType<typeof day>[]) => ({
    title: title[0], titleEn: title[1], titleEs: title[2],
    intro: intro[0], introEn: intro[1], introEs: intro[2],
    galleryImages: gallery.map(img).join(","),
    mapMarkerX: 0,
    mapMarkerY: 0,
    days,
  });

  const trip = (o: {
    slug: string; name: L3; tagline: L3; description: L3; includes: L3;
    price: number; nights: number; departureFrom: string; image: string;
    theme: string; feeling: string; travelerTypes: string; maxGuests: number; order: number;
    chapters: ReturnType<typeof chapter>[];
  }): NewJourneyTrip => ({
    destinationSlug: opts.destinationSlug,
    tour: {
      name: o.name[0], nameEn: o.name[1], nameEs: o.name[2],
      slug: o.slug,
      image: img(o.image),
      format: "journey",
      mapImage: "",
      tagline: o.tagline[0], taglineEn: o.tagline[1], taglineEs: o.tagline[2],
      description: o.description[0], descriptionEn: o.description[1], descriptionEs: o.description[2],
      price: o.price,
      originalPrice: 0,
      currency: "EUR",
      durationValue: o.nights,
      durationUnit: "nights",
      duration: `${o.nights} nuits`,
      durationEn: `${o.nights} nights`,
      durationEs: `${o.nights} noches`,
      includes: o.includes[0], includesEn: o.includes[1], includesEs: o.includes[2],
      departureFrom: o.departureFrom,
      whenLabel: opts.season.label[0],
      whenLabelEn: opts.season.label[1],
      whenLabelEs: opts.season.label[2],
      bestMonths: opts.season.months,
      category: "multi-day",
      theme: o.theme,
      feeling: o.feeling,
      travelerTypes: o.travelerTypes,
      maxGuests: o.maxGuests,
      featured: true,
      order: o.order,
    },
    chapters: o.chapters,
  });

  return { img, day, chapter, trip };
}
