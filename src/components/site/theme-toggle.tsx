"use client";

import { AnimatePresence, motion } from "motion/react";
import { MoonStars, Sun } from "@phosphor-icons/react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useI18n();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={theme === "dark" ? t("theme.toLight") : t("theme.toDark")}
      className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-cyan-400/20 bg-black/40 backdrop-blur transition-colors hover:border-cyan-400/50 light:border-cyan-600/30 light:bg-white/70 light:hover:border-cyan-600/60"
    >
      {/* mode="wait" + rotate: the current icon spins out before the next one
          spins in, making the switch legible instead of an instant swap */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="flex"
        >
          {theme === "dark" ? (
            <MoonStars size={16} weight="fill" className="text-cyan-200" />
          ) : (
            <Sun size={16} weight="fill" className="text-amber-500" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
