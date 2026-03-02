import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, Megaphone } from "lucide-react";

const CommunityPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("community-popup-shown");
    if (!alreadyShown) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("community-popup-shown", "true");
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-md p-8 rounded-2xl border border-glow bg-card box-glow"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center"
              >
                <Users className="text-primary" size={30} />
              </motion.div>

              <h3 className="text-2xl font-bold gradient-text inline-block mb-2">
                Wanna join our communities?
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Stay connected with us on Telegram for updates, discussions, and more!
              </p>

              <div className="space-y-3 mb-6">
                <a
                  href="https://t.me/default_tg_grp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-glow bg-background hover:border-primary/50 hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Users className="text-primary" size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-foreground font-semibold text-sm">Telegram Group</p>
                    <p className="text-muted-foreground text-xs">Join the conversation</p>
                  </div>
                </a>

                <a
                  href="https://t.me/default_tg_channel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-glow bg-background hover:border-primary/50 hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Megaphone className="text-primary" size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-foreground font-semibold text-sm">Telegram Channel</p>
                    <p className="text-muted-foreground text-xs">Get latest updates</p>
                  </div>
                </a>
              </div>

              <button
                onClick={handleClose}
                className="text-muted-foreground text-sm hover:text-foreground transition-colors font-mono"
              >
                Not now →
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommunityPopup;
