import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#E51E2A",
          50: "#FEF1F2",
          100: "#FDE3E5",
          500: "#E51E2A",
          600: "#C81824",
          700: "#A6131D",
        },
        wine: {
          DEFAULT: "#7A1F2C",
          50: "#FAEEF0",
          900: "#5E1622",
        },
        cream: {
          DEFAULT: "#F2EBDD",
          100: "#F8F3E8",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          muted: "#5F5F5F",
          subtle: "#8A8A8A",
        },
        line: "#E5E5E5",
        surface: "#F7F7F7",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["2rem", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700" }],
      },
      borderRadius: {
        card: "0.75rem",
        pill: "999px",
      },
      boxShadow: {
        card: "0 4px 16px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 8px 28px rgba(0, 0, 0, 0.1)",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
