import Image from "next/image";
import { IMG } from "@/lib/images";

const FEATURES = [
  {
    title: "Free Shipping",
    body: "Enjoy free shipping within U.S. on order value of $200 or more.",
  },
  {
    title: "No Rush Fees",
    body: "No added fees for rush orders. Meet the deadlines & exceptions.",
  },
  {
    title: "No Setup Fees",
    body: "No screens, absolutely no fee, no setup. It's printing without any extra cost.",
  },
  {
    title: "No Minimum",
    body: "No minimum order is hassle-free. Get it printed in any quantity.",
  },
  {
    title: "24-72 hrs Printing",
    body: "Quality t-shirt printing with super fast turnaround and 4-step approval.",
  },
  {
    title: "Free Artwork Review",
    body: "Get your artwork review and added by our t-shirt design specialist for free.",
  },
];

export function PrideSection() {
  return (
    <section className="bg-cream py-14 md:py-20">
      <div className="container-wide grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <div className="relative h-72 overflow-hidden rounded-2xl md:h-96 lg:h-[520px]">
          <Image
            src={IMG.prideCollage}
            alt="Crowd cheering in custom tees"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-[2.5rem]">
            We take <span className="text-brand">Pride</span> in
            <br />
            doing things <span className="text-brand">A Little Different</span>
          </h2>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <li
                key={f.title}
                className="rounded-card border border-line bg-white p-5 shadow-sm transition-shadow hover:shadow-card"
              >
                <p className="font-display text-base font-bold text-ink">
                  {f.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {f.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
