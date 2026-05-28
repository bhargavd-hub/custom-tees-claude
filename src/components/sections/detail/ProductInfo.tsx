"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ColorSwatch } from "@/components/ui/ColorSwatch";
import { StarRating } from "@/components/ui/StarRating";
import { CartIcon, HeartIcon, MinusIcon, PlusIcon, TruckIcon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import type { Product } from "@/lib/products";

type Props = {
  product: Product;
};

export function ProductInfo({ product }: Props) {
  const [color, setColor] = useState(0);
  const [size, setSize] = useState<string | null>(null);
  const [qty, setQty] = useState(1);

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-subtle">
        {product.brand} · SKU {product.sku}
      </p>
      <h1 className="mt-2 font-display text-2xl font-bold leading-tight text-ink md:text-3xl lg:text-[2.25rem]">
        {product.title}
      </h1>
      <div className="mt-3 flex items-center gap-3">
        <StarRating rating={product.rating} count={product.reviewCount} />
        <span className="text-xs text-ink-muted">·</span>
        <a href="#reviews" className="text-xs font-semibold text-brand hover:underline">
          Read reviews
        </a>
      </div>

      <div className="mt-5 flex items-baseline gap-3">
        <span className="font-display text-3xl font-bold text-ink">
          ${product.price.toFixed(2)}
        </span>
        {product.compareAt && (
          <span className="text-base text-ink-subtle line-through">
            ${product.compareAt.toFixed(2)}
          </span>
        )}
        <span className="rounded-pill bg-cream-100 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-wine">
          Price tiers for bulk
        </span>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-ink-muted">
        {product.description}
      </p>

      <div className="mt-7">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">
            Color: <span className="font-normal text-ink-muted">{product.colors[color]?.name}</span>
          </p>
          <span className="text-xs text-ink-subtle">{product.colors.length} options</span>
        </div>
        <div className="mt-3 grid grid-cols-[repeat(auto-fill,minmax(28px,1fr))] gap-2">
          {product.colors.map((c, i) => (
            <ColorSwatch
              key={`${c.name}-${i}`}
              color={c.hex}
              label={c.name}
              selected={i === color}
              size="md"
              onClick={() => setColor(i)}
            />
          ))}
        </div>
      </div>

      <div className="mt-7">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">Size</p>
          <button
            type="button"
            className="text-xs font-semibold text-brand hover:underline"
          >
            Size guide
          </button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.sizes.map((s) => {
            const active = s === size;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                aria-pressed={active}
                className={cn(
                  "flex h-11 min-w-[3rem] items-center justify-center rounded-pill border px-4 text-sm font-medium transition-colors",
                  active
                    ? "border-brand bg-brand text-white"
                    : "border-line bg-white text-ink hover:border-ink-muted",
                )}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <div className="flex h-12 items-center rounded-pill border border-line bg-white">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="flex h-12 w-12 items-center justify-center text-ink hover:text-brand"
          >
            <MinusIcon size={16} />
          </button>
          <span className="min-w-[2.5rem] text-center text-sm font-semibold text-ink">
            {qty}
          </span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQty((q) => q + 1)}
            className="flex h-12 w-12 items-center justify-center text-ink hover:text-brand"
          >
            <PlusIcon size={16} />
          </button>
        </div>
        <Button variant="primary" size="lg" className="flex-1 min-w-[200px]">
          <CartIcon size={18} />
          Add to Cart
        </Button>
        <button
          type="button"
          aria-label="Add to wishlist"
          className="flex h-12 w-12 items-center justify-center rounded-pill border border-line bg-white text-ink hover:border-brand hover:text-brand"
        >
          <HeartIcon size={18} />
        </button>
      </div>

      <div className="mt-6 rounded-card border border-line bg-cream-100 p-4">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand">
            <TruckIcon size={18} />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">
              Free shipping on orders over $99
            </p>
            <p className="text-xs text-ink-muted">
              Order today and get printing started in 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
