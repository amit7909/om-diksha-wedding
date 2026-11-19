/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF6F0",
        cream: "#F5EFE6",
        champagne: {
          light: "#E6CFA3",
          DEFAULT: "#C9A86A",
          dark: "#9F7E41",
        },
        burgundy: {
          light: "#9A4A57",
          DEFAULT: "#7A2E3A",
          dark: "#561D27",
        },
        blush: {
          light: "#FAF0F2",
          DEFAULT: "#F3DCE0",
          dark: "#E2B8C0",
        },
        sage: {
          light: "#B8C4B4",
          DEFAULT: "#8A9A86",
          dark: "#5E6E5A",
        },
        marigold: {
          light: "#F8B944",
          DEFAULT: "#E88D14",
          dark: "#C8670A",
        },
        "royal-ink": "#3A2B28",
      },
      fontFamily: {
        script: ['"Great Vibes"', "cursive"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Lato"', "system-ui", "sans-serif"],
        hindi: ['"Noto Serif Devanagari"', "serif"],
      },
      boxShadow: {
        royal: "0 12px 40px -12px rgba(122, 46, 58, 0.14)",
        gold: "0 8px 30px -8px rgba(201, 168, 106, 0.35)",
      },
    },
  },
  plugins: [],
};