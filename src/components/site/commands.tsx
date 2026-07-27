"use client";

import { motion } from "motion/react";
import { Marquee } from "@/components/ui/marquee";
import { useI18n } from "@/lib/i18n";

const slashCommands = [
  "/play song",
  "/pause",
  "/resume",
  "/skip",
  "/stop",
  "/queue",
  "/volume 80",
  "/nowplaying",
  "/jarvis message",
  "/join",
  "/leave",
  "/help",
  "/ping",
];

const voicePhrases = [
  '"hey jarvis, toca costa gold"',
  '"hey jarvis, next song"',
  '"hey jarvis, abaixa o volume"',
  '"hey jarvis, pausa"',
  '"hey jarvis, play some jazz"',
  '"hey jarvis, próxima música"',
  '"hey jarvis, turn it up"',
  '"hey jarvis, para tudo"',
  '"hey jarvis, continua"',
];

export function Commands() {
  const { t } = useI18n();

  return (
    <section className="relative py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 px-6 text-center"
      >
        <h2 className="font-display text-3xl font-bold text-white light:text-slate-900 sm:text-5xl">
          {t("commands.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400 light:text-slate-600">{t("commands.subtitle")}</p>
      </motion.div>

      <div className="relative flex flex-col gap-4 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee pauseOnHover className="[--duration:38s]">
          {slashCommands.map((command) => (
            <span
              key={command}
              className="mx-2 rounded-lg border border-slate-700/70 bg-slate-900/80 px-4 py-2 font-mono text-sm text-cyan-200 light:border-slate-300 light:bg-white light:text-cyan-800"
            >
              {command}
            </span>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:46s]">
          {voicePhrases.map((phrase) => (
            <span
              key={phrase}
              className="mx-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-4 py-2 text-sm italic text-slate-300 light:border-cyan-600/30 light:text-slate-600"
            >
              🎙️ {phrase}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
