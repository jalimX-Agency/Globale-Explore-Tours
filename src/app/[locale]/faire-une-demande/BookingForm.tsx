"use client";

import { useMemo, useState, useTransition } from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";
import { bookingClientSchema, type BookingClientValues } from "./schema";
import { submitBooking } from "./actions";
import { DestinationMultiSelect, type DestinationOption } from "./DestinationMultiSelect";

type PreselectedTour = {
  id: string;
  name: string;
  price: number;
  currency: string;
  duration: string;
  image: string;
} | null;

const fieldClass =
  "w-full rounded-sm border border-neutral-300 bg-white px-3 py-2.5 text-sm font-body text-neutral-900 outline-none transition-colors focus:border-neutral-900";
const labelClass = "label-eyebrow mb-1.5 block text-neutral-500";
const errorClass = "mt-1 text-xs text-[var(--brand-accent)]";

export function BookingForm({
  preselectedTour,
  destinationOptions,
  locale,
}: {
  preselectedTour: PreselectedTour;
  destinationOptions: DestinationOption[];
  locale: string;
}) {
  const { t, tArray } = useLanguage();
  const [pending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);

  const months = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        value: String(i + 1).padStart(2, "0"),
        label: new Intl.DateTimeFormat(locale, { month: "long" }).format(new Date(2024, i, 1)),
      })),
    [locale]
  );
  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear + 1, currentYear + 2];
  const budgetOptions = tArray("bookingPage.budgetOptions");
  const hearAboutOptions = tArray("bookingPage.hearAboutOptions");

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BookingClientValues>({
    resolver: zodResolver(bookingClientSchema),
    defaultValues: {
      tourId: preselectedTour?.id,
      destinationsInterest: [],
      preferredMonth: "",
      preferredYear: String(currentYear),
      duration: "",
      guests: 2,
      children: 0,
      budget: "",
      message: "",
      firstName: "",
      lastName: "",
      email: "",
      emailConfirm: "",
      phone: "",
      hearAboutUs: "",
      company: "",
    },
  });

  const selectedDestinations = watch("destinationsInterest");

  function onSubmit(values: BookingClientValues) {
    startTransition(async () => {
      try {
        const preferredDate =
          values.preferredMonth && values.preferredYear
            ? `${values.preferredYear}-${values.preferredMonth}-01`
            : undefined;
        const result = await submitBooking(
          {
            tourId: values.tourId,
            destinationsInterest: values.destinationsInterest.join(", "),
            preferredDate,
            duration: values.duration,
            guests: values.guests,
            children: values.children,
            budget: values.budget,
            message: values.message,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            hearAboutUs: values.hearAboutUs,
            language: (locale as "fr" | "en" | "es") ?? "fr",
          },
          values.company
        );
        if (result.ok) setSubmitted(true);
      } catch {
        toast.error(t("bookingPage.errorToast"));
      }
    });
  }

  if (submitted) {
    return (
      <main className="mx-auto max-w-lg px-6 py-24 text-center sm:py-32">
        <p className="label-eyebrow text-neutral-400">Merci</p>
        <h1 className="font-display mt-3 text-3xl">{t("bookingPage.successTitle")}</h1>
        <p className="mt-4 text-neutral-600">{t("bookingPage.successBody")}</p>
        <LocaleLink href="/" className="btn-primary mt-8 inline-flex">
          {t("bookingPage.backHome")}
        </LocaleLink>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <div className="mb-10 text-center">
        <p className="label-eyebrow text-neutral-400">
          {preselectedTour ? t("bookingPage.eyebrowTour") : t("bookingPage.eyebrowGeneral")}
        </p>
        <h1 className="font-display mt-2 text-3xl sm:text-4xl">
          {preselectedTour ? t("bookingPage.titleTour") : t("bookingPage.titleGeneral")}
        </h1>
        {!preselectedTour && <p className="mt-3 text-neutral-500">{t("bookingPage.subtitleGeneral")}</p>}
      </div>

      {preselectedTour && (
        <div className="mb-10 flex items-center gap-4 rounded-sm border border-neutral-200 p-4">
          {preselectedTour.image && (
            <div className="relative size-20 shrink-0 overflow-hidden rounded-sm bg-neutral-100">
              <Image src={preselectedTour.image} alt="" fill className="object-cover" />
            </div>
          )}
          <div>
            <p className="text-xs text-neutral-400">{t("bookingPage.tourSummaryLabel")}</p>
            <p className="font-display text-lg">{preselectedTour.name}</p>
            <p className="text-sm text-neutral-500">
              {preselectedTour.price} {preselectedTour.currency} · {preselectedTour.duration}
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* Honeypot — hidden from real visitors via CSS only (no JS), bots that auto-fill
            every field will populate it and get silently no-op'd server-side. */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
        </div>

        <section className="space-y-5">
          <h2 className="label-eyebrow border-b border-neutral-200 pb-2 text-neutral-400">
            {t("bookingPage.yourTrip")}
          </h2>

          {!preselectedTour && (
            <div>
              <span className={labelClass}>{t("bookingPage.whereLabel")}</span>
              <DestinationMultiSelect
                options={destinationOptions}
                selected={selectedDestinations}
                onChange={(next) => setValue("destinationsInterest", next)}
                placeholder={t("bookingPage.whereHelper")}
              />
            </div>
          )}

          <div>
            <span className={labelClass}>{t("bookingPage.whenLabel")}</span>
            <div className="grid grid-cols-2 gap-3">
              <select className={fieldClass} {...register("preferredMonth")}>
                <option value="">{t("bookingPage.monthPlaceholder")}</option>
                {months.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.label}
                  </option>
                ))}
              </select>
              <select className={fieldClass} {...register("preferredYear")}>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass} htmlFor="duration">
              {t("bookingPage.durationLabel")}
            </label>
            <input id="duration" className={fieldClass} placeholder={t("bookingPage.durationPlaceholder")} {...register("duration")} />
          </div>

          <div>
            <span className={labelClass}>{t("bookingPage.travelersLabel")}</span>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="guests" className="mb-1 block text-xs text-neutral-400">
                  {t("bookingPage.adultsLabel")}
                </label>
                <Controller
                  control={control}
                  name="guests"
                  render={({ field }) => (
                    <input
                      id="guests"
                      type="number"
                      min={1}
                      className={fieldClass}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.valueAsNumber || 1)}
                    />
                  )}
                />
              </div>
              <div>
                <label htmlFor="children" className="mb-1 block text-xs text-neutral-400">
                  {t("bookingPage.childrenLabel")}
                </label>
                <Controller
                  control={control}
                  name="children"
                  render={({ field }) => (
                    <input
                      id="children"
                      type="number"
                      min={0}
                      className={fieldClass}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          {!preselectedTour && (
            <div>
              <label className={labelClass} htmlFor="budget">
                {t("bookingPage.budgetLabel")}
              </label>
              <select id="budget" className={fieldClass} {...register("budget")}>
                <option value="">{t("bookingPage.budgetPlaceholder")}</option>
                {budgetOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className={labelClass} htmlFor="message">
              {t("bookingPage.commentsLabel")}
            </label>
            <textarea id="message" rows={4} className={fieldClass} placeholder={t("bookingPage.commentsPlaceholder")} {...register("message")} />
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="label-eyebrow border-b border-neutral-200 pb-2 text-neutral-400">
            {t("bookingPage.yourDetails")}
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="firstName">
                {t("bookingPage.firstNameLabel")}
              </label>
              <input id="firstName" className={fieldClass} {...register("firstName")} />
              {errors.firstName && <p className={errorClass}>{t("bookingPage.requiredError")}</p>}
            </div>
            <div>
              <label className={labelClass} htmlFor="lastName">
                {t("bookingPage.lastNameLabel")}
              </label>
              <input id="lastName" className={fieldClass} {...register("lastName")} />
              {errors.lastName && <p className={errorClass}>{t("bookingPage.requiredError")}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="email">
                {t("bookingPage.emailLabel")}
              </label>
              <input id="email" type="email" className={fieldClass} {...register("email")} />
              {errors.email && <p className={errorClass}>{t("bookingPage.emailInvalidError")}</p>}
            </div>
            <div>
              <label className={labelClass} htmlFor="emailConfirm">
                {t("bookingPage.emailConfirmLabel")}
              </label>
              <input id="emailConfirm" type="email" className={fieldClass} {...register("emailConfirm")} />
              {errors.emailConfirm && <p className={errorClass}>{t("bookingPage.emailMismatchError")}</p>}
            </div>
          </div>

          <div>
            <label className={labelClass} htmlFor="phone">
              {t("bookingPage.phoneLabel")}
            </label>
            <input id="phone" type="tel" className={fieldClass} {...register("phone")} />
          </div>

          <div>
            <label className={labelClass} htmlFor="hearAboutUs">
              {t("bookingPage.hearAboutLabel")}
            </label>
            <select id="hearAboutUs" className={fieldClass} {...register("hearAboutUs")}>
              <option value="">{t("bookingPage.hearAboutPlaceholder")}</option>
              {hearAboutOptions.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
          </div>
        </section>

        <button type="submit" disabled={pending} className="btn-accent w-full justify-center">
          {pending ? t("bookingPage.submitting") : t("bookingPage.submit")}
        </button>
      </form>
    </main>
  );
}
