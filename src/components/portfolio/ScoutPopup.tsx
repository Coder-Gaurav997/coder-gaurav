import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Radar, ArrowRight } from "lucide-react";

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
            className="fixed inset-0 z-[100] bg-background/60 backdrop-blur-sm"
            onClick={() => setShow(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 22, stiffness: 280 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="w-full max-w-sm p-6 sm:p-7 rounded-2xl border border-glow glass-strong relative pointer-events-auto">
              <button
                onClick={() => setShow(false)}
                aria-label="Close"
                className="absolute top-3.5 right-3.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={18} />
              </button>

              <div className="text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 14 }}
                  className="w-14 h-14 mx-auto mb-4 rounded-2xl glass flex items-center justify-center"
                >
                  <Radar className="text-primary" size={26} />
                </motion.div>

                <p className="font-mono text-primary text-[11px] tracking-widest mb-2">
                  &gt; NEW LAUNCH
                </p>
                <h3 className="text-xl font-bold gradient-text inline-block mb-2 leading-snug">
                  DarkNeuronAI's Scout
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Autonomous research &amp; report generation AI agent.
                </p>

                <div className="space-y-2.5">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_25px_hsl(var(--primary)/0.5),0_0_60px_hsl(var(--accent)/0.25)] hover:scale-[1.02] transition-all duration-300"
                  >
                    Visit Scout <ArrowRight size={16} />
                  </a>
                  <button
                    onClick={() => setShow(false)}
                    className="text-muted-foreground text-xs hover:text-foreground transition-colors font-mono"
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
