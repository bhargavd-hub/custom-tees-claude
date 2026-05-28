"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "@/components/ui/Icon";
import { IMG } from "@/lib/images";

const CATEGORIES = [
  { label: "T-Shirts", href: "/listing?cat=tshirts", image: IMG.catTees },
  { label: "Tank Tops", href: "/listing?cat=tanks", image: IMG.catTanks },
  { label: "Polo", href: "/listing?cat=polos", image: IMG.catPolos },
  { label: "Sweatshirts", href: "/listing?cat=sweatshirts", image: IMG.catSweats },
  { label: "Hoodies", href: "/listing?cat=hoodies", image: IMG.catHoodies },
  { label: "Hats", href: "/listing?cat=hats", image: IMG.catHats },
  { label: "Bottoms", href: "/listing?cat=bottoms", image: IMG.catBottoms },
];

export function CategoryStrip() {
  const trackRef = useRef<HTMLUListElement | null>(null);
  const scrollBy = (dx: number) => trackRef.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <section className="border-b border-line bg-white py-6 md:py-8">
      <div className="container-wide">
        <div className="relative">
          <button
            type="button"
            onClick={() => scrollBy(-300)}
            aria-label="Scroll categories left"
            className="absolute -left-2 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-card hover:border-brand hover:text-brand md:flex"
          >
            <ChevronLeft size={16} />
          </button>
          <ul
            ref={trackRef}
            className="flex items-start gap-6 overflow-x-auto px-1 pb-2 md:gap-10 md:px-8"
          >
            {CATEGORIES.map((c) => (
              <li key={c.label} className="shrink-0">
                <Link
                  href={c.href}
                  className="group flex flex-col items-center gap-2"
                >
                  <span className="relative block h-20 w-20 overflow-hidden rounded-full border-2 border-line bg-surface transition-colors group-hover:border-brand md:h-24 md:w-24">
                    <Image
                      src={c.image}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-ink md:text-sm">
                    {c.label}
                    <ChevronRight size={12} className="text-ink-muted" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => scrollBy(300)}
            aria-label="Scroll categories right"
            className="absolute -right-2 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-card hover:border-brand hover:text-brand md:flex"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
