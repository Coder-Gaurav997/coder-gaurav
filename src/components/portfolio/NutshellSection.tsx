import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Calendar, MapPin, Code, Rocket, Sparkles } from "lucide-react";

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
    { icon: User, label: "Name", value: "Gaurav Pandey (Mr. Def@ult)", prop: "name", valueProp: "name" },
    { icon: Calendar, label: "Age", value: `${age}`, prop: undefined, valueProp: undefined },
    { icon: Calendar, label: "Date of Birth", value: "13 March, 2010", prop: undefined, valueProp: "birthDate" },
    { icon: MapPin, label: "Place of Living", value: "Mathura, U.P (India)", prop: undefined, valueProp: "homeLocation" },
    { icon: Code, label: "Skills", value: "Python, C, AI, Cybersecurity & more", prop: undefined, valueProp: "knowsAbout" },
    { icon: Rocket, label: "Founder", value: "DarkNeuronAI", prop: undefined, valueProp: "affiliation" },
  ];

  const projects = [
    { name: "Zentrix", desc: "My own programming language" },
    { name: "AKRO", desc: "Encryption algorithm" },
    { name: "Rudraksha", desc: "Personal AI Telegram assistant" },
    { name: "Jarvis", desc: "AI assistant on PC" },
    { name: "Cosmo", desc: "All-rounder AI Telegram bot" },
  ];

  return (
    <section id="nutshell" className="py-24 px-6 relative" aria-label="About Gaurav Pandey in a nutshell" itemScope itemType="https://schema.org/Person">
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
            founder: {
              "@type": "Organization",
              name: "DarkNeuronAI",
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
          className="text-center mb-12"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest">// QUICK OVERVIEW</p>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text inline-block">
            About Me In a Nutshell
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            {info.map((item, i) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors duration-200"
              >
                <item.icon className="text-primary shrink-0" size={18} />
                <span className="text-muted-foreground text-sm font-mono" itemProp={item.prop || undefined}>{item.label}</span>
                <span className="text-foreground font-semibold text-sm ml-auto text-right" itemProp={item.valueProp || undefined}>{item.value}</span>
              </div>
            ))}
          </motion.div>

          {/* Projects Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-primary" size={18} />
              <h3 className="font-bold text-foreground text-lg">Special Projects</h3>
            </div>
            <ul className="space-y-2" aria-label="Special projects by Gaurav Pandey">
              {projects.map((p) => (
                <li
                  key={p.name}
                  className="flex items-baseline gap-2 p-3 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-colors duration-200"
                >
                  <span className="text-primary font-mono text-xs" aria-hidden="true">▸</span>
                  <strong className="text-primary font-semibold text-sm">{p.name}</strong>
                  <span className="text-muted-foreground text-xs">— {p.desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NutshellSection;
