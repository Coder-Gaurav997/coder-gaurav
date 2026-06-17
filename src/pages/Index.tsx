import Header from "@/components/portfolio/Header";
import HeroSection from "@/components/portfolio/HeroSection";
import NutshellSection from "@/components/portfolio/NutshellSection";
import AboutSection from "@/components/portfolio/AboutSection";
import DarkNeuronSection from "@/components/portfolio/DarkNeuronSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import KnowMoreSection from "@/components/portfolio/KnowMoreSection";
import Footer from "@/components/portfolio/Footer";
import { useEffect } from "react";


const Index = () => {
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("home-scroll");
      if (saved !== null) {
        const y = parseInt(saved, 10) || 0;
        sessionStorage.removeItem("home-scroll");
        requestAnimationFrame(() => {
          window.scrollTo({ top: y, behavior: "auto" });
        });
      }
    } catch {}
  }, []);
  return (
    <div className="min-h-screen bg-background">
      
      <Header />
      <HeroSection />
      <NutshellSection />
      <AboutSection />
      <DarkNeuronSection />
      <SkillsSection />
      <ContactSection />
      <KnowMoreSection />
      <Footer />
    </div>
  );
};

export default Index;
