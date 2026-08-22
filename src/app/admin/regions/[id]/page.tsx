import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { RegionForm } from "../region-form";
import type { RegionFormValues } from "../schema";

export default async function EditRegionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const region = await db.region.findUnique({ where: { id } });
  if (!region) notFound();

  const destinations = await db.destination.findMany({
    where: { regionSlug: region.slug },
    select: { id: true, name: true, region: true, order: true, _count: { select: { tours: true } } },
    orderBy: { order: "asc" },
  });

  const defaultValues: RegionFormValues = {
    heroImage: region.heroImage,
    heading: region.heading,
    headingEn: region.headingEn,
    headingEs: region.headingEs,
    intro: region.intro,
    introEn: region.introEn,
    introEs: region.introEs,
    introMore: region.introMore,
    introMoreEn: region.introMoreEn,
    introMoreEs: region.introMoreEs,
    order: region.order,
  };

  const displayName = destinations[0]?.region ?? region.slug;

  return (
    <RegionForm
      regionId={region.id}
      displayName={displayName}
      defaultValues={defaultValues}
      destinations={destinations}
    />
  );
}
