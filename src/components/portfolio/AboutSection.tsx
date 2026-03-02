import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Shield, Rocket } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI / ML", desc: "Building intelligent systems with DarkNeuronAI" },
  { icon: Code, label: "Python & C", desc: "Crafting efficient, production-grade code" },
  { icon: Shield, label: "Cybersecurity", desc: "Deep knowledge of ethical hacking & security" },
  { icon: Rocket, label: "Founder", desc: "Leading DarkNeuronAI — an AI-focused company" },
];

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
          <p className="font-mono text-primary text-sm mb-2 tracking-widest">// ABOUT ME</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block">Who Am I?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-foreground font-semibold">Gaurav Pandey</span>, a 15-year-old developer and entrepreneur with an extraordinary passion for technology, artificial intelligence, and cybersecurity.
              </p>
              <p>
                As the <span className="text-primary font-semibold">Founder of DarkNeuronAI</span>, I lead a team building cutting-edge AI solutions. My journey started with curiosity and evolved into a mission — to push the boundaries of what's possible with code.
              </p>
              <p>
                From writing complex algorithms in <span className="text-primary">Python</span> and <span className="text-primary">C</span> to exploring the depths of cybersecurity, I thrive on challenges that most consider beyond their reach.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="p-5 rounded-xl border border-glow bg-card box-glow hover:scale-105 transition-transform duration-300"
              >
                <item.icon className="text-primary mb-3" size={28} />
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
