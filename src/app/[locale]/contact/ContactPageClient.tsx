"use client";

import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";
import { ContactForm } from "./ContactForm";

export function ContactPageClient() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="mb-14 text-center">
        <p className="label-eyebrow text-neutral-400">{t("contactPage.eyebrow")}</p>
        <h1 className="font-display mt-2 text-3xl sm:text-4xl">{t("contactPage.title")}</h1>
        <p className="mt-3 text-neutral-500">{t("contactPage.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,20rem)_1fr]">
        <div className="space-y-10">
          <div>
            <p className="label-eyebrow text-neutral-400">{t("contactPage.travelEnquiries")}</p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{t("contactPage.travelEnquiriesBody")}</p>
            <LocaleLink href="/faire-une-demande" className="btn-primary mt-4 inline-flex text-xs">
              {t("contactPage.planTrip")}
            </LocaleLink>
          </div>

          <div>
            <p className="label-eyebrow text-neutral-400">{t("contactPage.emailUs")}</p>
            <p className="mt-3 text-sm text-neutral-600">{t("contactPage.generalEnquiry")}</p>
            <a href="mailto:contact@globaleexploretours.com" className="mt-1 block text-sm text-neutral-900 hover:text-[var(--brand-accent)]">
              contact@globaleexploretours.com
            </a>
          </div>

          <div>
            <p className="label-eyebrow text-neutral-400">Téléphone</p>
            <a href="tel:+33667586462" className="mt-3 block text-sm text-neutral-900 hover:text-[var(--brand-accent)]">
              +33 6 67 58 64 62
            </a>
            <a href="tel:+33984338182" className="mt-1 block text-sm text-neutral-900 hover:text-[var(--brand-accent)]">
              +33 9 84 33 81 82
            </a>
          </div>

          <div>
            <p className="label-eyebrow text-neutral-400">Adresse</p>
            <p className="mt-3 text-sm text-neutral-600">5 Avenue du Sénateur Girard, 59300 Valenciennes, France</p>
            {/* Google's free "share > embed a map" iframe — no API key or billing required,
                unlike the Maps Embed API / Locator Plus widget. */}
            <div className="mt-4 aspect-[4/3] w-full overflow-hidden rounded-sm border border-neutral-200">
              <iframe
                src="https://www.google.com/maps?q=place_id:ChIJQT2_2XHtwkcRRZmeuiJ4uBY&output=embed"
                title="Globale Explore Tours — Valenciennes, France"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="label-eyebrow mb-5 text-neutral-400">{t("contactPage.formTitle")}</p>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
