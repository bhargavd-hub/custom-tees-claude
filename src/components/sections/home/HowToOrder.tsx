import Link from "next/link";
import { ChevronRight } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    n: "01",
    title: "Browse the Catalog",
    body: "Explore hundreds of premium blanks from top brands you trust.",
    cta: "Browse Catalog",
    href: "/listing",
  },
  {
    n: "02",
    title: "Design Your Style",
    body: "Upload art, add text, or work with our team to perfect your design.",
    cta: "Start Designing",
    href: "#",
  },
  {
    n: "03",
    title: "Pick Quantity & Sizes",
    body: "No minimums. Order one or one thousand — same price-per-piece tiers.",
    cta: "See Pricing",
    href: "#",
  },
  {
    n: "04",
    title: "We Print, You Wear",
    body: "Local Texas printing with fast turnaround and free shipping over $99.",
    cta: "Track an Order",
    href: "#",
  },
];

export function HowToOrder() {
  return (
    <section id="how-to-order" className="bg-white py-16 md:py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              How to Order — <span className="text-brand">Pick an Option</span>
            </>
          }
          description="Four simple steps from idea to perfect, printed apparel."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <article
              key={s.n}
              className="group flex flex-col rounded-card border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="font-display text-4xl font-extrabold text-brand/15 transition-colors group-hover:text-brand/30">
                {s.n}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                {s.body}
              </p>
              <Link
                href={s.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
              >
                {s.cta}
                <ChevronRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
