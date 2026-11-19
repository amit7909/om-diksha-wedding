import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { weddingData } from "../data/weddingData";

function EventIllustration({ id }) {
  switch (id) {
    case "haldi":
      return (
        <svg viewBox="0 0 120 100" className="h-24 w-28" fill="none" aria-hidden="true">
          {/* Radiant Turmeric Glow */}
          <circle cx="60" cy="52" r="38" fill="#F8B944" fillOpacity="0.18" />
          {/* Brass Urli / Haldi Bowl */}
          <path
            d="M28 56 C28 76, 42 84, 60 84 C78 84, 92 76, 92 56 Z"
            fill="#C9A86A"
            stroke="#9F7E41"
            strokeWidth="1.5"
          />
          <ellipse cx="60" cy="56" rx="32" ry="9" fill="#F8B944" stroke="#C9A86A" strokeWidth="1.5" />
          {/* Marigold Petals */}
          <circle cx="46" cy="54" r="5" fill="#E88D14" />
          <circle cx="60" cy="52" r="6" fill="#F8B944" stroke="#E88D14" strokeWidth="1" />
          <circle cx="74" cy="54" r="5" fill="#E88D14" />
          {/* Mango Leaves */}
          <path d="M36 46 C42 36, 52 38, 52 48 C44 50, 38 50, 36 46 Z" fill="#8A9A86" />
          <path d="M84 46 C78 36, 68 38, 68 48 C76 50, 82 50, 84 46 Z" fill="#8A9A86" />
        </svg>
      );

    case "mehendi":
      return (
        <svg viewBox="0 0 120 100" className="h-24 w-28" fill="none" aria-hidden="true">
          {/* Sage Aura */}
          <circle cx="60" cy="52" r="38" fill="#8A9A86" fillOpacity="0.18" />
          {/* Paisley Henna Motif */}
          <path
            d="M60 18 C80 26, 86 52, 72 72 C62 84, 44 82, 40 68 C36 52, 48 44, 56 48 C62 51, 60 60, 54 60"
            stroke="#5E6E5A"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="#B8C4B4"
            fillOpacity="0.35"
          />
          {/* Intricate Henna Dots & Flourish */}
          <circle cx="60" cy="32" r="3" fill="#C9A86A" />
          <circle cx="70" cy="44" r="2.2" fill="#5E6E5A" />
          <circle cx="68" cy="58" r="2.2" fill="#5E6E5A" />
          <circle cx="56" cy="70" r="2.5" fill="#C9A86A" />
          <path d="M44 34 Q60 22 76 34" stroke="#C9A86A" strokeWidth="1.2" strokeDasharray="2 3" />
        </svg>
      );

    case "sangeet":
      return (
        <svg viewBox="0 0 120 100" className="h-24 w-28" fill="none" aria-hidden="true">
          {/* Festive Blush Glow */}
          <circle cx="60" cy="52" r="38" fill="#F3DCE0" fillOpacity="0.5" />
          {/* Traditional Dholak */}
          <ellipse cx="60" cy="60" rx="30" ry="18" fill="#9A4A57" stroke="#C9A86A" strokeWidth="1.6" />
          <ellipse cx="32" cy="60" rx="6" ry="15" fill="#FAF6F0" stroke="#C9A86A" strokeWidth="1.6" />
          <ellipse cx="88" cy="60" rx="6" ry="15" fill="#FAF6F0" stroke="#C9A86A" strokeWidth="1.6" />
          {/* Dholak Rope Lacing */}
          <path
            d="M37 48 L48 74 L60 44 L72 74 L83 48"
            stroke="#E6CFA3"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Floating Musical Notes */}
          <path d="M46 34 V20 L58 17 V31" stroke="#7A2E3A" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="43.5" cy="34" r="3" fill="#7A2E3A" />
          <circle cx="55.5" cy="31" r="3" fill="#7A2E3A" />
          <circle cx="76" cy="24" r="2" fill="#C9A86A" />
          <circle cx="84" cy="30" r="1.5" fill="#C9A86A" />
        </svg>
      );

    case "wedding":
    default:
      return (
        <svg viewBox="0 0 120 100" className="h-24 w-28" fill="none" aria-hidden="true">
          {/* Royal Golden Glow */}
          <circle cx="60" cy="52" r="38" fill="#E6CFA3" fillOpacity="0.32" />
          {/* Sacred Kalash & Mandap Arch */}
          <path
            d="M24 82 L24 44 Q24 20 60 16 Q96 20 96 44 L96 82"
            stroke="#C9A86A"
            strokeWidth="1.8"
          />
          {/* Sacred Fire / Havan Kund */}
          <path d="M42 78 L48 66 L72 66 L78 78 Z" fill="#7A2E3A" stroke="#C9A86A" strokeWidth="1.4" />
          {/* Sacred Flame */}
          <path
            d="M60 36 C68 46, 70 58, 60 66 C50 58, 52 46, 60 36 Z"
            fill="#E88D14"
          />
          <path
            d="M60 44 C64 51, 65 58, 60 64 C55 58, 56 51, 60 44 Z"
            fill="#F8B944"
          />
          {/* Top Lotus Tip */}
          <circle cx="60" cy="16" r="3.5" fill="#C9A86A" />
        </svg>
      );
  }
}

const cardAccents = {
  haldi: "from-marigold-light/15 via-ivory to-ivory border-marigold/35",
  mehendi: "from-sage-light/20 via-ivory to-ivory border-sage/35",
  sangeet: "from-blush/40 via-ivory to-ivory border-burgundy/25",
  wedding: "from-champagne-light/30 via-ivory to-ivory border-champagne/55",
};

export default function Programs({ language, t }) {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-watercolor-ivory py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-semibold tracking-[0.26em] text-champagne-dark uppercase sm:text-sm">
            {t.programs.eyebrow}
          </p>
          <h2
            className={`mt-2.5 text-3xl font-semibold text-burgundy sm:text-5xl ${
              language === "hi" ? "font-hindi" : "font-serif tracking-[0.05em]"
            }`}
          >
            {t.programs.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-royal-ink/75 sm:text-base">
            {t.programs.subtitle}
          </p>
        </motion.div>

        {/* 4 Event Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {weddingData.events.map((event, index) => {
            const eventCopy = t.programs.items[event.id];
            const dateText = language === "hi" ? event.dateHi : event.dateEn;

            return (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-b p-7 text-center shadow-royal transition-shadow duration-300 hover:shadow-gold sm:p-9 ${
                  cardAccents[event.id] || "border-champagne/40 from-cream to-ivory"
                }`}
              >
                {/* Inner Corner Ornamental Line */}
                <div
                  className="pointer-events-none absolute inset-2.5 rounded-2xl border border-champagne/25 transition-colors duration-300 group-hover:border-champagne/55"
                  aria-hidden="true"
                />

                {/* Custom Event Illustration */}
                <div className="relative z-10 mx-auto flex justify-center transition-transform duration-500 group-hover:scale-105">
                  <EventIllustration id={event.id} />
                </div>

                {/* Event Name */}
                <h3
                  className={`relative z-10 mt-4 text-xl font-semibold text-burgundy sm:text-2xl ${
                    language === "hi" ? "font-hindi" : "font-serif tracking-[0.08em]"
                  }`}
                >
                  {eventCopy.name}
                </h3>

                {/* Date Pill */}
                <div className="relative z-10 mt-3 inline-flex items-center gap-2 rounded-full border border-champagne/45 bg-ivory/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-royal-ink shadow-sm sm:text-sm">
                  <Calendar className="h-3.5 w-3.5 text-champagne-dark" aria-hidden="true" />
                  <span>{dateText}</span>
                </div>

                {/* Ornamental Divider */}
                <div
                  className="relative z-10 my-4 flex items-center justify-center gap-2"
                  aria-hidden="true"
                >
                  <span className="h-[1px] w-10 bg-champagne/50" />
                  <span className="h-1.5 w-1.5 rotate-45 bg-champagne" />
                  <span className="h-[1px] w-10 bg-champagne/50" />
                </div>

                {/* Decorative Description */}
                <p
                  className={`relative z-10 mx-auto max-w-sm text-sm leading-relaxed text-royal-ink/80 sm:text-base ${
                    language === "hi" ? "font-hindi" : "font-sans"
                  }`}
                >
                  {eventCopy.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}