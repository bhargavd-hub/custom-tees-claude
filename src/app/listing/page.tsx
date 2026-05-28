import type { Metadata } from "next";
import { ListingHero } from "@/components/sections/listing/ListingHero";
import { CategoryStrip } from "@/components/sections/home/CategoryStrip";
import { FilterSidebar } from "@/components/sections/listing/FilterSidebar";
import { ListingToolbar } from "@/components/sections/listing/ListingToolbar";
import { ProductCard } from "@/components/ui/ProductCard";
import { Pagination } from "@/components/ui/Pagination";
import { SAMPLE_PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "T-Shirts Catalog",
  description:
    "Browse our full catalog of premium custom t-shirts from top apparel brands. Filter by category, brand, color, size and price.",
};

export default function ListingPage() {
  const products = SAMPLE_PRODUCTS;
  return (
    <>
      <ListingHero
        title="T-Shirts"
        description="From classic ringspun cotton to modern tri-blends, find the perfect tee for your team, brand or event."
      />
      <CategoryStrip />

      <section className="bg-white py-10">
        <div className="container-wide grid gap-8 lg:grid-cols-[260px_1fr] xl:grid-cols-[280px_1fr]">
          <FilterSidebar className="hidden lg:block" />
          <div>
            <ListingToolbar total={products.length} />
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            <Pagination current={1} total={6} basePath="/listing" />
          </div>
        </div>
      </section>
    </>
  );
}
