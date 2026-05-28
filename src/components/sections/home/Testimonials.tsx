"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "@/components/ui/Icon";
import { IMG } from "@/lib/images";

type Testimonial = {
  id: string;
  name: string;
  avatar: string;
  quote: string;
  productImg: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Melissa N.",
    avatar: IMG.testiAvatar1,
    quote:
      "Hands down one of the best shirts I've ever owned. Fits great, feels amazing, seems to stay cool.",
    productImg: IMG.testiThumb1,
  },
  {
    id: "t2",
    name: "Cindy J.",
    avatar: IMG.testiAvatar2,
    quote:
      "The denim is strong and of high quality, with just a bit of stretch. Reordered three years in a row.",
    productImg: IMG.testiThumb2,
  },
  {
    id: "t3",
    name: "Wilson J.",
    avatar: IMG.testiAvatar3,
    quote:
      "Hands down one of the best shirts I've ever owned. Fits great, feels amazing, seems to stay cool.",
    productImg: IMG.testiThumb3,
  },
];

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="m12 2 2.5 2.2 3.3-.4.4 3.3L20.4 9.5l-2.2 2.5.4 3.3-3.3.4L12 18l-2.5-2.3-3.3.4-.4-3.3L3.6 9.5l2.2-2.4-.4-3.3L8.7 4.2 12 2Zm-1 13 6-6-1.5-1.5L11 12l-2.5-2.5L7 11l4 4Z" />
      </svg>
      Verified Buyer
    </span>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLUListElement | null>(null);
  const scrollBy = (dx: number) => trackRef.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <section className="bg-cream-100 py-16 md:py-20">
      <div className="container-wide">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl lg:text-[2.5rem]">
            Clients Love Us
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-360)}
              aria-label="Previous review"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink hover:border-brand hover:text-brand"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(360)}
              aria-label="Next review"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink hover:border-brand hover:text-brand"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <li key={t.id}>
              <article className="flex h-full gap-4 rounded-card border border-line bg-white p-5 shadow-sm">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-full object-cover"
                />
                <div className="flex flex-1 flex-col">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <VerifiedBadge />
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    “{t.quote}”
                  </p>
                </div>
                <div className="relative hidden h-16 w-14 shrink-0 overflow-hidden rounded-md bg-surface sm:block">
                  <Image src={t.productImg} alt="" fill sizes="56px" className="object-cover" />
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
