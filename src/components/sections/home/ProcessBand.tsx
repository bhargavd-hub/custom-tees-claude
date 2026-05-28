import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "@/components/ui/Icon";
import { IMG } from "@/lib/images";

const SERVICES = [
  { label: "Screen Printing", highlight: true },
  { label: "Digital Printing (DTG)" },
  { label: "Direct to Film (DTF) Printing" },
  { label: "Vinyl Printing" },
  { label: "Embroidery" },
];

export function ProcessBand() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src={IMG.decorationBand}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-60"
      />
      <div className="-z-10 absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
      <div className="container-wide grid gap-10 py-14 md:grid-cols-[1.1fr_1fr] md:items-center md:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/80">
            Our Decoration Services
          </p>
          <ul className="mt-6 space-y-3">
            {SERVICES.map((s) => (
              <li
                key={s.label}
                className={
                  s.highlight
                    ? "rounded-lg bg-wine/85 px-5 py-3 font-display text-xl font-bold text-white md:text-2xl"
                    : "border-b border-white/15 pb-3 font-display text-xl font-semibold text-white/85 md:text-2xl"
                }
              >
                {s.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center md:justify-end">
          <article className="w-full max-w-xs overflow-hidden rounded-2xl bg-white text-ink shadow-card-hover">
            <div className="relative aspect-[4/3] bg-cream">
              <Image
                src={IMG.decorationCard}
                alt="Screen printed apparel"
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <p className="font-display text-base font-bold text-ink">
                Screen Printed Apparel
              </p>
              <p className="mt-1 text-xs text-ink-muted">
                Vibrant, durable prints that hold up wash after wash.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex h-10 w-fit items-center gap-1.5 rounded-pill bg-ink px-5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-ink/85"
              >
                Learn More
                <ChevronRight size={14} />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
