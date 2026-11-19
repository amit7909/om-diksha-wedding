import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  const lastSparkleTime = useRef(0);
  const sparkleIdRef = useRef(0);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, { stiffness: 320, damping: 28, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 320, damping: 28, mass: 0.5 });

  useEffect(() => {
    // Disable on touch/mobile devices or when user prefers reduced motion
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Throttled golden sparkle trail
      const now = Date.now();
      if (now - lastSparkleTime.current > 65) {
        lastSparkleTime.current = now;
        const id = ++sparkleIdRef.current;
        const newSparkle = {
          id,
          x: e.clientX + (Math.random() * 14 - 7),
          y: e.clientY + (Math.random() * 14 - 7),
          size: Math.random() * 4 + 3,
        };

        setSparkles((prev) => [...prev.slice(-10), newSparkle]);

        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== id));
        }, 550);
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target && target.closest("a, button, [role='button'], input, select")) {
        setIsHoveringInteractive(true);
      } else {
        setIsHoveringInteractive(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!enabled || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Golden Sparkle Trail */}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.span
            key={sparkle.id}
            initial={{ opacity: 0.85, scale: 1 }}
            animate={{ opacity: 0, scale: 0.2, y: 8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              left: sparkle.x,
              top: sparkle.y,
              width: sparkle.size,
              height: sparkle.size,
            }}
            className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne shadow-[0_0_8px_rgba(201,168,106,0.9)]"
          />
        ))}
      </AnimatePresence>

      {/* Outer Golden Halo Ring */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        animate={{
          scale: isHoveringInteractive ? 1.55 : 1,
          borderColor: isHoveringInteractive ? "rgba(122, 46, 58, 0.7)" : "rgba(201, 168, 106, 0.8)",
          backgroundColor: isHoveringInteractive ? "rgba(201, 168, 106, 0.14)" : "transparent",
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px]"
      />

      {/* Inner Golden Dot */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        animate={{
          scale: isHoveringInteractive ? 0.6 : 1,
        }}
        className="fixed top-0 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne-dark shadow-[0_0_6px_rgba(201,168,106,0.9)]"
      />
    </div>
  );
}