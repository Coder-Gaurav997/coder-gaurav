import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-8 px-6 border-t border-glow text-center"
    >
      <motion.p
        className="text-muted-foreground text-xs sm:text-sm font-mono"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        &lt;&nbsp;Made with 💚 by <span className="text-primary">Gaurav Pandey</span>&nbsp;&gt;
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
