"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { LOCALES } from "@/lib/i18n/locales";
import { usePathWithoutLocale } from "@/lib/i18n/useLocalizedPath";
import { LocaleLink } from "@/components/get/LocaleLink";

const THEME_LINKS = [
  { key: "adventure", href: "/excursions?theme=adventure" },
  { key: "culture", href: "/excursions?theme=culture" },
  { key: "relax", href: "/excursions?theme=relax" },
  { key: "family", href: "/excursions?theme=family" },
] as const;

// Everything that isn't Excursions / Expériences / About lives behind the hamburger — mirrors
// Black Tomato's own header, which only ever surfaces 3 top-level links.
const MORE_LINKS = [
  { labelKey: "nav.multiDay", href: "/sejours-multi-jours" },
  { labelKey: "nav.transfers", href: "/transferts-aeroport" },
  { labelKey: "nav.blog", href: "/blog" },
  { labelKey: "nav.contact", href: "/contact" },
] as const;

const LANG_LABELS: Record<string, string> = { fr: "FR", en: "EN", es: "ES" };

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [experiencesOpen, setExperiencesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, t } = useLanguage();
  const pathname = usePathname();
  const pathWithoutLocale = usePathWithoutLocale();

  const isHome = pathname === `/${language}`;
  const solid = scrolled || !isHome; // pages without a dark hero always get the solid header

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const textColor = solid ? "text-neutral-900" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <LocaleLink href="/" aria-label="Globale Explore Tours">
          <Image
            src={solid ? "/logo.png" : "/logo-white.png"}
            alt="Globale Explore Tours"
            width={52}
            height={35}
            className="object-contain"
            priority
          />
        </LocaleLink>

        <nav className={`hidden items-center gap-8 lg:flex ${textColor}`}>
          <LocaleLink href="/excursions" className="label-eyebrow hover:opacity-70">
            {t("nav.tours")}
          </LocaleLink>

          <div
            className="relative"
            onMouseEnter={() => setExperiencesOpen(true)}
            onMouseLeave={() => setExperiencesOpen(false)}
          >
            <button className="label-eyebrow flex items-center gap-1 py-8">
              {t("nav.experiences")}
              <ChevronDown className="h-3 w-3" />
            </button>
            <AnimatePresence>
              {experiencesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[480px] -translate-x-1/2 rounded-sm border border-neutral-100 bg-white p-8 text-neutral-900 shadow-xl"
                >
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    {THEME_LINKS.map(({ key, href }) => (
                      <LocaleLink
                        key={key}
                        href={href}
                        className="group block"
                        onClick={() => setExperiencesOpen(false)}
                      >
                        <p className="font-display text-lg group-hover:opacity-60">{t(`menu.${key}`)}</p>
                        <p className="font-body mt-1 text-sm text-neutral-500">{t(`menu.${key}Desc`)}</p>
                      </LocaleLink>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <LocaleLink href="/a-propos" className="label-eyebrow hover:opacity-70">
            {t("nav.about")}
          </LocaleLink>
        </nav>

        <div className="flex items-center gap-4">
          <div
            className="relative hidden lg:block"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button className={textColor} aria-label={t("nav.more")}>
              <Menu className="h-5 w-5" />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full w-56 rounded-sm border border-neutral-100 bg-white py-3 text-neutral-900 shadow-xl"
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
            </AnimatePresence>
          </div>

          <a href="tel:+212706259077" className={`hidden items-center gap-1.5 text-sm xl:flex ${textColor}`}>
            <Phone className="h-3.5 w-3.5" />
            +212 706 259 077
          </a>

          <LocaleLink href="/reserver" className="btn-accent hidden lg:inline-flex text-xs px-5 py-2.5">
            {t("nav.bookNow")}
          </LocaleLink>

          <button className={`lg:hidden ${textColor}`} onClick={() => setMobileOpen(true)} aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden"
          >
            <div className="flex h-20 items-center justify-between px-6">
              <Image src="/logo.png" alt="Globale Explore Tours" width={44} height={30} className="object-contain" />
              <button onClick={() => setMobileOpen(false)} aria-label="Fermer">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-7 overflow-y-auto py-10">
              <LocaleLink href="/excursions" onClick={() => setMobileOpen(false)} className="font-display text-3xl">
                {t("nav.tours")}
              </LocaleLink>
              <LocaleLink href="/a-propos" onClick={() => setMobileOpen(false)} className="font-display text-3xl">
                {t("nav.about")}
              </LocaleLink>
              {MORE_LINKS.map(({ labelKey, href }) => (
                <LocaleLink key={href} href={href} onClick={() => setMobileOpen(false)} className="font-display text-3xl">
                  {t(labelKey)}
                </LocaleLink>
              ))}
              <LocaleLink href="/reserver" onClick={() => setMobileOpen(false)} className="btn-accent mt-4">
                {t("nav.bookNow")}
              </LocaleLink>
              <div className="mt-6 flex items-center gap-3 text-sm">
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
      </AnimatePresence>
    </header>
  );
}
