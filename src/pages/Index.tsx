import Header from "@/components/portfolio/Header";
import HeroSection from "@/components/portfolio/HeroSection";
import NutshellSection from "@/components/portfolio/NutshellSection";
import TimelineSection from "@/components/portfolio/TimelineSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import KnowMoreSection from "@/components/portfolio/KnowMoreSection";
import Footer from "@/components/portfolio/Footer";
import CommunityPopup from "@/components/portfolio/CommunityPopup";
import CustomCursor from "@/components/portfolio/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <CommunityPopup />
      <Header />
      <HeroSection />
      <NutshellSection />
      <TimelineSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <KnowMoreSection />
      <Footer />
    </div>
  );
};

export default Index;
