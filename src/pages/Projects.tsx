import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, FolderGit2, ArrowRight } from "lucide-react";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";

interface Project {
  name: string;
  work: string;
  about: string;
  link: string;
}

const GITHUB_URL = "https://github.com/Coder-Gaurav997";

const SPECIAL_PROJECTS: Project[] = [
  {
    name: "Scout",
    work: "Autonomous research and report generation",
    about: "A DarkNeuronAI agent that explores topics, organizes useful findings, and delivers clear, structured reports.",
    link: GITHUB_URL,
  },
  {
    name: "Zentrix",
    work: "Custom programming language",
    about: "A Python-built language project covering tokenization, parsing, interpretation, and the core ideas behind language design.",
    link: GITHUB_URL,
  },
  {
    name: "AKRO",
    work: "Encryption algorithm",
    about: "A compact Python encryption and obfuscation tool that transforms text with ASCII operations and a custom key-based cipher.",
    link: GITHUB_URL,
  },
  {
    name: "Rudraksha",
    work: "Personal AI Telegram assistant",
    about: "A Telegram-based AI companion for answering questions, helping with everyday tasks, and bringing useful tools into chat.",
    link: GITHUB_URL,
  },
  {
    name: "Jarvis",
    work: "AI assistant for PC",
    about: "A PC assistant built to interpret commands, automate routine tasks, and streamline everyday computer workflows.",
    link: GITHUB_URL,
  },
  {
    name: "Cosmo",
    work: "All-rounder AI Telegram bot",
    about: "A flexible Telegram bot bringing AI conversation, handy utilities, and quick support together in one place.",
    link: GITHUB_URL,
  },
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-mono text-xs sm:text-sm"
          >
            <ArrowLeft size={16} /> Return Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-primary text-xs sm:text-sm mb-2 tracking-widest">// PROJECTS</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text inline-block mb-4">
              Selected Projects
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-12">
              A collection of work across autonomous AI, programming languages, encryption, and digital assistants.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {SPECIAL_PROJECTS.map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass p-4 sm:p-6 rounded-xl hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="flex items-start gap-3">
                    <FolderGit2 className="text-primary shrink-0 mt-0.5" size={20} />
                    <div className="min-w-0">
                      <h3 className="font-bold text-foreground mb-1">{project.name}</h3>
                      <p className="text-primary text-[11px] sm:text-xs font-mono mb-2 break-words">{project.work}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed break-words">{project.about}</p>
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">Explore more of my work</h3>
            <p className="text-muted-foreground text-sm mb-6">Browse my repositories and projects on GitHub.</p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg box-glow hover:scale-105 transition-transform duration-200"
            >
              Visit GitHub <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
