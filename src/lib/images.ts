/**
 * Central registry of imagery used across the site.
 *
 * Each value is a placehold.co URL with the dimensions, colors and label
 * that should appear in the rendered design. To swap in real assets:
 *
 *   1. Drop the exported file into `public/images/`
 *   2. Replace the URL below with `/images/<filename>.jpg`
 *
 * The corresponding Figma frame is noted next to each entry.
 */

const ph = (w: number, h: number, bg: string, fg: string, label: string) =>
  `https://placehold.co/${w}x${h}/${bg.replace("#", "")}/${fg.replace("#", "")}?text=${encodeURIComponent(
    label,
  )}&font=poppins`;

export const IMG = {
  // Hero — left main dark card
  heroMain: ph(900, 700, "#2A2A2A", "#FFFFFF", "Woman holding\\ncustom tee"),
  // Hero — right top "Design Your T-Shirts Online"
  heroDesign: ph(700, 360, "#F5EFE3", "#1A1A1A", "Person designing\\non tablet"),
  // Hero — right bottom "Premium Tees & Apparel"
  heroPremium: ph(700, 360, "#6B1F2A", "#F2EBDD", "Hands holding\\nred shirts"),

  // Category circular pills
  catTees: ph(200, 200, "#E51E2A", "#FFFFFF", "T-Shirts"),
  catTanks: ph(200, 200, "#6E869C", "#FFFFFF", "Tank Tops"),
  catPolos: ph(200, 200, "#2F4F3A", "#FFFFFF", "Polo"),
  catSweats: ph(200, 200, "#1B2A4E", "#FFFFFF", "Sweatshirts"),
  catHoodies: ph(200, 200, "#3F3F3F", "#FFFFFF", "Hoodies"),
  catHats: ph(200, 200, "#D9A441", "#1A1A1A", "Hats"),
  catBottoms: ph(200, 200, "#7A7A4A", "#FFFFFF", "Bottoms"),

  // We take Pride — left big photo (cheering crowd collage)
  prideCollage: ph(640, 720, "#E47A4E", "#FFFFFF", "Cheering crowd\\nin custom tees"),

  // How to Order — right decorative image card
  howToImage: ph(420, 520, "#3F3F3F", "#E51E2A", "Design tools\\nflat lay"),
  // How to Order — middle Design Online card mock screen
  howToDesignMock: ph(360, 220, "#F5F5F5", "#1A1A1A", "Design studio\\nUI"),

  // Best sellers — 4 product photos
  productRed1up: ph(600, 720, "#E51E2A", "#FFFFFF", "1UP red tee"),
  productBlue: ph(600, 720, "#6E869C", "#FFFFFF", "Blue crewneck"),
  productCharcoal: ph(600, 720, "#3F3F3F", "#FFFFFF", "Charcoal logo tee"),
  productBlack: ph(600, 720, "#1A1A1A", "#FFFFFF", "Black tee"),

  // Decoration services
  decorationBand: ph(1600, 600, "#1A1A1A", "#E51E2A", "Screen printing\\nin action"),
  decorationCard: ph(360, 280, "#F2EBDD", "#1A1A1A", "Screen printed\\napparel"),

  // Community organizations — right image
  communityCrowd: ph(700, 600, "#E47A4E", "#FFFFFF", "Cheering crowd"),
  // Community — small product thumbs row
  communityThumb1: ph(120, 140, "#1A1A1A", "#FFFFFF", "Tee"),
  communityThumb2: ph(120, 140, "#E51E2A", "#FFFFFF", "Tee"),
  communityThumb3: ph(120, 140, "#6E869C", "#FFFFFF", "Tee"),

  // Why ordering — side images
  whyLeft: ph(220, 260, "#5E1622", "#F2EBDD", "Person"),
  whyRight: ph(220, 260, "#5E1622", "#F2EBDD", "Person"),

  // Clients love us — testimonial avatars + product thumbs
  testiAvatar1: ph(96, 96, "#E51E2A", "#FFFFFF", "JR"),
  testiAvatar2: ph(96, 96, "#7A1F2C", "#FFFFFF", "CD"),
  testiAvatar3: ph(96, 96, "#2F4F3A", "#FFFFFF", "WJ"),
  testiThumb1: ph(120, 120, "#2F4F3A", "#FFFFFF", "Tee"),
  testiThumb2: ph(120, 120, "#7A1F2C", "#FFFFFF", "Tee"),
  testiThumb3: ph(120, 120, "#1A1A1A", "#FFFFFF", "Tee"),

  // FAQ — left "Still have questions?" illustration
  faqIllustration: ph(500, 500, "#9CAF88", "#F2EBDD", "Person from\\nbehind"),
} as const;

export type ImageKey = keyof typeof IMG;
