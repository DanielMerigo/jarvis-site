"use client";

import { motion } from "motion/react";
import { useI18n, type TranslationKey } from "@/lib/i18n";

const steps: Array<{ titleKey: TranslationKey; descKey: TranslationKey; icon: string }> = [
  { titleKey: "queue.s1.title", descKey: "queue.s1.desc", icon: "🎧" },
  { titleKey: "queue.s2.title", descKey: "queue.s2.desc", icon: "📋" },
  { titleKey: "queue.s3.title", descKey: "queue.s3.desc", icon: "▶️" },
  { titleKey: "queue.s4.title", descKey: "queue.s4.desc", icon: "🤝" },
];

export function Queue() {
  const { t } = useI18n();

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <h2 className="font-display text-3xl font-bold text-white sm:text-5xl">
          {t("queue.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">{t("queue.subtitle")}</p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.titleKey}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="relative rounded-xl border border-slate-800/80 bg-slate-950/50 p-6"
          >
            {/* Connector line hinting the left-to-right flow between steps */}
            {index < steps.length - 1 && (
              <span
                aria-hidden
                className="pointer-events-none absolute right-0 top-12 hidden h-px w-4 translate-x-full bg-gradient-to-r from-cyan-400/40 to-transparent lg:block"
              />
            )}
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-cyan-400/10 text-xl">
                {step.icon}
              </span>
              <span className="font-mono text-xs font-semibold text-cyan-400">{`0${index + 1}`}</span>
            </div>
            <p className="mt-4 font-display font-semibold text-white">{t(step.titleKey)}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{t(step.descKey)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
