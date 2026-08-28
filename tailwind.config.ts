import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        nvidia: {
          DEFAULT: "#76B900",
          hover: "#8FD600",
          dim: "#5A8F00",
          glow: "rgba(118, 185, 0, 0.3)",
          "glow-strong": "rgba(118, 185, 0, 0.5)",
        },
        ink: {
          DEFAULT: "#ffffff",
          secondary: "#a3a3a3",
          muted: "#737373",
          subtle: "#525252",
        },
        canvas: {
          DEFAULT: "#050505",
        },
        surface: {
          DEFAULT: "#0d0d0d",
          elevated: "#141414",
          hover: "#1a1a1a",
        },
        hairline: {
          DEFAULT: "#1f1f1f",
          strong: "#2a2a2a",
        },
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
      },
      fontSize: {
        "display-xl": ["64px", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "heading-lg": ["24px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
        "heading-sm": ["18px", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.7", letterSpacing: "0" }],
        "body-md": ["16px", { lineHeight: "1.7", letterSpacing: "0" }],
        "body-sm": ["14px", { lineHeight: "1.5", letterSpacing: "0" }],
        caption: ["12px", { lineHeight: "1.4", letterSpacing: "0.08em", fontWeight: "500" }],
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(118, 185, 0, 0.2)",
        "glow-lg": "0 0 40px rgba(118, 185, 0, 0.3)",
        "glow-button": "0 0 24px rgba(118, 185, 0, 0.4)",
      },
      backgroundImage: {
        "circuit-pattern": "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2376B900' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        "grid-pattern": "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;