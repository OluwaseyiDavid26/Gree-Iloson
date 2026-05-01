import AboutHero from "@/components/About/AboutHero";
import CoreValues from "@/components/About/CoreValues";
import History from "@/components/About/History";
import MDMessage from "@/components/About/MDMessage";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <History />
      <CoreValues />
      <MDMessage />
    </main>
  );
}
