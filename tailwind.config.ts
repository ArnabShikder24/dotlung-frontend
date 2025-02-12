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
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(1.5rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animationDelay: {
        '0': '0ms',
        '150': '150ms',
        '300': '300ms',
      },
      animationFillMode: {
        'forwards': 'forwards',
      },
      animation: {
        scroll: "scroll 10s linear infinite",
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
        paused: "none",
      },
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'hover', 'group-hover'],
      animationDelay: ['responsive', 'hover', 'group-hover'],
    },
  },
  plugins: [],
} satisfies Config;
