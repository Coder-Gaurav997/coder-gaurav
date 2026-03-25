import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import TimelineSection from "@/components/portfolio/TimelineSection";

const Timeline = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <TimelineSection />
      </div>
      <Footer />
    </div>
  );
};

export default Timeline;
