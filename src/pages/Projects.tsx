import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, FolderGit2, ArrowRight } from "lucide-react";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";

interface Project {
  name: string;
  about: string;
  link?: string;
}

const CODEVAULT_PROJECTS: Project[] = [
  {
    name: "RUDRAKSHA - Personal Assistant Bot",
    about: "Rudraksha is a smart Telegram personal assistant bot by Gaurav Pandey that answers your questions instantly using AI...",
    link: "https://my-codevault.vercel.app/projects/cbdf480d-e414-4e6d-bf72-1c1b79b81eea",
  },
  {
    name: "AKRO - Encryption Algorithm",
    about: "A lightweight Python-based encryption and obfuscation algorithm that secures text using ASCII transformation and key cipher...",
    link: "https://my-codevault.vercel.app/projects/62644e7a-77c4-4eac-928a-bc2cfa0d7550",
  },
  {
    name: "Qwen-0.5B Model Fine-Tuner",
    about: "A complete implementation for fine-tuning the Qwen2.5-0.5B-Instruct model on OpenAssistant v1 dataset for humorous responses...",
    link: "https://my-codevault.vercel.app/projects/c597dd05-346b-4a34-9c4e-3a3078f8b65b",
  },
  {
    name: "DarkNeuron AI Platform",
    about: "The core platform powering DarkNeuronAI — building intelligent systems and AI solutions for real-world applications...",
    link: "https://darkneuron-ai.vercel.app",
  },
];

const Projects = () => {
  const latestProjects = CODEVAULT_PROJECTS.slice(0, 4);

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

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {latestProjects.map((project, i) => (
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
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary text-xs font-mono mt-2 hover:gap-2 transition-all"
                      >
                        View <ArrowRight size={12} />
                      </a>
                    )}
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
              href="https://my-codevault.vercel.app"
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
