import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "@/components/ui/Icon";

const PROCESSES = [
  "Screen Printing",
  "Embroidery",
  "DTG / Direct to Garment",
  "Heat Transfer",
  "Vinyl Cut",
];

export function ProcessBand() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-16 text-white md:py-24">
      <Image
        src="https://placehold.co/1600x600/1A1A1A/E51E2A?text=Screen+Printing+Studio&font=poppins"
        alt=""
        fill
        className="-z-10 object-cover opacity-40"
        sizes="100vw"
      />
      <div className="container-wide grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Made in our shop
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Screen Printing,
            <br />
            <span className="text-brand">Done Right.</span>
          </h2>
          <p className="mt-4 max-w-md text-base text-white/75">
            From vibrant water-based inks to ultra-soft discharge prints, our
            Texas studio handles every job with hands-on craftsmanship.
          </p>
          <Button href="#" variant="primary" size="lg" className="mt-6">
            See Our Process
            <ChevronRight size={16} />
          </Button>
        </div>
        <ul className="grid gap-3">
          {PROCESSES.map((p, idx) => (
            <li
              key={p}
              className="flex items-center justify-between rounded-card border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition-colors hover:border-brand/60"
            >
              <span className="flex items-center gap-3">
                <span className="font-display text-sm font-bold text-brand">
                  0{idx + 1}
                </span>
                <span className="text-base font-semibold">{p}</span>
              </span>
              <ChevronRight size={18} className="text-white/60" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
