"use client";

import { LocaleLink } from "@/components/get/LocaleLink";

// Full-bleed photo card with everything overlaid on the image via a bottom gradient scrim —
// badge top-right, country + title always visible, description + price revealed on hover —
// matching the source Trip Finder's result-card pattern exactly. Deliberately a separate
// component from <TourCard>: that one puts text in a plain area below the photo, which is a
// different card language used by the rest of the site (excursions, destinations...).
export function TripFinderCard({
  href,
  image,
  badge,
  country,
  title,
  description,
  price,
  ctaLabel,
  ctaSolid = false,
}: {
  href: string;
  image: string;
  badge: string;
  country?: string;
  title: string;
  description?: string;
  price?: string;
  ctaLabel: string;
  ctaSolid?: boolean;
}) {
  return (
    <LocaleLink href={href} className="group relative block aspect-[3/4] overflow-hidden rounded-sm bg-neutral-800">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element -- full-bleed card photo, same placeholder-tolerant pattern as TourCard
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-600" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

      <span className="absolute right-4 top-4 text-xs font-bold uppercase tracking-wide text-white drop-shadow">
        {badge}
      </span>

      <div className="absolute inset-x-0 bottom-0 flex flex-col p-5">
        {country && (
          <span className="label-eyebrow text-white/70">{country}</span>
        )}
        <p className="font-display mt-1 text-lg leading-snug font-semibold text-white">{title}</p>

        {(description || price) && (
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              {description && (
                <p className="font-body mt-2 line-clamp-2 text-xs text-white/85">{description}</p>
              )}
              {price && <p className="font-body mt-1 text-xs italic text-white/70">{price}</p>}
            </div>
          </div>
        )}

        <span
          className={`font-body mt-3 inline-flex w-fit items-center border px-4 py-2 text-[11px] font-semibold tracking-wide uppercase transition-colors ${
            ctaSolid
              ? "border-white bg-white text-neutral-900 group-hover:bg-neutral-100"
              : "border-white/80 text-white group-hover:bg-white group-hover:text-neutral-900"
          }`}
        >
          {ctaLabel}
        </span>
      </div>
    </LocaleLink>
  );
}
