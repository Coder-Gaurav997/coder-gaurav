import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FileText, FolderGit2, ArrowRight, Clock } from "lucide-react";

const tabs = [
  {
    icon: FileText,
    title: "Blogs",
    desc: "Read my thoughts on AI, coding, and tech",
    href: "/blogs",
  },
  {
    icon: FolderGit2,
    title: "My Projects",
    desc: "Explore the projects I've built and contributed to",
    href: "/projects",
  },
  {
    icon: Clock,
    title: "My Timeline",
    desc: "See my journey from first line of code to founding DarkNeuronAI",
    href: "/timeline",
  },
];

const KnowMoreSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="know-more" className="py-32 px-6 bg-grid relative" ref={ref}>
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest">// EXPLORE</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block">
            Want To Know More?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {tabs.map((tab, i) => (
            <motion.div
              key={tab.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            >
              <Link
                to={tab.href}
                onClick={() => window.scrollTo({ top: 0 })}
                className="block p-8 rounded-xl border border-glow bg-card box-glow hover:scale-[1.03] hover:border-primary/50 transition-all duration-300 group h-full flex flex-col items-center text-center"
              >
                <tab.icon className="text-primary mb-4" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {tab.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{tab.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-mono group-hover:gap-2 transition-all mt-auto">
                  Explore <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowMoreSection;
