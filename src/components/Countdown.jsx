import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { weddingData } from "../data/weddingData";
import { useCountdown } from "../hooks/useCountdown";

export default function Countdown({ language, t }) {
  const { days, hours, minutes, seconds, isCompleted } = useCountdown(
    weddingData.weddingDate.isoTarget
  );

  const units = [
    { key: "days", value: days, label: t.countdown.days },
    { key: "hours", value: hours, label: t.countdown.hours },
    { key: "minutes", value: minutes, label: t.countdown.minutes },
    { key: "seconds", value: seconds, label: t.countdown.seconds },
  ];

  const displayDate =
    language === "hi"
      ? weddingData.weddingDate.displayHi
      : weddingData.weddingDate.displayEn;

  return (
    <section
      id="countdown"
      className="relative overflow-hidden bg-watercolor-cream py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-semibold tracking-[0.26em] text-champagne-dark uppercase sm:text-sm">
            {t.countdown.eyebrow}
          </p>
          <h2
            className={`mt-2.5 text-3xl font-semibold text-burgundy sm:text-5xl ${
              language === "hi" ? "font-hindi" : "font-serif tracking-[0.05em]"
            }`}
          >
            {t.countdown.title}
          </h2>
          <p className="mt-2 font-serif text-base font-medium tracking-[0.14em] text-royal-ink/75 sm:text-lg">
            {displayDate}
          </p>
        </motion.div>

        {/* Countdown Grid or Completed Message */}
        {isCompleted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="royal-double-border mx-auto mt-10 max-w-2xl rounded-3xl bg-ivory/95 px-6 py-10 text-center shadow-royal sm:px-10"
          >
            <Sparkles className="mx-auto h-8 w-8 text-champagne-dark" aria-hidden="true" />
            <h3
              className={`mt-4 text-2xl font-semibold text-burgundy sm:text-3xl ${
                language === "hi" ? "font-hindi" : "font-serif"
              }`}
            >
              {t.countdown.completedTitle}
            </h3>
            <p className="mt-2 text-sm text-royal-ink/80 sm:text-base">
              {t.countdown.completedSubtitle}
            </p>
          </motion.div>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {units.map((unit, idx) => (
              <motion.div
                key={unit.key}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: idx * 0.08 }}
                className="royal-double-border relative flex flex-col items-center justify-center rounded-2xl bg-ivory/95 px-4 py-6 text-center shadow-royal sm:py-8"
              >
                <span className="font-serif text-4xl font-semibold tracking-wider text-burgundy sm:text-5xl md:text-6xl">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="my-2 h-[1px] w-10 bg-champagne/60" aria-hidden="true" />
                <span
                  className={`text-xs font-semibold tracking-[0.2em] text-champagne-dark uppercase sm:text-sm ${
                    language === "hi" ? "font-hindi tracking-normal normal-case text-sm sm:text-base" : "font-sans"
                  }`}
                >
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}