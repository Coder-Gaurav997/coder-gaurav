import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BrainCircuit, Zap, Shield, Building2, Globe2, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: BrainCircuit,
    title: "Core Technology",
    desc: "Our proprietary DarkNeuron machine-learning system understands complex data and accelerates neural network performance.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Engineered to process information faster than conventional models while drastically reducing required compute.",
  },
  {
    icon: Building2,
    title: "Enterprise Focus",
    desc: "Built for finance, healthcare and technology — with robust data-privacy protocols at the core.",
  },
  {
    icon: Globe2,
    title: "Open-Source Impact",
    desc: "Actively contributing models, datasets and chatbots to the Hugging Face community.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 180,
      damping: 18,
      delay: 0.3 + i * 0.1,
    },
  }),
};

const DarkNeuronSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="darkneuron" className="pt-32 pb-12 px-6 relative bg-grid" ref={ref}>
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
            // THE COMPANY
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block">
            About DarkNeuronAI
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass rounded-3xl p-8 md:p-12 mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-5 text-center">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center"
            >
              <Sparkles className="text-primary" size={18} />
            </motion.div>
            <h3 className="text-lg md:text-xl font-semibold text-foreground tracking-tight">
              Where neurons learn to think — and think faster.
            </h3>
          </div>
          <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg text-center">
            <p>
              <span className="text-primary font-semibold">DarkNeuronAI</span> is an artificial-intelligence research and development company, founded in 2025, building smart neural-network solutions to tackle real-world business and technical problems.
            </p>
            <p>
              Our mission is to make advanced AI <span className="text-foreground font-semibold">accessible, efficient and ethical</span> — engineering models that think faster, cost less to run and respect the data they learn from.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 15 } }}
              className="glass rounded-2xl p-6 flex gap-4"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.12 }}
                transition={{ duration: 0.4 }}
                className="shrink-0 w-12 h-12 rounded-xl glass-strong flex items-center justify-center text-primary"
              >
                <p.icon size={22} />
              </motion.div>
              <div className="min-w-0">
                <h4 className="text-lg font-bold text-foreground mb-1">{p.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://darkneuron-ai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-strong text-primary font-semibold text-sm hover:text-foreground transition-all duration-300 hover:shadow-[0_0_25px_hsl(var(--primary)/0.45),0_0_60px_hsl(var(--accent)/0.25)]"
          >
            <Shield size={16} /> Visit DarkNeuronAI
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DarkNeuronSection;