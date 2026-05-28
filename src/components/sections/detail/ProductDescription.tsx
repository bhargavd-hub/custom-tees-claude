const FEATURES = [
  "5.3 oz/yd² (180 gsm) ringspun cotton",
  "Pre-shrunk for fit retention after wash",
  "Taped neck and shoulders for durability",
  "Double-needle sleeves and bottom hem",
  "Tear-away label (size 2XL+ has heat-pressed tag)",
  "Available in 60+ colors and heathers",
  "Unisex sizing — true to size on most builds",
  "Made in Honduras, printed locally in Texas",
];

const SIZING = [
  { size: "XS", chest: "16", length: "27" },
  { size: "S", chest: "18", length: "28" },
  { size: "M", chest: "20", length: "29" },
  { size: "L", chest: "22", length: "30" },
  { size: "XL", chest: "24", length: "31" },
  { size: "2XL", chest: "26", length: "32" },
  { size: "3XL", chest: "28", length: "33" },
];

export function ProductDescription() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-wide grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            Description
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
            The classic Heavy Cotton™ tee is a workhorse for screen printers and
            customers alike. Built on durable mid-weight cotton with a tailored
            unisex fit, it holds its shape wash after wash and provides a smooth
            canvas for vibrant prints.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-ink">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            Sizing Chart
          </h2>
          <p className="mt-2 text-xs text-ink-muted">
            All measurements in inches. Allow 1" tolerance.
          </p>
          <div className="mt-4 overflow-hidden rounded-card border border-line">
            <table className="w-full text-sm">
              <thead className="bg-surface text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-ink">Size</th>
                  <th className="px-4 py-3 font-semibold text-ink">Chest</th>
                  <th className="px-4 py-3 font-semibold text-ink">Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-white">
                {SIZING.map((row) => (
                  <tr key={row.size}>
                    <td className="px-4 py-3 font-semibold text-ink">{row.size}</td>
                    <td className="px-4 py-3 text-ink-muted">{row.chest}"</td>
                    <td className="px-4 py-3 text-ink-muted">{row.length}"</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
