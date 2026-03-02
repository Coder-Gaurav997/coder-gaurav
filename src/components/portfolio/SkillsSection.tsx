import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techSkills = [
  { name: "Python", level: 95 },
  { name: "C Programming", level: 85 },
  { name: "Artificial Intelligence", level: 90 },
  { name: "Machine Learning", level: 85 },
  { name: "Cybersecurity", level: 80 },
  { name: "Computer Science", level: 90 },
];

const professionalSkills = [
  { name: "Problem Solving", level: 95 },
  { name: "Critical Thinking", level: 90 },
  { name: "Team Leadership", level: 85 },
  { name: "Communication", level: 80 },
  { name: "Project Management", level: 80 },
  { name: "Adaptability", level: 90 },
];

const SkillBar = ({ name, level, delay, inView }: { name: string; level: number; delay: number; inView: boolean }) => (
  <motion.div
    className="space-y-2"
    initial={{ opacity: 0, x: -20 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex justify-between text-sm">
      <span className="font-mono text-foreground">{name}</span>
      <motion.span
        className="text-primary font-mono"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 0.5 }}
      >
        {level}%
      </motion.span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, hsl(170 100% 50%), hsl(280 100% 65%))`,
          boxShadow: "0 0 10px hsl(170 100% 50% / 0.4)",
        }}
      />
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
          <p className="font-mono text-primary text-sm mb-2 tracking-widest">// SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block">My Arsenal</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-2">
              <span className="text-primary font-mono">&lt;</span>
              Technical Skills
              <span className="text-primary font-mono">/&gt;</span>
            </h3>
            <div className="space-y-5">
              {techSkills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={0.3 + i * 0.08} inView={inView} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-2">
              <span className="text-accent font-mono">&lt;</span>
              Professional Skills
              <span className="text-accent font-mono">/&gt;</span>
            </h3>
            <div className="space-y-5">
              {professionalSkills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={0.3 + i * 0.08} inView={inView} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
