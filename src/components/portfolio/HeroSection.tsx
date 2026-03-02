import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingBubble = ({ delay, size, x, duration }: { delay: number; size: number; x: number; duration: number }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      bottom: -size,
      background: `radial-gradient(circle, hsl(var(--primary) / 0.15), hsl(var(--accent) / 0.05))`,
      border: `1px solid hsl(var(--primary) / 0.1)`,
    }}
    animate={{
      y: [0, -window.innerHeight - size],
      opacity: [0, 0.6, 0.3, 0],
      scale: [0.8, 1.2, 0.9],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const GlowingDot = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <motion.div
    className="absolute w-1.5 h-1.5 rounded-full"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      background: `hsl(var(--primary))`,
      boxShadow: `0 0 8px hsl(var(--primary) / 0.8), 0 0 20px hsl(var(--primary) / 0.4)`,
    }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0.5, 1.5, 0.5],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const HeroSection = () => {
  const bubbles = Array.from({ length: 12 }, (_, i) => ({
    delay: i * 1.5,
    size: Math.random() * 40 + 10,
    x: Math.random() * 100,
    duration: Math.random() * 8 + 8,
  }));

  const dots = Array.from({ length: 20 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
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

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-widest uppercase">
            &gt; initializing system...
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="gradient-text">Gaurav</span>{" "}
          <span className="text-foreground">Pandey</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {["Python Developer", "C Developer", "AI Founder", "Cybersecurity Enthusiast"].map((tag, i) => (
            <motion.span
              key={tag}
              className="px-4 py-1.5 border border-glow rounded-full text-sm font-mono text-primary/80 box-glow"
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px hsl(170 100% 50% / 0.4)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          15-year-old prodigy building the future of AI.
          <br />
          <span className="text-primary font-semibold">Founder of DarkNeuronAI</span> — turning ideas into intelligent systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-4"
        >
          <motion.button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg box-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
          <motion.button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border border-glow text-primary rounded-lg hover:bg-primary/10 transition-colors duration-200"
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
