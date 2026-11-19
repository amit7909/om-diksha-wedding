import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { RotateCcw } from "lucide-react";

const unionPetals = [
  { id: 1, x: 180, delay: 2.3, drift: -24, size: 10 },
  { id: 2, x: 235, delay: 2.5, drift: 18, size: 12 },
  { id: 3, x: 290, delay: 2.2, drift: -14, size: 11 },
  { id: 4, x: 350, delay: 2.6, drift: 22, size: 13 },
  { id: 5, x: 410, delay: 2.35, drift: -20, size: 10 },
  { id: 6, x: 465, delay: 2.7, drift: 16, size: 12 },
  { id: 7, x: 520, delay: 2.4, drift: -18, size: 11 },
  { id: 8, x: 320, delay: 2.9, drift: 12, size: 9 },
  { id: 9, x: 380, delay: 2.8, drift: -15, size: 10 },
];

export default function WeddingAnimation({ language, t }) {
  const stageRef = useRef(null);
  const isInView = useInView(stageRef, { once: true, amount: 0.35 });
  const [replayKey, setReplayKey] = useState(0);

  const shouldAnimate = isInView;

  return (
    <section
      id="union"
      ref={stageRef}
      className="relative overflow-hidden bg-watercolor-cream py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-semibold tracking-[0.26em] text-champagne-dark uppercase sm:text-sm">
            {t.union.eyebrow}
          </p>
          <h2
            className={`mt-2.5 text-3xl font-semibold text-burgundy sm:text-5xl ${
              language === "hi" ? "font-hindi" : "font-serif tracking-[0.06em]"
            }`}
          >
            {t.union.title}
          </h2>
          <p
            className={`mx-auto mt-3 max-w-xl text-base text-royal-ink/80 sm:text-lg ${
              language === "hi" ? "font-hindi" : "font-serif italic text-xl"
            }`}
          >
            {t.union.subtitle}
          </p>
        </motion.div>

        {/* Animated Royal Mandap Stage */}
        <div className="royal-double-border relative mt-10 overflow-hidden rounded-3xl bg-ivory/95 p-3 shadow-royal sm:p-6">
          <div key={replayKey} className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#FFF9F0] via-[#FAF2E6] to-[#F3E5D3] sm:aspect-[16/9]">
            <svg
              viewBox="0 0 700 390"
              className="h-full w-full"
              fill="none"
              role="img"
              aria-label="Illustrated Indian wedding union of Om and Diksha"
            >
              <defs>
                {/* Golden Sacred Union Aura */}
                <radialGradient id="goldenAura" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F8D77E" stopOpacity="0.9" />
                  <stop offset="45%" stopColor="#E6CFA3" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#FAF6F0" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="mandapPillar" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C9A86A" />
                  <stop offset="50%" stopColor="#E6CFA3" />
                  <stop offset="100%" stopColor="#9F7E41" />
                </linearGradient>
              </defs>

              {/* 1. Traditional Palace Arch & Mandap Background */}
              <path
                d="M70 370 L70 110 Q70 42 180 42 Q265 42 350 18 Q435 42 520 42 Q630 42 630 110 L630 370"
                stroke="#C9A86A"
                strokeWidth="2.5"
                fill="#FAF6F0"
                fillOpacity="0.55"
              />
              <path
                d="M84 370 L84 116 Q84 56 184 56 Q268 56 350 34 Q432 56 516 56 Q616 56 616 116 L616 370"
                stroke="#C9A86A"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              {/* Left & Right Mandap Pillars */}
              <rect x="60" y="96" width="18" height="274" rx="4" fill="url(#mandapPillar)" opacity="0.7" />
              <rect x="622" y="96" width="18" height="274" rx="4" fill="url(#mandapPillar)" opacity="0.7" />

              {/* Decorative Hanging Marigold Swags */}
              <path
                d="M78 100 Q214 148 350 92 Q486 148 622 100"
                stroke="#E88D14"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="2 9"
              />
              <path
                d="M78 104 Q214 152 350 96 Q486 152 622 104"
                stroke="#F8B944"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="2 9"
              />

              {/* Marble Floor Line */}
              <rect x="30" y="348" width="640" height="24" rx="8" fill="#E6CFA3" fillOpacity="0.35" />
              <line x1="40" y1="348" x2="660" y2="348" stroke="#C9A86A" strokeWidth="1.2" />

              {/* 8. Golden Light Effect behind the Couple */}
              <motion.circle
                cx="350"
                cy="210"
                r="135"
                fill="url(#goldenAura)"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={shouldAnimate ? { opacity: [0, 0.9, 0.72], scale: [0.4, 1.15, 1] } : {}}
                transition={{ delay: 2.1, duration: 1.4, ease: "easeOut" }}
              />

              {/* 2. GROOM CHARACTER (Enters from LEFT -> Center) */}
              <motion.g
                initial={{ x: -190, opacity: 0 }}
                animate={shouldAnimate ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Shadow */}
                <ellipse cx="272" cy="348" rx="34" ry="7" fill="#9F7E41" fillOpacity="0.22" />

                {/* Legs / Churidar */}
                <path d="M260 288 L256 346 L268 346 L272 292 Z" fill="#F5EFE6" stroke="#C9A86A" strokeWidth="1" />
                <path d="M274 292 L278 346 L290 346 L284 288 Z" fill="#F5EFE6" stroke="#C9A86A" strokeWidth="1" />

                {/* Royal Ivory Sherwani */}
                <path
                  d="M244 196 C244 176, 298 176, 300 196 L306 294 L238 294 Z"
                  fill="#FAF6F0"
                  stroke="#C9A86A"
                  strokeWidth="1.5"
                />
                {/* Burgundy Royal Stole */}
                <path
                  d="M255 186 C266 218, 282 246, 302 276"
                  stroke="#7A2E3A"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <path
                  d="M255 186 C266 218, 282 246, 302 276"
                  stroke="#E6CFA3"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                />

                {/* Head */}
                <circle cx="272" cy="156" r="18" fill="#E8C6A8" />
                {/* Royal Pagdi (Turban) */}
                <path
                  d="M252 150 C252 128, 292 128, 292 150 C294 156, 286 160, 272 160 C258 160, 250 156, 252 150 Z"
                  fill="#7A2E3A"
                />
                <path d="M256 144 Q272 134 288 144" stroke="#E6CFA3" strokeWidth="2" />
                {/* Kalgi */}
                <path d="M284 136 C292 122, 300 126, 296 138 Z" fill="#C9A86A" />

                {/* Extended Hand Reaching Right */}
                <motion.path
                  d="M294 206 Q320 218 344 218"
                  stroke="#FAF6F0"
                  strokeWidth="10"
                  strokeLinecap="round"
                  initial={{ pathLength: 0.35, opacity: 0.7 }}
                  animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ delay: 1.45, duration: 0.75, ease: "easeOut" }}
                />
                <motion.circle
                  cx="346"
                  cy="218"
                  r="5.5"
                  fill="#E8C6A8"
                  initial={{ opacity: 0 }}
                  animate={shouldAnimate ? { opacity: 1 } : {}}
                  transition={{ delay: 1.9, duration: 0.35 }}
                />
              </motion.g>

              {/* 3. BRIDE CHARACTER (Enters from RIGHT -> Center) */}
              <motion.g
                initial={{ x: 190, opacity: 0 }}
                animate={shouldAnimate ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Shadow */}
                <ellipse cx="428" cy="348" rx="42" ry="7" fill="#9F7E41" fillOpacity="0.22" />

                {/* Flowing Bridal Lehenga */}
                <path
                  d="M406 202 C414 188, 442 188, 450 202 L478 346 L378 346 Z"
                  fill="#7A2E3A"
                  stroke="#C9A86A"
                  strokeWidth="1.4"
                />
                {/* Gold Lehenga Hem Border */}
                <path d="M382 332 L474 332" stroke="#E6CFA3" strokeWidth="3" strokeDasharray="6 3" />
                <path d="M394 276 Q428 292 462 276" stroke="#E6CFA3" strokeWidth="1.2" opacity="0.8" />

                {/* Bridal Veil / Dupatta */}
                <path
                  d="M428 134 C456 138, 468 178, 464 238 C452 242, 444 236, 440 220 L438 172 C432 156, 412 156, 408 172 L404 204 C396 204, 392 196, 394 176 C398 150, 408 134, 428 134 Z"
                  fill="#9A4A57"
                  fillOpacity="0.9"
                />

                {/* Head & Maang Tikka */}
                <circle cx="426" cy="160" r="17" fill="#E8C6A8" />
                <circle cx="418" cy="152" r="2.2" fill="#E6CFA3" />

                {/* Extended Hand Reaching Left */}
                <motion.path
                  d="M404 208 Q378 218 354 218"
                  stroke="#9A4A57"
                  strokeWidth="9"
                  strokeLinecap="round"
                  initial={{ pathLength: 0.35, opacity: 0.7 }}
                  animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ delay: 1.45, duration: 0.75, ease: "easeOut" }}
                />
                <motion.circle
                  cx="352"
                  cy="218"
                  r="5.5"
                  fill="#E8C6A8"
                  initial={{ opacity: 0 }}
                  animate={shouldAnimate ? { opacity: 1 } : {}}
                  transition={{ delay: 1.9, duration: 0.35 }}
                />
              </motion.g>

              {/* 6. SYMBOLIC WEDDING KNOT (GATHBANDHAN) & SACRED SPARK */}
              <motion.g
                initial={{ opacity: 0, scale: 0.3 }}
                animate={shouldAnimate ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 2.05, duration: 0.85, ease: "easeOut" }}
                style={{ originX: "350px", originY: "218px" }}
              >
                {/* Sacred Connecting Ribbon (Gathbandhan) */}
                <path
                  d="M294 244 Q350 278 406 244"
                  stroke="#C9A86A"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M296 246 Q350 280 404 246"
                  stroke="#7A2E3A"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  fill="none"
                />

                {/* Infinity / Sacred Knot Emblem Above Joined Hands */}
                <path
                  d="M350 218 C338 206, 326 218, 338 228 C345 234, 355 234, 362 228 C374 218, 362 206, 350 218 Z"
                  stroke="#C9A86A"
                  strokeWidth="2.4"
                  fill="#F8D77E"
                  fillOpacity="0.4"
                />
                <circle cx="350" cy="218" r="4" fill="#7A2E3A" />

                {/* Expanding Golden Halo Ring */}
                <motion.circle
                  cx="350"
                  cy="218"
                  r="24"
                  stroke="#C9A86A"
                  strokeWidth="1.4"
                  fill="none"
                  animate={
                    shouldAnimate
                      ? { scale: [0.8, 1.45, 0.8], opacity: [0.85, 0.15, 0.85] }
                      : {}
                  }
                  transition={{ delay: 2.2, duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.g>

              {/* 7. ANIMATED FLOWER PETALS AROUND THE COUPLE */}
              {unionPetals.map((petal) => (
                <motion.path
                  key={petal.id}
                  d={`M${petal.x} 60 C${petal.x + 5} 65, ${petal.x + 6} 72, ${petal.x} 76 C${petal.x - 6} 72, ${petal.x - 5} 65, ${petal.x} 60 Z`}
                  fill={petal.id % 2 === 0 ? "#E2B8C0" : "#F8B944"}
                  initial={{ y: -20, x: 0, opacity: 0, rotate: 0 }}
                  animate={
                    shouldAnimate
                      ? {
                          y: [0, 260],
                          x: [0, petal.drift, -petal.drift / 2],
                          opacity: [0, 0.9, 0.75, 0],
                          rotate: [0, 140],
                        }
                      : {}
                  }
                  transition={{
                    delay: petal.delay,
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </svg>
          </div>

          {/* Replay Animation Control */}
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={() => setReplayKey((k) => k + 1)}
              className="inline-flex items-center gap-2 rounded-full border border-champagne/45 bg-cream/90 px-4 py-1.5 text-xs font-medium tracking-wider text-burgundy transition-colors hover:bg-blush/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{t.union.replay}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}