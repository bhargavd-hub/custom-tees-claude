"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "@/components/ui/Icon";
import { IMG } from "@/lib/images";

const ITEMS = [
  {
    slug: "unisex-jersey-tee",
    name: "Unisex Jersey T-Shirt — 1UP",
    image: IMG.productRed1up,
  },
  {
    slug: "unisex-cvc-crew",
    name: "Unisex CVC Crewneck",
    image: IMG.productBlue,
  },
  {
    slug: "district-very-light",
    name: "District Brand Very Light Tee",
    image: IMG.productCharcoal,
  },
  {
    slug: "adult-ultra-cotton",
    name: "Adult Ultra Cotton T-Shirt",
    image: IMG.productBlack,
  },
];

export function BestSellers() {
  const trackRef = useRef<HTMLUListElement | null>(null);
  const scrollBy = (dx: number) => trackRef.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              Premium Essentials
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl lg:text-[2.5rem]">
              Shop <span className="text-brand">Best Sellers</span> & Choose Your Style To Customize
            </h2>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollBy(-380)}
              aria-label="Scroll left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink hover:border-brand hover:text-brand"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(380)}
              aria-label="Scroll right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink hover:border-brand hover:text-brand"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
        >
          {ITEMS.map((item) => (
            <li key={item.slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-card transition-shadow hover:shadow-card-hover">
                <Link
                  href={`/detail/${item.slug}`}
                  className="relative block aspect-[4/5] overflow-hidden bg-surface"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </Link>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-ink">
                    <Link href={`/detail/${item.slug}`} className="hover:text-brand">
                      {item.name}
                    </Link>
                  </h3>
                  <Link
                    href={`/detail/${item.slug}`}
                    className="mt-auto inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-pill bg-brand text-xs font-semibold uppercase tracking-wide text-white hover:bg-brand-600"
                  >
                    Start Designing
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
