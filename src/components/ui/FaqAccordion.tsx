"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { PlusIcon, MinusIcon } from "./Icon";

export type FaqItem = { question: string; answer: string };

export function FaqAccordion({
  items,
  defaultOpen = 0,
}: {
  items: FaqItem[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <ul className="divide-y divide-line rounded-card border border-line bg-white">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <li key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className={cn(
                "flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-sm font-semibold text-ink transition-colors md:px-6 md:py-6 md:text-base",
                isOpen ? "bg-cream-100" : "hover:bg-surface",
              )}
            >
              <span>{item.question}</span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                  isOpen ? "bg-brand text-white" : "bg-cream text-brand",
                )}
              >
                {isOpen ? <MinusIcon size={16} /> : <PlusIcon size={16} />}
              </span>
            </button>
            {isOpen && (
              <div className="bg-cream-100 px-5 pb-6 text-sm leading-relaxed text-ink-muted md:px-6 md:text-base">
                {item.answer}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
