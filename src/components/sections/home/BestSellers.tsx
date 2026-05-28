"use client";

import { useRef, useState, useEffect } from "react";

const PRODUCTS = [
  { name: "Unisex Jersey T-Shirt 3001C", gradient: "from-wine-800 to-brand-deep" },
  { name: "Unisex CVC Crewneck T-Shirt N6210", gradient: "from-[#2a4060] to-[#1a2a40]" },
  { name: "District Brand Very Important Unisex 100% Cotton T-Shirt DT6000", gradient: "from-[#303030] to-[#1a1a1a]" },
  { name: "Adult Ultra Cotton® T-Shirt G200", gradient: "from-[#1f5c3a] to-[#143d26]" },
  { name: "Unisex CVC Crewneck T-Shirt N6210", gradient: "from-[#5a2e6e] to-[#3c1a4a]" },
  { name: "Premium Hoodie Classic Fit", gradient: "from-[#7a4a1e] to-[#5a2e0e]" },
];

export function BestSellers() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [idx, setIdx] = useState(0);
  const [maxIdx, setMaxIdx] = useState(0);
  const [cardW, setCardW] = useState(234);

  useEffect(() => {
    const calc = () => {
      const el = trackRef.current;
      if (!el) return;
      const w = el.querySelector("[data-card]")?.clientWidth ?? 210;
      const gap = 24;
      const cw = w + gap;
      setCardW(cw);
      const viewW = el.parentElement?.clientWidth ?? 0;
      const visible = Math.max(1, Math.floor(viewW / cw));
      setMaxIdx(Math.max(0, PRODUCTS.length - visible));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const goPrev = () => setIdx((i) => Math.max(0, i - 1));
  const goNext = () => setIdx((i) => Math.min(maxIdx, i + 1));

  const progress = maxIdx === 0 ? 100 : (idx / maxIdx) * 100;

  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="container-wide">
        <div className="text-center">
          <p className="font-body text-base font-bold text-ink md:text-lg">
            Premium Essentials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-[40px] lg:leading-[48px]">
            Shop <span className="emphasis-red">Best Sellers</span> &amp; Choose Your Style To Customize
          </h2>
        </div>

        <div className="mt-10 overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${idx * cardW}px)` }}
          >
            {PRODUCTS.map((p, i) => (
              <article
                key={i}
                data-card
                className={`relative h-[434px] w-[210px] shrink-0 cursor-pointer overflow-hidden rounded-[10px] bg-gradient-to-br ${p.gradient}`}
              >
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-6">
                  <h3 className="font-display text-lg font-bold leading-6 text-white">
                    {p.name}
                  </h3>
                  <button
                    type="button"
                    className="mt-4 inline-flex h-12 w-fit items-center rounded-pill bg-white px-8 font-display text-base font-bold text-ink hover:bg-cream"
                  >
                    Start Designing
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="relative h-0.5 flex-1 rounded bg-black/10">
            <div
              className="absolute left-0 top-0 h-full rounded bg-ink transition-[width] duration-300"
              style={{ width: `${Math.max(20, progress)}%` }}
            />
          </div>
          <button
            type="button"
            onClick={goPrev}
            disabled={idx === 0}
            aria-label="Previous"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/20 bg-white text-base text-ink disabled:opacity-40"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={idx >= maxIdx}
            aria-label="Next"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/20 bg-white text-base text-ink disabled:opacity-40"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
