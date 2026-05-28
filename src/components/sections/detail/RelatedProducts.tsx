import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RELATED_PRODUCTS } from "@/lib/products";

export function RelatedProducts() {
  return (
    <section className="bg-surface py-14 md:py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Pairs well with"
          title={
            <>
              Related <span className="text-brand">Products</span>
            </>
          }
          align="left"
          className="!mx-0"
        />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {RELATED_PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
