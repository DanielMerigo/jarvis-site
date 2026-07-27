"use client";

import { motion } from "motion/react";
import { useI18n, type TranslationKey } from "@/lib/i18n";

const features: Array<{
  titleKey: TranslationKey;
  descKey: TranslationKey;
  icon: string;
  accent: string;
  span: string;
}> = [
  {
    titleKey: "features.music.title",
    descKey: "features.music.desc",
    icon: "🎵",
    accent: "from-cyan-400/20",
    span: "sm:col-span-2",
  },
  {
    titleKey: "features.ai.title",
    descKey: "features.ai.desc",
    icon: "🧠",
    accent: "from-violet-400/20",
    span: "",
  },
  {
    titleKey: "features.voice.title",
    descKey: "features.voice.desc",
    icon: "🎙️",
    accent: "from-sky-400/20",
    span: "",
  },
  {
    titleKey: "features.bilingual.title",
    descKey: "features.bilingual.desc",
    icon: "🌎",
    accent: "from-amber-400/20",
    span: "",
  },
  {
    titleKey: "features.private.title",
    descKey: "features.private.desc",
    icon: "🔒",
    accent: "from-emerald-400/20",
    span: "",
  },
];

export function Features() {
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
          {t("features.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">{t("features.subtitle")}</p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.titleKey}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/60 p-7 transition-colors hover:border-cyan-400/30 ${feature.span}`}
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${feature.accent} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            />
            <span className="text-3xl">{feature.icon}</span>
            <h3 className="font-display mt-4 text-xl font-semibold text-white">
              {t(feature.titleKey)}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{t(feature.descKey)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
