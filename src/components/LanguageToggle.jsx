import React from "react";
import { motion } from "framer-motion";

export default function LanguageToggle({ language, onChange, compact = false }) {
  const options = [
    { code: "hi", label: "हिंदी" },
    { code: "en", label: "English" },
  ];

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`relative inline-flex items-center rounded-full border border-champagne/50 bg-ivory/90 p-0.5 shadow-sm backdrop-blur-md ${
        compact ? "text-xs" : "text-xs sm:text-sm"
      }`}
    >
      {options.map((opt) => {
        const isActive = language === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => onChange(opt.code)}
            aria-pressed={isActive}
            className={`relative z-10 rounded-full px-3 py-1 font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne ${
              opt.code === "hi" ? "font-hindi" : "font-sans"
            } ${isActive ? "text-ivory" : "text-royal-ink/80 hover:text-burgundy"}`}
          >
            {isActive && (
              <motion.span
                layoutId="activeLanguagePill"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-burgundy to-burgundy-dark shadow-sm"
              />
            )}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}