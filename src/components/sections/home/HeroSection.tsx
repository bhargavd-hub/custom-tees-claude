import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ChevronRight, SearchIcon } from "@/components/ui/Icon";

export function HeroSection() {
  return (
    <section className="bg-white">
      <div className="container-wide grid gap-6 py-6 lg:grid-cols-2 lg:gap-8 lg:py-10">
        {/* Left – red banner */}
        <div className="relative overflow-hidden rounded-2xl bg-brand text-white">
          <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_20%_20%,white_2px,transparent_2px)] [background-size:24px_24px]" />
          <div className="relative grid h-full gap-6 p-8 sm:p-12 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-pill bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                Locally made · Texas
              </p>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Custom <br />
                T-Shirts
              </h1>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/90 md:text-base">
                Premium, soft-touch tees printed to perfection. No minimums, no
                setup fees — just gear you'll be proud to wear.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button href="/listing" variant="ghost">
                  Shop Catalog
                  <ChevronRight size={16} />
                </Button>
                <Link
                  href="#how-to-order"
                  className="text-sm font-semibold underline-offset-4 hover:underline"
                >
                  How it works →
                </Link>
              </div>
            </div>
            <div className="relative hidden h-72 md:block">
              <Image
                src="https://placehold.co/600x600/E51E2A/FFFFFF?text=Custom+Tee&font=poppins"
                alt="Custom printed t-shirt"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right – stacked cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
          <Link
            href="/listing?cat=teams"
            className="group relative h-64 overflow-hidden rounded-2xl bg-ink lg:h-full"
          >
            <Image
              src="https://placehold.co/800x500/2F4F3A/FFFFFF?text=Teams+%26+Schools&font=poppins"
              alt="Custom team apparel"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                Teams & Schools
              </p>
              <p className="mt-1 font-display text-2xl font-bold">
                Build a uniform that wins
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
                Get a quote <ChevronRight size={14} />
              </span>
            </div>
          </Link>
          <Link
            href="/listing?cat=business"
            className="group relative h-64 overflow-hidden rounded-2xl bg-wine lg:h-full"
          >
            <Image
              src="https://placehold.co/800x500/7A1F2C/F2EBDD?text=Business+Branding&font=poppins"
              alt="Business branded apparel"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wine/80 via-wine/30 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                For Business
              </p>
              <p className="mt-1 font-display text-2xl font-bold">
                Branded gear that lasts
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
                Shop business <ChevronRight size={14} />
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Inline quick-search */}
      <div className="container-wide pb-2">
        <form
          role="search"
          className="mx-auto flex max-w-3xl items-center gap-2 rounded-pill border border-line bg-white p-1.5 shadow-card lg:hidden"
        >
          <SearchIcon size={18} className="ml-3 text-ink-muted" />
          <input
            type="search"
            placeholder="Search for custom apparel..."
            className="h-10 flex-1 bg-transparent text-sm outline-none placeholder:text-ink-subtle"
          />
          <button type="submit" className="btn-primary h-10 px-5">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
