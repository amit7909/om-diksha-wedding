import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

function GroomSilhouettePlaceholder({ label }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-cream via-ivory to-blush/40 p-6 text-center">
      {/* Subtle Mandala Behind Portrait */}
      <svg
        viewBox="0 0 200 200"
        className="pointer-events-none absolute h-52 w-52 text-champagne/20"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="64" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Illustrated Royal Groom Silhouette (Turban + Sherwani) */}
      <svg
        viewBox="0 0 180 220"
        className="relative z-10 h-48 w-40 sm:h-56 sm:w-48"
        fill="none"
        aria-hidden="true"
      >
        {/* Pagdi / Royal Turban */}
        <path
          d="M62 56 C62 34, 118 34, 118 56 C122 64, 116 74, 90 74 C64 74, 58 64, 62 56 Z"
          fill="#7A2E3A"
        />
        <path
          d="M68 48 Q90 36 112 48"
          stroke="#E6CFA3"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Kalgi (Turban Feather Brooch) */}
        <path d="M106 42 C116 24, 126 26, 122 40 C118 44, 110 46, 106 42 Z" fill="#C9A86A" />
        <circle cx="106" cy="43" r="3.5" fill="#FAF6F0" stroke="#C9A86A" strokeWidth="1.2" />

        {/* Head & Neck */}
        <ellipse cx="90" cy="84" rx="22" ry="26" fill="#E6CFA3" fillOpacity="0.45" stroke="#C9A86A" strokeWidth="1.2" />
        <rect x="82" y="106" width="16" height="14" rx="4" fill="#E6CFA3" fillOpacity="0.4" />

        {/* Royal Sherwani & Stole */}
        <path
          d="M42 198 C44 146, 62 122, 90 122 C118 122, 136 146, 138 198 Z"
          fill="#F5EFE6"
          stroke="#C9A86A"
          strokeWidth="1.5"
        />
        {/* Sherwani Center Placket */}
        <line x1="90" y1="122" x2="90" y2="198" stroke="#C9A86A" strokeWidth="1.5" />
        {[136, 148, 160, 172].map((y) => (
          <circle key={y} cx="90" cy={y} r="2" fill="#9F7E41" />
        ))}
        {/* Burgundy Royal Dupatta / Stole */}
        <path
          d="M66 124 C74 152, 86 172, 124 196"
          stroke="#7A2E3A"
          strokeWidth="7"
          strokeLinecap="round"
          strokeOpacity="0.85"
        />
        <path
          d="M66 124 C74 152, 86 172, 124 196"
          stroke="#E6CFA3"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
      </svg>

      <span className="relative z-10 mt-3 rounded-full border border-champagne/40 bg-ivory/90 px-4 py-1 text-xs font-medium tracking-widest text-champagne-dark uppercase">
        {label}
      </span>
    </div>
  );
}

export default function GroomSection({ language, t }) {
  return (
    <section
      id="groom"
      className="relative overflow-hidden bg-watercolor-cream py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Groom Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="relative w-full max-w-sm">
              {/* Outer Decorative Gold Arch */}
              <div
                className="pointer-events-none absolute -inset-3 rounded-t-[180px] rounded-b-3xl border border-champagne/50"
                aria-hidden="true"
              />
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[170px] rounded-b-2xl border-2 border-champagne/70 bg-ivory shadow-royal">
                {weddingData.groom.photo ? (
                  <img
                    src={weddingData.groom.photo}
                    alt={weddingData.groom.fullName}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <GroomSilhouettePlaceholder label={t.groom.photoPlaceholder} />
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

          {/* Groom Details & Family Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:col-span-7 lg:text-left"
          >
            <p className="text-xs font-semibold tracking-[0.26em] text-champagne-dark uppercase sm:text-sm">
              {t.groom.eyebrow}
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-[0.06em] text-burgundy sm:text-5xl">
              {weddingData.groom.fullName}
            </h2>

            {/* Gold Divider */}
            <div
              className="my-5 flex items-center justify-center gap-3 lg:justify-start"
              aria-hidden="true"
            >
              <span className="h-[1px] w-16 bg-gradient-to-r from-champagne to-transparent lg:from-champagne" />
              <span className="h-2 w-2 rotate-45 bg-champagne" />
              <span className="h-[1px] w-16 bg-gradient-to-l from-champagne to-transparent" />
            </div>

            {/* Family Card */}
            <div className="rounded-2xl border border-champagne/35 bg-ivory/85 p-6 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-semibold tracking-[0.2em] text-champagne-dark uppercase">
                {t.groom.sonOf}
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-champagne/20 bg-cream/70 px-4 py-3">
                  <span className="block text-[11px] tracking-widest text-royal-ink/60 uppercase">
                    {t.groom.fatherLabel}
                  </span>
                  <p className="mt-1 font-serif text-base font-semibold tracking-wide text-royal-ink sm:text-lg">
                    {weddingData.groom.fatherName}
                  </p>
                </div>

                <div className="rounded-xl border border-champagne/20 bg-cream/70 px-4 py-3">
                  <span className="block text-[11px] tracking-widest text-royal-ink/60 uppercase">
                    {t.groom.motherLabel}
                  </span>
                  <p className="mt-1 font-serif text-base font-semibold tracking-wide text-royal-ink sm:text-lg">
                    {weddingData.groom.motherName}
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
              “{t.groom.blessingLine}”
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}