import type { MetadataRoute } from "next";
import { SAMPLE_PRODUCTS } from "@/lib/products";

const BASE = "https://customtees.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const productUrls = SAMPLE_PRODUCTS.map((p) => ({
    url: `${BASE}/detail/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/listing`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...productUrls,
  ];
}
