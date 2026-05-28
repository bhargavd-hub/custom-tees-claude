export type Product = {
  id: string;
  slug: string;
  title: string;
  brand: string;
  sku: string;
  category: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviewCount: number;
  colors: { name: string; hex: string }[];
  sizes: string[];
  image: string;
  images?: string[];
  badge?: "Best Seller" | "New" | "Sale";
  description?: string;
};

const PALETTE = [
  { name: "Stone Blue", hex: "#6E869C" },
  { name: "Black", hex: "#1A1A1A" },
  { name: "White", hex: "#F5F5F5" },
  { name: "Forest", hex: "#2F4F3A" },
  { name: "Burgundy", hex: "#7A1F2C" },
  { name: "Navy", hex: "#1B2A4E" },
  { name: "Sand", hex: "#D7C6A7" },
  { name: "Sunset", hex: "#E47A4E" },
  { name: "Olive", hex: "#7A7A4A" },
  { name: "Charcoal", hex: "#3F3F3F" },
  { name: "Mustard", hex: "#D9A441" },
  { name: "Rose", hex: "#D98AA1" },
];

const PLACEHOLDER =
  "https://placehold.co/600x720/E5E7EB/6B7280?text=T-Shirt&font=poppins";

function makeProduct(i: number, overrides: Partial<Product> = {}): Product {
  const colors = PALETTE.slice(0, 6 + (i % 4));
  return {
    id: `p${i}`,
    slug: `unisex-heavy-cotton-tee-${i}`,
    title: `Unisex Heavy Cotton™ T-Shirt – 500${i}`,
    brand: i % 2 === 0 ? "Gildan" : "Bella + Canvas",
    sku: `G500${i}`,
    category: "T-Shirts",
    price: 12.99 + (i % 5),
    compareAt: i % 3 === 0 ? 19.99 + (i % 5) : undefined,
    rating: 4 + ((i % 10) / 10),
    reviewCount: 24 + i * 3,
    colors,
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    image: PLACEHOLDER,
    badge: i % 7 === 0 ? "Best Seller" : i % 11 === 0 ? "New" : undefined,
    ...overrides,
  };
}

export const SAMPLE_PRODUCTS: Product[] = Array.from({ length: 20 }).map(
  (_, i) => makeProduct(i + 1),
);

export const FEATURED_PRODUCTS: Product[] = SAMPLE_PRODUCTS.slice(0, 4);

export const RELATED_PRODUCTS: Product[] = SAMPLE_PRODUCTS.slice(4, 8);

export const PRODUCT_DETAIL: Product = {
  ...SAMPLE_PRODUCTS[0],
  colors: [...PALETTE, ...PALETTE.slice(0, 6)].map((c, i) => ({
    ...c,
    name: `${c.name} ${i > 11 ? "Heather" : ""}`.trim(),
  })),
  description:
    "Built for everyday wear, the Heavy Cotton™ tee delivers a relaxed unisex fit with a substantial 5.3 oz fabric weight. Pre-shrunk for fit retention, taped neck and shoulders for durability, and double-needle sleeves and hem for clean finishing.",
};
