import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
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

const footerCopy = {
  en: {
    eyebrow: "A SPECIAL INVITATION FOR YOU",
    promptTitle: "Want to Meet the Bride & Groom?",
    promptSubtitle: "Some Meetings Are Too Special to Happen Online!",
    promptHint: "Tap below to discover how you can meet the lovely couple.",
    button: "Meet the Couple",
    revealTitle: "You Won't Find Us Here... Come Meet Us in Person!",
    revealSubtitle: "Some beautiful moments deserve to be experienced in person.",
    hindiMessage:
      "आपके आशीर्वाद के बिना हमारी खुशियाँ अधूरी हैं। इस खास दिन पर आपकी उपस्थिति हमारे लिए बहुत मायने रखती है।",
    joinLine: "To Meet the Bride & Groom, You'll Have to Join Us!",
    closingLine: "We can't wait to see you!",
  },
  hi: {
    eyebrow: "आपके लिए एक विशेष निमंत्रण",
    promptTitle: "क्या आप वर और वधू से मिलना चाहते हैं?",
    promptSubtitle: "कुछ मुलाकातें ऑनलाइन होने के लिए बहुत खास होती हैं!",
    promptHint: "जानने के लिए नीचे क्लिक करें कि आप इस प्यारे जोड़े से कैसे मिल सकते हैं।",
    button: "वर-वधू से मिलें",
    revealTitle: "हम यहाँ नहीं मिलेंगे... आइए, हमसे रूबरू मिलिए!",
    revealSubtitle: "कुछ खूबसूरत पल साथ मिलकर ही महसूस किए जाते हैं।",
    hindiMessage:
      "आपके आशीर्वाद के बिना हमारी खुशियाँ अधूरी हैं। इस खास दिन पर आपकी उपस्थिति हमारे लिए बहुत मायने रखती है।",
    joinLine: "वर और वधू से मिलने के लिए आपको हमारे उत्सव में पधारना होगा!",
    closingLine: "हमें आपके स्वागत की बेसब्री से प्रतीक्षा रहेगी!",
  },
};

export default function Footer({ language }) {
  const [isRevealed, setIsRevealed] = useState(false);

  const copy = footerCopy[language] || footerCopy.en;
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

          <AnimatePresence mode="wait">
            {!isRevealed ? (
              /* 1. Initial Interactive Invitation Card */
              <motion.div
                key="invitation-prompt"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto mt-6 max-w-2xl"
              >
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-champagne-dark uppercase sm:text-sm">
                  <Sparkles className="h-3.5 w-3.5 text-champagne-dark" aria-hidden="true" />
                  <span>{copy.eyebrow}</span>
                  <Sparkles className="h-3.5 w-3.5 text-champagne-dark" aria-hidden="true" />
                </p>

                <h2
                  className={`mt-4 text-2xl font-semibold text-burgundy sm:text-4xl ${
                    language === "hi" ? "font-hindi leading-snug" : "font-serif tracking-wide"
                  }`}
                >
                  {copy.promptTitle}
                </h2>

                <p
                  className={`mt-3 text-base text-champagne-dark sm:text-xl ${
                    language === "hi" ? "font-hindi" : "font-serif italic"
                  }`}
                >
                  {copy.promptSubtitle}
                </p>

                <p
                  className={`mx-auto mt-3 max-w-lg text-sm text-royal-ink/75 sm:text-base ${
                    language === "hi" ? "font-hindi" : "font-sans"
                  }`}
                >
                  {copy.promptHint}
                </p>

                <div className="mt-8">
                  <motion.button
                    type="button"
                    onClick={() => setIsRevealed(true)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-burgundy-dark via-burgundy to-burgundy-dark px-8 py-3.5 text-xs font-semibold tracking-[0.18em] text-ivory uppercase shadow-royal transition-all hover:shadow-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 sm:px-10 sm:py-4 sm:text-sm"
                  >
                    <span>{copy.button}</span>
                    <Heart className="h-4 w-4 fill-champagne-light text-champagne-light" aria-hidden="true" />
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              /* 2. Revealed Emotional Message + Existing Wedding Footer */
              <motion.div
                key="revealed-footer"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto mt-6 max-w-2xl"
              >
                <h2
                  className={`text-2xl font-semibold text-burgundy sm:text-4xl ${
                    language === "hi" ? "font-hindi leading-snug" : "font-serif tracking-wide"
                  }`}
                >
                  {copy.revealTitle}
                </h2>

                <p
                  className={`mt-3 text-sm text-royal-ink/80 sm:text-base ${
                    language === "hi" ? "font-hindi" : "font-serif italic text-lg sm:text-xl"
                  }`}
                >
                  {copy.revealSubtitle}
                </p>

                {/* Emotional Hindi Blessing */}
                <p className="mx-auto mt-5 max-w-xl rounded-2xl border border-champagne/30 bg-cream/70 px-5 py-4 font-hindi text-sm leading-relaxed text-royal-ink/90 sm:text-base">
                  “{copy.hindiMessage}”
                </p>

                <p
                  className={`mt-5 text-sm font-medium tracking-wide text-champagne-dark sm:text-base ${
                    language === "hi" ? "font-hindi" : "font-serif italic text-lg sm:text-xl"
                  }`}
                >
                  {copy.joinLine}
                </p>

                {/* Existing Couple Names */}
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

                {/* Existing Date & Monogram Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-champagne/40 bg-cream/90 px-5 py-2 text-xs font-semibold tracking-[0.16em] text-royal-ink sm:text-sm">
                  <span>{weddingData.couple.monogram}</span>
                  <span className="h-1 w-1 rounded-full bg-champagne-dark" aria-hidden="true" />
                  <span>{displayDate}</span>
                </div>

                {/* Closing Line */}
                <p className="mt-7 flex items-center justify-center gap-2 text-xs font-medium tracking-wider text-royal-ink/70 sm:text-sm">
                  <Heart className="h-3.5 w-3.5 fill-burgundy/80 text-burgundy" aria-hidden="true" />
                  <span>{copy.closingLine}</span>
                  <Heart className="h-3.5 w-3.5 fill-burgundy/80 text-burgundy" aria-hidden="true" />
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </footer>
  );
}