# Custom Tees — Next.js Storefront

Headless e-commerce front-end for **Custom Tees**, a custom apparel brand.
Built from a Figma design with a component-driven architecture.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS 3.4** with a custom token theme (brand red, wine, cream, neutrals)
- **next/font** (Inter + Poppins, self-hosted via Google Fonts loader)
- **next/image** for optimized imagery
- Headless / dependency-light — only `clsx` for class composition

## Project structure

```
src/
├── app/                      # App Router routes
│   ├── layout.tsx            # Root layout (TopBar, Header, Footer)
│   ├── globals.css           # Tailwind layers + utility classes
│   ├── page.tsx              # Home page
│   ├── listing/page.tsx      # Catalog listing
│   ├── detail/[slug]/page.tsx# Product detail
│   ├── robots.ts, sitemap.ts # SEO
│   └── loading.tsx, not-found.tsx
├── components/
│   ├── layout/               # TopBar, Header, Footer, Logo
│   ├── sections/
│   │   ├── home/             # 11 home-page sections
│   │   ├── listing/          # Hero, Filters, Toolbar
│   │   └── detail/           # Gallery, Info, Description, Related
│   └── ui/                   # Reusable primitives (Button, ProductCard,
│                             #   FaqAccordion, ColorSwatch, StarRating, etc.)
└── lib/
    ├── cn.ts                 # className helper
    └── products.ts           # Sample product data
```

## Getting started

```bash
npm install
npm run dev
```

App runs at <http://localhost:3000>.

## Pages

| Route               | Description                                        |
| ------------------- | -------------------------------------------------- |
| `/`                 | Home — hero, categories, best sellers, FAQ, etc.   |
| `/listing`          | Catalog with sidebar filters and product grid      |
| `/detail/[slug]`    | Product detail with gallery, swatches, description |

## Responsive breakpoints

| Token | Width   | Target              |
| ----- | ------- | ------------------- |
| `sm`  | 640 px  | Large phones        |
| `md`  | 768 px  | Tablets             |
| `lg`  | 1024 px | Laptops             |
| `xl`  | 1280 px | Desktops            |
| `2xl` | 1440 px | Large desktops      |

Layouts collapse cleanly: header switches to a slide-in drawer at `lg`, product
grids step from 2 → 3 → 4 columns, and split-image sections stack on mobile.

## SEO

- Per-page `metadata` + OpenGraph + Twitter cards
- `robots.ts` and `sitemap.ts` route handlers
- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Image `alt` text and `sizes` hints throughout

## Customization

All design tokens live in `tailwind.config.ts`:

- `colors.brand` — primary red
- `colors.wine` — dark accent (Why Order With Us section)
- `colors.cream` — newsletter / FAQ backgrounds
- `colors.ink`  — text + neutrals

Swap in real product imagery by replacing the `placehold.co` URLs in
`src/lib/products.ts` and the section files.

## Notes

- Product data in `src/lib/products.ts` is sample/mock — wire to your CMS or
  commerce backend (Shopify, Sanity, Medusa, etc.) when ready.
- The Texas map is an inline SVG illustration, not a real geographic outline —
  replace with an accurate state path or a Mapbox embed as needed.
