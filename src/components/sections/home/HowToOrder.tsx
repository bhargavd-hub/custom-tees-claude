const QUOTE_TAGS = ["Clear Pricing", "Bulk Orders", "Print Advice", "Proof Approval"];
const DESIGN_TAGS = ["Live Preview", "Upload Artwork", "Add Text", "Templates"];

export function HowToOrder() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-wide">
        <p className="text-center font-body text-base font-bold text-ink md:text-lg">
          Easy Ordering
        </p>
        <h2 className="mt-3 text-center font-display text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-[40px] lg:leading-[48px]">
          How to Order - Pick an Option
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* Request Quote — dark wine */}
          <article className="relative flex min-h-[448px] flex-col overflow-hidden rounded-card bg-wine p-6 text-white">
            <div className="relative flex-1 pr-0 sm:pr-[300px]">
              <h3 className="font-display text-xl font-bold leading-[30px] text-white">
                Request Quote
              </h3>
              <p className="mt-2 font-body text-base leading-6 text-white">
                Fill out the form with your order details, and we will send a quote.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {QUOTE_TAGS.map((t) => (
                  <li
                    key={t}
                    className="rounded-pill border border-white/30 bg-white/15 px-3 py-1 text-[13px] text-white"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            {/* Visual placeholder */}
            <div className="absolute right-6 top-6 hidden h-[calc(100%-3rem)] w-[280px] items-center justify-center rounded-[10px] bg-white/[0.08] p-4 text-center font-mono text-xs text-white/40 sm:flex">
              quote form
              <br />
              illustration
            </div>
            <button
              type="button"
              className="mt-10 inline-flex h-12 w-fit items-center rounded-pill bg-white px-8 font-display text-base font-bold text-ink hover:bg-cream"
            >
              Get A Quote
            </button>
          </article>

          {/* Design Online — light cream */}
          <article className="relative flex min-h-[448px] flex-col overflow-hidden rounded-card border border-[#EEEEEE] bg-cream p-6">
            <div className="relative flex-1 pr-0 sm:pr-[300px]">
              <h3 className="font-display text-xl font-bold leading-[30px] text-ink">
                Design Online
              </h3>
              <p className="mt-2 font-body text-base leading-6 text-ink-muted">
                Create your design, choose products, and then place your order online.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {DESIGN_TAGS.map((t) => (
                  <li
                    key={t}
                    className="rounded-pill border border-line bg-white px-3 py-1 text-[13px] text-ink"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute right-6 top-6 hidden h-[calc(100%-3rem)] w-[280px] items-center justify-center rounded-[10px] bg-black/[0.05] p-4 text-center font-mono text-xs text-black/30 sm:flex">
              design tool
              <br />
              illustration
            </div>
            <button
              type="button"
              className="mt-10 inline-flex h-12 w-fit items-center rounded-pill bg-ink px-8 font-display text-base font-bold text-white hover:bg-ink-soft"
            >
              Start Designing
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
