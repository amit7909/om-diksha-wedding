import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingData } from "../data/weddingData";

function FooterFloralDivider() {
  return (
    <svg
      viewBox="0 0 220 36"
      className="mx-auto h-8 w-48 sm:w-56"
      fill="none"
      aria-hidden="true"
    >
      <line x1="8" y1="18" x2="84" y2="18" stroke="#C9A86A" strokeWidth="1" strokeOpacity="0.65" />
      <line x1="136" y1="18" x2="212" y2="18" stroke="#C9A86A" strokeWidth="1" strokeOpacity="0.65" />
      {/* Center Lotus Motif */}
      <path d="M110 28 C100 22, 96 14, 100 8 C106 12, 108 18, 110 28 Z" fill="#F3DCE0" stroke="#C9A86A" strokeWidth="0.9" />
      <path d="M110 28 C120 22, 124 14, 120 8 C114 12, 112 18, 110 28 Z" fill="#F3DCE0" stroke="#C9A86A" strokeWidth="0.9" />
      <path d="M110 28 C104 18, 106 8, 110 4 C114 8, 116 18, 110 28 Z" fill="#E8BDC5" stroke="#C9A86A" strokeWidth="1" />
      <circle cx="88" cy="18" r="2.2" fill="#C9A86A" />
      <circle cx="132" cy="18" r="2.2" fill="#C9A86A" />
    </svg>
  );
}

export default function Footer({ language, t }) {
  const displayDate =
    language === "hi"
      ? weddingData.weddingDate.displayHi
      : weddingData.weddingDate.displayEn;

  return (
    <footer className="relative overflow-hidden border-t border-champagne/35 bg-watercolor-ivory pt-20 pb-14 text-center sm:pt-24 sm:pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="royal-double-border relative overflow-hidden rounded-3xl bg-ivory/90 px-6 py-12 shadow-royal backdrop-blur-sm sm:px-12 sm:py-16"
        >
          {/* Top Floral Ornament */}
          <FooterFloralDivider />

          {/* Main Closing Message */}
          <h2
            className={`mx-auto mt-6 max-w-2xl text-2xl font-semibold text-burgundy sm:text-4xl ${
              language === "hi" ? "font-hindi leading-snug" : "font-serif tracking-wide"
            }`}
          >
            {t.footer.message}
          </h2>

          {/* With Love and Blessings */}
          <p
            className={`mt-4 text-sm font-medium tracking-[0.18em] text-champagne-dark uppercase sm:text-base ${
              language === "hi" ? "font-hindi tracking-normal normal-case text-base sm:text-lg" : "font-serif italic normal-case tracking-normal text-lg sm:text-xl"
            }`}
          >
            {t.footer.signOff}
          </p>

          {/* Couple Names */}
          <div className="my-7">
            <p className="font-serif text-2xl font-semibold tracking-[0.08em] text-burgundy sm:text-4xl">
              {weddingData.groom.fullName}
            </p>
            <span className="my-1 block font-script text-3xl text-champagne-dark sm:text-4xl">
              &amp;
            </span>
            <p className="font-serif text-2xl font-semibold tracking-[0.08em] text-burgundy sm:text-4xl">
              {weddingData.bride.fullName}
            </p>
          </div>

          {/* Date & Monogram Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-champagne/40 bg-cream/90 px-5 py-2 text-xs font-semibold tracking-[0.16em] text-royal-ink sm:text-sm">
            <span>{weddingData.couple.monogram}</span>
            <span className="h-1 w-1 rounded-full bg-champagne-dark" aria-hidden="true" />
            <span>{displayDate}</span>
          </div>

          {/* Thank You Note */}
          <p className="mt-7 flex items-center justify-center gap-2 text-xs font-medium tracking-wider text-royal-ink/70 sm:text-sm">
            <Heart className="h-3.5 w-3.5 fill-burgundy/80 text-burgundy" aria-hidden="true" />
            <span>{t.footer.thankYou}</span>
            <Heart className="h-3.5 w-3.5 fill-burgundy/80 text-burgundy" aria-hidden="true" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
}