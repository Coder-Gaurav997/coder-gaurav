import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Calendar, MapPin, Code, Rocket, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

const NutshellSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const age = (() => {
    const dob = new Date(2010, 2, 13);
    const now = new Date();
    let a = now.getFullYear() - dob.getFullYear();
    if (now < new Date(now.getFullYear(), 2, 13)) a--;
    return a;
  })();

  const info = [
    { icon: User, label: "Name", value: "Gaurav Pandey (Mr. Def@ult)", valueProp: "name" },
    { icon: Calendar, label: "Age", value: `${age} years`, valueProp: undefined },
    { icon: Calendar, label: "Date of Birth", value: "13 March, 2010", valueProp: "birthDate" },
    { icon: MapPin, label: "Based In", value: "Mathura, U.P. (India)", valueProp: "homeLocation" },
    { icon: Code, label: "Focus Areas", value: "Python, C, AI, cybersecurity & more", valueProp: "knowsAbout" },
    { icon: Rocket, label: "Founder", value: "DarkNeuronAI", valueProp: "affiliation" },
  ];

  const projects = [
    { name: "Scout", desc: "Autonomous research and report-writing agent" },
    { name: "Zentrix", desc: "My own programming language" },
    { name: "AKRO", desc: "Encryption algorithm" },
    { name: "Rudraksha", desc: "Personal AI assistant for Telegram" },
    { name: "Jarvis", desc: "AI assistant on PC" },
    { name: "Cosmo", desc: "Versatile AI-powered Telegram bot" },
  ];

  return (
    <section id="nutshell" className="py-20 md:py-24 px-4 sm:px-6 relative" aria-label="About Gaurav Pandey in a nutshell" itemScope itemType="https://schema.org/Person">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Gaurav Pandey",
            alternateName: "Mr. Def@ult",
            birthDate: "2010-03-13",
            birthPlace: "India",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mathura",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
            knowsAbout: ["Python", "C", "Artificial Intelligence", "Cybersecurity"],
            url: "https://coder-gaurav.lovable.app/",
            sameAs: [
              "https://github.com/Coder-Gaurav997",
              "https://huggingface.co/DarkNeuron-AI",
              "https://www.linkedin.com/in/gaurav-pandey-a9089b366",
              "https://dev.to/mr_default722",
              "https://medium.com/@gaurav-pandey97",
            ],
            founder: {
              "@type": "Corporation",
              name: "DarkNeuronAI",
              foundingDate: "2025",
              url: "https://darkneuron-ai.vercel.app/",
            },
            jobTitle: "AI Developer & Founder",
          }),
        }}
      />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={inView ? { opacity: 1, letterSpacing: "0.2em" } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-mono text-primary text-xs sm:text-sm mb-2"
          >
            {"// QUICK OVERVIEW"}
          </motion.p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text inline-block">
            About Me In a Nutshell
          </h2>
        </motion.div>

        <div className="glass rounded-3xl p-5 sm:p-8 md:p-10 relative overflow-hidden">
          {/* subtle top glow line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          {/* Info Rows */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="divide-y divide-border/30"
          >
            {info.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="flex items-center justify-between gap-3 py-3 sm:py-3.5 min-w-0"
              >
                <div className="flex items-center gap-3 shrink-0">
                  <item.icon className="text-primary shrink-0" size={17} aria-hidden="true" />
                  <span className="text-muted-foreground text-xs sm:text-sm font-mono">{item.label}</span>
                </div>
                <span
                  className="text-right text-xs sm:text-sm text-foreground font-semibold break-words min-w-0 sm:max-w-[60%]"
                  itemProp={item.valueProp || undefined}
                >
                  {item.value}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 pt-6 border-t border-border/30"
          >
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 }}
            >
              <motion.div animate={inView ? { rotate: [0, 15, -15, 0] } : {}} transition={{ delay: 0.5, duration: 0.5 }}>
                <Sparkles className="text-primary" size={18} aria-hidden="true" />
              </motion.div>
              <h3 className="font-bold text-foreground text-lg">Special Projects</h3>
            </motion.div>
            <motion.ul
              className="grid sm:grid-cols-2 gap-2"
              aria-label="Special projects by Gaurav Pandey"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {projects.map((p) => (
                <motion.li
                  key={p.name}
                  variants={itemVariants}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="flex items-baseline gap-x-2 p-3 rounded-lg glass min-w-0"
                  itemScope
                  itemType="https://schema.org/CreativeWork"
                >
                  <span className="text-primary font-mono text-xs shrink-0" aria-hidden="true">▸</span>
                  <span className="min-w-0">
                    <strong className="text-primary font-semibold text-sm" itemProp="name">{p.name}</strong>
                    <span className="block text-muted-foreground text-xs break-words" itemProp="description">{p.desc}</span>
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NutshellSection;
