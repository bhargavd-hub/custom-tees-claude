import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { ColorDots } from "./ColorSwatch";
import { StarRating } from "./StarRating";
import { HeartIcon } from "./Icon";
import type { Product } from "@/lib/products";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-card border border-line bg-white transition-shadow hover:shadow-card-hover",
        className,
      )}
    >
      <Link
        href={`/detail/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-surface"
      >
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-pill bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-ink shadow-card transition-colors hover:text-brand"
        >
          <HeartIcon size={16} />
        </button>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-subtle">
          {product.brand}
        </p>
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-ink">
          <Link href={`/detail/${product.slug}`} className="hover:text-brand">
            {product.title}
          </Link>
        </h3>
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-ink">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAt && (
              <span className="text-xs text-ink-subtle line-through">
                ${product.compareAt.toFixed(2)}
              </span>
            )}
          </div>
          <StarRating rating={product.rating} count={product.reviewCount} />
        </div>
        <ColorDots colors={product.colors.map((c) => c.hex)} />
      </div>
    </article>
  );
}
