import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
 
      fontFamily: {
        caslon: ["ACaslonPro", "serif"],
        asty: ["CFAstyStd", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
        ionicons: ["Ionicons"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4D05E8",
        secondary: "#F64C3E",
        headingColor: "#1E293B",
        dark: "#0F1419",
        base100: "#ffffff",
        muted: "#6B7280",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
        paused: "none",
      },
    },
  },
  plugins: [],
} satisfies Config;
