import { Commands } from "@/components/site/commands";
import { Features } from "@/components/site/features";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Install } from "@/components/site/install";
import { LanguageToggle } from "@/components/site/language-toggle";
import { PlayerShowcase } from "@/components/site/player-showcase";
import { Queue } from "@/components/site/queue";
import { Voice } from "@/components/site/voice";

export default function Home() {
  return (
    <main className="relative">
      <header className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
        <LanguageToggle />
      </header>
      <Hero />
      <Features />
      <PlayerShowcase />
      <Queue />
      <Voice />
      <Commands />
      <Install />
      <Footer />
    </main>
  );
}
