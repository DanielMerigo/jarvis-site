"use client";

import { motion } from "motion/react";
import { useI18n } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center gap-1 rounded-full border border-cyan-400/20 bg-black/40 p-1 text-xs font-medium backdrop-blur light:border-cyan-600/30 light:bg-white/70">
      {(["pt", "en"] as const).map((option) => (
        <button
          key={option}
          onClick={() => setLang(option)}
          className={`relative rounded-full px-3 py-1 uppercase tracking-wider transition-colors ${
            lang === option
              ? "text-slate-950 light:text-white"
              : "text-cyan-100/60 hover:text-cyan-100 light:text-cyan-900/50 light:hover:text-cyan-900"
          }`}
          aria-pressed={lang === option}
        >
          {/* Shared-layout pill slides between the active options */}
          {lang === option && (
            <motion.span
              layoutId="lang-active-pill"
              className="absolute inset-0 rounded-full bg-cyan-400/90 light:bg-cyan-600"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
          <span className="relative z-10">{option}</span>
        </button>
      ))}
    </div>
  );
}
