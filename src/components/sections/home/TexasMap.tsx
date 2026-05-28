export function TexasMap() {
  return (
    <section className="relative overflow-hidden bg-cream-100 py-16 md:py-20">
      <div className="container-wide grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Made right here
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
            Proudly Texan, <br />
            Locally made <span className="text-brand">since 2011</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Every piece of apparel that leaves our shop is printed, packed and
            shipped from the Lone Star State. We're proud to be your local
            print partner — visit our studio anytime.
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-6">
            <div>
              <dt className="text-xs uppercase tracking-wider text-ink-subtle">
                Founded
              </dt>
              <dd className="mt-1 font-display text-3xl font-bold text-brand">
                2011
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-ink-subtle">
                Orders
              </dt>
              <dd className="mt-1 font-display text-3xl font-bold text-brand">
                250k+
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-ink-subtle">
                5-star
              </dt>
              <dd className="mt-1 font-display text-3xl font-bold text-brand">
                12k+
              </dd>
            </div>
          </dl>
        </div>
        <div className="relative mx-auto flex w-full max-w-lg items-center justify-center">
          <svg
            viewBox="0 0 400 400"
            className="h-auto w-full text-brand/15"
            aria-hidden
          >
            <path
              fill="currentColor"
              stroke="#7A1F2C"
              strokeWidth="2"
              d="M70 110 L120 90 L180 100 L210 80 L240 90 L260 70 L300 90 L320 130 L330 160 L335 200 L320 220 L300 240 L290 270 L270 290 L260 310 L240 330 L210 320 L185 340 L160 330 L140 300 L120 270 L100 240 L90 210 L70 190 L60 160 L70 130 Z"
            />
            <circle cx="180" cy="200" r="8" fill="#E51E2A" />
            <circle cx="180" cy="200" r="16" fill="#E51E2A" opacity="0.25" />
            <text
              x="180"
              y="245"
              textAnchor="middle"
              className="fill-ink font-display"
              fontSize="14"
              fontWeight="700"
            >
              Texas
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
