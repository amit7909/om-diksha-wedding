import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { weddingData } from "../data/weddingData";

export default function Contact({ language, t }) {
  const phone = weddingData.contact.phone?.trim() || "";
  const whatsapp = weddingData.contact.whatsapp?.replace(/[^0-9]/g, "") || "";

  const hasPhone = phone.length > 0;
  const hasWhatsapp = whatsapp.length > 0;
  const hasAnyContact = hasPhone || hasWhatsapp;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-watercolor-cream py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
          className="royal-double-border rounded-3xl bg-ivory/95 px-6 py-12 text-center shadow-royal sm:px-12 sm:py-16"
        >
          <p className="text-xs font-semibold tracking-[0.26em] text-champagne-dark uppercase sm:text-sm">
            {t.contact.eyebrow}
          </p>

          <h2
            className={`mt-2.5 text-3xl font-semibold text-burgundy sm:text-5xl ${
              language === "hi" ? "font-hindi" : "font-serif tracking-[0.05em]"
            }`}
          >
            {t.contact.title}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-royal-ink/80 sm:text-base">
            {t.contact.subtitle}
          </p>

          {/* Ornamental Divider */}
          <div className="my-7 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-[1px] w-14 bg-gradient-to-r from-transparent to-champagne" />
            <span className="h-2 w-2 rotate-45 bg-champagne" />
            <span className="h-[1px] w-14 bg-gradient-to-l from-transparent to-champagne" />
          </div>

          {hasAnyContact ? (
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              {hasPhone && (
                <a
                  href={`tel:${phone}`}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-burgundy-dark via-burgundy to-burgundy-dark px-8 py-3.5 text-xs font-semibold tracking-[0.18em] text-ivory uppercase shadow-royal transition-all hover:scale-[1.03] hover:shadow-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne sm:w-auto sm:text-sm"
                >
                  <Phone className="h-4 w-4 text-champagne-light" aria-hidden="true" />
                  <span>{t.contact.callBtn}</span>
                </a>
              )}

              {hasWhatsapp && (
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-sage-dark/40 bg-sage-dark px-8 py-3.5 text-xs font-semibold tracking-[0.18em] text-ivory uppercase shadow-royal transition-all hover:scale-[1.03] hover:bg-sage-dark/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne sm:w-auto sm:text-sm"
                >
                  <MessageCircle className="h-4 w-4 text-ivory" aria-hidden="true" />
                  <span>{t.contact.whatsappBtn}</span>
                </a>
              )}
            </div>
          ) : (
            <div className="mx-auto max-w-md rounded-2xl border border-champagne/35 bg-cream/80 px-5 py-4">
              <div className="mb-3 flex items-center justify-center gap-3 opacity-60">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-champagne/40 bg-ivory px-4 py-1.5 text-xs font-medium text-royal-ink">
                  <Phone className="h-3.5 w-3.5 text-burgundy" aria-hidden="true" />
                  {t.contact.callBtn}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-champagne/40 bg-ivory px-4 py-1.5 text-xs font-medium text-royal-ink">
                  <MessageCircle className="h-3.5 w-3.5 text-sage-dark" aria-hidden="true" />
                  {t.contact.whatsappBtn}
                </span>
              </div>
              <p className="text-xs text-royal-ink/70 sm:text-sm">
                {t.contact.pendingNote}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}