import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Send, Globe, ArrowUpRight } from "lucide-react";

const small = [
  { icon: Github, label: "GitHub", value: "Coder-Gaurav997", href: "https://github.com/Coder-Gaurav997" },
  { icon: Send, label: "Telegram", value: "@Gaurav_Pandey722", href: "https://t.me/Gaurav_Pandey722" },
  { icon: Globe, label: "Hugging Face", value: "DarkNeuron-AI", href: "https://huggingface.co/DarkNeuron-AI" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 180,
      damping: 18,
      delay: 0.2 + i * 0.12,
    },
  }),
};

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
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
            // CONTACT
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block">Get In Touch</h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-muted-foreground mt-4 max-w-md mx-auto"
          >
            Got a project idea? Want to collaborate? Let's connect and build something extraordinary.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Featured Email card */}
          <motion.a
            href="mailto:mr.hacker13032010@gmail.com"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ y: -6 }}
            className="md:col-span-2 md:row-span-2 group relative rounded-2xl border border-glow bg-gradient-to-br from-card via-card to-secondary/40 box-glow p-8 flex flex-col justify-between overflow-hidden min-h-[240px]"
          >
            <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary">
                <Mail size={16} />
                <span className="font-mono text-[11px] uppercase tracking-widest">Primary contact</span>
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
            </div>
            <div className="relative z-10">
              <div className="font-display text-xl md:text-3xl font-bold text-foreground break-all">
                mr.hacker13032010@gmail.com
              </div>
              <div className="text-muted-foreground text-sm mt-2">Drop a line — I read every email.</div>
            </div>
          </motion.a>

          {small.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              custom={i + 1}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-5 flex flex-col justify-between min-h-[110px] hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <item.icon className="text-primary" size={16} />
                </div>
                <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" size={16} />
              </div>
              <div>
                <div className="font-display font-bold text-foreground">{item.label}</div>
                <div className="text-xs text-muted-foreground font-mono mt-0.5 truncate">{item.value}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
