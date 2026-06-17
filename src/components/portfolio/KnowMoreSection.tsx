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

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 160,
      damping: 18,
      delay: 0.2 + i * 0.15,
    },
  }),
};

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
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={inView ? { opacity: 1, letterSpacing: "0.2em" } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-mono text-primary text-sm mb-2"
          >
            // EXPLORE
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block">
            Want To Know More?
          </h2>
        </motion.div>

        <div className="flex flex-col gap-5 max-w-3xl mx-auto">
          {tabs.map((tab, i) => (
            <motion.div
              key={tab.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{
                x: 6,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to={tab.href}
                onClick={() => {
                  try {
                    sessionStorage.setItem("home-scroll", String(window.scrollY));
                  } catch {}
                  window.scrollTo({ top: 0 });
                }}
                className="glass rounded-2xl p-6 md:p-7 flex items-center gap-5 group transition-all duration-300 hover:border-primary/40"
              >
                <motion.div
                  whileHover={{ rotate: [0, -12, 12, 0], scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                  className="shrink-0 w-14 h-14 rounded-xl glass-strong flex items-center justify-center"
                >
                  <tab.icon className="text-primary" size={26} />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                    {tab.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{tab.desc}</p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-primary text-sm font-mono shrink-0 px-3 py-1.5 rounded-lg glass-strong transition-all duration-300 group-hover:shadow-[0_0_18px_hsl(var(--primary)/0.5),0_0_40px_hsl(var(--accent)/0.25)] group-hover:text-foreground">
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
