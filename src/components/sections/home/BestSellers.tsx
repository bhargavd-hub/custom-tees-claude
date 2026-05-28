import { ChevronRight } from "@/components/ui/Icon";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { FEATURED_PRODUCTS } from "@/lib/products";

export function BestSellers() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="container-wide">
        <div className="grid items-end gap-4 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              Most popular
            </p>
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              Shop <span className="text-brand">Best Sellers</span> & Choose Your Style To Customize
            </h2>
          </div>
          <Button href="/listing" size="lg" className="hidden md:inline-flex">
            View All
            <ChevronRight size={16} />
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {FEATURED_PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Button href="/listing" size="lg">
            View All
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
