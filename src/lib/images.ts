/**
 * Central registry of imagery used across the site.
 *
 * Each value is a placehold.co URL with the dimensions, colors and label
 * that should appear in the rendered design. To swap in real assets:
 *
 *   1. Drop the exported file into `public/images/`
 *   2. Replace the URL below with `/images/<filename>.jpg`
 *
 * Filenames here match the reference HTML's `assets/...` paths.
 */

const ph = (w: number, h: number, bg: string, fg: string, label: string) =>
  `https://placehold.co/${w}x${h}/${bg.replace("#", "")}/${fg.replace("#", "")}?text=${encodeURIComponent(
    label,
  )}&font=poppins`;

export const IMG = {
  // Hero — main 900x510 dark photo (woman holding tee)
  heroMain: ph(900, 510, "#2A2A2A", "#FFFFFF", "Custom\\nT-Shirts"),
  // Hero — right top "Design Your T-Shirts Online"
  heroDesign: ph(444, 248, "#F7F6F2", "#1A1A1A", "Design online"),
  // Hero — right bottom "Premium Tees & Apparel"
  heroPremium: ph(444, 248, "#411217", "#F7F6F2", "Premium tees"),

  // Pride / Wide cats — left lifestyle photo
  prideCollage: ph(540, 628, "#D1D1E2", "#666666", "Lifestyle\\nphoto"),

  // Best sellers — 6 product cards (gradients render in component instead)
  // These are intentionally unused but kept for parity
  productPlaceholder: ph(420, 540, "#411217", "#FFFFFF", "Product"),

  // Core services — floating card image
  coreServicesCard: ph(245, 180, "#F7F6F2", "#666666", "Screen\\nprint"),

  // Occasions — right lifestyle image
  occasionsImage: ph(720, 628, "#D1D1E2", "#666666", "Occasion\\nphoto"),

  // FAQ — left card photo background
  faqBg: ph(372, 510, "#411217", "#FFFFFF", "FAQ"),

  // Texas badge logo + texas star
  texasLogo: ph(48, 48, "#EB2127", "#FFFFFF", "T"),
} as const;

export type ImageKey = keyof typeof IMG;
