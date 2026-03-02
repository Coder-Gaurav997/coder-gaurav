import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, FolderGit2 } from "lucide-react";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";

interface Project {
  name: string;
  about: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetching from the codevault website via a proxy-friendly approach
        // We'll try fetching the GitHub repos as a reliable data source
        const res = await fetch("https://api.github.com/users/Coder-Gaurav997/repos?sort=updated&per_page=20");
        const data = await res.json();
        if (Array.isArray(data)) {
          setProjects(
            data.map((repo: any) => ({
              name: repo.name,
              about: repo.description || "A project by Gaurav Pandey",
            }))
          );
        }
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        // Fallback
        setProjects([]);
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
              A collection of things I've built — from AI tools to open-source contributions.
            </p>
          </motion.div>

          {loading ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-6 rounded-xl border border-glow bg-card animate-pulse">
                  <div className="h-4 bg-secondary rounded w-2/3 mb-3" />
                  <div className="h-3 bg-secondary rounded w-full" />
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {projects.map((project, i) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="p-6 rounded-xl border border-glow bg-card box-glow hover:border-primary/50 hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <FolderGit2 className="text-primary shrink-0 mt-0.5" size={20} />
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{project.name}</h3>
                        <p className="text-muted-foreground text-sm">{project.about}</p>
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
                <h3 className="text-xl font-bold text-foreground mb-4">See Projects In Detail</h3>
                <a
                  href="https://my-codevault.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg box-glow hover:scale-105 transition-transform duration-200"
                >
                  Visit CodeVault <ExternalLink size={16} />
                </a>
              </motion.div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
