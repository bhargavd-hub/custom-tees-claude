const ITEMS = [
  {
    icon: "✓",
    title: "Free Shipping",
    body: "Enjoy free standard shipping on all qualifying orders to your door.",
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    body: "24-72 hour printing with rush availability — no rush fees charged.",
  },
  {
    icon: "🎨",
    title: "Free Artwork Review",
    body: "Our design specialists review and enhance your artwork at no cost.",
  },
  {
    icon: "💲",
    title: "No Hidden Fees",
    body: "Zero setup fees, no minimums. Transparent pricing, always.",
  },
];

export function WhyOrderWithUs() {
  return (
    <section className="bg-white px-3 pb-6">
      <div className="relative overflow-hidden rounded-section bg-wine px-6 py-16 md:px-12 md:py-20">
        {/* Decorative tilted square */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-[10%] top-1/2 h-[200px] w-[200px] -translate-y-1/2 rotate-[-30deg] bg-white/[0.05]"
        />

        <div className="relative mx-auto max-w-[800px] text-center">
          <h2 className="font-display text-2xl font-bold leading-tight text-white md:text-3xl lg:text-[32px] lg:leading-10">
            Why Ordering With Us Works Better
          </h2>
          <p className="mt-2 font-body text-lg leading-7 text-[#DBD2D3] md:text-xl">
            Not all print shops are built the same. Request a quick quote now.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {ITEMS.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.06] p-6 text-left"
              >
                <p className="text-[28px] leading-none">{item.icon}</p>
                <h3 className="mt-3 font-display text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 font-body text-sm leading-snug text-[#DBD2D3]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <button type="button" className="btn-white mt-12">
            Quick Quote
          </button>
        </div>
      </div>
    </section>
  );
}
