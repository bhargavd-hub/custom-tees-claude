import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "@/components/ui/Icon";
import { IMG } from "@/lib/images";

const FEATURES = [
  "Free Shipping",
  "No Rush Order Fees",
  "See & Feel Garments Before Ordering",
  "In-Person Help From A Print Specialist",
  "Proof First Approval (Placement + Scale)",
  "Pickup Option For Tight Deadlines",
  "Better Control of Print Size & Placement",
  "Quality Checks Before You Receive It",
  "Easy Last-Minute Size/Quantity Adjustments",
];

function Check({ on }: { on: boolean }) {
  return on ? (
    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  ) : (
    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-cream/60">
      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function WhyOrderWithUs() {
  return (
    <section className="relative isolate overflow-hidden bg-wine py-16 text-cream md:py-20">
      <div className="container-wide">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-[2.5rem]">
            Why Ordering With Us Works Better
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-cream/80 md:text-base">
            Not all print shops are built the same. Request a quote above and
            see the difference for yourself.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 md:grid-cols-[auto_1fr_1fr_auto] md:items-center">
          {/* Left decorative image */}
          <div className="relative hidden h-72 w-44 shrink-0 overflow-hidden rounded-2xl md:block">
            <Image src={IMG.whyLeft} alt="" fill sizes="180px" className="object-cover" />
          </div>

          {/* Online-Only Print Shops */}
          <article className="rounded-2xl bg-wine-900/60 p-6 ring-1 ring-cream/10 md:p-8">
            <p className="font-display text-lg font-semibold text-cream/90">
              Online-Only Print Shops
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {FEATURES.map((f, i) => (
                <li key={f} className="flex items-start gap-3 text-cream/75">
                  <Check on={i < 3} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Custom Tees — recommended */}
          <article className="relative rounded-2xl bg-white p-6 text-ink shadow-card-hover md:p-8">
            <span className="absolute -top-3 right-6 rounded-pill bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Recommended
            </span>
            <p className="font-display text-lg font-semibold text-ink">
              Custom Tees
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-ink">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Right decorative image */}
          <div className="relative hidden h-72 w-44 shrink-0 overflow-hidden rounded-2xl md:block">
            <Image src={IMG.whyRight} alt="" fill sizes="180px" className="object-cover" />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="#quote"
            className="inline-flex h-12 items-center gap-2 rounded-pill bg-brand px-8 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-600"
          >
            Quick Quote
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
