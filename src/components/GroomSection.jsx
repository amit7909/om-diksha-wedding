import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

function GroomRoyalArchIllustration() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-b from-[#FAF6F0] via-[#F6EFE4] to-[#EDE3D2]">
      <svg
        viewBox="0 0 300 400"
        className="h-full w-full"
        fill="none"
        role="img"
        aria-label="Royal Indian palace arch illustration with OM monogram"
      >
        <defs>
          <linearGradient id="groomGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E6CFA3" />
            <stop offset="50%" stopColor="#C9A86A" />
            <stop offset="100%" stopColor="#9F7E41" />
          </linearGradient>
          <radialGradient id="groomCenterGlow" cx="50%" cy="48%" r="48%">
            <stop offset="0%" stopColor="#FAF6F0" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#F5EFE6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E6CFA3" stopOpacity="0.18" />
          </radialGradient>
        </defs>

        {/* Soft Ivory-Beige Radial Aura */}
        <rect x="0" y="0" width="300" height="400" fill="url(#groomCenterGlow)" />

        {/* Subtle Palace Jali / Mandala Watermark */}
        <g opacity="0.14" stroke="#9F7E41" strokeWidth="0.8">
          <circle cx="150" cy="195" r="92" strokeDasharray="3 4" />
          <circle cx="150" cy="195" r="70" />
          <circle cx="150" cy="195" r="52" strokeDasharray="2 3" />
        </g>

        {/* Outer Royal Palace Cusped Arch (Rajasthani Jharokha) */}
        <path
          d="M28 372 L28 148
             C28 118, 42 104, 58 98
             C56 80, 72 68, 92 68
             C98 52, 118 44, 134 46
             C140 34, 146 28, 150 24
             C154 28, 160 34, 166 46
             C182 44, 202 52, 208 68
             C228 68, 244 80, 242 98
             C258 104, 272 118, 272 148
             L272 372 Z"
          fill="#FAF6F0"
          fillOpacity="0.58"
          stroke="url(#groomGoldGrad)"
          strokeWidth="1.8"
        />

        {/* Inner Delicate Gold Filigree Arch */}
        <path
          d="M38 362 L38 152
             C38 126, 50 114, 65 108
             C64 92, 78 81, 96 81
             C102 66, 120 58, 136 60
             C141 49, 147 43, 150 40
             C153 43, 159 49, 164 60
             C180 58, 198 66, 204 81
             C222 81, 236 92, 235 108
             C250 114, 262 126, 262 152
             L262 362 Z"
          stroke="#C9A86A"
          strokeWidth="0.9"
          strokeDasharray="3 3"
          opacity="0.85"
        />

        {/* Crown Kalash / Dome Finial at Top */}
        <path d="M150 14 L154 22 L150 26 L146 22 Z" fill="#C9A86A" />
        <circle cx="150" cy="11" r="2.2" fill="#9F7E41" />

        {/* Architectural Pillars (Left & Right) */}
        <rect x="24" y="150" width="8" height="222" rx="2" fill="#E6CFA3" fillOpacity="0.45" stroke="#C9A86A" strokeWidth="0.8" />
        <rect x="268" y="150" width="8" height="222" rx="2" fill="#E6CFA3" fillOpacity="0.45" stroke="#C9A86A" strokeWidth="0.8" />
        {/* Pillar Capitals */}
        <rect x="21" y="146" width="14" height="6" rx="2" fill="#C9A86A" fillOpacity="0.7" />
        <rect x="265" y="146" width="14" height="6" rx="2" fill="#C9A86A" fillOpacity="0.7" />

        {/* Subtle Floral Corner Motifs (Top Spandrels) */}
        <g opacity="0.75">
          <circle cx="62" cy="56" r="10" fill="#F3DCE0" fillOpacity="0.7" />
          <circle cx="62" cy="56" r="3" fill="#C9A86A" />
          <path d="M52 64 C44 70, 42 78, 48 82 C54 78, 56 70, 52 64 Z" fill="#8A9A86" fillOpacity="0.55" />

          <circle cx="238" cy="56" r="10" fill="#F3DCE0" fillOpacity="0.7" />
          <circle cx="238" cy="56" r="3" fill="#C9A86A" />
          <path d="M248 64 C256 70, 258 78, 252 82 C246 78, 244 70, 248 64 Z" fill="#8A9A86" fillOpacity="0.55" />
        </g>

        {/* Central Royal Monogram Medallion */}
        <g>
          {/* Rotating Outer Gold Ring & Diamonds */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 150 196"
              to="360 150 196"
              dur="18s"
              repeatCount="indefinite"
            />
            <circle cx="150" cy="196" r="56" fill="#FAF6F0" fillOpacity="0.92" stroke="url(#groomGoldGrad)" strokeWidth="1.6" />
            <circle cx="150" cy="196" r="49" stroke="#C9A86A" strokeWidth="0.8" strokeDasharray="2 3" />
            {/* Top, Bottom, Left & Right Medallion Diamonds */}
            <path d="M150 135 L154 140 L150 145 L146 140 Z" fill="#C9A86A" />
            <path d="M150 247 L154 252 L150 257 L146 252 Z" fill="#C9A86A" />
            <path d="M89 196 L94 192 L99 196 L94 200 Z" fill="#C9A86A" />
            <path d="M201 196 L206 192 L211 196 L206 200 Z" fill="#C9A86A" />
          </g>

          {/* Subtle "OM" Serif Monogram */}
          <text
            x="150"
            y="209"
            textAnchor="middle"
            fill="#7A2E3A"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontSize="40"
            fontWeight="600"
            letterSpacing="4"
          >
            OM
          </text>
        </g>

        {/* Lower Ornamental Lotus & Jharokha Sill */}
        <g opacity="0.85">
          <path d="M150 338 C134 334, 124 324, 122 312 C134 316, 142 325, 150 338 Z" fill="#F3DCE0" stroke="#C9A86A" strokeWidth="0.8" />
          <path d="M150 338 C166 334, 176 324, 178 312 C166 316, 158 325, 150 338 Z" fill="#F3DCE0" stroke="#C9A86A" strokeWidth="0.8" />
          <path d="M150 338 C142 324, 144 310, 150 302 C156 310, 158 324, 150 338 Z" fill="#E8BDC5" stroke="#C9A86A" strokeWidth="0.9" />
          <path d="M150 338 C130 340, 114 334, 106 326 C118 327, 134 331, 150 338 Z" fill="#8A9A86" fillOpacity="0.45" />
          <path d="M150 338 C170 340, 186 334, 194 326 C182 327, 166 331, 150 338 Z" fill="#8A9A86" fillOpacity="0.45" />
        </g>

        {/* Palace Base Sill */}
        <line x1="20" y1="372" x2="280" y2="372" stroke="url(#groomGoldGrad)" strokeWidth="2" />
        <line x1="36" y1="378" x2="264" y2="378" stroke="#C9A86A" strokeWidth="0.9" opacity="0.7" />
      </svg>
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
          {/* Groom Royal Illustration Frame */}
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
                <GroomRoyalArchIllustration />
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