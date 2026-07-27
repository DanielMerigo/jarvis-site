"use client";

import { motion } from "motion/react";
import { PlayerCard } from "./player-card";
import { useI18n, type TranslationKey } from "@/lib/i18n";

const bullets: TranslationKey[] = ["player.b1", "player.b2", "player.b3", "player.b4"];

export function PlayerShowcase() {
  const { t } = useI18n();

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold text-white light:text-slate-900 sm:text-5xl">
            {t("player.title")}
          </h2>
          <p className="mt-4 max-w-xl text-slate-400 light:text-slate-600">{t("player.subtitle")}</p>
          <ul className="mt-8 space-y-4">
            {bullets.map((key, index) => (
              <motion.li
                key={key}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className="flex items-start gap-3 text-sm text-slate-300 light:text-slate-700"
              >
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-cyan-400/15 text-[11px] text-cyan-300 light:bg-cyan-600/15 light:text-cyan-700">
                  ✓
                </span>
                {t(key)}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, rotate: 1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-end"
        >
          <PlayerCard />
        </motion.div>
      </div>
    </section>
  );
}
