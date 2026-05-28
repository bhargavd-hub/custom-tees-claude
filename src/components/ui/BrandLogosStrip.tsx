const BRANDS = [
  { name: "GILDAN", className: "" },
  { name: "bella+canvas", className: "lowercase" },
  { name: "DISTRICT", className: "text-brand" },
  { name: "COMFORT COLORS", className: "" },
  { name: "HANES", className: "" },
  { name: "next level", className: "lowercase" },
  { name: "AMERICAN APPAREL", className: "" },
  { name: "ANVIL", className: "" },
  { name: "PORT & CO.", className: "" },
  { name: "SPORT-TEK", className: "" },
];

export function BrandLogosStrip() {
  return (
    <section className="bg-white px-0 pb-10">
      <div className="rounded-section bg-cream py-16 mx-3 px-12">
        <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
          Quality Apparel Brands We Print On
        </h2>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-12">
          {BRANDS.map((b) => (
            <li
              key={b.name}
              className={`font-display text-lg font-bold uppercase tracking-wider text-ink-muted opacity-70 transition-opacity hover:opacity-100 ${b.className}`}
            >
              {b.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
