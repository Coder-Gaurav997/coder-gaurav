import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    // Only on desktop (no touch)
    if (typeof window === "undefined" || "ontouchstart" in window) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] border border-primary/50"
        style={{
          boxShadow: "0 0 12px hsl(var(--primary) / 0.4), 0 0 24px hsl(var(--primary) / 0.15)",
        }}
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          scale: clicking ? 0.7 : 1,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.5 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-primary pointer-events-none z-[9999]"
        style={{
          boxShadow: "0 0 6px hsl(var(--primary) / 0.8)",
        }}
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
        }}
        transition={{ type: "spring", damping: 35, stiffness: 400, mass: 0.3 }}
      />
    </>
  );
};

export default CustomCursor;
