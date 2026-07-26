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
    "features.title": "Um bot, três superpoderes",
    "features.subtitle":
      "Construído para o seu servidor: sem mensalidade, sem nuvem de terceiros, sem limites artificiais.",
    "features.music.title": "Música de verdade",
    "features.music.desc":
      "YouTube por busca, link ou playlist. Fila por servidor, skip, pause, volume — tudo com botões no chat.",
    "features.ai.title": "IA no chat",
    "features.ai.desc":
      "/jarvis conversa usando um LLM rodando na SUA máquina. Zero nuvem, zero custo por pergunta.",
    "features.voice.title": "Voz estilo Alexa",
    "features.voice.desc":
      '"hey jarvis, toca..." — wake word local, transcrição whisper e intenção resolvida por IA.',
    "features.private.title": "Privado por design",
    "features.private.desc":
      "Self-hosted: o áudio, a IA e os seus dados nunca saem do seu computador.",
    "player.title": "Um card que parece app",
    "player.subtitle":
      "O visualizador do Jarvis usa o layout mais novo do Discord — não parece mensagem de bot, parece feature nativa.",
    "player.b1": "Barra de progresso ao vivo, atualizada a cada 5 segundos",
    "player.b2": "Botões com ícones autorais: Restart · Pause · Skip · Stop · Queue · Volume",
    "player.b3": "Um único card ativo por servidor — o chat fica limpo",
    "player.b4": "Fila acabou? O card vira “Play again” com um clique",
    "voice.title": '"hey jarvis…"',
    "voice.subtitle": "O pipeline de voz completo, 100% local — nenhum áudio sai da sua máquina:",
    "voice.s1.title": "Wake word",
    "voice.s1.desc": 'openWakeWord detecta o "hey jarvis" no canal',
    "voice.s2.title": "Transcrição",
    "voice.s2.desc": "whisper.cpp converte o comando em texto",
    "voice.s3.title": "Intenção",
    "voice.s3.desc": "regex + LLM local entendem o que você quis",
    "voice.s4.title": "Ação",
    "voice.s4.desc": "o player executa: toca, pula, pausa, volume",
    "commands.title": "Comandos para tudo",
    "commands.subtitle": "Slash commands no chat, frases naturais na voz — em português e inglês.",
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
    "footer.tagline":
      "Mordomo digital de servidor — música, IA e voz rodando na sua própria máquina.",
    "footer.stack": "Construído com",
    "footer.made": "Feito por Daniel Merigo",
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
    "features.title": "One bot, three superpowers",
    "features.subtitle":
      "Built for your server: no subscription, no third-party cloud, no artificial limits.",
    "features.music.title": "Real music",
    "features.music.desc":
      "YouTube by search, link, or playlist. Per-server queue, skip, pause, volume — all with buttons in chat.",
    "features.ai.title": "AI in chat",
    "features.ai.desc":
      "/jarvis chats using an LLM running on YOUR machine. Zero cloud, zero cost per question.",
    "features.voice.title": "Alexa-style voice",
    "features.voice.desc":
      '"hey jarvis, play..." — local wake word, whisper transcription, AI-resolved intent.',
    "features.private.title": "Private by design",
    "features.private.desc":
      "Self-hosted: your audio, your AI, and your data never leave your computer.",
    "player.title": "A card that feels like an app",
    "player.subtitle":
      "Jarvis' player uses Discord's newest layout system — it doesn't look like a bot message, it looks native.",
    "player.b1": "Live progress bar, refreshed every 5 seconds",
    "player.b2": "Buttons with custom icons: Restart · Pause · Skip · Stop · Queue · Volume",
    "player.b3": "A single live card per server — chat stays clean",
    "player.b4": "Queue ended? The card becomes “Play again” with one click",
    "voice.title": '"hey jarvis…"',
    "voice.subtitle": "The full voice pipeline, 100% local — no audio ever leaves your machine:",
    "voice.s1.title": "Wake word",
    "voice.s1.desc": 'openWakeWord spots the "hey jarvis" in the channel',
    "voice.s2.title": "Transcription",
    "voice.s2.desc": "whisper.cpp turns your command into text",
    "voice.s3.title": "Intent",
    "voice.s3.desc": "regex + local LLM figure out what you meant",
    "voice.s4.title": "Action",
    "voice.s4.desc": "the player executes: play, skip, pause, volume",
    "commands.title": "Commands for everything",
    "commands.subtitle": "Slash commands in chat, natural phrases by voice — Portuguese and English.",
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
    "install.note": "Ears is optional — without it everything works, except voice commands.",
    "footer.tagline":
      "A digital butler for your server — music, AI, and voice running on your own machine.",
    "footer.stack": "Built with",
    "footer.made": "Made by Daniel Merigo",
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
