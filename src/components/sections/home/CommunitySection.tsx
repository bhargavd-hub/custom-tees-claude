"use client";

import { useState } from "react";
import Image from "next/image";
import { IMG } from "@/lib/images";

const OCCASIONS = [
  {
    label: "Community Organizations",
    features: ["Fundraising", "Group Orders", "Fast Delivery", "Custom Design"],
    desc: "Bring your group together with a clean, coordinated look that stands out.",
  },
  {
    label: "Schools & Teams",
    features: ["Team Jerseys", "Spirit Wear", "Student Orders", "School Colors"],
    desc: "Custom spirit wear and team uniforms for schools, sports teams, and student orgs.",
  },
  {
    label: "Businesses & Events",
    features: ["Corporate Merch", "Event Shirts", "Brand Identity", "Bulk Pricing"],
    desc: "Elevate your brand with custom apparel for employees, events, and trade shows.",
  },
];

export function CommunitySection() {
  const [active, setActive] = useState(0);
  const current = OCCASIONS[active];

  return (
    <section className="bg-white px-3 pb-6">
      <div className="overflow-hidden rounded-section bg-cream py-12 md:py-20">
        <div className="container-wide">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[60px]">
            <div className="w-full lg:w-[524px] lg:shrink-0">
              <p className="mb-6 font-body text-base font-bold text-ink md:text-lg">
                For Every Occasion
              </p>

              <ul className="mb-6 flex flex-col gap-4">
                {OCCASIONS.map((occ, i) => (
                  <li key={occ.label}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={i === active}
                      className={[
                        "block w-full rounded-lg border px-5 py-4 text-left font-display text-xl font-bold transition-all",
                        i === active
                          ? "border-line bg-white text-ink shadow-card"
                          : "border-transparent text-ink/35 hover:text-ink/60",
                      ].join(" ")}
                    >
                      {occ.label}
                    </button>
                  </li>
                ))}
              </ul>

              <ul className="mb-6 flex flex-wrap gap-2">
                {current.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-pill border border-line bg-white px-3.5 py-1.5 text-sm text-ink"
                  >
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mb-6 font-body text-base leading-6 text-[#4D4D4D]">
                {current.desc}
              </p>

              <button type="button" className="btn-dark">
                Get a quote
              </button>
            </div>

            <div className="relative h-72 w-full overflow-hidden rounded-section bg-[#D1D1E2] sm:h-96 lg:h-[628px] lg:flex-1">
              <Image
                src={IMG.occasionsImage}
                alt="People in custom tees for various occasions"
                fill
                sizes="(min-width: 1024px) 720px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
