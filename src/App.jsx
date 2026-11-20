import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { translations } from "./data/translations";
import { weddingData } from "./data/weddingData";
import SplashScreen from "./components/SplashScreen";
import Header from "./components/Header";
import FloatingFlowers from "./components/FloatingFlowers";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import GroomSection from "./components/GroomSection";
import BrideSection from "./components/BrideSection";
import WeddingAnimation from "./components/WeddingAnimation";
import Programs from "./components/Programs";
import Countdown from "./components/Countdown";
import Venue from "./components/Venue";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [hasAudioError, setHasAudioError] = useState(false);

  const audioRef = useRef(null);
  const t = translations[language];
  const wasPlayingBeforeHideRef = useRef(false);

  // Pause music immediately when user leaves the tab, minimizes browser, or locks phone
  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        if (!audio.paused) {
          wasPlayingBeforeHideRef.current = true;
          audio.pause();
          setIsMusicPlaying(false);
        } else {
          wasPlayingBeforeHideRef.current = false;
        }
      } else if (wasPlayingBeforeHideRef.current && isInvitationOpen && !hasAudioError) {
        audio
          .play()
          .then(() => setIsMusicPlaying(true))
          .catch(() => setIsMusicPlaying(false));
      }
    };

    const handlePageHide = () => {
      const audio = audioRef.current;
      if (audio && !audio.paused) {
        audio.pause();
        setIsMusicPlaying(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handlePageHide);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, [isInvitationOpen, hasAudioError]);

  // Sync HTML lang attribute & Devanagari font styling
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.setAttribute("data-lang", language);
  }, [language]);

  // Lock body scroll while splash screen is visible
  useEffect(() => {
    document.body.style.overflow = isInvitationOpen ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isInvitationOpen]);

  // Start music directly inside the user click gesture to satisfy browser autoplay rules
  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);

    const audio = audioRef.current;
    if (audio && !hasAudioError) {
      audio.volume = 0.45;
      audio
        .play()
        .then(() => setIsMusicPlaying(true))
        .catch(() => {
          // Gracefully remain paused if file is missing or blocked by browser
          setIsMusicPlaying(false);
        });
    }
  };

  const handleToggleMusic = () => {
    const audio = audioRef.current;
    if (!audio || hasAudioError) return;

    if (isMusicPlaying) {
      audio.pause();
      setIsMusicPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsMusicPlaying(true))
        .catch(() => setIsMusicPlaying(false));
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen w-full overflow-x-hidden bg-ivory text-royal-ink">
        {/* Persistent Background Audio Element */}
        <audio
          ref={audioRef}
          src={weddingData.music.audioSrc}
          loop
          preload="none"
          onError={() => {
            setHasAudioError(true);
            setIsMusicPlaying(false);
          }}
        />

        {/* Desktop Golden Custom Cursor with Sparkle Trail */}
        <CustomCursor />

        {/* Full-Screen Splash Screen (Shows once per visit) */}
        <AnimatePresence>
          {!isInvitationOpen && (
            <SplashScreen
              onOpen={handleOpenInvitation}
              language={language}
              setLanguage={setLanguage}
              t={t}
            />
          )}
        </AnimatePresence>

        {/* Main Website Content */}
        {isInvitationOpen && (
          <>
            {/* Continuous Global Floating Petals (Behind interactive content) */}
            <FloatingFlowers />

            <Header
              language={language}
              setLanguage={setLanguage}
              t={t}
            />

            <main className="relative z-20">
              <Hero language={language} t={t} />
              <GroomSection language={language} t={t} />
              <BrideSection language={language} t={t} />
              <WeddingAnimation language={language} t={t} />
              <Programs language={language} t={t} />
              <Countdown language={language} t={t} />
              <Venue language={language} t={t} />
              <Contact language={language} t={t} />
            </main>

            <div className="relative z-20">
              <Footer language={language} t={t} />
            </div>

            {/* Floating Play/Pause Music Control */}
            <MusicPlayer
              isPlaying={isMusicPlaying}
              hasError={hasAudioError}
              onToggle={handleToggleMusic}
              t={t}
            />
          </>
        )}
      </div>
    </MotionConfig>
  );
}