import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

function BrideSilhouettePlaceholder({ label }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-blush-light via-ivory to-cream p-6 text-center">
      {/* Subtle Floral Ring */}
      <svg
        viewBox="0 0 200 200"
        className="pointer-events-none absolute h-52 w-52 text-champagne/25"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="64" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Illustrated Royal Bride Silhouette (Veil + Lehenga + Maang Tikka) */}
      <svg
        viewBox="0 0 180 220"
        className="relative z-10 h-48 w-40 sm:h-56 sm:w-48"
        fill="none"
        aria-hidden="true"
      >
        {/* Bridal Dupatta / Veil */}
        <path
          d="M90 36 C56 38, 44 76, 40 132 C46 136, 54 136, 62 130 L66 78 C72 60, 108 60, 114 78 L118 130 C126 136, 134 136, 140 132 C136 76, 124 38, 90 36 Z"
          fill="#9A4A57"
          fillOpacity="0.88"
        />
        <path
          d="M54 58 Q90 32 126 58"
          stroke="#E6CFA3"
          strokeWidth="2"
          strokeDasharray="3 2"
        />

        {/* Head & Maang Tikka */}
        <ellipse cx="90" cy="82" rx="21" ry="25" fill="#FAF6F0" stroke="#C9A86A" strokeWidth="1.2" />
        <line x1="90" y1="54" x2="90" y2="66" stroke="#C9A86A" strokeWidth="1.4" />
        <circle cx="90" cy="68" r="3" fill="#C9A86A" />

        {/* Necklace */}
        <path d="M76 112 Q90 124 104 112" stroke="#C9A86A" strokeWidth="2.4" strokeLinecap="round" />

        {/* Royal Bridal Lehenga */}
        <path
          d="M58 124 C68 118, 112 118, 122 124 L144 198 L36 198 Z"
          fill="#7A2E3A"
          stroke="#C9A86A"
          strokeWidth="1.4"
        />
        {/* Gold Lehenga Embroidery Border */}
        <path d="M40 186 L140 186" stroke="#E6CFA3" strokeWidth="2.5" strokeDasharray="5 3" />
        <path d="M64 138 Q90 152 116 138" stroke="#E6CFA3" strokeWidth="1.4" />
      </svg>

      <span className="relative z-10 mt-3 rounded-full border border-champagne/40 bg-ivory/90 px-4 py-1 text-xs font-medium tracking-widest text-champagne-dark uppercase">
        {label}
      </span>
    </div>
  );
}

function FloralAccent({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      <circle cx="48" cy="48" r="20" fill="#F3DCE0" fillOpacity="0.9" />
      <circle cx="72" cy="34" r="13" fill="#E6CFA3" fillOpacity="0.65" />
      <circle cx="34" cy="72" r="14" fill="#F3DCE0" fillOpacity="0.75" />
      <path d="M22 24 C46 26, 70 40, 92 26 C72 48, 50 54, 28 48 Z" fill="#8A9A86" fillOpacity="0.4" />
      <circle cx="48" cy="48" r="4.5" fill="#C9A86A" />
    </svg>
  );
}

export default function BrideSection({ language, t }) {
  return (
    <section
      id="bride"
      className="relative overflow-hidden bg-watercolor-ivory py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Bride Details & Family Introduction (Left on Desktop, Second on Mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 text-center lg:order-1 lg:col-span-7 lg:text-right"
          >
            <p className="text-xs font-semibold tracking-[0.26em] text-champagne-dark uppercase sm:text-sm">
              {t.bride.eyebrow}
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-[0.06em] text-burgundy sm:text-5xl">
              {weddingData.bride.fullName}
            </h2>

            {/* Gold Divider */}
            <div
              className="my-5 flex items-center justify-center gap-3 lg:justify-end"
              aria-hidden="true"
            >
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-champagne" />
              <span className="h-2 w-2 rotate-45 bg-champagne" />
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-champagne" />
            </div>

            {/* Family Card */}
            <div className="rounded-2xl border border-champagne/35 bg-cream/75 p-6 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-semibold tracking-[0.2em] text-champagne-dark uppercase">
                {t.bride.daughterOf}
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-champagne/20 bg-ivory/90 px-4 py-3 text-center lg:text-right">
                  <span className="block text-[11px] tracking-widest text-royal-ink/60 uppercase">
                    {t.bride.fatherLabel}
                  </span>
                  <p className="mt-1 font-serif text-base font-semibold tracking-wide text-royal-ink sm:text-lg">
                    {weddingData.bride.fatherName}
                  </p>
                </div>

                <div className="rounded-xl border border-champagne/20 bg-ivory/90 px-4 py-3 text-center lg:text-right">
                  <span className="block text-[11px] tracking-widest text-royal-ink/60 uppercase">
                    {t.bride.motherLabel}
                  </span>
                  <p className="mt-1 font-serif text-base font-semibold tracking-wide text-royal-ink sm:text-lg">
                    {weddingData.bride.motherName}
                  </p>
                </div>
              </div>
            </div>

            {/* Emotional Blessing Line */}
            <p
              className={`mt-6 text-base leading-relaxed text-royal-ink/85 sm:text-lg ${
                language === "hi" ? "font-hindi" : "font-serif italic text-lg sm:text-xl"
              }`}
            >
              “{t.bride.blessingLine}”
            </p>
          </motion.div>

          {/* Bride Portrait Frame (Right on Desktop, First on Mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 flex justify-center lg:order-2 lg:col-span-5"
          >
            <div className="relative w-full max-w-sm">
              {/* Floral Corner Accents */}
              <FloralAccent className="pointer-events-none absolute -top-6 -right-6 z-20 h-24 w-24" />
              <FloralAccent className="pointer-events-none absolute -bottom-5 -left-6 z-20 h-20 w-20 rotate-180" />

              {/* Outer Decorative Gold Arch */}
              <div
                className="pointer-events-none absolute -inset-3 rounded-t-[180px] rounded-b-3xl border border-champagne/50"
                aria-hidden="true"
              />
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[170px] rounded-b-2xl border-2 border-champagne/70 bg-ivory shadow-royal">
                {weddingData.bride.photo ? (
                  <img
                    src={weddingData.bride.photo}
                    alt={weddingData.bride.fullName}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <BrideSilhouettePlaceholder label={t.bride.photoPlaceholder} />
                )}
              </div>

              {/* Bottom Gold Ornamental Medallion */}
              <div
                className="mx-auto -mt-4 flex h-8 w-8 items-center justify-center rounded-full border border-champagne bg-ivory shadow-gold"
                aria-hidden="true"
              >
                <span className="h-2.5 w-2.5 rotate-45 bg-burgundy" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}