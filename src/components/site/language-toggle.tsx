"use client";

import { useI18n } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang } = useI18n();

  return (
    <div className="flex items-center gap-1 rounded-full border border-cyan-400/20 bg-black/40 p-1 text-xs font-medium backdrop-blur">
      {(["pt", "en"] as const).map((option) => (
        <button
          key={option}
          onClick={() => setLang(option)}
          className={`rounded-full px-3 py-1 uppercase tracking-wider transition-colors ${
            lang === option
              ? "bg-cyan-400/90 text-slate-950"
              : "text-cyan-100/60 hover:text-cyan-100"
          }`}
          aria-pressed={lang === option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
