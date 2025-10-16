import { AnimatedHero } from "@/components/ui/animated-hero";
import { Features } from "@/components/home/features";
import { Portfolio } from "@/components/home/portfolio";

export default function Home() {
  return (
    <main>
      <AnimatedHero />
      <Features />
      <Portfolio />
    </main>
  );
}
