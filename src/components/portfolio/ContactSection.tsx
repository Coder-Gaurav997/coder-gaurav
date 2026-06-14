import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Send, Globe } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "mr.hacker13032010@gmail.com", href: "mailto:mr.hacker13032010@gmail.com" },
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
                scale: 1.04,
                y: -4,
                boxShadow: "0 0 25px hsl(170 100% 50% / 0.2), 0 8px 30px hsl(170 100% 50% / 0.1)",
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 p-5 rounded-xl border border-glow bg-card box-glow transition-colors duration-300 group"
            >
              <motion.div
                className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                <item.icon className="text-primary" size={22} />
              </motion.div>
              <div>
                <p className="text-xs text-muted-foreground font-mono">{item.label}</p>
                <p className="text-foreground font-medium text-sm">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
