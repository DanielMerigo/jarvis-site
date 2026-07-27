"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Particles } from "@/components/ui/particles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { INVITE_JARVIS, useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t } = useI18n();
  const { theme } = useTheme();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax layers: background drifts up, glow and content drift down at
  // different speeds while the hero scrolls away.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // With reduced motion the ranges collapse to zero — the style prop itself
  // stays present on both server and client, avoiding hydration mismatches.
  const range = (from: number, to: number): [number, number] =>
    reduceMotion ? [0, 0] : [from, to];
  const backgroundY = useTransform(scrollYProgress, [0, 1], range(0, -120));
  const glowY = useTransform(scrollYProgress, [0, 1], range(0, 160));
  const contentY = useTransform(scrollYProgress, [0, 1], range(0, 90));
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], reduceMotion ? [1, 1] : [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <motion.div
        aria-hidden
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <AnimatedGridPattern
          numSquares={40}
          maxOpacity={0.08}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "absolute inset-0 fill-cyan-400/10 stroke-cyan-400/10 light:fill-cyan-600/15 light:stroke-cyan-600/15",
          )}
        />
        {/* The mouse-follow is the point of this layer, so it has to READ as
            interactive: low staticity = particles drift further toward the
            cursor, low ease = they get there quickly. The defaults (50/50)
            move them a few pixels over a second — invisible in practice. */}
        <Particles
          className="absolute inset-0"
          quantity={140}
          size={0.5}
          staticity={18}
          ease={22}
          color={theme === "dark" ? "#22d3ee" : "#0e7490"}
        />
      </motion.div>

      {/* arc-reactor glow */}
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.16)_0%,rgba(34,211,238,0.05)_38%,transparent_70%)] light:bg-[radial-gradient(circle,rgba(14,116,144,0.14)_0%,rgba(14,116,144,0.05)_38%,transparent_70%)]"
          animate={reduceMotion ? undefined : { scale: [1, 1.06, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200 light:border-cyan-600/40 light:bg-cyan-600/10 light:text-cyan-800">
          {t("hero.badge")}
        </span>

        <h1 className="font-display max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white light:text-slate-900 sm:text-7xl">
          {t("hero.title.1")}
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-300 bg-clip-text text-transparent light:from-cyan-600 light:via-sky-600 light:to-cyan-600">
            {t("hero.title.2")}
          </span>
        </h1>

        <p className="max-w-2xl text-balance text-base text-slate-300/90 light:text-slate-600 sm:text-lg">
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
            className="rounded-full border border-slate-600/60 px-8 py-3 text-base font-medium text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-200 light:border-slate-400/60 light:text-slate-700 light:hover:border-cyan-600/60 light:hover:text-cyan-700"
          >
            {t("hero.cta.how")}
          </a>
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        ↓
      </motion.div>
    </section>
  );
}
