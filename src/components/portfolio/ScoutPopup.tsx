import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Radar, ArrowUpRight } from "lucide-react";

const ScoutPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-background/70 backdrop-blur-[5px]"
            onClick={() => setShow(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="w-full max-w-[320px] rounded-[20px] p-px pointer-events-auto bg-gradient-to-br from-primary/60 via-border/60 to-accent/60 shadow-[0_24px_70px_-18px_hsl(240_50%_4%/0.65)]">
              <div className="relative rounded-[19px] glass-strong overflow-hidden">
                {/* Shine sweep */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div
                    className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-foreground/[0.05] to-transparent"
                    style={{ animation: "scout-shine 4.5s ease-in-out 1s infinite", willChange: "transform" }}
                  />
                </div>

                <button
                  onClick={() => setShow(false)}
                  aria-label="Close"
                  className="absolute top-3 right-3 z-10 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={16} />
                </button>

                <div className="px-6 pt-7 pb-6 text-center">
                  {/* Icon with pulse rings */}
                  <div className="relative w-14 h-14 mx-auto mb-4">
                    <span
                      className="absolute inset-0 rounded-2xl bg-primary/25"
                      style={{ animation: "scout-ring 2.4s ease-out infinite", willChange: "transform, opacity" }}
                    />
                    <span
                      className="absolute inset-0 rounded-2xl bg-primary/25"
                      style={{ animation: "scout-ring 2.4s ease-out 1.2s infinite", willChange: "transform, opacity" }}
                    />
                    <div className="relative w-14 h-14 rounded-2xl glass flex items-center justify-center">
                      <Radar className="text-primary" size={24} />
                    </div>
                  </div>

                  <p className="flex items-center justify-center gap-1.5 font-mono text-primary text-[10px] tracking-[0.25em] mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary anim-dot" />
                    NEW LAUNCH
                  </p>

                  <h3 className="text-lg font-bold gradient-text inline-block mb-2 leading-snug">
                    DarkNeuronAI's Scout
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-5">
                    An AI agent for autonomous research and clear, structured reports.
                  </p>

                  <div className="h-px w-24 mx-auto mb-5 bg-gradient-to-r from-transparent via-border to-transparent" />

                  <a
                    href="https://darkneuronai-scout.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-xs tracking-wide hover:shadow-[0_0_22px_hsl(var(--primary)/0.5),0_0_50px_hsl(var(--accent)/0.25)] transition-shadow duration-300 will-change-transform"
                  >
                    <span
                      className="pointer-events-none absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
                      style={{ animation: "scout-shine 4.5s ease-in-out 2s infinite", willChange: "transform" }}
                    />
                    Visit Scout <ArrowUpRight size={14} />
                  </a>

                  <button
                    onClick={() => setShow(false)}
                    className="mt-3 text-muted-foreground text-[11px] hover:text-foreground transition-colors font-mono"
                  >
                    Not now →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ScoutPopup;
