"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

// next/image with `unoptimized` does NOT prepend basePath to the src —
// on GitHub Pages the site lives under /jarvis-site, so we prefix manually.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const controls = [
  { icon: "jarvis_restart", label: "Restart", style: "secondary" },
  { icon: "jarvis_pause", label: "Pause", style: "primary" },
  { icon: "jarvis_skip", label: "Skip", style: "secondary" },
  { icon: "jarvis_stop", label: "Stop", style: "danger" },
  { icon: "jarvis_queue", label: "Queue", style: "secondary" },
] as const;

const volumeControls = [
  { icon: "jarvis_voldown", label: "-10" },
  { icon: "jarvis_volup", label: "+10" },
] as const;

const buttonStyles: Record<string, string> = {
  secondary: "bg-[#4e5058] hover:bg-[#5c5e66]",
  primary: "bg-[#5865f2] hover:bg-[#6773f3]",
  danger: "bg-[#da373c] hover:bg-[#e04549]",
};

// Faithful replica of the bot's real "Now Playing" card (Discord Components
// V2 layout), with the actual custom emoji icons and a live progress bar.
export function PlayerCard() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="w-full max-w-md rounded-lg bg-[#313338] p-4 shadow-2xl shadow-cyan-500/10">
      <div className="overflow-hidden rounded-lg border border-[#3f4147] border-l-4 border-l-cyan-400 bg-[#2b2d31]">
        <div className="flex items-center gap-3 p-4">
          <div className="flex h-14 w-14 flex-none items-center justify-center rounded-md bg-gradient-to-br from-cyan-500/30 to-indigo-500/20 text-2xl">
            🎵
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold tracking-wider text-cyan-400">
              ♪ NOW PLAYING
            </p>
            <p className="truncate text-[15px] font-semibold text-[#f2f3f5]">
              Costa Gold - Quem Tava Lá
            </p>
            <p className="truncate text-xs text-[#949ba4]">
              Ursis Films · 5:53 · requested by @merigo
            </p>
          </div>
        </div>

        <div className="px-4 pb-1">
          <div className="h-1.5 overflow-hidden rounded-full bg-[#1e1f22]">
            <motion.div
              className="h-full rounded-full bg-cyan-400"
              initial={{ width: "12%" }}
              animate={reduceMotion ? { width: "45%" } : { width: ["12%", "88%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="mt-1 flex justify-between text-[11px] text-[#949ba4]">
            <span>1:23</span>
            <span>5:53</span>
          </div>
        </div>

        <div className="mx-4 my-2 h-px bg-[#3f4147]" />

        <div className="flex flex-wrap gap-1.5 px-4 pb-2">
          {controls.map((control) => (
            <span
              key={control.label}
              className={`flex cursor-default items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-white transition-colors ${buttonStyles[control.style]}`}
            >
              <Image src={`${BASE_PATH}/emojis/${control.icon}.png`} alt="" width={18} height={18} />
              {control.label}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 px-4 pb-3">
          {volumeControls.map((control) => (
            <span
              key={control.label}
              className="flex cursor-default items-center gap-1.5 rounded-md bg-[#4e5058] px-2.5 py-1.5 text-xs font-medium text-white"
            >
              <Image src={`${BASE_PATH}/emojis/${control.icon}.png`} alt="" width={18} height={18} />
              {control.label}
            </span>
          ))}
          <span className="ml-auto text-[11px] text-[#949ba4]">Volume 50% · Up next: 2</span>
        </div>
      </div>
    </div>
  );
}
