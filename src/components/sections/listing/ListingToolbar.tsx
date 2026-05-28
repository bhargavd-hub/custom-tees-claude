"use client";

import { useState } from "react";
import { ChevronDown } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

type Props = {
  total: number;
  onOpenFilters?: () => void;
};

export function ListingToolbar({ total, onOpenFilters }: Props) {
  const [view, setView] = useState<"grid" | "list">("grid");
  return (
    <div className="flex flex-col items-stretch justify-between gap-3 border-b border-line pb-4 md:flex-row md:items-center">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenFilters}
          className="inline-flex h-10 items-center gap-2 rounded-pill border border-line bg-white px-4 text-sm font-medium text-ink hover:border-ink-muted lg:hidden"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M4 6h16M7 12h10M10 18h4" />
          </svg>
          Filters
        </button>
        <p className="text-sm text-ink-muted">
          Showing <span className="font-semibold text-ink">{total}</span> products
        </p>
      </div>
      <div className="flex items-center gap-2">
        <label className="inline-flex items-center gap-2 text-sm text-ink-muted">
          Sort by:
          <span className="relative">
            <select
              className="h-10 appearance-none rounded-pill border border-line bg-white pl-4 pr-9 text-sm font-medium text-ink outline-none hover:border-ink-muted focus:border-brand"
              defaultValue="featured"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted"
            />
          </span>
        </label>
        <div className="hidden items-center gap-1 rounded-pill border border-line p-1 md:flex">
          <button
            type="button"
            aria-label="Grid view"
            onClick={() => setView("grid")}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-pill transition-colors",
              view === "grid" ? "bg-ink text-white" : "text-ink hover:bg-surface",
            )}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <rect x="3" y="3" width="8" height="8" rx="1" />
              <rect x="13" y="3" width="8" height="8" rx="1" />
              <rect x="3" y="13" width="8" height="8" rx="1" />
              <rect x="13" y="13" width="8" height="8" rx="1" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="List view"
            onClick={() => setView("list")}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-pill transition-colors",
              view === "list" ? "bg-ink text-white" : "text-ink hover:bg-surface",
            )}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <rect x="3" y="5" width="18" height="3" rx="1" />
              <rect x="3" y="11" width="18" height="3" rx="1" />
              <rect x="3" y="17" width="18" height="3" rx="1" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
