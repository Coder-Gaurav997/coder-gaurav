import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techSkills = [
  { name: "Python", level: 95 },
  { name: "C Programming", level: 85 },
  { name: "Artificial Intelligence", level: 90 },
  { name: "Cybersecurity", level: 80 },
  { name: "Computer Science", level: 90 },
];

const professionalSkills = [
  { name: "Problem Solving", level: 95 },
  { name: "Critical Thinking", level: 90 },
  { name: "Team Leadership", level: 85 },
  { name: "Communication", level: 80 },
  { name: "Adaptability", level: 90 },
];

const SkillBar = ({ name, level, delay, inView }: { name: string; level: number; delay: number; inView: boolean }) => (
  <motion.div
    className="space-y-2"
    initial={{ opacity: 0, x: -30 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ type: "spring", stiffness: 150, damping: 20, delay }}
  >
    <div className="flex justify-between text-sm">
      <span className="font-mono text-foreground">{name}</span>
      <motion.span
        className="text-primary font-mono"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: delay + 0.6, type: "spring", stiffness: 200 }}
      >
        {level}%
      </motion.span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-full rounded-full relative"
        style={{
          background: `linear-gradient(90deg, hsl(170 100% 50%), hsl(280 100% 65%))`,
          boxShadow: "0 0 10px hsl(170 100% 50% / 0.4)",
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "linear-gradient(90deg, transparent, hsl(170 100% 80% / 0.3), transparent)",
          }}
        />
      </motion.div>
    </div>
  </motion.div>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 relative bg-grid" ref={ref}>
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="max-w-6xl mx-auto relative z-10">
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
            // SKILLS
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block">My Arsenal</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          >
            <motion.h3
              className="text-xl font-bold text-foreground mb-8 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <motion.span
                className="text-primary font-mono"
                animate={inView ? { rotateY: [0, 360] } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                &lt;
              </motion.span>
              Technical Skills
              <motion.span
                className="text-primary font-mono"
                animate={inView ? { rotateY: [0, 360] } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                &gt;
              </motion.span>
            </motion.h3>
            <div className="space-y-5">
              {techSkills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={0.3 + i * 0.1} inView={inView} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          >
            <motion.h3
              className="text-xl font-bold text-foreground mb-8 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <motion.span
                className="text-accent font-mono"
                animate={inView ? { rotateY: [0, 360] } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                &lt;
              </motion.span>
              Professional Skills
              <motion.span
                className="text-accent font-mono"
                animate={inView ? { rotateY: [0, 360] } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                &gt;
              </motion.span>
            </motion.h3>
            <div className="space-y-5">
              {professionalSkills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={0.3 + i * 0.1} inView={inView} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
