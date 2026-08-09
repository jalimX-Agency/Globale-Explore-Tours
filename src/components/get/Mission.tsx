"use client";

import { LocaleLink } from "@/components/get/LocaleLink";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";

export function Mission() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="label-eyebrow text-neutral-500"
      >
        {t("mission.eyebrow")}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display mt-3 text-3xl sm:text-4xl"
        style={{ textWrap: "balance" }}
      >
        {t("mission.title")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-body mt-6 text-lg leading-relaxed text-neutral-600"
      >
        {t("mission.body")}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <LocaleLink href="/a-propos" className="btn-outline mt-8 inline-flex text-neutral-900">
          {t("mission.cta")}
        </LocaleLink>
      </motion.div>
    </section>
  );
}
