import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { weddingData } from "../data/weddingData";

const splashPetals = [
  { id: 1, left: "8%", delay: 0, duration: 9, size: 16, rotate: 20 },
  { id: 2, left: "22%", delay: 1.8, duration: 11, size: 13, rotate: -35 },
  { id: 3, left: "38%", delay: 0.9, duration: 10, size: 18, rotate: 45 },
  { id: 4, left: "58%", delay: 2.4, duration: 12, size: 14, rotate: -20 },
  { id: 5, left: "76%", delay: 1.2, duration: 9.5, size: 17, rotate: 30 },
  { id: 6, left: "90%", delay: 0.4, duration: 11.5, size: 15, rotate: -40 },
];

const goldParticles = [
  { id: 1, left: "15%", top: "24%", delay: 0.2 },
  { id: 2, left: "82%", top: "20%", delay: 1.1 },
  { id: 3, left: "26%", top: "74%", delay: 0.7 },
  { id: 4, left: "74%", top: "78%", delay: 1.6 },
  { id: 5, left: "50%", top: "14%", delay: 0.9 },
  { id: 6, left: "88%", top: "52%", delay: 1.9 },
  { id: 7, left: "10%", top: "55%", delay: 1.4 },
];

function CornerFloralSVG({ className = "" }) {
  return (
    <svg
      viewBox="0 0 180 180"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Watercolor Blossom & Leaves */}
      <circle cx="38" cy="38" r="24" fill="#F3DCE0" fillOpacity="0.85" />
      <circle cx="62" cy="24" r="15" fill="#E6CFA3" fillOpacity="0.65" />
      <circle cx="24" cy="64" r="16" fill="#F3DCE0" fillOpacity="0.7" />
      <path
        d="M12 12 C45 14, 72 34, 96 18 C74 44, 48 52, 22 46 Z"
        fill="#8A9A86"
        fillOpacity="0.38"
      />
      <path
        d="M14 26 C18 62, 32 92, 18 122 C42 96, 52 68, 44 38 Z"
        fill="#8A9A86"
        fillOpacity="0.32"
      />
      {/* Delicate Gold Filigree Curve */}
      <path
        d="M8 8 L150 8 M8 8 L8 150"
        stroke="#C9A86A"
        strokeWidth="1.2"
        strokeOpacity="0.65"
      />
      <path
        d="M16 16 Q56 18 76 58 Q36 42 16 16 Z"
        stroke="#C9A86A"
        strokeWidth="0.9"
        fill="#E6CFA3"
        fillOpacity="0.2"
      />
      <circle cx="38" cy="38" r="5" fill="#C9A86A" fillOpacity="0.85" />
    </svg>
  );
}

export default function SplashScreen({ onOpen, language, setLanguage, t }) {
  const displayDate =
    language === "hi"
      ? weddingData.weddingDate.displayHi
      : weddingData.weddingDate.displayEn;

  return (
    <motion.div
      key="splash-screen"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
      }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-watercolor-cream px-4 py-6"
    >
      {/* Top-Right Language Switcher on Splash */}
      <div className="absolute top-4 right-4 z-30 sm:top-6 sm:right-6">
        <LanguageToggle language={language} onChange={setLanguage} compact />
      </div>

      {/* Subtle Floating Petals */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {splashPetals.map((petal) => (
          <motion.svg
            key={petal.id}
            viewBox="0 0 24 24"
            style={{ left: petal.left, width: petal.size, height: petal.size }}
            className="absolute -top-8 text-blush-dark/70"
            initial={{ y: -30, x: 0, rotate: petal.rotate, opacity: 0 }}
            animate={{
              y: ["0vh", "108vh"],
              x: [0, 22, -18, 12],
              rotate: [petal.rotate, petal.rotate + 180],
              opacity: [0, 0.75, 0.65, 0],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <path
              d="M12 2C16.5 6.5 19 11.5 15 18C13.2 20.8 10.8 20.8 9 18C5 11.5 7.5 6.5 12 2Z"
              fill="currentColor"
            />
          </motion.svg>
        ))}

        {/* Golden Dust Particles */}
        {goldParticles.map((p) => (
          <motion.span
            key={p.id}
            style={{ left: p.left, top: p.top }}
            className="absolute h-1.5 w-1.5 rounded-full bg-champagne"
            animate={{
              opacity: [0.15, 0.85, 0.15],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: 3.6,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Royal Framed Invitation Card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="royal-double-border relative z-10 flex w-full max-w-xl flex-col items-center rounded-2xl bg-ivory/90 px-6 py-12 text-center shadow-royal backdrop-blur-md sm:px-12 sm:py-16"
      >
        {/* Watercolor Floral Corners */}
        <CornerFloralSVG className="pointer-events-none absolute top-0 left-0 h-28 w-28 sm:h-36 sm:w-36" />
        <CornerFloralSVG className="pointer-events-none absolute top-0 right-0 h-28 w-28 -scale-x-100 sm:h-36 sm:w-36" />
        <CornerFloralSVG className="pointer-events-none absolute bottom-0 left-0 h-28 w-28 -scale-y-100 sm:h-36 sm:w-36" />
        <CornerFloralSVG className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 -scale-x-100 -scale-y-100 sm:h-36 sm:w-36" />

        {/* Auspicious Invocation */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 text-xs font-semibold tracking-[0.22em] text-champagne-dark uppercase sm:text-sm"
        >
          {t.splash.blessing}
        </motion.p>

        {/* Ornate Monogram Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-champagne/60 bg-cream/80 shadow-gold"
        >
          <span className="font-serif text-xl font-semibold tracking-widest text-burgundy">
            {weddingData.couple.monogram}
          </span>
        </motion.div>

        {/* Main Splash Copy */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className={`text-sm tracking-[0.18em] text-royal-ink/80 uppercase sm:text-base ${
            language === "hi" ? "font-hindi tracking-normal normal-case text-base sm:text-lg" : "font-serif"
          }`}
        >
          {t.splash.welcome}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-3 font-serif text-4xl font-semibold tracking-[0.12em] text-burgundy sm:text-5xl md:text-6xl"
        >
          OM <span className="font-script text-champagne-dark font-normal">&amp;</span> DIKSHA
        </motion.h1>

        {/* Ornamental Gold Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="my-5 flex items-center gap-3"
          aria-hidden="true"
        >
          <span className="h-[1px] w-14 bg-gradient-to-r from-transparent to-champagne" />
          <span className="h-2 w-2 rotate-45 bg-champagne" />
          <span className="h-[1px] w-14 bg-gradient-to-l from-transparent to-champagne" />
        </motion.div>

        {/* Wedding Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="font-serif text-lg font-medium tracking-[0.16em] text-royal-ink sm:text-xl"
        >
          {displayDate}
        </motion.p>

        {/* Prominent Open Button */}
        <motion.button
          type="button"
          onClick={onOpen}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="group relative mt-8 inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-burgundy-dark via-burgundy to-burgundy-dark px-7 py-3.5 text-xs font-semibold tracking-[0.2em] text-ivory uppercase shadow-royal transition-all hover:shadow-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 sm:px-9 sm:py-4 sm:text-sm"
        >
          <Sparkles className="h-4 w-4 text-champagne-light transition-transform duration-300 group-hover:rotate-12" />
          <span>{t.splash.button}</span>
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="mt-4 text-xs text-royal-ink/60"
        >
          {t.splash.hint}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}