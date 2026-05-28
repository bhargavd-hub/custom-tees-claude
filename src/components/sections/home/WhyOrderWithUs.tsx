import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "@/components/ui/Icon";

const REASONS = [
  {
    title: "Texas-Made Quality",
    body: "Printed in-house in our climate-controlled Texas studio — never outsourced overseas.",
  },
  {
    title: "No-Minimums Policy",
    body: "Order one piece or one thousand. Real prices, no setup fees, no surprises.",
  },
  {
    title: "Fast Turnaround",
    body: "Standard orders ship in 5–7 days. Rush options as fast as 48 hours.",
  },
  {
    title: "Hands-On Service",
    body: "Real humans review your art before we print, every single time.",
  },
  {
    title: "Free Mock-Ups",
    body: "See exactly how your design will look on every garment before you commit.",
  },
  {
    title: "Premium Brands Only",
    body: "Gildan, Bella+Canvas, Next Level, Champion and more — never bargain blanks.",
  },
];

export function WhyOrderWithUs() {
  return (
    <section className="bg-wine py-16 text-white md:py-20">
      <div className="container-wide grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div className="relative h-72 overflow-hidden rounded-2xl md:h-[460px]">
          <Image
            src="https://placehold.co/700x800/5E1622/F2EBDD?text=Quality+Crew&font=poppins"
            alt="Custom Tees crew at work"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cream">
            Six reasons people choose us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Why Ordering With Us <span className="text-cream">Works Better</span>
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {REASONS.map((r) => (
              <li key={r.title} className="flex gap-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-cream">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="m5 12 5 5L20 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-display text-base font-semibold">{r.title}</p>
                  <p className="text-sm text-white/75">{r.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <Button href="#" variant="ghost" size="lg" className="mt-8">
            Request a Quote
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
