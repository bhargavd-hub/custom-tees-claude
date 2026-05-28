const DEFAULT_BRANDS = [
  { name: "GILDAN", className: "tracking-tight" },
  { name: "BELLA + CANVAS", className: "tracking-wider" },
  { name: "Tultex", className: "italic text-brand" },
  { name: "DISTRICT", className: "tracking-[0.18em]" },
  { name: "Comfort Colors", className: "italic" },
  { name: "ascolour", className: "lowercase tracking-tight" },
  { name: "next level apparel", className: "lowercase tracking-tight" },
];

export function BrandLogosStrip() {
  return (
    <section className="bg-white py-12 md:py-14">
      <div className="container-wide">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-ink">
          Quality Apparel Brands We Print On
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-ink/85 md:gap-x-14">
          {DEFAULT_BRANDS.map((b) => (
            <li
              key={b.name}
              className={`font-display text-lg font-bold transition-opacity md:text-xl ${b.className ?? ""}`}
            >
              {b.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
