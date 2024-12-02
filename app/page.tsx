import { AppNavbar } from "@/components/app/navbar";
import { AboutSection } from "@/components/organisms/about-section";
import { FeatureSection } from "@/components/organisms/feature-section";
import { HeroSection } from "@/components/organisms/hero-section";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <AppNavbar />
      <HeroSection />
      <AboutSection />
      <FeatureSection />
    </main>
  );
}
