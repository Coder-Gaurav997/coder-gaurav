import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Shield, Rocket } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI / ML", desc: "Developing intelligent tools with DarkNeuronAI" },
  { icon: Code, label: "Python & C", desc: "Writing efficient software, from idea to release" },
  { icon: Shield, label: "Cybersecurity", desc: "Exploring ethical hacking and digital defense" },
  { icon: Rocket, label: "Founder", desc: "Building an AI company at DarkNeuronAI" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 180,
      damping: 18,
      delay: 0.5 + i * 0.12,
    },
  }),
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2 + i * 0.15 },
  }),
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
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
            // ABOUT ME
          </motion.p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text inline-block">A Little About Me</h2>
        </motion.div>

          <div className="glass rounded-3xl p-5 sm:p-8 md:p-12 mb-10">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-5 text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg">
              {[
                <>
                  I'm <span className="text-foreground font-semibold">Gaurav Pandey</span>, a {(() => { const dob = new Date(2010, 2, 13); const now = new Date(); let age = now.getFullYear() - dob.getFullYear(); if (now < new Date(now.getFullYear(), 2, 13)) age--; return age; })()}-year-old developer, researcher, and entrepreneur working across <span className="text-primary">artificial intelligence</span>, <span className="text-primary">systems programming</span>, and <span className="text-primary">cybersecurity</span>.
                </>,
                <>
                  As <span className="text-primary font-semibold">Founder of DarkNeuronAI</span>, I guide the creation of intelligent products, bringing ambitious research ideas into practical, dependable systems.
                </>,
                <>
                  My work ranges from low-level <span className="text-primary">C</span> to rapid <span className="text-primary">Python</span> development and security-minded design, helping me build software that is capable, efficient, and resilient.
                </>,
                <>
                  I believe meaningful technology comes from curiosity and a willingness to keep improving. Every project is a chance to turn a promising idea into something useful.
                </>,
              ].map((content, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  variants={textRevealVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {content}
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              className="glass rounded-2xl px-5 py-4 flex items-center gap-3 min-w-[200px] flex-1 max-w-[260px]"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                transition={{ duration: 0.4 }}
                className="w-11 h-11 rounded-xl glass-strong flex items-center justify-center shrink-0"
              >
                <item.icon className="text-primary" size={22} />
              </motion.div>
              <div className="min-w-0">
                <h3 className="font-semibold text-foreground text-sm leading-tight">{item.label}</h3>
                <p className="text-xs text-muted-foreground leading-snug">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
