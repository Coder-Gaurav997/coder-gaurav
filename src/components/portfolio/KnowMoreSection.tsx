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

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {tabs.map((tab, i) => (
            <motion.div
              key={tab.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.06,
                y: -8,
                boxShadow: "0 0 30px hsl(170 100% 50% / 0.2), 0 12px 40px hsl(170 100% 50% / 0.1)",
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to={tab.href}
                onClick={() => window.scrollTo({ top: 0 })}
                className="block p-8 rounded-xl border border-glow bg-card box-glow transition-colors duration-300 group h-full flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ rotate: [0, -12, 12, 0], scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <tab.icon className="text-primary mb-4" size={32} />
                </motion.div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {tab.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{tab.desc}</p>
                <motion.span
                  className="inline-flex items-center gap-1 text-primary text-sm font-mono mt-auto"
                  whileHover={{ gap: "0.5rem" }}
                  transition={{ duration: 0.2 }}
                >
                  Explore <ArrowRight size={14} />
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowMoreSection;
