"use client";

import { motion, useReducedMotion } from "motion/react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { useI18n, type TranslationKey } from "@/lib/i18n";

const steps: Array<{ titleKey: TranslationKey; descKey: TranslationKey; icon: string }> = [
  { titleKey: "voice.s1.title", descKey: "voice.s1.desc", icon: "👂" },
  { titleKey: "voice.s2.title", descKey: "voice.s2.desc", icon: "📝" },
  { titleKey: "voice.s3.title", descKey: "voice.s3.desc", icon: "🧠" },
  { titleKey: "voice.s4.title", descKey: "voice.s4.desc", icon: "🎵" },
];

const howTips: Array<{ titleKey: TranslationKey; descKey: TranslationKey; icon: string }> = [
  { titleKey: "voice.how.t1.title", descKey: "voice.how.t1.desc", icon: "⚡" },
  { titleKey: "voice.how.t2.title", descKey: "voice.how.t2.desc", icon: "🔔" },
  { titleKey: "voice.how.t3.title", descKey: "voice.how.t3.desc", icon: "🤫" },
  { titleKey: "voice.how.t4.title", descKey: "voice.how.t4.desc", icon: "💬" },
];

const terminalLines = [
  { text: "[ears] speaking start, subscribed user=merigo", color: "text-slate-500" },
  { text: "[ears] near-wake score=0.412", color: "text-slate-500" },
  { text: "[ears] wake! user=merigo  🔊 bi-bip", color: "text-cyan-300" },
  { text: '[ears] utterance captured: 2.1s', color: "text-slate-400" },
  { text: '[whisper] "toca costa gold"', color: "text-emerald-300" },
  { text: '[intent] { action: "play", query: "costa gold" }', color: "text-violet-300" },
  { text: "🎶 Queued Costa Gold - Quem Tava Lá", color: "text-cyan-200" },
];

function Waveform() {
  const reduceMotion = useReducedMotion();
  const bars = [12, 22, 34, 18, 40, 26, 44, 30, 20, 38, 24, 14, 32, 42, 28, 16, 36, 22, 12, 26];

  return (
    <div className="flex h-14 items-center justify-center gap-1" aria-hidden>
      {bars.map((height, index) => (
        <motion.span
          key={index}
          className="w-1.5 rounded-full bg-cyan-400/80 light:bg-cyan-600/70"
          style={{ height }}
          animate={reduceMotion ? undefined : { scaleY: [1, 0.4, 1] }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            delay: index * 0.07,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function Voice() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_50%_20%,rgba(34,211,238,0.07),transparent)] light:bg-[radial-gradient(700px_circle_at_50%_20%,rgba(14,116,144,0.06),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <h2 className="font-display text-4xl font-bold text-cyan-300 light:text-cyan-700 sm:text-6xl">
            <TypingAnimation duration={80} className="font-display text-4xl font-bold text-cyan-300 light:text-cyan-700 sm:text-6xl">
              {t("voice.title")}
            </TypingAnimation>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400 light:text-slate-600">{t("voice.subtitle")}</p>
        </motion.div>

        <Waveform />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.titleKey}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex items-start gap-4 rounded-xl border border-slate-800/80 bg-slate-950/50 p-5 light:border-slate-200 light:bg-white light:shadow-sm"
              >
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-cyan-400/10 text-xl light:bg-cyan-600/10">
                  {step.icon}
                </span>
                <div>
                  <p className="font-display font-semibold text-white light:text-slate-900">
                    <span className="mr-2 text-xs text-cyan-400 light:text-cyan-700">{`0${index + 1}`}</span>
                    {t(step.titleKey)}
                  </p>
                  <p className="mt-1 text-sm text-slate-400 light:text-slate-600">{t(step.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            // The terminal window stays dark in both themes — it reads as an
            // app screenshot, not as part of the page surface.
            className="overflow-hidden rounded-xl border border-slate-800 bg-[#0b0f16] font-mono text-[13px] shadow-2xl shadow-cyan-500/5 light:border-slate-300 light:shadow-slate-400/20"
          >
            <div className="flex items-center gap-1.5 border-b border-slate-800/80 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-slate-500">jarvis — ears</span>
            </div>
            <div className="space-y-2.5 p-5">
              {terminalLines.map((line, index) => (
                <motion.p
                  key={line.text}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.35 }}
                  className={line.color}
                >
                  {line.text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="font-display text-2xl font-bold text-white light:text-slate-900 sm:text-3xl">
            {t("voice.how.title")}
          </h3>
          <div className="mx-auto mt-4 flex max-w-fit flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2.5 text-sm text-slate-300 light:border-cyan-600/30 light:bg-cyan-600/5 light:text-slate-700">
            <span>{t("voice.how.join.lead")}</span>
            <code className="rounded bg-slate-800/80 px-1.5 py-0.5 font-mono text-cyan-300 light:bg-slate-200 light:text-cyan-800">/join</code>
            <span>{t("voice.how.join.a")}</span>
            <span className="text-slate-600 light:text-slate-400">·</span>
            <code className="rounded bg-slate-800/80 px-1.5 py-0.5 font-mono text-cyan-300 light:bg-slate-200 light:text-cyan-800">/leave</code>
            <span>{t("voice.how.join.b")}</span>
          </div>
          <p className="mt-4 text-slate-400 light:text-slate-600">{t("voice.how.subtitle")}</p>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {howTips.map((tip, index) => (
            <motion.div
              key={tip.titleKey}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-5 light:border-slate-200 light:bg-white light:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-cyan-400/10 text-xl light:bg-cyan-600/10">
                  {tip.icon}
                </span>
                <span className="text-xs font-semibold text-cyan-400 light:text-cyan-700">{`0${index + 1}`}</span>
              </div>
              <p className="mt-4 font-display font-semibold text-white light:text-slate-900">{t(tip.titleKey)}</p>
              <p className="mt-1 text-sm text-slate-400 light:text-slate-600">{t(tip.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
