import Header from "@/components/portfolio/Header";
import HeroSection from "@/components/portfolio/HeroSection";
import NutshellSection from "@/components/portfolio/NutshellSection";
import AboutSection from "@/components/portfolio/AboutSection";
import DarkNeuronSection from "@/components/portfolio/DarkNeuronSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import KnowMoreSection from "@/components/portfolio/KnowMoreSection";
import ScoutPopup from "@/components/portfolio/ScoutPopup";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
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
