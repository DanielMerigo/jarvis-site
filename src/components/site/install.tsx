"use client";

import { motion } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";
import { INVITE_EARS, INVITE_JARVIS, useI18n, type TranslationKey } from "@/lib/i18n";

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

const gettingStarted: Array<{ titleKey: TranslationKey; descKey: TranslationKey }> = [
  { titleKey: "install.steps.1.title", descKey: "install.steps.1.desc" },
  { titleKey: "install.steps.2.title", descKey: "install.steps.2.desc" },
  { titleKey: "install.steps.3.title", descKey: "install.steps.3.desc" },
  { titleKey: "install.steps.4.title", descKey: "install.steps.4.desc" },
];

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

      {/* Getting-started walkthrough: the invite links alone left people
          wondering what to actually do once the bot joined the server. */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <h3 className="text-center font-display text-2xl font-bold text-white">
          {t("install.steps.title")}
        </h3>

        <ol className="mt-8 grid gap-4 sm:grid-cols-2">
          {gettingStarted.map((step, index) => (
            <motion.li
              key={step.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 rounded-xl border border-slate-800/80 bg-slate-950/50 p-5"
            >
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-cyan-400/10 font-mono text-sm font-semibold text-cyan-300">
                {index + 1}
              </span>
              <div>
                <p className="font-display font-semibold text-white">{t(step.titleKey)}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{t(step.descKey)}</p>
              </div>
            </motion.li>
          ))}
        </ol>

        <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-slate-800/60 bg-slate-950/30 p-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {t("install.perms.title")}
          </p>
          <p className="mt-3 text-sm text-slate-300">{t("install.perms.jarvis")}</p>
          <p className="mt-1 text-sm text-slate-300">{t("install.perms.ears")}</p>
          <p className="mt-3 text-xs text-slate-500">{t("install.perms.note")}</p>
        </div>
      </motion.div>
    </section>
  );
}
