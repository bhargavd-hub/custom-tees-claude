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
        // EB2127 — primary brand red used for CTAs, accents, emphasis highlight
        brand: {
          DEFAULT: "#EB2127",
          50: "#FDECEC",
          100: "#FBD9DA",
          500: "#EB2127",
          600: "#C81A20",
          700: "#A6131B",
        },
        // 8D1417 — deeper brand red used in logo wordmark and FAQ icons
        "brand-deep": "#8D1417",
        // 411217 — wine used for announcement bar, dark cards, why-ordering bg, texas bg
        wine: {
          DEFAULT: "#411217",
          900: "#2E0C10",
          800: "#592329",
        },
        // F7F6F2 — cream section background and light cards
        cream: {
          DEFAULT: "#F7F6F2",
          100: "#FBFAF6",
        },
        ink: {
          DEFAULT: "#000000",
          soft: "#212121",
          muted: "#666666",
          subtle: "#999999",
        },
        line: "#E5E5E5",
        "line-soft": "#DDDDDD",
        surface: "#F7F6F2",
      },
      fontFamily: {
        sans: ["var(--font-urbanist)", "system-ui", "sans-serif"],
        display: ["var(--font-urbanist)", "system-ui", "sans-serif"],
        body: ["var(--font-open-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        section: "20px",
        pill: "100px",
      },
      boxShadow: {
        card: "0 4px 16px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 8px 28px rgba(0, 0, 0, 0.1)",
        "card-deep": "0 8px 32px rgba(0, 0, 0, 0.3)",
      },
      maxWidth: {
        content: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
