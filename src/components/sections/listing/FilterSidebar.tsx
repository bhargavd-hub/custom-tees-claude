"use client";

import { useState } from "react";
import { ChevronDown } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

type FilterGroup = {
  title: string;
  options: { label: string; count: number }[];
};

const GROUPS: FilterGroup[] = [
  {
    title: "Categories",
    options: [
      { label: "T-Shirts", count: 248 },
      { label: "Polos", count: 92 },
      { label: "Sweatshirts", count: 64 },
      { label: "Long Sleeve", count: 38 },
      { label: "Tank Tops", count: 22 },
    ],
  },
  {
    title: "Brand",
    options: [
      { label: "Gildan", count: 86 },
      { label: "Bella+Canvas", count: 72 },
      { label: "Next Level", count: 41 },
      { label: "Hanes", count: 35 },
      { label: "Champion", count: 18 },
    ],
  },
  {
    title: "Color",
    options: [
      { label: "Black", count: 120 },
      { label: "White", count: 110 },
      { label: "Navy", count: 84 },
      { label: "Heather Grey", count: 73 },
      { label: "Red", count: 51 },
      { label: "Forest", count: 36 },
    ],
  },
  {
    title: "Size",
    options: [
      { label: "XS", count: 198 },
      { label: "S", count: 240 },
      { label: "M", count: 240 },
      { label: "L", count: 240 },
      { label: "XL", count: 240 },
      { label: "2XL", count: 198 },
      { label: "3XL", count: 124 },
    ],
  },
  {
    title: "Material",
    options: [
      { label: "100% Cotton", count: 156 },
      { label: "Cotton Blend", count: 88 },
      { label: "Tri-Blend", count: 24 },
      { label: "Performance", count: 41 },
    ],
  },
];

function FilterGroupBlock({ group, defaultOpen }: { group: FilterGroup; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? true);
  return (
    <div className="border-b border-line py-4">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-sm font-semibold text-ink"
        aria-expanded={open}
      >
        <span>{group.title}</span>
        <ChevronDown
          size={16}
          className={cn("transition-transform", open ? "rotate-180" : "")}
        />
      </button>
      {open && (
        <ul className="mt-3 space-y-2">
          {group.options.map((o) => (
            <li key={o.label}>
              <label className="flex cursor-pointer items-center gap-2 text-sm text-ink-muted hover:text-ink">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-line accent-brand"
                />
                <span className="flex-1">{o.label}</span>
                <span className="text-xs text-ink-subtle">({o.count})</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function PriceFilter() {
  const [min, setMin] = useState(5);
  const [max, setMax] = useState(50);
  return (
    <div className="border-b border-line py-4">
      <p className="text-sm font-semibold text-ink">Price</p>
      <div className="mt-4 flex items-center gap-2">
        <div className="flex flex-1 items-center rounded-lg border border-line px-3">
          <span className="text-xs text-ink-subtle">$</span>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(+e.target.value)}
            className="h-9 w-full bg-transparent text-sm outline-none"
          />
        </div>
        <span className="text-ink-subtle">—</span>
        <div className="flex flex-1 items-center rounded-lg border border-line px-3">
          <span className="text-xs text-ink-subtle">$</span>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(+e.target.value)}
            className="h-9 w-full bg-transparent text-sm outline-none"
          />
        </div>
      </div>
      <button
        type="button"
        className="mt-3 w-full rounded-pill bg-ink py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-ink/85"
      >
        Apply
      </button>
    </div>
  );
}

export function FilterSidebar({ className }: { className?: string }) {
  return (
    <aside className={cn("text-sm", className)}>
      <div className="flex items-center justify-between border-b border-line py-4">
        <p className="font-display text-lg font-bold text-ink">Filters</p>
        <button
          type="button"
          className="text-xs font-semibold uppercase tracking-wide text-brand hover:underline"
        >
          Clear all
        </button>
      </div>
      {GROUPS.map((g, i) => (
        <FilterGroupBlock key={g.title} group={g} defaultOpen={i < 3} />
      ))}
      <PriceFilter />
    </aside>
  );
}
