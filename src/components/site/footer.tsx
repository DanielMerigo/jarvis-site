"use client";

import { useI18n } from "@/lib/i18n";

const stack = [
  "discord.js",
  "discord-player",
  "yt-dlp",
  "ffmpeg",
  "llama.cpp",
  "whisper.cpp",
  "openWakeWord",
];

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-slate-800/70 px-6 py-14 light:border-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <p className="font-display text-lg font-semibold text-white light:text-slate-900">J.A.R.V.I.S.</p>
        <p className="max-w-md text-sm text-slate-400 light:text-slate-600">{t("footer.tagline")}</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs uppercase tracking-wider text-slate-600 light:text-slate-500">
            {t("footer.stack")}
          </span>
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-800 px-3 py-1 font-mono text-xs text-slate-400 light:border-slate-300 light:text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-xs text-slate-600 light:text-slate-500">
          {t("footer.made")} ·{" "}
          <a
            href="https://github.com/DanielMerigo"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 underline-offset-4 transition-colors hover:text-cyan-300 hover:underline light:hover:text-cyan-700"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
