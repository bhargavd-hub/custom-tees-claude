import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "@/components/ui/Icon";
import { IMG } from "@/lib/images";

const QUOTE_TAGS = ["One Service", "Bulk Orders", "Promotions", "Free Designs"];
const DESIGN_TAGS = ["Live Preview", "Upload Artwork", "Add Text", "Templates"];

export function HowToOrder() {
  return (
    <section id="how-to-order" className="bg-white py-16 md:py-20">
      <div className="container-wide">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Easy Ordering
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl lg:text-[2.5rem]">
            How to Order — Pick an Option
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1.1fr_1fr]">
          {/* Request Quote */}
          <article className="relative flex flex-col overflow-hidden rounded-2xl bg-wine p-7 text-cream md:p-9">
            <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_85%_15%,white_2px,transparent_2px)] [background-size:24px_24px]" />
            <div className="relative">
              <h3 className="font-display text-2xl font-bold md:text-3xl">
                Request Quote
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/80">
                Fill out the form with your order details, and we will send a quote.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {QUOTE_TAGS.map((t) => (
                  <li
                    key={t}
                    className="rounded-pill border border-cream/30 bg-white/5 px-3 py-1 text-xs font-medium"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                href="#quote"
                className="mt-8 inline-flex h-11 items-center gap-2 rounded-pill bg-ink px-6 text-xs font-semibold uppercase tracking-wide text-white hover:bg-ink/85"
              >
                Get A Quote
                <ChevronRight size={14} />
              </Link>
            </div>
          </article>

          {/* Design Online */}
          <article className="flex flex-col rounded-2xl border border-line bg-cream-100 p-7 md:p-9">
            <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Design Online
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
              Create your design, choose products, and then place your order online.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {DESIGN_TAGS.map((t) => (
                <li
                  key={t}
                  className="rounded-pill border border-line bg-white px-3 py-1 text-xs font-medium text-ink"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="relative mt-6 h-32 overflow-hidden rounded-xl border border-line bg-white">
              <Image
                src={IMG.howToDesignMock}
                alt="Design studio interface"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
            <Link
              href="#"
              className="mt-6 inline-flex h-11 w-fit items-center gap-2 rounded-pill bg-ink px-6 text-xs font-semibold uppercase tracking-wide text-white hover:bg-ink/85"
            >
              Start Designing
              <ChevronRight size={14} />
            </Link>
          </article>

          {/* Decorative image card */}
          <article className="relative h-64 overflow-hidden rounded-2xl bg-ink lg:h-auto">
            <Image
              src={IMG.howToImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 26vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          </article>
        </div>
      </div>
    </section>
  );
}
