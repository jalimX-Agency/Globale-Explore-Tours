"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";
import { contactClientSchema, type ContactClientValues } from "./schema";
import { submitContactMessage } from "./actions";

const fieldClass =
  "w-full rounded-sm border border-neutral-300 bg-white px-3 py-2.5 text-sm font-body text-neutral-900 outline-none transition-colors focus:border-neutral-900";
const labelClass = "label-eyebrow mb-1.5 block text-neutral-500";
const errorClass = "mt-1 text-xs text-[var(--brand-accent)]";

export function ContactForm() {
  const { t, language } = useLanguage();
  const [pending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactClientValues>({
    resolver: zodResolver(contactClientSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "", company: "" },
  });

  function onSubmit(values: ContactClientValues) {
    startTransition(async () => {
      try {
        const { company, ...rest } = values;
        const result = await submitContactMessage({ ...rest, language }, company);
        if (result.ok) setSubmitted(true);
      } catch {
        toast.error(t("contactPage.errorToast"));
      }
    });
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-neutral-200 p-8 text-center">
        <h2 className="font-display text-2xl">{t("contactPage.successTitle")}</h2>
        <p className="mt-3 text-neutral-600">{t("contactPage.successBody")}</p>
        <LocaleLink href="/" className="btn-primary mt-6 inline-flex">
          {t("contactPage.backHome")}
        </LocaleLink>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            {t("contactPage.nameLabel")}
          </label>
          <input id="name" className={fieldClass} {...register("name")} />
          {errors.name && <p className={errorClass}>{t("bookingPage.requiredError")}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            {t("contactPage.emailLabel")}
          </label>
          <input id="email" type="email" className={fieldClass} {...register("email")} />
          {errors.email && <p className={errorClass}>{t("bookingPage.emailInvalidError")}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="phone">
          {t("contactPage.phoneLabel")}
        </label>
        <input id="phone" type="tel" className={fieldClass} {...register("phone")} />
        {errors.phone && <p className={errorClass}>{t("bookingPage.requiredError")}</p>}
      </div>

      <div>
        <label className={labelClass} htmlFor="subject">
          {t("contactPage.subjectLabel")}
        </label>
        <input id="subject" className={fieldClass} {...register("subject")} />
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          {t("contactPage.messageLabel")}
        </label>
        <textarea id="message" rows={5} className={fieldClass} {...register("message")} />
        {errors.message && <p className={errorClass}>{t("bookingPage.requiredError")}</p>}
      </div>

      <button type="submit" disabled={pending} className="btn-accent w-full justify-center sm:w-auto">
        {pending ? t("contactPage.submitting") : t("contactPage.submit")}
      </button>
    </form>
  );
}
