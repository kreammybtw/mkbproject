import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mkb: {
          red: "#dd0a34",
          dark: "#181818",
          muted: "#5f5f5f",
          soft: "#f7f7f7",
        },
      },
      boxShadow: {
        mkb: "0 28px 70px rgba(24, 24, 24, 0.08)",
        "mkb-red": "0 28px 60px rgba(221, 10, 52, 0.22)",
      },
      fontFamily: {
        display: ["Bahnschrift", "Arial Narrow", "Arial", "sans-serif"],
        body: ["Trebuchet MS", "Segoe UI", "Arial", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 420ms ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
