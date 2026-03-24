import Header from "@/components/portfolio/Header";
import HeroSection from "@/components/portfolio/HeroSection";
import NutshellSection from "@/components/portfolio/NutshellSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import KnowMoreSection from "@/components/portfolio/KnowMoreSection";
import Footer from "@/components/portfolio/Footer";
import CommunityPopup from "@/components/portfolio/CommunityPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CommunityPopup />
      <Header />
      <HeroSection />
      <NutshellSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <KnowMoreSection />
      <Footer />
    </div>
  );
};

export default Index;
