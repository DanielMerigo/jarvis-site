"use client";

import { motion, useReducedMotion } from "motion/react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Particles } from "@/components/ui/particles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { INVITE_JARVIS, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center">
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.08}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "absolute inset-0 fill-cyan-400/10 stroke-cyan-400/10",
        )}
      />
      <Particles className="absolute inset-0" quantity={90} color="#22d3ee" ease={80} />

      {/* arc-reactor glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.16)_0%,rgba(34,211,238,0.05)_38%,transparent_70%)]"
        animate={reduceMotion ? undefined : { scale: [1, 1.06, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
          {t("hero.badge")}
        </span>

        <h1 className="font-display max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl">
          {t("hero.title.1")}
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
            {t("hero.title.2")}
          </span>
        </h1>

        <p className="max-w-2xl text-balance text-base text-slate-300/90 sm:text-lg">
          {t("hero.subtitle")}
        </p>

        <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <a href={INVITE_JARVIS} target="_blank" rel="noreferrer">
            <ShimmerButton
              shimmerColor="#7dd3fc"
              background="rgba(8,47,73,0.9)"
              className="px-8 py-3 text-base font-semibold text-cyan-50"
            >
              {t("hero.cta.add")}
            </ShimmerButton>
          </a>
          <a
            href="#install"
            className="rounded-full border border-slate-600/60 px-8 py-3 text-base font-medium text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-200"
          >
            {t("hero.cta.how")}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
