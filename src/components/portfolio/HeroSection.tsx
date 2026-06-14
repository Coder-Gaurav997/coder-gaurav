import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Rocket, MapPin, Brain } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

const roles = ["Python Developer", "AI Founder", "Cybersecurity Enthusiast", "Creator of Zentrix", "Founder of DarkNeuronAI"];

const FadingRoles = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="relative px-5 py-1.5 border border-glow rounded-full text-sm font-mono text-primary/90 box-glow inline-flex items-center min-w-[240px] justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, filter: "blur(8px)", y: 4 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(8px)", y: -4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="inline-block"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const FloatingBubble = ({ delay, size, x, duration }: { delay: number; size: number; x: number; duration: number }) => (
  <motion.div
    className="absolute rounded-full will-change-transform"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      bottom: -size,
      background: `radial-gradient(circle, hsl(var(--primary) / 0.12), hsl(var(--accent) / 0.04))`,
      border: `1px solid hsl(var(--primary) / 0.08)`,
      transform: 'translateZ(0)',
    }}
    animate={{
      y: [0, -1200],
      opacity: [0, 0.5, 0.2, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

const GlowingDot = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full will-change-transform"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      background: `hsl(var(--primary))`,
      boxShadow: `0 0 6px hsl(var(--primary) / 0.6)`,
      transform: 'translateZ(0)',
    }}
    animate={{
      opacity: [0, 0.8, 0],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const HeroSection = () => {
  const bubbles = Array.from({ length: 8 }, (_, i) => ({
    delay: i * 2,
    size: Math.random() * 30 + 10,
    x: Math.random() * 100,
    duration: Math.random() * 6 + 10,
  }));

  const dots = Array.from({ length: 12 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 6,
  }));

  const age = (() => {
    const dob = new Date(2010, 2, 13);
    const now = new Date();
    let a = now.getFullYear() - dob.getFullYear();
    if (now < new Date(now.getFullYear(), 2, 13)) a--;
    return a;
  })();

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-grid bg-fixed pt-24 pb-16">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-glow" />

      {/* Floating bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {bubbles.map((b, i) => (
          <FloatingBubble key={i} {...b} />
        ))}
      </div>

      {/* Glowing dots */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((d, i) => (
          <GlowingDot key={i} {...d} />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
        {/* LEFT: identity */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glow bg-card/40 backdrop-blur-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-primary/90">
              Available for collaborations
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] mb-6 tracking-tight"
          >
            <span className="block gradient-text">Gaurav Pandey</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-7"
          >
            <FadingRoles />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            A <span className="text-foreground font-semibold">{age}-year-old</span> prodigy turning bold ideas into intelligent systems.
            <span className="text-primary font-semibold"> Founder of DarkNeuronAI.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3"
          >
            <motion.button
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3 text-sm md:text-base bg-primary text-primary-foreground font-semibold rounded-lg box-glow"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Explore My Work →
            </motion.button>
            <motion.button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3 text-sm md:text-base border border-glow text-foreground rounded-lg hover:bg-primary/10 transition-colors duration-200"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT: bento stat grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 grid-rows-3 gap-3 h-[460px] max-w-md mx-auto w-full lg:max-w-none"
        >
          {/* Featured: founder */}
          <motion.div
            whileHover={{ y: -4 }}
            className="col-span-2 row-span-1 rounded-2xl border border-glow bg-gradient-to-br from-card via-card to-secondary/40 box-glow p-5 flex flex-col justify-between overflow-hidden relative"
          >
            <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
            <div className="flex items-center gap-2 text-primary">
              <Rocket size={16} />
              <span className="font-mono text-[11px] uppercase tracking-widest">Founder</span>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-foreground">DarkNeuronAI</div>
              <div className="text-xs text-muted-foreground mt-1">Building intelligent systems</div>
            </div>
          </motion.div>

          {/* Age */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-5 flex flex-col justify-between"
          >
            <Sparkles className="text-accent" size={18} />
            <div>
              <div className="font-display text-4xl font-bold gradient-text leading-none">{age}</div>
              <div className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider mt-2">Years young</div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-5 flex flex-col justify-between"
          >
            <MapPin className="text-primary" size={18} />
            <div>
              <div className="font-display text-lg font-bold text-foreground leading-tight">Mathura</div>
              <div className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider mt-1">U.P, India</div>
            </div>
          </motion.div>

          {/* Projects shipped */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-5 flex flex-col justify-between"
          >
            <Brain className="text-accent" size={18} />
            <div>
              <div className="font-display text-4xl font-bold gradient-text leading-none">10+</div>
              <div className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider mt-2">Projects shipped</div>
            </div>
          </motion.div>

          {/* Stack pill card */}
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-5 flex flex-col justify-between overflow-hidden"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Stack</span>
            <div className="flex flex-wrap gap-1.5">
              {["Python", "C", "AI", "Sec"].map((s) => (
                <span key={s} className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-primary/10 border border-primary/20 text-primary">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-primary/50" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
