"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";
import { LocaleLink } from "@/components/get/LocaleLink";

export function Mission() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-normal leading-tight tracking-wide text-neutral-800 sm:text-4xl lg:text-[45px] lg:leading-[1.15]"
          style={{ textWrap: "balance" }}
        >
          {t("mission.title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body mt-6 space-y-5 text-[17px] leading-relaxed tracking-wide text-neutral-500"
        >
          <p>{t("mission.body1")}</p>
          <p>{t("mission.body2")}</p>
          <p>{t("mission.body3")}</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display mt-8 text-xl tracking-wide text-neutral-800"
        >
          {t("mission.closing")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <LocaleLink href="/reserver" className="btn-primary mt-8 inline-flex">
            {t("mission.cta")}
          </LocaleLink>
        </motion.div>
      </div>
    </section>
  );
}
