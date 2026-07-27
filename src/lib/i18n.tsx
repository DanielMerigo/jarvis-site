"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "pt" | "en";

const dictionaries = {
  pt: {
    "nav.commands": "Comandos",
    "nav.install": "Instalar",
    "hero.badge": "Bot de Discord · Música + Voz · PT/EN",
    "hero.title.1": "Seu servidor.",
    "hero.title.2": "Sua música. Sua voz.",
    "hero.subtitle":
      'Música do YouTube com visual de app, fila compartilhada e comandos de voz — "hey jarvis, toca..."',
    "hero.cta.add": "Adicionar ao Discord",
    "hero.cta.how": "Como funciona",
    "features.title": "Um bot, três superpoderes",
    "features.subtitle":
      "Construído para o seu servidor: sem mensalidade, sem nuvem de terceiros, sem limites artificiais.",
    "features.music.title": "Música de verdade",
    "features.music.desc":
      "YouTube por busca, link ou playlist. Fila por servidor, skip, pause, volume — tudo com botões no chat.",
    "features.queue.title": "Fila colaborativa",
    "features.queue.desc":
      "Todo mundo no canal adiciona música na mesma fila — sem travar, sem interromper quem está tocando.",
    "features.voice.title": "Comandos de voz",
    "features.voice.desc":
      '"hey jarvis, toca..." — wake word e transcrição rodando 100% na sua máquina.',
    "features.bilingual.title": "Bilíngue de verdade",
    "features.bilingual.desc":
      '"Toca" ou "play", tanto faz: comandos de texto e de voz entendem português e inglês.',
    "features.private.title": "Privado por design",
    "features.private.desc":
      "Self-hosted: o áudio e os seus dados nunca saem do seu computador.",
    "player.title": "Um card que parece app",
    "player.subtitle":
      "O visualizador do Jarvis usa o layout mais novo do Discord — não parece mensagem de bot, parece feature nativa.",
    "player.b1": "Barra de progresso ao vivo, atualizada a cada 5 segundos",
    "player.b2": "Botões com ícones autorais: Restart · Pause · Skip · Stop · Queue · Volume",
    "player.b3": "Um único card ativo por servidor — o chat fica limpo",
    "player.b4": "Fila acabou? O card vira “Play again” com um clique",
    "queue.title": "A fila é de todo mundo",
    "queue.subtitle":
      "Cada /play entra no fim da fila, sem cortar quem está tocando. O card mostra quantas faltam, e /queue lista tudo.",
    "queue.s1.title": "Alguém manda /play",
    "queue.s1.desc": "Busca pelo nome, link do YouTube ou uma playlist inteira de uma vez.",
    "queue.s2.title": "Entra na fila",
    "queue.s2.desc":
      "Se nada estiver tocando, começa na hora. Se já tiver música, espera a vez.",
    "queue.s3.title": "Toca em ordem",
    "queue.s3.desc":
      "Acabou uma, começa a próxima sozinha — sem ninguém precisar mandar comando de novo.",
    "queue.s4.title": "Todo mundo controla",
    "queue.s4.desc":
      "Qualquer um no canal pula, pausa ou ajusta o volume — pelos botões do card ou por voz.",
    "voice.title": '"hey jarvis…"',
    "voice.subtitle": "O pipeline de voz completo, 100% local — nenhum áudio sai da sua máquina:",
    "voice.s1.title": "Wake word",
    "voice.s1.desc": 'openWakeWord detecta o "hey jarvis" no canal',
    "voice.s2.title": "Transcrição",
    "voice.s2.desc": "whisper.cpp converte o comando em texto",
    "voice.s3.title": "Intenção",
    "voice.s3.desc": "o comando é reconhecido em português ou inglês",
    "voice.s4.title": "Ação",
    "voice.s4.desc": "o player executa: toca, pula, pausa, volume",
    "voice.how.title": "Como falar com ele",
    "voice.how.subtitle": "Quatro hábitos para acertar de primeira:",
    "voice.how.join.lead": "Antes de tudo:",
    "voice.how.join.a": "traz o Ears para o seu canal de voz e começa a ouvir",
    "voice.how.join.b": "encerra a escuta",
    "voice.how.t1.title": "Emende o chamado",
    "voice.how.t1.desc":
      '"hey jarvis" rápido, como uma palavra só — devagar e articulado piora a detecção.',
    "voice.how.t2.title": "Espere o bipe",
    "voice.how.t2.desc": "O 👂 confirma que ele acordou. Você tem 4s para começar o comando.",
    "voice.how.t3.title": "Pause 1,5s no final",
    "voice.how.t3.desc":
      'É o silêncio que fecha o comando — emendar conversa no "toca…" entra junto na busca.',
    "voice.how.t4.title": "Depois, fale à vontade",
    "voice.how.t4.desc":
      'Sem um novo "hey jarvis", nada é ouvido nem processado — conversa nunca vira comando.',
    "commands.title": "Comandos para tudo",
    "commands.subtitle": "Slash commands no chat, frases naturais na voz — em português e inglês.",
    "install.title": "Instale no seu servidor",
    "install.subtitle": "Dois cliques. Sem cadastro. Sem mensalidade.",
    "install.jarvis.step": "Passo 1 · obrigatório",
    "install.jarvis.title": "Jarvis — o bot principal",
    "install.jarvis.desc":
      "Toca a música, mantém a fila e responde aos comandos do servidor. É o único bot que você precisa para começar.",
    "install.jarvis.cta": "Convidar o Jarvis",
    "install.ears.step": "Passo 2 · opcional",
    "install.ears.title": "Jarvis Ears — os ouvidos",
    "install.ears.desc":
      'Uma segunda aplicação que só escuta, para liberar o "hey jarvis". Convide apenas se quiser comandos de voz.',
    "install.ears.cta": "Convidar o Ears",
    "install.note":
      "O Ears é opcional — sem ele, tudo funciona normalmente, menos os comandos de voz.",
    "install.steps.title": "Depois de convidar",
    "install.steps.1.title": "Entre em um canal de voz",
    "install.steps.1.desc":
      "O bot precisa que você já esteja num canal para saber onde tocar.",
    "install.steps.2.title": "Mande o primeiro comando",
    "install.steps.2.desc":
      "Digite /play com o nome da música, um link do YouTube ou uma playlist inteira.",
    "install.steps.3.title": "Chame a galera",
    "install.steps.3.desc":
      "Qualquer um no canal pode mandar /play — as músicas entram na fila, uma atrás da outra.",
    "install.steps.4.title": "Solte a voz (opcional)",
    "install.steps.4.desc":
      'Com o Ears no servidor, use /join e diga "hey jarvis, toca...".',
    "install.perms.title": "Permissões necessárias",
    "install.perms.jarvis": "Jarvis: Conectar, Falar, Enviar mensagens, Inserir links",
    "install.perms.ears": "Ears: Conectar, Falar (para o bipe de confirmação)",
    "install.perms.note":
      "Os links de convite já pedem tudo isso — é só aprovar na tela do Discord.",
    // The acronym itself is rendered inline in the footer (letters highlighted);
    // only the translation line is language-dependent.
    "footer.acronym.translation": "“Apenas um sistema bastante inteligente”",
    "footer.tagline":
      "Mordomo digital de servidor — música e voz rodando na sua própria máquina.",
    "footer.stack": "Construído com",
    "footer.made": "Feito por Daniel Merigo",
  },
  en: {
    "nav.commands": "Commands",
    "nav.install": "Install",
    "hero.badge": "Discord Bot · Music + Voice · PT/EN",
    "hero.title.1": "Your server.",
    "hero.title.2": "Your music. Your voice.",
    "hero.subtitle":
      'App-grade YouTube music, a shared queue, and voice commands — "hey jarvis, play..."',
    "hero.cta.add": "Add to Discord",
    "hero.cta.how": "How it works",
    "features.title": "One bot, three superpowers",
    "features.subtitle":
      "Built for your server: no subscription, no third-party cloud, no artificial limits.",
    "features.music.title": "Real music",
    "features.music.desc":
      "YouTube by search, link, or playlist. Per-server queue, skip, pause, volume — all with buttons in chat.",
    "features.queue.title": "Collaborative queue",
    "features.queue.desc":
      "Everyone in the channel adds to the same queue — no fighting over the aux, no cutting off what's playing.",
    "features.voice.title": "Voice commands",
    "features.voice.desc":
      '"hey jarvis, play..." — wake word and transcription running 100% on your machine.',
    "features.bilingual.title": "Truly bilingual",
    "features.bilingual.desc":
      '"Toca" or "play", either works: text and voice commands understand Portuguese and English.',
    "features.private.title": "Private by design",
    "features.private.desc":
      "Self-hosted: your audio and your data never leave your computer.",
    "player.title": "A card that feels like an app",
    "player.subtitle":
      "Jarvis' player uses Discord's newest layout system — it doesn't look like a bot message, it looks native.",
    "player.b1": "Live progress bar, refreshed every 5 seconds",
    "player.b2": "Buttons with custom icons: Restart · Pause · Skip · Stop · Queue · Volume",
    "player.b3": "A single live card per server — chat stays clean",
    "player.b4": "Queue ended? The card becomes “Play again” with one click",
    "queue.title": "The queue belongs to everyone",
    "queue.subtitle":
      "Every /play lands at the end of the queue without cutting off what's playing. The card shows how many are left, and /queue lists them all.",
    "queue.s1.title": "Someone sends /play",
    "queue.s1.desc": "Search by name, paste a YouTube link, or drop a whole playlist at once.",
    "queue.s2.title": "It joins the queue",
    "queue.s2.desc":
      "If nothing is playing, it starts right away. If something is, it waits its turn.",
    "queue.s3.title": "Plays in order",
    "queue.s3.desc":
      "One ends, the next starts on its own — nobody has to send another command.",
    "queue.s4.title": "Everyone's in control",
    "queue.s4.desc":
      "Anyone in the channel can skip, pause, or change the volume — via the card buttons or by voice.",
    "voice.title": '"hey jarvis…"',
    "voice.subtitle": "The full voice pipeline, 100% local — no audio ever leaves your machine:",
    "voice.s1.title": "Wake word",
    "voice.s1.desc": 'openWakeWord spots the "hey jarvis" in the channel',
    "voice.s2.title": "Transcription",
    "voice.s2.desc": "whisper.cpp turns your command into text",
    "voice.s3.title": "Intent",
    "voice.s3.desc": "your command is recognized in Portuguese or English",
    "voice.s4.title": "Action",
    "voice.s4.desc": "the player executes: play, skip, pause, volume",
    "voice.how.title": "How to talk to it",
    "voice.how.subtitle": "Four habits to nail it on the first try:",
    "voice.how.join.lead": "First things first:",
    "voice.how.join.a": "brings Ears into your voice channel and starts listening",
    "voice.how.join.b": "stops it",
    "voice.how.t1.title": "Run the call together",
    "voice.how.t1.desc":
      '"hey jarvis" fast, like a single word — slow and over-articulated hurts detection.',
    "voice.how.t2.title": "Wait for the beep",
    "voice.how.t2.desc": "The 👂 confirms it woke up. You have 4s to start your command.",
    "voice.how.t3.title": "Pause 1.5s at the end",
    "voice.how.t3.desc":
      'Silence is what closes the command — chatting right after "play…" leaks into the search.',
    "voice.how.t4.title": "Then talk freely",
    "voice.how.t4.desc":
      'Without a new "hey jarvis", nothing is heard or processed — chatter never becomes a command.',
    "commands.title": "Commands for everything",
    "commands.subtitle": "Slash commands in chat, natural phrases by voice — Portuguese and English.",
    "install.title": "Install it on your server",
    "install.subtitle": "Two clicks. No sign-up. No subscription.",
    "install.jarvis.step": "Step 1 · required",
    "install.jarvis.title": "Jarvis — the main bot",
    "install.jarvis.desc":
      "Plays the music, keeps the queue, and answers every server command. It's the only bot you need to get started.",
    "install.jarvis.cta": "Invite Jarvis",
    "install.ears.step": "Step 2 · optional",
    "install.ears.title": "Jarvis Ears — the ears",
    "install.ears.desc":
      'A second application that only listens, unlocking "hey jarvis". Invite it only if you want voice commands.',
    "install.ears.cta": "Invite Ears",
    "install.note": "Ears is optional — without it everything works, except voice commands.",
    "install.steps.title": "After inviting",
    "install.steps.1.title": "Join a voice channel",
    "install.steps.1.desc": "The bot needs you in a channel to know where to play.",
    "install.steps.2.title": "Send the first command",
    "install.steps.2.desc":
      "Type /play with a song name, a YouTube link, or a whole playlist.",
    "install.steps.3.title": "Bring your friends",
    "install.steps.3.desc":
      "Anyone in the channel can /play — songs stack up in the queue, one after another.",
    "install.steps.4.title": "Use your voice (optional)",
    "install.steps.4.desc": 'With Ears on the server, run /join and say "hey jarvis, play...".',
    "install.perms.title": "Required permissions",
    "install.perms.jarvis": "Jarvis: Connect, Speak, Send Messages, Embed Links",
    "install.perms.ears": "Ears: Connect, Speak (for the confirmation beep)",
    "install.perms.note":
      "The invite links already request all of it — just approve on Discord's screen.",
    // English readers get the acronym itself, no translation line needed.
    "footer.acronym.translation": "",
    "footer.tagline":
      "A digital butler for your server — music and voice running on your own machine.",
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
