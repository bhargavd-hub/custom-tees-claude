"use client";

import { useState } from "react";
import Image from "next/image";
import { IMG } from "@/lib/images";

const SERVICES = [
  {
    label: "Screen Printing",
    title: "Screen Printed Apparel",
    desc: "Screen printing delivers bold color with a clean, professional finish. Great for large orders.",
  },
  {
    label: "Digital Printing (DTG)",
    title: "DTG Printed Garments",
    desc: "Direct-to-garment printing allows for full-color photographic designs with no minimum.",
  },
  {
    label: "Direct to Film (DTF) Printing",
    title: "DTF Printed Apparel",
    desc: "DTF transfers work on virtually any fabric and deliver vibrant, durable prints.",
  },
  {
    label: "Vinyl Printing",
    title: "Vinyl Printed Apparel",
    desc: "Heat transfer vinyl delivers clean, precise designs perfect for names, numbers, and logos.",
  },
  {
    label: "Embroidery",
    title: "Embroidered Apparel",
    desc: "Professional embroidery adds a premium, textured finish to polos, hats, and jackets.",
  },
];

export function ProcessBand() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];

  return (
    <section className="relative isolate min-h-[676px] overflow-hidden bg-[#282828] text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/55" />
      <div className="container-wide relative flex h-full min-h-[676px] flex-col items-stretch justify-between gap-10 py-12 md:flex-row md:items-center md:py-12">
        <div className="w-full max-w-[515px]">
          <p className="mb-6 font-body text-base font-bold text-white md:text-lg">
            Our Decoration Services
          </p>
          <ul className="border-l-2 border-white/20">
            {SERVICES.map((s, i) => (
              <li key={s.label}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className={[
                    "block w-full -translate-x-0.5 cursor-pointer border-l-2 px-5 py-4 text-left font-display text-2xl font-bold leading-tight md:text-[40px] md:leading-[48px]",
                    i === active
                      ? "border-white text-white"
                      : "border-transparent text-white/40 hover:text-white/70",
                  ].join(" ")}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full max-w-[245px] overflow-hidden rounded-xl bg-white text-ink shadow-card-deep">
          <div className="relative h-[180px] bg-cream">
            <Image
              src={IMG.coreServicesCard}
              alt=""
              fill
              sizes="245px"
              className="object-cover"
            />
          </div>
          <div className="px-3 pb-4 pt-3">
            <p className="font-display text-lg font-bold text-ink">{current.title}</p>
            <p className="mt-1.5 font-body text-xs leading-6 text-[#4D4D4D]">
              {current.desc}
            </p>
            <button
              type="button"
              className="mt-3 inline-flex h-[38px] items-center rounded-pill bg-ink px-5 font-display text-base font-bold text-white hover:bg-ink-soft"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
