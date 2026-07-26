"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "pt" | "en";

const dictionaries = {
  pt: {
    "nav.commands": "Comandos",
    "nav.install": "Instalar",
    "hero.badge": "Bot de Discord · Música + IA + Voz",
    "hero.title.1": "Seu servidor.",
    "hero.title.2": "Sua música. Sua IA.",
    "hero.subtitle":
      'Música do YouTube com visual de app, inteligência artificial local no chat e comandos de voz estilo Alexa — "hey jarvis, toca..."',
    "hero.cta.add": "Adicionar ao Discord",
    "hero.cta.how": "Como funciona",
    "install.title": "Instale no seu servidor",
    "install.subtitle": "Dois cliques. Sem cadastro. Sem mensalidade.",
    "install.jarvis.step": "Passo 1",
    "install.jarvis.title": "Jarvis — o bot principal",
    "install.jarvis.desc":
      "Música com fila e cards interativos, /jarvis com IA local e todos os comandos do servidor.",
    "install.jarvis.cta": "Convidar o Jarvis",
    "install.ears.step": "Passo 2 · opcional",
    "install.ears.title": "Jarvis Ears — os ouvidos",
    "install.ears.desc":
      'Habilita os comandos de voz: "hey jarvis, toca...", "próxima", "abaixa o volume".',
    "install.ears.cta": "Convidar o Ears",
    "install.note":
      "O Ears é opcional — sem ele, tudo funciona normalmente, menos os comandos de voz.",
  },
  en: {
    "nav.commands": "Commands",
    "nav.install": "Install",
    "hero.badge": "Discord Bot · Music + AI + Voice",
    "hero.title.1": "Your server.",
    "hero.title.2": "Your music. Your AI.",
    "hero.subtitle":
      'App-grade YouTube music, local AI in chat, and Alexa-style voice commands — "hey jarvis, play..."',
    "hero.cta.add": "Add to Discord",
    "hero.cta.how": "How it works",
    "install.title": "Install it on your server",
    "install.subtitle": "Two clicks. No sign-up. No subscription.",
    "install.jarvis.step": "Step 1",
    "install.jarvis.title": "Jarvis — the main bot",
    "install.jarvis.desc":
      "Music with queue and interactive cards, /jarvis with local AI, and every server command.",
    "install.jarvis.cta": "Invite Jarvis",
    "install.ears.step": "Step 2 · optional",
    "install.ears.title": "Jarvis Ears — the ears",
    "install.ears.desc":
      'Enables voice commands: "hey jarvis, play...", "next song", "turn it down".',
    "install.ears.cta": "Invite Ears",
    "install.note":
      "Ears is optional — without it everything works, except voice commands.",
  },
} as const;

export type TranslationKey = keyof (typeof dictionaries)["pt"];

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const saved = window.localStorage.getItem("jarvis-lang") as Lang | null;
    if (saved === "pt" || saved === "en") {
      setLangState(saved);
    } else if (!navigator.language.toLowerCase().startsWith("pt")) {
      setLangState("en");
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("jarvis-lang", next);
  };

  const t = (key: TranslationKey) => dictionaries[lang][key] ?? key;

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside LanguageProvider");
  return ctx;
}

export const INVITE_JARVIS =
  "https://discord.com/oauth2/authorize?client_id=1375614038268186694&scope=bot+applications.commands&permissions=3164160";
export const INVITE_EARS =
  "https://discord.com/oauth2/authorize?client_id=1531022914474741841&scope=bot&permissions=3146752";
