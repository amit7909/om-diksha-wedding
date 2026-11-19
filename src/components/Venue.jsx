import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { weddingData, getVenueMapsUrl } from "../data/weddingData";

export default function Venue({ language, t }) {
  const mapsUrl = getVenueMapsUrl();
  const cityDisplay =
    language === "hi" ? weddingData.venue.cityHi : weddingData.venue.cityEn;

  const mapEmbedQuery = encodeURIComponent(
    `${weddingData.venue.name}, ${weddingData.venue.address}, ${weddingData.venue.cityEn}`
  );
  const mapEmbedSrc = `https://maps.google.com/maps?q=${mapEmbedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section
      id="venue"
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
            {t.venue.eyebrow}
          </p>
          <h2
            className={`mt-2.5 text-3xl font-semibold text-burgundy sm:text-5xl ${
              language === "hi" ? "font-hindi" : "font-serif tracking-[0.05em]"
            }`}
          >
            {t.venue.title}
          </h2>
        </motion.div>

        {/* Venue Details + Map Grid */}
        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-12">
          {/* Left: Royal Venue Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="royal-double-border flex flex-col justify-between rounded-3xl bg-ivory/95 p-7 shadow-royal sm:p-9 lg:col-span-5"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-champagne/50 bg-cream text-burgundy shadow-sm">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-semibold tracking-wide text-burgundy sm:text-3xl">
                {weddingData.venue.name}
              </h3>

              <div className="my-5 flex items-center gap-3" aria-hidden="true">
                <span className="h-[1px] w-14 bg-champagne" />
                <span className="h-1.5 w-1.5 rotate-45 bg-champagne" />
              </div>

              <div className="space-y-4">
                <div>
                  <span className="block text-xs font-semibold tracking-[0.18em] text-champagne-dark uppercase">
                    {t.venue.addressLabel}
                  </span>
                  <p className="mt-1.5 text-sm leading-relaxed font-medium text-royal-ink/85 sm:text-base">
                    {weddingData.venue.address}
                  </p>
                </div>

                <div>
                  <span className="block text-xs font-semibold tracking-[0.18em] text-champagne-dark uppercase">
                    {t.venue.cityLabel}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-royal-ink sm:text-base">
                    {cityDisplay}
                  </p>
                </div>
              </div>
            </div>

            {/* Get Directions CTA */}
            <div className="mt-8">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-burgundy-dark via-burgundy to-burgundy-dark px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-ivory uppercase shadow-royal transition-all hover:scale-[1.02] hover:shadow-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne sm:text-sm"
              >
                <Navigation className="h-4 w-4 text-champagne-light" aria-hidden="true" />
                <span>{t.venue.directionsBtn}</span>
              </a>
              <p className="mt-2.5 text-center text-xs text-royal-ink/60">
                {t.venue.mapNote}
              </p>
            </div>
          </motion.div>

          {/* Right: Embedded Google Maps Frame */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="overflow-hidden rounded-3xl border border-champagne/45 bg-cream p-2 shadow-royal lg:col-span-7"
          >
            <div className="h-80 w-full overflow-hidden rounded-2xl sm:h-96 lg:h-full lg:min-h-[380px]">
              <iframe
                title={weddingData.venue.name}
                src={mapEmbedSrc}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}