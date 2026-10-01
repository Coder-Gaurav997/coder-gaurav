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

const CODEVAULT_URL = "https://my-codevault.vercel.app";

const SPECIAL_PROJECTS: Project[] = [
  {
    name: "Scout",
    work: "Autonomous research and report generation",
    about: "An intelligent DarkNeuronAI agent that researches topics independently, organizes reliable findings, and turns them into clear, structured reports.",
    link: CODEVAULT_URL,
  },
  {
    name: "Zentrix",
    work: "Custom programming language",
    about: "A programming language built in Python to explore lexical analysis, parsing, interpreters, and the foundations of language design.",
    link: "https://my-codevault.vercel.app/projects/b9279d5d-4fae-440e-ac2f-315735f25948",
  },
  {
    name: "AKRO",
    work: "Encryption algorithm",
    about: "A lightweight Python encryption and obfuscation system that protects text through ASCII transformations and a custom key-based cipher.",
    link: "https://my-codevault.vercel.app/projects/62644e7a-77c4-4eac-928a-bc2cfa0d7550",
  },
  {
    name: "Rudraksha",
    work: "Personal AI Telegram assistant",
    about: "A conversational Telegram assistant that answers questions, supports everyday tasks, and delivers useful AI capabilities inside chat.",
    link: "https://my-codevault.vercel.app/projects/cbdf480d-e414-4e6d-bf72-1c1b79b81eea",
  },
  {
    name: "Jarvis",
    work: "AI assistant for PC",
    about: "A desktop-focused AI assistant designed to understand commands, automate common computer tasks, and make everyday workflows faster.",
    link: CODEVAULT_URL,
  },
  {
    name: "Cosmo",
    work: "All-rounder AI Telegram bot",
    about: "A versatile Telegram bot that combines intelligent conversation, practical utilities, and quick assistance in one accessible interface.",
    link: CODEVAULT_URL,
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
              My special projects — from autonomous AI agents to language design, encryption, and intelligent assistants.
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
                  className="glass p-6 rounded-xl hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="flex items-start gap-3">
                    <FolderGit2 className="text-primary shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{project.name}</h3>
                      <p className="text-primary text-xs font-mono mb-2">{project.work}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.about}</p>
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
