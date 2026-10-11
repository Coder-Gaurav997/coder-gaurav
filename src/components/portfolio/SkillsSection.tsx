import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Brain, ShieldCheck, Binary, Lightbulb, Users, MessageSquare, Sparkles, Target, Terminal, Workflow } from "lucide-react";

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

// Technical skills: numbered, full-width rows with a glowing left rail.
const TechRow = ({ skill, index, delay, inView }: { skill: Skill; index: number; delay: number; inView: boolean }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      whileHover={{ x: 4 }}
      className="glass-strong rounded-xl pl-3 pr-4 py-2.5 flex items-center gap-3 group relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_22px_hsl(var(--primary)/0.28)]"
    >
      <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="font-mono text-[10px] sm:text-xs text-primary/60 w-6 shrink-0">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="w-9 h-9 rounded-lg glass flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform duration-300">
        <Icon size={16} />
      </span>
      <span className="font-medium text-foreground text-xs sm:text-sm min-w-0 break-words">{skill.name}</span>
    </motion.div>
  );
};

// Professional skills: soft glass pills that flow across the panel.
const ProPill = ({ skill, delay, inView }: { skill: Skill; delay: number; inView: boolean }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      whileHover={{ scale: 1.04 }}
      className="glass-strong rounded-full pl-2 pr-4 py-2 flex items-center gap-2.5 text-accent transition-shadow duration-300 hover:shadow-[0_0_20px_hsl(var(--accent)/0.3)]"
    >
      <span className="w-8 h-8 rounded-full glass flex items-center justify-center shrink-0">
        <Icon size={15} />
      </span>
      <span className="font-medium text-foreground text-xs sm:text-sm whitespace-nowrap">{skill.name}</span>
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
          className="text-center mb-14"
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

        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* Technical — ledger-style rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass rounded-3xl p-5 md:p-7 lg:col-span-2 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="w-9 h-9 rounded-lg glass-strong flex items-center justify-center text-primary shrink-0">
                <Terminal size={17} />
              </span>
              <div className="min-w-0">
                <h3 className="text-[11px] font-mono text-primary tracking-[0.25em] uppercase">> Technical</h3>
                <p className="text-base sm:text-lg font-bold text-foreground leading-tight">Tools I Build With</p>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-primary/40 via-accent/20 to-transparent my-5" />
            <div className="flex flex-col gap-2.5">
              {techSkills.map((skill, i) => (
                <TechRow key={skill.name} skill={skill} index={i} delay={0.3 + i * 0.08} inView={inView} />
              ))}
            </div>
          </motion.div>

          {/* Professional — flowing pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="glass rounded-3xl p-5 md:p-7 lg:col-span-3 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="w-9 h-9 rounded-lg glass-strong flex items-center justify-center text-accent shrink-0">
                <Workflow size={17} />
              </span>
              <div className="min-w-0">
                <h3 className="text-[11px] font-mono text-accent tracking-[0.25em] uppercase">> Professional</h3>
                <p className="text-base sm:text-lg font-bold text-foreground leading-tight">How I Work</p>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-accent/40 via-primary/20 to-transparent my-5" />
            <div className="flex flex-wrap gap-2.5">
              {professionalSkills.map((skill, i) => (
                <ProPill key={skill.name} skill={skill} delay={0.4 + i * 0.08} inView={inView} />
              ))}
            </div>
            <p className="mt-6 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              The way I approach every build — breaking hard problems down, thinking them through with others, and adapting fast when the goal shifts.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
