import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, FolderGit2, ArrowRight, Loader2 } from "lucide-react";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";

interface Project {
  name: string;
  about: string;
  link: string;
  category?: string;
  date?: string;
}

const CODEVAULT_URL = "https://my-codevault.vercel.app";

const DARKNEURON: Project = {
  name: "DarkNeuron AI Platform",
  about: "The core platform powering DarkNeuronAI — building intelligent systems and AI solutions for real-world applications...",
  link: "https://darkneuron-ai.vercel.app",
  category: "AI/ML",
};

const FALLBACK_PROJECTS: Project[] = [
  {
    name: "ZENTRIX - My Own Programming Language",
    about: "ZENTRIX is a custom programming language built in Python to demonstrate how interpreters and language design work.",
    link: "https://my-codevault.vercel.app/projects/b9279d5d-4fae-440e-ac2f-315735f25948",
    category: "Python",
  },
  {
    name: "RUDRAKSHA - Personal Assistant Bot",
    about: "Rudraksha is a smart Telegram personal assistant bot by Gaurav Pandey that answers your questions instantly using AI...",
    link: "https://my-codevault.vercel.app/projects/cbdf480d-e414-4e6d-bf72-1c1b79b81eea",
    category: "Python",
  },
  {
    name: "AKRO - Encryption Algorithm",
    about: "A lightweight Python-based encryption and obfuscation algorithm that secures text using ASCII transformation and key cipher...",
    link: "https://my-codevault.vercel.app/projects/62644e7a-77c4-4eac-928a-bc2cfa0d7550",
    category: "Python",
  },
  DARKNEURON,
];

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(FALLBACK_PROJECTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    const fetchProjects = async () => {
      try {
        // Try to fetch latest projects from CodeVault
        const res = await fetch(`${CODEVAULT_URL}/projects?_=${Date.now()}`, { cache: "no-store" });
        const html = await res.text();

        // Parse project cards from HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const cards = doc.querySelectorAll('a[href*="/projects/"]');

        if (cards.length > 0) {
          const parsed: Project[] = [];
          const seen = new Set<string>();

          cards.forEach((card) => {
            const href = card.getAttribute("href") || "";
            if (!href.includes("/projects/") || seen.has(href)) return;
            seen.add(href);

            const fullLink = href.startsWith("http") ? href : `${CODEVAULT_URL}${href}`;
            const titleEl = card.querySelector("h3, h2, [class*='title']");
            const descEl = card.querySelector("p");
            const name = titleEl?.textContent?.trim() || "";
            const about = descEl?.textContent?.trim() || "";

            if (name) {
              parsed.push({ name, about, link: fullLink });
            }
          });

          if (parsed.length > 0) {
            // Take only top 3 latest from CodeVault + DarkNeuron as 4th
            const top3 = parsed.slice(0, 3);
            top3.push(DARKNEURON);
            setProjects(top3);
          }
        }
      } catch (err) {
        console.log("Using fallback projects list");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-mono text-sm"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-primary text-sm mb-2 tracking-widest">// PROJECTS</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text inline-block mb-4">
              My Projects
            </h1>
            <p className="text-muted-foreground mb-12">
              A collection of things I've built — from AI tools to encryption algorithms.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-20 gap-3 text-muted-foreground">
              <Loader2 className="animate-spin" size={20} />
              <span>Loading latest projects...</span>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {projects.map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl border border-glow bg-card box-glow hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <FolderGit2 className="text-primary shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{project.name}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{project.about}</p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary text-xs font-mono mt-2 hover:gap-2 transition-all"
                      >
                        View <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">Many more projects...</h3>
            <p className="text-muted-foreground text-sm mb-6">See all projects in detail on CodeVault</p>
            <a
              href={CODEVAULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg box-glow hover:scale-105 transition-transform duration-200"
            >
              Visit CodeVault <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
