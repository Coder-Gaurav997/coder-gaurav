import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
  <div
    className="absolute rounded-full anim-bubble"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      bottom: -size,
      background: `radial-gradient(circle, hsl(var(--primary) / 0.12), hsl(var(--accent) / 0.04))`,
      border: `1px solid hsl(var(--primary) / 0.08)`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    }}
  />
);

const GlowingDot = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <div
    className="absolute w-1 h-1 rounded-full anim-dot"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      background: `hsl(var(--primary))`,
      boxShadow: `0 0 6px hsl(var(--primary) / 0.6)`,
      animationDelay: `${delay}s`,
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

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid bg-fixed">
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

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-xs sm:text-sm mb-5 tracking-[0.15em] uppercase">
            &gt; Booting Up A Young Genius_
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-hero text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 whitespace-nowrap tracking-tight leading-[0.95]"
        >
          <span className="gradient-text">Gaurav</span>{" "}
          <span className="gradient-text">Pandey</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mx-auto mb-7 h-px w-32 sm:w-48 bg-gradient-to-r from-transparent via-primary to-transparent origin-center"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <FadingRoles />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto mb-12 text-center"
        >
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed whitespace-nowrap overflow-hidden">
            Teen architect of <span className="text-foreground font-semibold">thinking machines</span> — where AI meets security.
          </p>
          <p className="text-sm md:text-lg mt-2">
            <span className="text-primary font-semibold">Founder of DarkNeuronAI</span> <span className="text-muted-foreground">— where ideas learn to think.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-4"
        >
          <motion.button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-2.5 md:px-8 md:py-3 text-sm md:text-base glass-strong text-primary font-semibold rounded-xl transition-shadow duration-300 hover:shadow-[0_0_25px_hsl(var(--primary)/0.5),0_0_60px_hsl(var(--accent)/0.25)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
          <motion.button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-2.5 md:px-8 md:py-3 text-sm md:text-base glass text-foreground rounded-xl transition-shadow duration-300 hover:shadow-[0_0_25px_hsl(var(--accent)/0.4)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div
          className="anim-chevron"
          style={{ animationDelay: "1.5s" }}
        >
          <ChevronDown className="text-primary/50" size={28} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
