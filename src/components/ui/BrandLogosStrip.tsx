const DEFAULT_BRANDS = [
  "Gildan",
  "Bella+Canvas",
  "Next Level",
  "Hanes",
  "Champion",
  "Carhartt",
  "American Apparel",
];

export function BrandLogosStrip({ brands = DEFAULT_BRANDS }: { brands?: string[] }) {
  return (
    <div className="bg-ink py-10 text-white">
      <div className="container-wide">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
          Quality Apparel Brands We Print On
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-white/80">
          {brands.map((b) => (
            <li
              key={b}
              className="font-display text-lg font-bold uppercase tracking-wider opacity-80 transition-opacity hover:opacity-100"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
