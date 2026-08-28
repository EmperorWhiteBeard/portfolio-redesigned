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
        primary: {
          DEFAULT: "#3b82f6",
          hover: "#60a5fa",
          deep: "#2563eb",
        },
        accent: {
          DEFAULT: "#8b5cf6",
          hover: "#a78bfa",
        },
        ink: {
          DEFAULT: "#ffffff",
          secondary: "#e5e7eb",
          muted: "#9ca3af",
          subtle: "#6b7280",
        },
        canvas: {
          DEFAULT: "#0a0a0a",
        },
        surface: {
          1: "#111111",
          2: "#1a1a1a",
          3: "#222222",
        },
        hairline: {
          DEFAULT: "#2a2a2a",
          strong: "#3a3a3a",
        },
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'Fira Code'", "Consolas", "monospace"],
      },
      fontSize: {
        "display-xl": ["56px", { lineHeight: "1.1", letterSpacing: "-2px", fontWeight: "700" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-1.5px", fontWeight: "700" }],
        "display-md": ["36px", { lineHeight: "1.2", letterSpacing: "-1px", fontWeight: "600" }],
        "heading-lg": ["28px", { lineHeight: "1.3", letterSpacing: "-0.5px", fontWeight: "600" }],
        "heading-md": ["24px", { lineHeight: "1.3", letterSpacing: "-0.3px", fontWeight: "600" }],
        "heading-sm": ["20px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", letterSpacing: "0" }],
        "body-md": ["16px", { lineHeight: "1.6", letterSpacing: "0" }],
        "body-sm": ["14px", { lineHeight: "1.5", letterSpacing: "0" }],
        caption: ["12px", { lineHeight: "1.4", letterSpacing: "0.5px", fontWeight: "500" }],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "8px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },
      spacing: {
        section: "120px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(59, 130, 246, 0.3)",
        "glow-lg": "0 8px 32px rgba(59, 130, 246, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
