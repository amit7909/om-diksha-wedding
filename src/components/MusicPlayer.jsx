import React from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

export default function MusicPlayer({
  isPlaying,
  hasError,
  onToggle,
  t,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="fixed right-4 bottom-5 z-40 sm:right-6 sm:bottom-6"
    >
      <button
        type="button"
        onClick={onToggle}
        disabled={hasError}
        title={
          hasError
            ? t.music.unavailable
            : isPlaying
              ? t.music.pause
              : t.music.play
        }
        aria-label={
          hasError
            ? t.music.unavailable
            : isPlaying
              ? t.music.pause
              : t.music.play
        }
        className={`group relative flex h-12 w-12 items-center justify-center rounded-full border shadow-royal backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne sm:h-14 sm:w-14 ${
          hasError
            ? "cursor-not-allowed border-champagne/30 bg-cream/85 text-royal-ink/40"
            : isPlaying
              ? "border-champagne bg-gradient-to-br from-burgundy to-burgundy-dark text-ivory hover:scale-105 hover:shadow-gold"
              : "border-champagne/60 bg-ivory/95 text-burgundy hover:scale-105 hover:bg-cream"
        }`}
      >
        {/* Subtle pulsing golden ring while playing */}
        {isPlaying && !hasError && (
          <motion.span
            aria-hidden="true"
            animate={{ scale: [1, 1.38], opacity: [0.55, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 rounded-full border border-champagne"
          />
        )}

        {hasError ? (
          <Music className="h-5 w-5" aria-hidden="true" />
        ) : isPlaying ? (
          <Volume2 className="h-5 w-5 text-champagne-light sm:h-6 sm:w-6" aria-hidden="true" />
        ) : (
          <VolumeX className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
        )}
      </button>
    </motion.div>
  );
}