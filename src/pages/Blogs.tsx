import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
}

const Blogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@golupandey95207&_=${Date.now()}`,
          { cache: "no-store" }
        );
        const data = await res.json();
        if (data.items) {
          setPosts(
            data.items.map((item: any) => ({
              title: item.title,
              link: item.link,
              pubDate: item.pubDate,
              description: item.description?.replace(/<[^>]*>/g, "").slice(0, 150) + "...",
              thumbnail: item.thumbnail || "",
            }))
          );
        }
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
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
            <p className="font-mono text-primary text-sm mb-2 tracking-widest">// BLOGS</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text inline-block mb-4">
              My Writings
            </h1>
            <p className="text-muted-foreground mb-12">
              Thoughts on AI, tech, and the future — from my Medium account.
            </p>
          </motion.div>

          {loading ? (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-6 rounded-xl border border-glow bg-card animate-pulse">
                  <div className="h-5 bg-secondary rounded w-3/4 mb-3" />
                  <div className="h-3 bg-secondary rounded w-full mb-2" />
                  <div className="h-3 bg-secondary rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <p className="text-muted-foreground text-center py-20">No blog posts found.</p>
          ) : (
            <div className="space-y-6">
              {posts.map((post, i) => (
                <motion.a
                  key={post.link}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="block p-6 rounded-xl border border-glow bg-card box-glow hover:border-primary/50 hover:scale-[1.01] transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">{post.description}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                        <Calendar size={12} />
                        {new Date(post.pubDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                    <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" size={18} />
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
