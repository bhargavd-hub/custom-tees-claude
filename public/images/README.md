# Image assets

This folder is where you drop the exported image assets from Figma. The
component code references images through a central registry at
`src/lib/images.ts` — each entry currently points at a `placehold.co`
placeholder URL.

## How to swap in a real asset

1. Export the image from Figma at 2x scale (or 1x if the placeholder is
   sized appropriately).
2. Save it into this folder as a `.jpg` (lifestyle/photo) or `.webp`/`.png`
   (transparent product shot).
3. Open `src/lib/images.ts` and replace the matching `ph(...)` URL with
   the local path, e.g.:

   ```diff
   - heroMain: ph(900, 700, "#2A2A2A", "#FFFFFF", "Woman holding\ncustom tee"),
   + heroMain: "/images/hero-main.jpg",
   ```

## Suggested filenames

| `IMG` key            | Where it appears              | Suggested file              |
| -------------------- | ----------------------------- | --------------------------- |
| `heroMain`           | Hero left (dark) card         | `hero-main.jpg`             |
| `heroDesign`         | Hero right-top                | `hero-design-online.jpg`    |
| `heroPremium`        | Hero right-bottom (red card)  | `hero-premium-tees.jpg`     |
| `catTees`–`catBottoms` | Category circular pills     | `cat-tshirts.jpg`, etc.     |
| `prideCollage`       | "We take Pride" left photo    | `pride-collage.jpg`         |
| `howToImage`         | "How to Order" image card     | `howto-image.jpg`           |
| `howToDesignMock`    | "How to Order" middle thumbnail | `howto-design-mock.jpg`   |
| `productRed1up`–`productBlack` | Best Sellers grid   | `product-1up.jpg`, etc.     |
| `decorationBand`     | Decoration services bg image  | `decoration-band.jpg`       |
| `decorationCard`     | Decoration floating card      | `decoration-card.jpg`       |
| `communityCrowd`     | Community right image         | `community-crowd.jpg`       |
| `communityThumb1-3`  | Community small product strip | `community-thumb-1.jpg`, etc. |
| `whyLeft`, `whyRight` | Why Order side images        | `why-left.jpg`, `why-right.jpg` |
| `testiAvatar1-3`     | Testimonial avatars           | `avatar-1.jpg`, etc.        |
| `testiThumb1-3`      | Testimonial product thumb     | `testi-thumb-1.jpg`, etc.   |
| `faqIllustration`    | FAQ "Still have questions?"   | `faq-illustration.jpg`      |

That's it — components don't import paths directly, so you only edit one
file (`src/lib/images.ts`) when swapping assets.
