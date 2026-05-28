import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "@/components/ui/Icon";
import { IMG } from "@/lib/images";

const HERO_BADGES = [
  { title: "Tee Quality" },
  { title: "Easy Returns" },
  { title: "Local Pickup" },
];

export function HeroSection() {
  return (
    <section className="bg-white">
      <div className="container-wide grid gap-5 py-6 lg:grid-cols-[1.5fr_1fr] lg:gap-6 lg:py-8">
        {/* Left main card */}
        <article className="relative overflow-hidden rounded-2xl bg-ink text-white">
          <Image
            src={IMG.heroMain}
            alt="Woman holding a custom t-shirt"
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />
          <div className="relative flex h-full min-h-[360px] flex-col justify-between p-8 sm:p-10 md:min-h-[440px] md:p-12">
            <div>
              <h1 className="max-w-md font-display text-3xl font-extrabold leading-[1.1] sm:text-4xl md:text-5xl">
                Custom T-Shirts For Groups, Events & Businesses
              </h1>
              <Link
                href="#quote"
                className="mt-6 inline-flex h-12 items-center gap-2 rounded-pill bg-brand px-7 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-600"
              >
                Get Started
                <ChevronRight size={16} />
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap items-center gap-3">
              {HERO_BADGES.map((b) => (
                <li
                  key={b.title}
                  className="inline-flex items-center gap-2 rounded-pill bg-white/95 px-4 py-2 text-xs font-semibold text-ink"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {b.title}
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Right stacked cards */}
        <div className="grid gap-5 lg:grid-rows-2">
          <article className="relative h-56 overflow-hidden rounded-2xl bg-cream md:h-60 lg:h-full">
            <Image
              src={IMG.heroDesign}
              alt="Designer drafting a t-shirt"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cream/85 via-cream/30 to-transparent" />
            <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
              <h2 className="max-w-[14ch] font-display text-xl font-bold leading-tight text-ink md:text-2xl">
                Design Your T-Shirts Online
              </h2>
              <Link
                href="#"
                className="inline-flex h-10 w-fit items-center gap-1.5 rounded-pill bg-ink px-5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-ink/85"
              >
                Get Started
                <ChevronRight size={14} />
              </Link>
            </div>
          </article>

          <article className="relative h-56 overflow-hidden rounded-2xl bg-wine text-cream md:h-60 lg:h-full">
            <Image
              src={IMG.heroPremium}
              alt="Hands holding premium red shirts"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-wine/85 via-wine/40 to-transparent" />
            <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
              <h2 className="max-w-[14ch] font-display text-xl font-bold leading-tight md:text-2xl">
                Premium Tees & Apparel
              </h2>
              <Link
                href="/listing"
                className="inline-flex h-10 w-fit items-center gap-1.5 rounded-pill bg-brand px-5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-brand-600"
              >
                Shop Now
                <ChevronRight size={14} />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
