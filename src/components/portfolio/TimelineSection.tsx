import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Shield, Wrench, Rocket, Zap } from "lucide-react";

const milestones = [
  {
    year: "2024",
    title: "Started with Python",
    desc: "Began my coding journey by learning Python — the language that opened the door to programming.",
    icon: Code,
  },
  {
    year: "Mid 2024",
    title: "Hacking & Cybersecurity",
    desc: "Explored ethical hacking, cybersecurity fundamentals, and computer science concepts.",
    icon: Shield,
  },
  {
    year: "2025",
    title: "C & Advanced Programming",
    desc: "Learned C language and dove into advanced programming concepts and low-level computing.",
    icon: Wrench,
  },
  {
    year: "Mid 2025",
    title: "Founded DarkNeuronAI",
    desc: "Launched DarkNeuronAI — a platform to build and share intelligent AI tools and solutions.",
    icon: Rocket,
  },
  {
    year: "2026",
    title: "Built Major Projects",
    desc: "Created Zentrix (custom programming language), AKRO (encryption algorithm), Rudraksha (AI assistant), and more.",
    icon: Zap,
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
          <p className="font-mono text-primary text-sm mb-2 tracking-widest">// MY JOURNEY</p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text inline-block">
            Timeline
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
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                  <span className="font-mono text-primary text-xs tracking-widest">{m.year}</span>
                  <h3 className="text-foreground font-bold text-lg mt-1">{m.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{m.desc}</p>
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
