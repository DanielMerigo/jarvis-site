import { Hero } from "@/components/site/hero";
import { Install } from "@/components/site/install";
import { LanguageToggle } from "@/components/site/language-toggle";

export default function Home() {
  return (
    <main className="relative">
      <header className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
        <LanguageToggle />
      </header>
      <Hero />
      <Install />
    </main>
  );
}
