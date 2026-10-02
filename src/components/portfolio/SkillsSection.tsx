import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Brain, ShieldCheck, Binary, Lightbulb, Users, MessageSquare, Sparkles, Target } from "lucide-react";

const techSkills = [
  { name: "Python", icon: Code2 },
  { name: "C Programming", icon: Binary },
  { name: "Artificial Intelligence", icon: Brain },
  { name: "Cybersecurity", icon: ShieldCheck },
  { name: "Computer Science", icon: Cpu },
];

const professionalSkills = [
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Critical Thinking", icon: Target },
  { name: "Team Leadership", icon: Users },
  { name: "Communication", icon: MessageSquare },
  { name: "Adaptability", icon: Sparkles },
];

type Skill = { name: string; icon: typeof Code2 };

const SkillChip = ({ skill, delay, inView, tone, className = "" }: { skill: Skill; delay: number; inView: boolean; tone: "primary" | "accent"; className?: string }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ type: "spring", stiffness: 180, damping: 18, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`glass rounded-2xl px-4 py-3 flex items-center gap-3 group ${className}`}
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.12 }}
        transition={{ duration: 0.4 }}
        className={`w-10 h-10 rounded-xl glass-strong flex items-center justify-center shrink-0 ${tone === "primary" ? "text-primary" : "text-accent"}`}
      >
        <Icon size={18} />
      </motion.div>
      <span className="font-medium text-foreground text-sm tracking-tight">{skill.name}</span>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="pt-12 pb-32 px-6 relative bg-grid" ref={ref}>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text inline-block">My Skill Set</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass rounded-3xl p-6 md:p-8"
          >
            <h3 className="text-sm font-mono text-primary mb-1 tracking-[0.25em] uppercase">&gt; Technical</h3>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-6">Tools I Build With</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {techSkills.map((skill, i) => {
                const isLastOdd = i === techSkills.length - 1 && techSkills.length % 2 === 1;
                return (
                  <SkillChip
                    key={skill.name}
                    skill={skill}
                    delay={0.25 + i * 0.07}
                    inView={inView}
                    tone="primary"
                    className={isLastOdd ? "sm:col-span-2 sm:max-w-[260px] sm:mx-auto sm:w-full" : ""}
                  />
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="glass rounded-3xl p-6 md:p-8"
          >
            <h3 className="text-sm font-mono text-accent mb-1 tracking-[0.25em] uppercase">&gt; Professional</h3>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-6">How I Work</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {professionalSkills.map((skill, i) => {
                const isLastOdd = i === professionalSkills.length - 1 && professionalSkills.length % 2 === 1;
                return (
                  <SkillChip
                    key={skill.name}
                    skill={skill}
                    delay={0.35 + i * 0.07}
                    inView={inView}
                    tone="accent"
                    className={isLastOdd ? "sm:col-span-2 sm:max-w-[260px] sm:mx-auto sm:w-full" : ""}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
