import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { weddingData } from "../data/weddingData";

export default function Header({ language, setLanguage, t }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "groom", label: t.nav.groom },
    { id: "bride", label: t.nav.bride },
    { id: "union", label: t.nav.union },
    { id: "programs", label: t.nav.programs },
    { id: "countdown", label: t.nav.countdown },
    { id: "venue", label: t.nav.venue },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-ivory/92 backdrop-blur-md shadow-royal border-b border-champagne/30 py-2.5"
          : "bg-ivory/70 backdrop-blur-sm border-b border-champagne/15 py-3.5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Royal O & D Monogram */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="group flex items-center gap-2.5 focus:outline-none"
          aria-label="Om and Diksha Wedding Home"
        >
          <div className="relative flex h-10 w-10 items-center justify-center">
            <svg
              viewBox="0 0 60 60"
              className="absolute inset-0 h-full w-full text-champagne transition-transform duration-500 group-hover:rotate-45"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="11"
                y="11"
                width="38"
                height="38"
                rx="4"
                transform="rotate(45 30 30)"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <rect
                x="14"
                y="14"
                width="32"
                height="32"
                rx="2"
                transform="rotate(45 30 30)"
                stroke="currentColor"
                strokeWidth="0.7"
                strokeDasharray="2 2"
              />
            </svg>
            <span className="font-serif text-sm font-semibold tracking-wider text-burgundy">
              {weddingData.couple.monogram}
            </span>
          </div>
          <span className="hidden font-serif text-lg font-semibold tracking-wide text-burgundy sm:inline-block">
            OM <span className="text-champagne">&amp;</span> DIKSHA
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary Navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative py-1 text-sm font-medium text-royal-ink/85 transition-colors hover:text-burgundy after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-champagne after:transition-all after:duration-300 hover:after:w-full ${
                language === "hi" ? "font-hindi text-[15px]" : "font-sans tracking-wide"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Top-Right Language Selector + Mobile Menu Button */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <LanguageToggle language={language} onChange={setLanguage} />

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-champagne/40 bg-ivory p-2 text-burgundy transition-colors hover:bg-blush/40 lg:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            aria-label="Mobile Navigation"
            className="overflow-hidden border-t border-champagne/25 bg-ivory/98 backdrop-blur-lg lg:hidden"
          >
            <div className="mx-auto grid max-w-lg grid-cols-2 gap-2 px-5 py-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`rounded-xl border border-champagne/20 bg-cream/60 px-3.5 py-2.5 text-center text-sm font-medium text-royal-ink transition-colors hover:border-champagne/50 hover:bg-blush/35 hover:text-burgundy ${
                    language === "hi" ? "font-hindi" : "font-sans"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}