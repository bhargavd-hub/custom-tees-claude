"use client";

import { useRef, useState, useEffect } from "react";

const TESTIMONIALS = [
  {
    review:
      "Amazing quality and super fast shipping! Our team loved the shirts. Will definitely order again.",
    name: "Sarah M.",
    product: "Unisex Jersey T-Shirt",
  },
  {
    review:
      "The denim is strong and of high quality, with just a bit of stretch. Perfect for our event.",
    name: "Cindy L.",
    product: "Trendy Pants",
  },
  {
    review:
      "Incredibly fast turnaround. We needed 200 shirts in 48 hours and they delivered perfectly.",
    name: "Wilson J.",
    product: "Banks Hood",
  },
  {
    review:
      "This shirt is among the top in my collection. It fits excellently and the print is crisp.",
    name: "Samantha T.",
    product: "Premium Tee",
  },
  {
    review:
      "Great customer service and no hidden fees. The artwork review saved us so much time!",
    name: "Marcus R.",
    product: "Gildan 5000",
  },
  {
    review:
      "Best local print shop in DFW. We've used them for three years and they never disappoint.",
    name: "Jennifer K.",
    product: "Screen Print Order",
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [idx, setIdx] = useState(0);
  const [maxIdx, setMaxIdx] = useState(0);
  const [cardW, setCardW] = useState(336);

  useEffect(() => {
    const calc = () => {
      const el = trackRef.current;
      if (!el) return;
      const w = el.querySelector("[data-card]")?.clientWidth ?? 312;
      const gap = 24;
      const cw = w + gap;
      setCardW(cw);
      const viewW = el.parentElement?.clientWidth ?? 0;
      const visible = Math.max(1, Math.floor(viewW / cw));
      setMaxIdx(Math.max(0, TESTIMONIALS.length - visible));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-wide">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl lg:text-[32px]">
            Clients Love Us
          </h2>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setIdx((i) => Math.max(0, i - 1))}
              disabled={idx === 0}
              aria-label="Previous"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/20 bg-cream text-sm disabled:opacity-40"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setIdx((i) => Math.min(maxIdx, i + 1))}
              disabled={idx >= maxIdx}
              aria-label="Next"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/20 bg-cream text-sm disabled:opacity-40"
            >
              ›
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${idx * cardW}px)` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <article
                key={i}
                data-card
                className="w-[312px] shrink-0 rounded-xl border border-line bg-white p-6"
              >
                <div className="text-base text-[#FEC200]">★★★★★</div>
                <p className="mt-3 font-body text-[15px] leading-6 text-ink">
                  &ldquo;{t.review}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D1D1E2] text-base">
                    👤
                  </span>
                  <div>
                    <p className="font-display text-[15px] font-bold text-ink">{t.name}</p>
                    <p className="font-body text-[13px] text-ink-muted">{t.product}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
