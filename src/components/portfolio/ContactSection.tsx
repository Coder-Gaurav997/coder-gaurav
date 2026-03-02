import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Send, Globe } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "mr.hacker13032010@gmail.com", href: "mailto:mr.hacker13032010@gmail.com" },
  { icon: Github, label: "GitHub", value: "Coder-Gaurav997", href: "https://github.com/Coder-Gaurav997" },
  { icon: Send, label: "Telegram", value: "@Gaurav_Pandey722", href: "https://t.me/Gaurav_Pandey722" },
  { icon: Globe, label: "Hugging Face", value: "DarkNeuron-AI", href: "https://huggingface.co/DarkNeuron-AI" },
];

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
          <p className="font-mono text-primary text-sm mb-2 tracking-widest">// CONTACT</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block">Get In Touch</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Got a project idea? Want to collaborate? Let's connect and build something extraordinary.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-xl border border-glow bg-card box-glow hover:scale-[1.02] hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={22} />
              </div>
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
