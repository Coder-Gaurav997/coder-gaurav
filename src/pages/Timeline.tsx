import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import TimelineSection from "@/components/portfolio/TimelineSection";
import { useEffect } from "react";

const Timeline = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-mono text-sm"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <TimelineSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Timeline;
