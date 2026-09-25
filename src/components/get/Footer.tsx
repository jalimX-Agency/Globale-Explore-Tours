"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";

type Language = "fr" | "en" | "es";
type FooterLink = { labelKey?: string; label?: Record<Language, string>; href: string };

// "Excursions" used to point at /excursions, which has no index page (only legacy
// /excursions/[slug] redirects) — a 404 linked from every page on the site. The experiences hub
// is the closest real equivalent.
const EXPLORE: FooterLink[] = [
  { labelKey: "nav.tours", href: "/trouver-mon-voyage" },
  { labelKey: "nav.experiences", href: "/experience-types" },
  { labelKey: "nav.blog", href: "/blog" },
  { labelKey: "nav.bookNow", href: "/faire-une-demande" },
];

const COMPANY: FooterLink[] = [
  { labelKey: "nav.about", href: "/a-propos" },
  { labelKey: "nav.contact", href: "/contact" },
  { label: { fr: "Mentions légales", en: "Legal notice", es: "Aviso legal" }, href: "/mentions-legales" },
  {
    label: { fr: "Politique de confidentialité", en: "Privacy policy", es: "Política de privacidad" },
    href: "/politique-de-confidentialite",
  },
  {
    label: { fr: "Conditions de réservation", en: "Booking terms", es: "Condiciones de reserva" },
    href: "/conditions-de-reservation",
  },
];

type DestinationLite = { slug: string; name: string; nameEn: string; nameEs: string; regionSlug: string };
type ExperienceTypeLite = { slug: string; kind: string; cardTitle: string; cardTitleEn: string; cardTitleEs: string };

function localizedName(d: DestinationLite, language: Language) {
  if (language === "en") return d.nameEn || d.name;
  if (language === "es") return d.nameEs || d.name;
  return d.name;
}

function localizedCardTitle(e: ExperienceTypeLite, language: Language) {
  if (language === "en") return e.cardTitleEn || e.cardTitle;
  if (language === "es") return e.cardTitleEs || e.cardTitle;
  return e.cardTitle;
}

export function Footer({
  destinations = [],
  experienceTypes = [],
}: {
  destinations?: DestinationLite[];
  experienceTypes?: ExperienceTypeLite[];
}) {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const whoLinks = useMemo(() => experienceTypes.filter((e) => e.kind === "who"), [experienceTypes]);
  const whatLinks = useMemo(() => experienceTypes.filter((e) => e.kind === "what"), [experienceTypes]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wired to the newsletter provider once available — for now just acknowledges the signup.
    setSent(true);
  }

  return (
    <footer className="bg-[var(--brand-ink)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-7">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="Globale Explore Tours" width={50} height={34} className="object-contain" />
              <span className="font-display text-base">Globale Explore Tours</span>
            </div>
            <p className="font-body mt-4 max-w-sm text-sm leading-relaxed text-white/60">{t("footer.description")}</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://wa.me/33667586462" aria-label="WhatsApp" className="text-white/70 hover:text-white">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">WhatsApp</span>
              </a>
              <a href="https://www.instagram.com/globaleexploretours/" aria-label="Instagram" className="text-white/70 hover:text-white">
                <InstagramIcon />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" aria-label="Facebook" className="text-white/70 hover:text-white">
                <FacebookIcon />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          <div>
            <p className="label-eyebrow text-white/40">{t("footer.explore")}</p>
            <ul className="mt-4 space-y-2.5">
              {EXPLORE.map((item) => (
                <li key={item.href}>
                  <LocaleLink href={item.href} className="font-body text-sm text-white/75 hover:text-white">
                    {item.labelKey ? t(item.labelKey) : item.label?.[language]}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>

          {destinations.length > 0 && (
            <div>
              <p className="label-eyebrow text-white/40">{t("nav.destinations")}</p>
              <ul className="mt-4 space-y-2.5">
                {destinations.map((d) => (
                  <li key={d.slug}>
                    <LocaleLink
                      href={`/destinations/${d.regionSlug}/${d.slug}`}
                      className="font-body text-sm text-white/75 hover:text-white"
                    >
                      {localizedName(d, language)}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {whoLinks.length > 0 && (
            <div>
              <p className="label-eyebrow text-white/40">{t("experienceTypes.subnavWho")}</p>
              <ul className="mt-4 space-y-2.5">
                {whoLinks.map((e) => (
                  <li key={e.slug}>
                    <LocaleLink href={`/experience-types/${e.slug}`} className="font-body text-sm text-white/75 hover:text-white">
                      {localizedCardTitle(e, language)}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {whatLinks.length > 0 && (
            <div>
              <p className="label-eyebrow text-white/40">{t("experienceTypes.subnavWhat")}</p>
              <ul className="mt-4 space-y-2.5">
                {whatLinks.map((e) => (
                  <li key={e.slug}>
                    <LocaleLink href={`/experience-types/${e.slug}`} className="font-body text-sm text-white/75 hover:text-white">
                      {localizedCardTitle(e, language)}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <p className="label-eyebrow text-white/40">{t("footer.company")}</p>
            <ul className="mt-4 space-y-2.5">
              {COMPANY.map((item) => (
                <li key={item.href}>
                  <LocaleLink href={item.href} className="font-body text-sm text-white/75 hover:text-white">
                    {item.labelKey ? t(item.labelKey) : item.label?.[language]}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-eyebrow text-white/40">{t("footer.contact")}</p>
            <ul className="mt-4 space-y-2.5 font-body text-sm text-white/75">
              <li>
                <a href="tel:+33667586462" className="hover:text-white">+33 6 67 58 64 62</a>
              </li>
              <li>
                <a href="tel:+33984338182" className="hover:text-white">+33 9 84 33 81 82</a>
              </li>
              <li>
                <a href="mailto:contact@globaleexploretours.com" className="hover:text-white">
                  contact@globaleexploretours.com
                </a>
              </li>
              <li className="text-white/50">5 Avenue du Sénateur Girard, 59300 Valenciennes, France</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <p className="label-eyebrow text-white/40">{t("footer.newsletter")}</p>
          {sent ? (
            <p className="font-body mt-3 text-sm text-white/75">Merci — à bientôt dans votre boîte mail.</p>
          ) : (
            <form onSubmit={onSubmit} className="mt-3 flex max-w-md gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votremail@exemple.com"
                className="font-body flex-1 border-b border-white/30 bg-transparent px-1 py-2 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none"
              />
              <button type="submit" className="btn-outline text-white hover:border-white">
                {t("footer.newsletterCta")}
              </button>
            </form>
          )}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Globale Explore Tours. {t("footer.copyright")}</span>
          <span>4.9/5 sur TripAdvisor</span>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <path d="M15 8.5h-2a1.5 1.5 0 0 0-1.5 1.5v2h3.5l-.5 3H11.5v7h-3v-7H6v-3h2.5V9.8A4.3 4.3 0 0 1 13 5.5h2v3z" />
    </svg>
  );
}
