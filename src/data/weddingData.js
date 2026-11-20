// Centralized Wedding Configuration
// Update placeholder values (phone, whatsapp, googleMapsUrl, photos, music) when ready.

export const weddingData = {
  couple: {
    monogram: "O & D",
    shortNames: "OM & DIKSHA",
  },

  groom: {
    fullName: "OM PRAKASH MISHRA",
    firstName: "OM PRAKASH",
    fatherName: "LATE MR. RAMBHUVAN MISHRA",
    motherName: "LATE MRS. SAROJ MISHRA",
    // Replace null with an imported image or "/images/groom.jpg" when provided
    photo: "/images/groom.jpg",
  },

  bride: {
    fullName: "DIKSHA DWIVEDI",
    firstName: "DIKSHA",
    fatherName: "MR. TRIYUGINARAYAN DWIVEDI",
    motherName: "MRS. PUSHPA DWIVEDI",
    // Replace null with an imported image or "/images/bride.jpg" when provided
    photo: "/images/bride.jpg",
  },

  weddingDate: {
    // ISO string used for real-time countdown (IST timezone)
    isoTarget: "2026-12-11T00:00:00+05:30",
    displayEn: "11 December 2026",
    displayHi: "11 दिसंबर 2026",
  },

  events: [
    {
      id: "haldi",
      dateEn: "10 December 2026",
      dateHi: "10 दिसंबर 2026",
    },
    {
      id: "mehendi",
      dateEn: "10 December 2026",
      dateHi: "10 दिसंबर 2026",
    },
    {
      id: "sangeet",
      dateEn: "10 December 2026",
      dateHi: "10 दिसंबर 2026",
    },
    {
      id: "wedding",
      dateEn: "11 December 2026",
      dateHi: "11 दिसंबर 2026",
    },
  ],

  venue: {
    name: "AYODHYA MARRIAGE GARDEN REWA",
    address:
      "AYODHYA MARRIAGE GARDEN BANKUIYA ROAD NEAR BY SANSKAR VALLEY SCHOOL MAIDANI REWA.",
    cityEn: "Rewa, Madhya Pradesh, India",
    cityShortEn: "Rewa, Madhya Pradesh",
    cityHi: "रीवा, मध्य प्रदेश, भारत",
    cityShortHi: "रीवा, मध्य प्रदेश",
    // NOT PROVIDED YET: Paste exact Google Maps share URL here when available.
    // Until then, a Google Maps search URL is generated dynamically from the address.
    googleMapsUrl: "",
  },

  contact: {
    // NOT PROVIDED YET: Add country code + number (e.g., "+9198XXXXXXXX")
    phone: "+919977706607",
    // NOT PROVIDED YET: Add digits only with country code (e.g., "9198XXXXXXXX")
    whatsapp: "919977706607",
  },

  music: {
    // Place your local MP3 file inside public/music/wedding-shehnai.mp3
    audioSrc: "/music/wedding-shehnai.mp3",
  },
};

/**
 * Helper to return either the exact supplied Google Maps URL
 * or a safe Google Maps search link based on the official venue address.
 */
export function getVenueMapsUrl() {
  if (weddingData.venue.googleMapsUrl && weddingData.venue.googleMapsUrl.trim() !== "") {
    return weddingData.venue.googleMapsUrl;
  }
  const query = encodeURIComponent(
    `${weddingData.venue.name}, ${weddingData.venue.address}, ${weddingData.venue.cityEn}`
  );
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}