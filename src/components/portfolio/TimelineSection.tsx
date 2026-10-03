import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Shield, Wrench, Rocket, Zap } from "lucide-react";

const milestones = [
  {
    year: "2024",
    title: "My First Steps with Python",
    desc: "Started learning Python, opening the door to programming and software creation.",
    icon: Code,
  },
  {
    year: "Mid 2024",
    title: "Cybersecurity & Computer Science",
    desc: "Explored ethical hacking, security fundamentals, and broader computer science ideas.",
    icon: Shield,
  },
  {
    year: "2025",
    title: "C and Deeper Programming",
    desc: "Picked up C and advanced programming concepts, including low-level computing.",
    icon: Wrench,
  },
  {
    year: "Mid 2025",
    title: "Founded DarkNeuronAI",
    desc: "Founded DarkNeuronAI to develop and share intelligent AI products and solutions.",
    icon: Rocket,
  },
  {
    year: "2026",
    title: "Created New Projects",
    desc: "Built Zentrix, a programming language; AKRO, an encryption algorithm; Rudraksha, an AI assistant; and more.",
    icon: Zap,
  },
  {
    year: "Late 2026",
    title: "Built Scout AI Agent",
    desc: "Created Scout, a DarkNeuronAI agent that autonomously researches topics and produces clear, structured reports.",
    icon: Rocket,
  },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="timeline" className="py-24 px-6 relative" aria-label="Journey timeline of Gaurav Pandey">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-xs sm:text-sm mb-2 tracking-widest">// MY JOURNEY</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text inline-block">
            Key Milestones
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Content */}
                <div className={`ml-16 min-w-0 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                  <span className="font-mono text-primary text-xs tracking-widest">{m.year}</span>
                  <h3 className="text-foreground font-bold text-base sm:text-lg mt-1 break-words">{m.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1 leading-relaxed break-words">{m.desc}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-primary/40 bg-card flex items-center justify-center z-10">
                  <m.icon className="text-primary" size={18} />
                </div>

                {/* Spacer for opposite side on desktop */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
