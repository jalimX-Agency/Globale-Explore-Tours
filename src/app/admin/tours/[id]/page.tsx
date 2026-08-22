import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { TourForm } from "../tour-form";
import type { TourFormValues } from "../schema";

export default async function EditTourPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const tour = await db.tour.findUnique({
    where: { id },
    include: {
      destination: { select: { id: true, name: true } },
      sections: { orderBy: { order: "asc" } },
      hotels: { orderBy: { order: "asc" } },
      chapters: {
        orderBy: { order: "asc" },
        include: { days: { orderBy: { order: "asc" } } },
      },
    },
  });

  if (!tour) notFound();

  const defaultValues: TourFormValues = {
    name: tour.name,
    nameEn: tour.nameEn,
    nameEs: tour.nameEs,
    slug: tour.slug,
    tagline: tour.tagline,
    taglineEn: tour.taglineEn,
    taglineEs: tour.taglineEs,
    description: tour.description,
    descriptionEn: tour.descriptionEn,
    descriptionEs: tour.descriptionEs,
    longDescription: tour.longDescription,
    longDescriptionEn: tour.longDescriptionEn,
    longDescriptionEs: tour.longDescriptionEs,
    price: tour.price,
    originalPrice: tour.originalPrice,
    currency: tour.currency,
    duration: tour.duration,
    durationEn: tour.durationEn,
    durationEs: tour.durationEs,
    includes: tour.includes,
    includesEn: tour.includesEn,
    includesEs: tour.includesEs,
    category: tour.category,
    theme: tour.theme,
    travelerTypes: tour.travelerTypes,
    maxGuests: tour.maxGuests,
    departureFrom: tour.departureFrom,
    image: tour.image,
    images: tour.images,
    featured: tour.featured,
    order: tour.order,
    format: tour.format === "journey" ? "journey" : "standard",
    mapImage: tour.mapImage,
    whenLabel: tour.whenLabel,
    whenLabelEn: tour.whenLabelEn,
    whenLabelEs: tour.whenLabelEs,
    sections: tour.sections.map((s) => ({
      heading: s.heading,
      headingEn: s.headingEn,
      headingEs: s.headingEs,
      body: s.body,
      bodyEn: s.bodyEn,
      bodyEs: s.bodyEs,
    })),
    hotels: tour.hotels.map((h) => ({
      name: h.name,
      nameEn: h.nameEn,
      nameEs: h.nameEs,
      description: h.description,
      descriptionEn: h.descriptionEn,
      descriptionEs: h.descriptionEs,
      image: h.image,
    })),
    chapters: tour.chapters.map((c) => ({
      title: c.title,
      titleEn: c.titleEn,
      titleEs: c.titleEs,
      intro: c.intro,
      introEn: c.introEn,
      introEs: c.introEs,
      galleryImages: c.galleryImages,
      mapMarkerX: c.mapMarkerX,
      mapMarkerY: c.mapMarkerY,
      days: c.days.map((d) => ({
        dayNumber: d.dayNumber,
        location: d.location,
        locationEn: d.locationEn,
        locationEs: d.locationEs,
        hotel: d.hotel,
        title: d.title,
        titleEn: d.titleEn,
        titleEs: d.titleEs,
        description: d.description,
        descriptionEn: d.descriptionEn,
        descriptionEs: d.descriptionEs,
        image: d.image,
        images: d.images,
      })),
    })),
  };

  return <TourForm tourId={tour.id} destination={tour.destination} defaultValues={defaultValues} />;
}
