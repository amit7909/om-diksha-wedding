import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronDown } from "lucide-react";
import { weddingData } from "../data/weddingData";

function HangingMarigoldToran() {
  const garlandLengths = [72, 108, 86, 126, 94, 118, 80, 124, 90, 106, 74];

  return (
    <div
      className="pointer-events-none absolute top-0 left-0 right-0 z-10 flex justify-between overflow-hidden px-1 opacity-90"
      aria-hidden="true"
    >
      {garlandLengths.map((length, idx) => (
        <motion.svg
          key={idx}
          width="28"
          height={length + 22}
          viewBox={`0 0 28 ${length + 22}`}
          className="origin-top shrink-0"
          animate={{
            rotate: [
              idx % 2 === 0 ? -1.4 : 1.4,
              idx % 2 === 0 ? 1.4 : -1.4,
              idx % 2 === 0 ? -1.4 : 1.4,
            ],
          }}
          transition={{
            duration: 5 + (idx % 3),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Golden Thread */}
          <line x1="14" y1="0" x2="14" y2={length + 6} stroke="#C9A86A" strokeWidth="1.2" />
          {/* Marigold Blossoms */}
          {Array.from({ length: Math.floor(length / 18) }).map((_, fIdx) => {
            const cy = 10 + fIdx * 18;
            const isLight = (fIdx + idx) % 2 === 0;
            return (
              <g key={fIdx}>
                <circle
                  cx="14"
                  cy={cy}
                  r="6.5"
                  fill={isLight ? "#F8B944" : "#E88D14"}
                />
                <circle
                  cx="14"
                  cy={cy}
                  r="3.2"
                  fill={isLight ? "#E88D14" : "#C8670A"}
                  fillOpacity="0.65"
                />
              </g>
            );
          })}
          {/* Green Mango Leaf & Gold Bell Tip */}
          <path
            d={`M14 ${length - 2} C8 ${length + 4}, 9 ${length + 12}, 14 ${length + 16} C19 ${length + 12}, 20 ${length + 4}, 14 ${length - 2} Z`}
            fill="#6F806B"
          />
          <circle cx="14" cy={length + 17} r="2.6" fill="#C9A86A" />
        </motion.svg>
      ))}
    </div>
  );
}

function LotusDecoration({ className = "" }) {
  return (
    <svg viewBox="0 0 140 70" className={className} fill="none" aria-hidden="true">
      <path d="M70 62 C45 62, 22 50, 12 36 C28 38, 48 44, 70 62 Z" fill="#8A9A86" fillOpacity="0.45" />
      <path d="M70 62 C95 62, 118 50, 128 36 C112 38, 92 44, 70 62 Z" fill="#8A9A86" fillOpacity="0.45" />
      <path d="M70 60 C46 54, 30 38, 28 20 C44 26, 58 40, 70 60 Z" fill="#F3DCE0" stroke="#C9A86A" strokeWidth="0.8" />
      <path d="M70 60 C94 54, 110 38, 112 20 C96 26, 82 40, 70 60 Z" fill="#F3DCE0" stroke="#C9A86A" strokeWidth="0.8" />
      <path d="M70 60 C54 46, 48 26, 52 12 C62 24, 68 40, 70 60 Z" fill="#E8BDC5" stroke="#C9A86A" strokeWidth="0.8" />
      <path d="M70 60 C86 46, 92 26, 88 12 C78 24, 72 40, 70 60 Z" fill="#E8BDC5" stroke="#C9A86A" strokeWidth="0.8" />
      <path d="M70 60 C60 40, 62 18, 70 6 C78 18, 80 40, 70 60 Z" fill="#F6E3E7" stroke="#C9A86A" strokeWidth="1" />
      <circle cx="70" cy="48" r="3" fill="#C9A86A" />
    </svg>
  );
}

// Smooth one-time letter-by-letter writing reveal (stays static after finishing)
function WritingName({ text, startDelay = 0.6, letterDelay = 0.055 }) {
  return (
    <span aria-label={text}>
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: startDelay + index * letterDelay,
            duration: 0.22,
            ease: "easeOut",
          }}
          className="inline-block"
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero({ language, t }) {
  const displayDate =
    language === "hi"
      ? weddingData.weddingDate.displayHi
      : weddingData.weddingDate.displayEn;
  const displayCity =
    language === "hi"
      ? weddingData.venue.cityShortHi
      : weddingData.venue.cityShortEn;

  const groomStartDelay = 0.6;
  const letterSpeed = 0.055;
  const ampersandDelay = groomStartDelay + weddingData.groom.fullName.length * letterSpeed + 0.1;
  const brideStartDelay = ampersandDelay + 0.25;

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-watercolor-ivory pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* Hanging Marigold Toran */}
      <HangingMarigoldToran />

      {/* Subtle Traditional Mandala Watermark */}
      <svg
        viewBox="0 0 400 400"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 text-champagne/[0.08] sm:h-[700px] sm:w-[700px]"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
        <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="95" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 5" />
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse
            key={i}
            cx="200"
            cy="85"
            rx="22"
            ry="60"
            stroke="currentColor"
            strokeWidth="1"
            transform={`rotate(${i * 30} 200 200)`}
          />
        ))}
      </svg>

      {/* Main Royal Palace Arch Card */}
      <div className="relative z-20 mx-auto w-full max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto overflow-hidden rounded-t-[140px] rounded-b-3xl border border-champagne/45 bg-ivory/82 px-6 pt-16 pb-12 text-center shadow-royal backdrop-blur-sm sm:rounded-t-[200px] sm:px-14 sm:pt-20 sm:pb-14"
        >
          {/* Inner Arch Ornamental Border */}
          <div
            className="pointer-events-none absolute inset-2.5 rounded-t-[132px] rounded-b-2xl border border-champagne/30 sm:inset-3.5 sm:rounded-t-[190px]"
            aria-hidden="true"
          />

          {/* Small Circular Ganesh Ji Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mx-auto mb-3.5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-champagne/80 bg-cream/90 p-0.5 shadow-gold sm:h-20 sm:w-20"
          >
            <div className="h-full w-full overflow-hidden rounded-full border border-champagne/50 bg-ivory">
              <img
                src="/images/ganesh.jpg"
                alt="Shri Ganesh Ji"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Auspicious Mantra */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.22em] text-champagne-dark uppercase sm:text-sm"
          >
            {t.hero.mantra}
          </motion.p>

          {/* Traditional Invitation Message */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className={`mx-auto mt-4 max-w-xl text-sm text-royal-ink/80 sm:text-base ${
              language === "hi" ? "font-hindi" : "font-serif italic text-base sm:text-lg"
            }`}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mx-auto mt-1.5 max-w-lg text-xs tracking-wide text-royal-ink/75 sm:text-sm"
          >
            {t.hero.invitationLine}
          </motion.p>

          {/* Couple Names with Writing Reveal Effect */}
          <div className="my-7 sm:my-9">
            <h1 className="font-serif text-3xl font-semibold tracking-[0.08em] text-burgundy sm:text-5xl md:text-6xl">
              <WritingName
                text={weddingData.groom.fullName}
                startDelay={groomStartDelay}
                letterDelay={letterSpeed}
              />
            </h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: ampersandDelay, duration: 0.4 }}
              className="my-2 flex items-center justify-center gap-4 sm:my-3"
            >
              <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-champagne sm:w-20" />
              <span className="font-script text-4xl text-champagne-dark sm:text-5xl">
                &amp;
              </span>
              <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-champagne sm:w-20" />
            </motion.div>

            <h2 className="font-serif text-3xl font-semibold tracking-[0.08em] text-burgundy sm:text-5xl md:text-6xl">
              <WritingName
                text={weddingData.bride.fullName}
                startDelay={brideStartDelay}
                letterDelay={letterSpeed}
              />
            </h2>
          </div>

          {/* Date & Location Badges */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mx-auto mt-6 flex max-w-xl flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6"
          >
            <div className="flex items-center gap-2.5 rounded-full border border-champagne/40 bg-cream/90 px-5 py-2.5 shadow-sm">
              <Calendar className="h-4 w-4 text-burgundy" aria-hidden="true" />
              <div className="text-left">
                <span className="block text-[10px] tracking-widest text-champagne-dark uppercase">
                  {t.hero.dateLabel}
                </span>
                <span className="font-serif text-sm font-semibold text-royal-ink sm:text-base">
                  {displayDate}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-full border border-champagne/40 bg-cream/90 px-5 py-2.5 shadow-sm">
              <MapPin className="h-4 w-4 text-burgundy" aria-hidden="true" />
              <div className="text-left">
                <span className="block text-[10px] tracking-widest text-champagne-dark uppercase">
                  {t.hero.locationLabel}
                </span>
                <span className="font-serif text-sm font-semibold text-royal-ink sm:text-base">
                  {displayCity}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bottom Lotus Flourish */}
          <div className="mt-8 flex justify-center opacity-85">
            <LotusDecoration className="h-10 w-20 rotate-180" />
          </div>
        </motion.div>

        {/* Scroll Down Cue */}
        <motion.a
          href="#groom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-6 flex flex-col items-center gap-1 text-xs tracking-widest text-royal-ink/60 uppercase transition-colors hover:text-burgundy"
        >
          <span>{t.hero.scrollPrompt}</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4 text-champagne-dark" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}