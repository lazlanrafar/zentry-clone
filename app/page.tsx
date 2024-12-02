import { AppFooter } from "@/components/app/footer";
import { AppNavbar } from "@/components/app/navbar";
import { AboutSection } from "@/components/organisms/about-section";
import { ContactSection } from "@/components/organisms/contact-section";
import { FeatureSection } from "@/components/organisms/feature-section";
import { HeroSection } from "@/components/organisms/hero-section";
import { StorySection } from "@/components/organisms/story-section";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <AppNavbar />
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <StorySection />
      <ContactSection />
      <AppFooter />
    </main>
  );
}
