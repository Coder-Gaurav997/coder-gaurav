import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Shield, Rocket } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI / ML", desc: "Building intelligent systems with DarkNeuronAI" },
  { icon: Code, label: "Python & C", desc: "Crafting efficient, production-grade code" },
  { icon: Shield, label: "Cybersecurity", desc: "Deep knowledge of ethical hacking & security" },
  { icon: Rocket, label: "Founder", desc: "Leading DarkNeuronAI — an AI-focused company" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 18,
      delay: 0.5 + i * 0.12,
    },
  }),
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2 + i * 0.15 },
  }),
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
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
            // ABOUT ME
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block">Who Am I?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              {[
                <>
                  I'm <span className="text-foreground font-semibold">Gaurav Pandey</span>, a {(() => { const dob = new Date(2010, 2, 13); const now = new Date(); let age = now.getFullYear() - dob.getFullYear(); if (now < new Date(now.getFullYear(), 2, 13)) age--; return age; })()}-year-old developer and entrepreneur with an extraordinary passion for technology, artificial intelligence, and cybersecurity.
                </>,
                <>
                  As the <span className="text-primary font-semibold">Founder of DarkNeuronAI</span>, I lead a team building cutting-edge AI solutions. My journey started with curiosity and evolved into a mission — to push the boundaries of what's possible with code.
                </>,
                <>
                  From writing complex algorithms in <span className="text-primary">Python</span> and <span className="text-primary">C</span> to exploring the depths of cybersecurity, I thrive on challenges that most consider beyond their reach.
                </>,
              ].map((content, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  variants={textRevealVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {content}
                </motion.p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0 0 25px hsl(170 100% 50% / 0.25), 0 0 50px hsl(170 100% 50% / 0.1)",
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                }}
                className="p-5 rounded-xl border border-glow bg-card box-glow transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                >
                  <item.icon className="text-primary mb-3" size={28} />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
