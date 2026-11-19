import React, { useMemo } from "react";

const PETAL_CONFIG = [
  { id: 1, left: "4%", size: 16, duration: 15, delay: 0, sway: 34, opacity: 0.52, type: "rose", color: "#E2B8C0" },
  { id: 2, left: "12%", size: 13, duration: 19, delay: -6, sway: -28, opacity: 0.45, type: "blossom", color: "#F8B944" },
  { id: 3, left: "21%", size: 18, duration: 17, delay: -3, sway: 42, opacity: 0.5, type: "rose", color: "#D99AA8" },
  { id: 4, left: "30%", size: 14, duration: 21, delay: -11, sway: -36, opacity: 0.42, type: "rose", color: "#E6CFA3" },
  { id: 5, left: "41%", size: 15, duration: 16, delay: -8, sway: 30, opacity: 0.48, type: "blossom", color: "#F3DCE0" },
  { id: 6, left: "52%", size: 17, duration: 20, delay: -2, sway: -40, opacity: 0.46, type: "rose", color: "#E2B8C0" },
  { id: 7, left: "63%", size: 13, duration: 18, delay: -13, sway: 32, opacity: 0.44, type: "blossom", color: "#F8B944" },
  { id: 8, left: "74%", size: 19, duration: 22, delay: -5, sway: -34, opacity: 0.5, type: "rose", color: "#D99AA8" },
  { id: 9, left: "84%", size: 14, duration: 16.5, delay: -9, sway: 28, opacity: 0.45, type: "rose", color: "#E6CFA3" },
  { id: 10, left: "93%", size: 16, duration: 19.5, delay: -14, sway: -30, opacity: 0.5, type: "blossom", color: "#F3DCE0" },
  // Extra petals hidden on small mobile screens for optimal performance
  { id: 11, left: "17%", size: 15, duration: 23, delay: -16, sway: 38, opacity: 0.4, type: "rose", color: "#F3DCE0", desktopOnly: true },
  { id: 12, left: "47%", size: 12, duration: 17.5, delay: -4, sway: -26, opacity: 0.44, type: "blossom", color: "#E6CFA3", desktopOnly: true },
  { id: 13, left: "69%", size: 16, duration: 20.5, delay: -10, sway: 35, opacity: 0.48, type: "rose", color: "#E2B8C0", desktopOnly: true },
  { id: 14, left: "88%", size: 13, duration: 18.5, delay: -7, sway: -32, opacity: 0.42, type: "blossom", color: "#F8B944", desktopOnly: true },
];

export default function FloatingFlowers() {
  const petals = useMemo(() => PETAL_CONFIG, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <div
          key={petal.id}
          className={`animate-petal-fall absolute -top-10 ${
            petal.desktopOnly ? "hidden md:block" : "block"
          }`}
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            "--petal-sway": `${petal.sway}px`,
            "--petal-opacity": petal.opacity,
          }}
        >
          {petal.type === "rose" ? (
            <svg viewBox="0 0 24 24" className="h-full w-full" fill="none">
              <path
                d="M12 2C16.8 6.4 19.5 11.6 15.6 18.2C13.6 21.2 10.4 21.2 8.4 18.2C4.5 11.6 7.2 6.4 12 2Z"
                fill={petal.color}
              />
              <path
                d="M12 4.5C13.6 8.5 14 13 12 18.5"
                stroke="#FAF6F0"
                strokeWidth="0.7"
                strokeOpacity="0.55"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-full w-full" fill="none">
              <circle cx="12" cy="7" r="3.5" fill={petal.color} />
              <circle cx="17" cy="12" r="3.5" fill={petal.color} />
              <circle cx="12" cy="17" r="3.5" fill={petal.color} />
              <circle cx="7" cy="12" r="3.5" fill={petal.color} />
              <circle cx="12" cy="12" r="2.6" fill="#C9A86A" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}