import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F19",
        foreground: "#F8FAFC",
        muted: "#94A3B8",
        accent: "#22D3EE"
      }
    }
  },
  plugins: [],
};

export default config;
