import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Send, Globe, Linkedin, Code2 } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "mr.hacker13032010@gmail.com", href: "mailto:mr.hacker13032010@gmail.com" },
  { icon: Github, label: "GitHub", value: "Coder-Gaurav997", href: "https://github.com/Coder-Gaurav997" },
  { icon: Send, label: "Telegram", value: "@Gaurav_Pandey722", href: "https://t.me/Gaurav_Pandey722" },
  { icon: Globe, label: "Hugging Face", value: "DarkNeuron-AI", href: "https://huggingface.co/DarkNeuron-AI" },
  { icon: Linkedin, label: "LinkedIn", value: "in/gaurav-pandey-a9089b366", href: "https://www.linkedin.com/in/gaurav-pandey-a9089b366" },
  { icon: Code2, label: "Dev Community", value: "@mr_default722", href: "https://dev.to/mr_default722" },
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text inline-block">Let's Connect</h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-muted-foreground mt-4 max-w-md mx-auto"
          >
            Have an idea or want to work together? Get in touch and let's make something meaningful.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              whileTap={{ scale: 0.98 }}
              className="glass rounded-2xl flex min-w-0 items-center gap-3 sm:gap-4 p-4 sm:p-5 transition-colors duration-300 group"
            >
              <motion.div
                className="p-3 rounded-xl glass-strong text-primary"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                <item.icon className="text-primary" size={22} />
              </motion.div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-mono">{item.label}</p>
                <p className="break-all text-xs sm:text-sm text-foreground font-medium">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
