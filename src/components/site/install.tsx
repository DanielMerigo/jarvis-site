"use client";

import { motion } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";
import { INVITE_EARS, INVITE_JARVIS, useI18n } from "@/lib/i18n";

const cards = [
  {
    stepKey: "install.jarvis.step",
    titleKey: "install.jarvis.title",
    descKey: "install.jarvis.desc",
    ctaKey: "install.jarvis.cta",
    href: INVITE_JARVIS,
    primary: true,
  },
  {
    stepKey: "install.ears.step",
    titleKey: "install.ears.title",
    descKey: "install.ears.desc",
    ctaKey: "install.ears.cta",
    href: INVITE_EARS,
    primary: false,
  },
] as const;

export function Install() {
  const { t } = useI18n();

  return (
    <section id="install" className="relative mx-auto max-w-5xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="font-display text-3xl font-bold text-white sm:text-5xl">
          {t("install.title")}
        </h2>
        <p className="mt-3 text-slate-400">{t("install.subtitle")}</p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        {cards.map((card, index) => (
          <motion.div
            key={card.titleKey}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-8"
          >
            {card.primary && <BorderBeam size={140} duration={8} colorFrom="#22d3ee" colorTo="#0ea5e9" />}
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              {t(card.stepKey)}
            </span>
            <h3 className="font-display mt-3 text-2xl font-semibold text-white">
              {t(card.titleKey)}
            </h3>
            <p className="mt-3 min-h-16 text-sm leading-relaxed text-slate-400">
              {t(card.descKey)}
            </p>
            <a
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className={
                card.primary
                  ? "mt-6 inline-block rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  : "mt-6 inline-block rounded-full border border-cyan-400/40 px-6 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
              }
            >
              {t(card.ctaKey)}
            </a>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">{t("install.note")}</p>
    </section>
  );
}
