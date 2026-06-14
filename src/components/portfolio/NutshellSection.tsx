import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Code, Rocket, Sparkles, Terminal, Zap, Cpu } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const tileVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 180, damping: 20 },
  },
};

const NutshellSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const age = (() => {
    const dob = new Date(2010, 2, 13);
    const now = new Date();
    let a = now.getFullYear() - dob.getFullYear();
    if (now < new Date(now.getFullYear(), 2, 13)) a--;
    return a;
  })();

  const projects = [
    { name: "Zentrix", desc: "My own programming language" },
    { name: "AKRO", desc: "Encryption algorithm" },
    { name: "Rudraksha", desc: "Personal AI Telegram assistant" },
    { name: "Jarvis", desc: "AI assistant on PC" },
    { name: "Cosmo", desc: "All-rounder AI Telegram bot" },
  ];

  return (
    <section id="nutshell" className="py-24 px-6 relative" aria-label="About Gaurav Pandey in a nutshell" itemScope itemType="https://schema.org/Person">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Gaurav Pandey",
            alternateName: "Mr. Def@ult",
            birthDate: "2010-03-13",
            birthPlace: "India",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mathura",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
            knowsAbout: ["Python", "C", "Artificial Intelligence", "Cybersecurity"],
            founder: {
              "@type": "Organization",
              name: "DarkNeuronAI",
            },
            jobTitle: "AI Developer & Founder",
          }),
        }}
      />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={inView ? { opacity: 1, letterSpacing: "0.2em" } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-mono text-primary text-sm mb-2"
          >
            // QUICK OVERVIEW
          </motion.p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text inline-block">
            About Me In a Nutshell
          </h2>
        </motion.div>

        {/* BENTO GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[120px] gap-3"
        >
          {/* Identity — large */}
          <motion.div
            variants={tileVariants}
            whileHover={{ y: -4 }}
            className="col-span-2 row-span-2 rounded-2xl border border-glow bg-gradient-to-br from-card via-card to-secondary/40 box-glow p-6 flex flex-col justify-between relative overflow-hidden"
            itemProp="name"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Identity</span>
            <div className="relative z-10">
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">Gaurav Pandey</div>
              <div className="text-muted-foreground text-sm mt-1 font-mono">aka Mr. Def@ult</div>
              <p className="text-muted-foreground text-sm mt-4 max-w-sm leading-relaxed">
                Self-taught engineer obsessed with AI, language design, and breaking things to learn how they work.
              </p>
            </div>
          </motion.div>

          {/* Age */}
          <motion.div variants={tileVariants} whileHover={{ y: -4 }} className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-4 flex flex-col justify-between">
            <Calendar className="text-primary" size={16} />
            <div>
              <div className="font-display text-3xl font-bold gradient-text leading-none">{age}</div>
              <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider mt-1">Years</div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div variants={tileVariants} whileHover={{ y: -4 }} className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-4 flex flex-col justify-between" itemProp="homeLocation">
            <MapPin className="text-accent" size={16} />
            <div>
              <div className="font-display text-lg font-bold text-foreground leading-tight">Mathura</div>
              <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider mt-1">U.P, India</div>
            </div>
          </motion.div>

          {/* DOB */}
          <motion.div variants={tileVariants} whileHover={{ y: -4 }} className="col-span-2 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-4 flex items-center gap-4" itemProp="birthDate">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Sparkles className="text-primary" size={18} />
            </div>
            <div>
              <div className="font-display text-base font-bold text-foreground">March 13, 2010</div>
              <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider mt-0.5">Date of birth</div>
            </div>
          </motion.div>

          {/* Founder */}
          <motion.div variants={tileVariants} whileHover={{ y: -4 }} className="col-span-2 rounded-2xl border border-glow bg-card/80 box-glow p-4 flex items-center gap-4">
            <div className="p-2 rounded-lg bg-accent/15 border border-accent/30">
              <Rocket className="text-accent" size={18} />
            </div>
            <div>
              <div className="font-display text-base font-bold text-foreground">DarkNeuronAI</div>
              <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider mt-0.5">Founder & CEO</div>
            </div>
          </motion.div>

          {/* Special projects — wide */}
          <motion.div
            variants={tileVariants}
            whileHover={{ y: -4 }}
            className="col-span-2 md:col-span-4 row-span-2 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="text-primary" size={16} />
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Special Projects</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2" aria-label="Special projects by Gaurav Pandey">
              {projects.map((p) => (
                <motion.li
                  key={p.name}
                  whileHover={{ x: 4 }}
                  className="flex items-baseline gap-2 p-2.5 rounded-lg border border-border/50 bg-background/40 hover:border-primary/40 transition-colors"
                >
                  <span className="text-primary font-mono text-xs" aria-hidden="true">▸</span>
                  <strong className="text-foreground font-semibold text-sm">{p.name}</strong>
                  <span className="text-muted-foreground text-xs">— {p.desc}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Skills tile */}
          <motion.div variants={tileVariants} whileHover={{ y: -4 }} className="col-span-2 rounded-2xl border border-border/60 bg-gradient-to-br from-card to-secondary/40 p-4 flex flex-col justify-between" itemProp="knowsAbout">
            <div className="flex items-center gap-2">
              <Code className="text-primary" size={16} />
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Core Stack</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Python", "C", "AI/ML", "Cybersecurity", "Systems"].map((s) => (
                <span key={s} className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-primary/10 border border-primary/20 text-primary">{s}</span>
              ))}
            </div>
          </motion.div>

          {/* Energy tile */}
          <motion.div variants={tileVariants} whileHover={{ y: -4 }} className="col-span-2 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-4 flex items-center gap-4">
            <div className="p-2 rounded-lg bg-accent/15 border border-accent/30">
              <Zap className="text-accent" size={18} />
            </div>
            <div>
              <div className="font-display text-base font-bold text-foreground">Always building</div>
              <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider mt-0.5">From idea → shipped</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NutshellSection;
