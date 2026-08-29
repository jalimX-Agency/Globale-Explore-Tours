"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { LOCALES } from "@/lib/i18n/locales";
import { usePathWithoutLocale } from "@/lib/i18n/useLocalizedPath";
import { LocaleLink } from "@/components/get/LocaleLink";
import { isVideoUrl } from "@/lib/media";

// Everything that isn't Excursions / Expériences / About lives behind the hamburger — mirrors
// Black Tomato's own header, which only ever surfaces 3 top-level links.
const MORE_LINKS = [
  { labelKey: "nav.blog", href: "/blog" },
  { labelKey: "nav.contact", href: "/contact" },
] as const;

const LANG_LABELS: Record<string, string> = { fr: "FR", en: "EN", es: "ES" };

type DestinationLite = {
  slug: string;
  name: string;
  nameEn: string;
  nameEs: string;
  region: string;
  regionEn: string;
  regionEs: string;
  regionSlug: string;
  heroImage: string;
  order: number;
  featured: boolean;
};

type ExperienceTypeLite = {
  slug: string;
  kind: string;
  cardImage: string;
  cardTitle: string;
  cardTitleEn: string;
  cardTitleEs: string;
  cardDescription: string;
  cardDescriptionEn: string;
  cardDescriptionEs: string;
};

type Language = "fr" | "en" | "es";

function localizedName(d: DestinationLite, language: Language) {
  if (language === "en") return d.nameEn || d.name;
  if (language === "es") return d.nameEs || d.name;
  return d.name;
}

function localizedRegion(d: DestinationLite, language: Language) {
  if (language === "en") return d.regionEn || d.region;
  if (language === "es") return d.regionEs || d.region;
  return d.region;
}

function localizedCardTitle(e: ExperienceTypeLite, language: Language) {
  if (language === "en") return e.cardTitleEn || e.cardTitle;
  if (language === "es") return e.cardTitleEs || e.cardTitle;
  return e.cardTitle;
}

function localizedCardDescription(e: ExperienceTypeLite, language: Language) {
  if (language === "en") return e.cardDescriptionEn || e.cardDescription;
  if (language === "es") return e.cardDescriptionEs || e.cardDescription;
  return e.cardDescription;
}

export function Navigation({
  destinations,
  experienceTypes,
}: {
  destinations: DestinationLite[];
  experienceTypes: ExperienceTypeLite[];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [activeRegionSlug, setActiveRegionSlug] = useState<string | null>(null);
  const [experiencesOpen, setExperiencesOpen] = useState(false);
  const [activeExperienceTab, setActiveExperienceTab] = useState<"who" | "what">("who");
  const [mobileSection, setMobileSection] = useState<null | "destinations" | "experiences">(null);
  const { language, t } = useLanguage();
  const pathname = usePathname();
  const pathWithoutLocale = usePathWithoutLocale();

  const isHome = pathname === `/${language}`;
  // Destination hub pages (region/country) open on a full-bleed hero image, same as home — the
  // header should start transparent there too, not just on "/". Capped at 2 segments after
  // "destinations" so it matches /destinations/[region] and /destinations/[region]/[country]
  // but NOT the trip-detail route one level deeper (/destinations/[region]/[country]/[slug]),
  // which usually opens on a plain white page with no hero to give the transparent header contrast.
  // Same treatment for /experience-types and its traveler-type / family sub-pages, which all
  // open on their own full-bleed hero image.
  const hasDarkHero =
    isHome ||
    /^\/[a-z]{2}\/destinations(\/[^/]+){0,2}\/?$/.test(pathname ?? "") ||
    /^\/[a-z]{2}\/experience-types(\/[^/]+){0,2}\/?$/.test(pathname ?? "");
  // Also force the solid header whenever a full-screen mega-menu is open — its own background
  // is white, so a transparent header floating over it would be unreadable.
  const solid = scrolled || !hasDarkHero || destinationsOpen || experiencesOpen;

  const regionGroups = useMemo(() => {
    const groups = new Map<string, { slug: string; label: string; order: number; items: DestinationLite[] }>();
    for (const d of destinations) {
      const existing = groups.get(d.regionSlug);
      if (existing) {
        existing.items.push(d);
      } else {
        groups.set(d.regionSlug, {
          slug: d.regionSlug,
          label: localizedRegion(d, language),
          order: d.order,
          items: [d],
        });
      }
    }
    return Array.from(groups.values()).sort((a, b) => a.order - b.order);
  }, [destinations, language]);

  const activeGroup = regionGroups.find((g) => g.slug === activeRegionSlug) ?? regionGroups[0];

  // Reused by both the Destinations and Experiences mega-menus below — a compact grid of image
  // cards, same visual language as the "Not Where But Who/What" rows on /experience-types.
  // Admin-editable (see /admin/experiences) — adding a new ExperienceType row (either kind)
  // adds a card here automatically, no code change needed.
  const toCard = (e: ExperienceTypeLite) => ({
    key: e.slug,
    image: e.cardImage,
    title: localizedCardTitle(e, language),
    desc: localizedCardDescription(e, language),
    href: `/experience-types/${e.slug}`,
  });
  const whoCards = experienceTypes.filter((e) => e.kind === "who").map(toCard);
  const whatCards = experienceTypes.filter((e) => e.kind === "what").map(toCard);

  const activeExperienceCards = activeExperienceTab === "who" ? whoCards : whatCards;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || destinationsOpen || experiencesOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, destinationsOpen, experiencesOpen]);

  useEffect(() => {
    if (!destinationsOpen && !experiencesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDestinationsOpen(false);
        setExperiencesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [destinationsOpen, experiencesOpen]);

  const textColor = solid ? "text-neutral-900" : "text-white";

  const openDestinations = () => {
    setActiveRegionSlug(regionGroups[0]?.slug ?? null);
    // Both mega-menus share the same fixed slot below the header — leaving the other one open
    // means it renders behind (or fights with) this one, so only ever show one at a time.
    setExperiencesOpen(false);
    setDestinationsOpen(true);
  };

  const openExperiences = () => {
    setDestinationsOpen(false);
    setExperiencesOpen(true);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* backdrop-blur lives on this full-width bar, not <header> itself — backdrop-filter
          creates a containing block for `position: fixed` descendants, which would break the
          full-viewport fixed overlays (destinationsOpen/mobileOpen) rendered later as children
          of <header>. */}
      <div
        className={`w-full transition-all duration-300 ${
          solid ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
        }`}
      >
      <div className="mx-auto grid h-14 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6 lg:px-10">
        <LocaleLink href="/" aria-label="Globale Explore Tours" className="justify-self-start">
          <Image
            src={solid ? "/logo.png" : "/logo-white.png"}
            alt="Globale Explore Tours"
            width={70}
            height={46}
            className="h-9 w-auto object-contain lg:h-10"
            priority
          />
        </LocaleLink>

        {/* Center zone — nav links + hamburger, grouped together and roughly centered between
            the logo and the right-hand utilities (Black Tomato header layout). */}
        <div className="hidden items-center justify-center gap-10 lg:flex">
          <nav className={`flex items-center gap-10 ${textColor}`}>
            {regionGroups.length > 0 && (
              <button className="label-eyebrow hover:opacity-70" onClick={openDestinations}>
                {t("nav.destinations")}
              </button>
            )}

            {/* Opens on hover, closes only via the panel's own close button (or Escape) — not on
                mouse-leave, so moving off the trigger to browse the panel doesn't dismiss it. */}
            <LocaleLink
              href="/experience-types"
              onMouseEnter={openExperiences}
              className="label-eyebrow hover:opacity-70"
            >
              {t("nav.experiences")}
            </LocaleLink>

            <LocaleLink href="/a-propos" className="label-eyebrow hover:opacity-70">
              {t("nav.about")}
            </LocaleLink>
          </nav>

          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button className={textColor} aria-label={t("nav.more")}>
              <Menu className="h-5 w-5" />
            </button>
            {moreOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
                className="absolute left-1/2 top-full w-56 -translate-x-1/2 rounded-sm border border-neutral-100 bg-white py-3 text-neutral-900 shadow-xl"
              >
                {MORE_LINKS.map(({ labelKey, href }) => (
                  <LocaleLink
                    key={href}
                    href={href}
                    className="font-body block px-5 py-2 text-sm hover:opacity-60"
                    onClick={() => setMoreOpen(false)}
                  >
                    {t(labelKey)}
                  </LocaleLink>
                ))}
                <div className="mt-2 flex items-center gap-1 border-t border-neutral-100 px-5 pt-3 text-xs">
                  {LOCALES.map((code, i) => (
                    <span key={code} className="flex items-center">
                      {i > 0 && <span className="mx-1 opacity-40">/</span>}
                      <a
                        href={`/${code}${pathWithoutLocale}`}
                        className={language === code ? "font-semibold" : "opacity-60 hover:opacity-100"}
                      >
                        {LANG_LABELS[code]}
                      </a>
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Right zone — phone + CTA only. */}
        <div className="flex items-center gap-6 justify-self-end">
          <a href="tel:+33667586462" className={`hidden items-center gap-1.5 text-sm xl:flex ${textColor}`}>
            <Phone className="h-3.5 w-3.5" />
            +33 6 67 58 64 62
          </a>

          <LocaleLink
            href="/faire-une-demande"
            className="btn-accent hidden lg:inline-flex text-xs"
            style={{ padding: "0.4rem 1.1rem" }}
          >
            {t("nav.bookNow")}
          </LocaleLink>

          <button className={`lg:hidden ${textColor}`} onClick={() => setMobileOpen(true)} aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      </div>

      {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden"
          >
            <div className="flex h-14 flex-shrink-0 items-center justify-between px-6">
              <Image src="/logo.png" alt="Globale Explore Tours" width={64} height={42} className="h-9 w-auto object-contain" />
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setMobileSection(null);
                }}
                aria-label={t("nav.closeOverlay")}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto px-6 pb-10">
              {/* ── Destinations accordion ── */}
              <div className="border-b border-neutral-100">
                <button
                  onClick={() => setMobileSection(mobileSection === "destinations" ? null : "destinations")}
                  className="flex w-full items-center justify-between py-5 font-display text-2xl"
                  aria-expanded={mobileSection === "destinations"}
                >
                  {t("nav.destinations")}
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${mobileSection === "destinations" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileSection === "destinations" && (
                  <div className="flex flex-col gap-6 pb-6">
                    {regionGroups.map((group) => (
                      <div key={group.slug}>
                        <p className="label-eyebrow mb-2 text-neutral-500">{group.label}</p>
                        <div className="flex flex-col gap-3">
                          {group.items.map((d) => (
                            <LocaleLink
                              key={d.slug}
                              href={`/destinations/${d.regionSlug}/${d.slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="font-body text-base text-neutral-700"
                            >
                              {localizedName(d, language)}
                            </LocaleLink>
                          ))}
                          <LocaleLink
                            href={`/destinations/${group.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="font-body text-sm font-semibold text-neutral-900"
                          >
                            {t("nav.browseAll")} {group.label.toUpperCase()}
                          </LocaleLink>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ── Experiences accordion ── */}
              <div className="border-b border-neutral-100">
                <button
                  onClick={() => setMobileSection(mobileSection === "experiences" ? null : "experiences")}
                  className="flex w-full items-center justify-between py-5 font-display text-2xl"
                  aria-expanded={mobileSection === "experiences"}
                >
                  {t("nav.experiences")}
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${mobileSection === "experiences" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileSection === "experiences" && (
                  <div className="pb-6">
                    <div className="mb-4 flex gap-6">
                      <button
                        onClick={() => setActiveExperienceTab("who")}
                        className={`label-eyebrow ${activeExperienceTab === "who" ? "text-[var(--brand-accent)]" : "text-neutral-500"}`}
                      >
                        {t("experienceTypes.subnavWho")}
                      </button>
                      <button
                        onClick={() => setActiveExperienceTab("what")}
                        className={`label-eyebrow ${activeExperienceTab === "what" ? "text-[var(--brand-accent)]" : "text-neutral-500"}`}
                      >
                        {t("experienceTypes.subnavWhat")}
                      </button>
                    </div>
                    <div className="flex flex-col gap-4">
                      {activeExperienceCards.map((card) => (
                        <LocaleLink
                          key={card.key}
                          href={card.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-4"
                        >
                          <span className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-sm">
                            <Image src={card.image} alt={card.title} fill className="object-cover" sizes="56px" />
                          </span>
                          <span className="font-body text-base text-neutral-800">{card.title}</span>
                        </LocaleLink>
                      ))}
                      <LocaleLink
                        href="/experience-types"
                        onClick={() => setMobileOpen(false)}
                        className="font-body text-sm font-semibold text-neutral-900"
                      >
                        {t("nav.browseAll")} {t("nav.experiences").toUpperCase()}
                      </LocaleLink>
                    </div>
                  </div>
                )}
              </div>

              <LocaleLink
                href="/a-propos"
                onClick={() => setMobileOpen(false)}
                className="border-b border-neutral-100 py-5 font-display text-2xl"
              >
                {t("nav.about")}
              </LocaleLink>
              {MORE_LINKS.map(({ labelKey, href }) => (
                <LocaleLink
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-neutral-100 py-5 font-display text-2xl"
                >
                  {t(labelKey)}
                </LocaleLink>
              ))}

              <LocaleLink href="/faire-une-demande" onClick={() => setMobileOpen(false)} className="btn-accent mt-8 justify-center">
                {t("nav.bookNow")}
              </LocaleLink>

              <a href="tel:+33667586462" className="mt-6 flex items-center justify-center gap-1.5 text-sm text-neutral-600">
                <Phone className="h-3.5 w-3.5" />
                +33 6 67 58 64 62
              </a>

              <div className="mt-6 flex items-center justify-center gap-3 text-sm">
                {LOCALES.map((code) => (
                  <a
                    key={code}
                    href={`/${code}${pathWithoutLocale}`}
                    className={language === code ? "font-semibold" : "text-neutral-400"}
                  >
                    {LANG_LABELS[code]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
      )}

      {destinationsOpen && activeGroup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.18 }}
            className="fixed left-0 right-0 top-14 z-40 flex h-[calc(100vh-3.5rem)] flex-col overflow-y-auto border-t border-neutral-100 bg-white shadow-xl"
          >
            <button
              onClick={() => setDestinationsOpen(false)}
              aria-label={t("nav.closeOverlay")}
              className="absolute right-6 top-6 text-neutral-500 hover:text-neutral-900 lg:right-10"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-10 pt-10 lg:flex-row lg:px-10">
              <div className="flex flex-col gap-1 py-6 lg:w-1/5 lg:py-0">
                {regionGroups.map((group) => (
                  <LocaleLink
                    key={group.slug}
                    href={`/destinations/${group.slug}`}
                    onMouseEnter={() => setActiveRegionSlug(group.slug)}
                    onClick={() => setDestinationsOpen(false)}
                    className={`font-display text-left text-2xl py-2 transition-colors ${
                      group.slug === activeGroup.slug ? "text-[var(--brand-accent)]" : "text-neutral-800 hover:text-neutral-500"
                    }`}
                  >
                    {group.label}
                  </LocaleLink>
                ))}
              </div>

              <div
                className="grid grid-flow-col grid-rows-[repeat(15,minmax(0,auto))] gap-x-8 gap-y-1 py-6 lg:w-2/5 lg:border-l lg:border-neutral-100 lg:py-0 lg:pl-10"
              >
                {activeGroup.items.map((d) => (
                  <LocaleLink
                    key={d.slug}
                    href={`/destinations/${d.regionSlug}/${d.slug}`}
                    onClick={() => setDestinationsOpen(false)}
                    className="font-body py-1.5 text-neutral-700 hover:text-neutral-900"
                  >
                    {localizedName(d, language)}
                  </LocaleLink>
                ))}
                <LocaleLink
                  href={`/destinations/${activeGroup.slug}`}
                  onClick={() => setDestinationsOpen(false)}
                  className="font-display mt-3 text-sm font-semibold tracking-wide text-neutral-900 hover:opacity-60"
                >
                  {t("nav.browseAll")} {activeGroup.label.toUpperCase()}
                </LocaleLink>
              </div>

              <div className="relative hidden overflow-hidden rounded-sm lg:block lg:w-2/5 lg:py-0 lg:pl-10">
                <div className="relative h-full min-h-[380px] w-full">
                  {(() => {
                    const photo = activeGroup.items.find((d) => d.featured)?.heroImage ?? activeGroup.items[0]?.heroImage;
                    if (!photo) return null;
                    return isVideoUrl(photo) ? (
                      <video
                        src={photo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <Image src={photo} alt={activeGroup.label} fill className="object-cover" />
                    );
                  })()}
                </div>
              </div>
            </div>
          </motion.div>
      )}

      {experiencesOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.18 }}
            className="fixed left-0 right-0 top-14 z-40 flex h-[calc(100vh-3.5rem)] flex-col overflow-y-auto border-t border-neutral-100 bg-white shadow-xl"
          >
            <button
              onClick={() => setExperiencesOpen(false)}
              aria-label={t("nav.closeOverlay")}
              className="absolute right-6 top-6 text-neutral-500 hover:text-neutral-900 lg:right-10"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-10 pt-10 lg:flex-row lg:px-10">
              <div className="flex flex-shrink-0 gap-6 py-6 lg:w-1/5 lg:flex-col lg:gap-1 lg:py-0">
                <button
                  onMouseEnter={() => setActiveExperienceTab("who")}
                  onClick={() => setActiveExperienceTab("who")}
                  className={`font-display text-left text-2xl py-2 transition-colors ${
                    activeExperienceTab === "who" ? "text-[var(--brand-accent)]" : "text-neutral-800 hover:text-neutral-500"
                  }`}
                >
                  {t("experienceTypes.subnavWho")}
                </button>
                <button
                  onMouseEnter={() => setActiveExperienceTab("what")}
                  onClick={() => setActiveExperienceTab("what")}
                  className={`font-display text-left text-2xl py-2 transition-colors ${
                    activeExperienceTab === "what" ? "text-[var(--brand-accent)]" : "text-neutral-800 hover:text-neutral-500"
                  }`}
                >
                  {t("experienceTypes.subnavWhat")}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-5 py-6 sm:grid-cols-3 lg:w-4/5 lg:grid-cols-4 lg:border-l lg:border-neutral-100 lg:py-0 lg:pl-10">
                {activeExperienceCards.map((card) => (
                  <LocaleLink
                    key={card.key}
                    href={card.href}
                    onClick={() => setExperiencesOpen(false)}
                    className="group relative aspect-[3/4] overflow-hidden rounded-sm"
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/75" />

                    <div className="absolute inset-0 flex items-center justify-center p-4 text-center transition-opacity duration-300 group-hover:opacity-0">
                      <p className="label-eyebrow text-white" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.4)" }}>
                        {card.title}
                      </p>
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="label-eyebrow mb-3 text-white/70">{card.title}</p>
                      <p className="font-body text-sm leading-relaxed text-white/95">{card.desc}</p>
                    </div>
                  </LocaleLink>
                ))}
              </div>
            </div>
          </motion.div>
      )}
    </header>
  );
}
