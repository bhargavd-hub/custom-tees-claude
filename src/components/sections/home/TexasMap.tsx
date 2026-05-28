import Link from "next/link";

function TexasContactIcon({ children }: { children: React.ReactNode }) {
  return <span className="w-6 shrink-0 text-white">{children}</span>;
}

export function TexasMap() {
  return (
    <section className="bg-white py-6">
      <div className="relative overflow-hidden rounded-section bg-wine p-8 md:p-12">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          {/* US map illustration */}
          <div className="relative h-[300px] w-full max-w-[660px] md:h-[486px] md:flex-shrink-0">
            <svg viewBox="0 0 660 404" className="absolute inset-0 h-full w-full" aria-hidden>
              <defs>
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="34"
                  height="34"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="6" cy="6" r="6" fill="#592329" opacity="0.7" />
                </pattern>
              </defs>
              <rect
                x="40"
                y="20"
                width="580"
                height="320"
                fill="url(#dots)"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse 70% 60% at 50% 50%, black 60%, transparent 100%)",
                  maskImage:
                    "radial-gradient(ellipse 70% 60% at 50% 50%, black 60%, transparent 100%)",
                }}
              />
            </svg>

            {/* Texas highlighted */}
            <svg
              viewBox="0 0 170 155"
              className="absolute h-[150px] w-[160px]"
              style={{ left: "32%", top: "55%" }}
              aria-hidden
            >
              <path
                d="M 10 8 L 108 8 L 112 10 L 112 30 L 162 30 L 162 70 L 148 90 L 132 110 L 108 132 L 84 148 L 62 150 L 44 140 L 28 120 L 14 96 L 6 72 L 4 44 Z"
                fill="#592329"
                stroke="rgba(220,200,200,0.8)"
                strokeWidth="1.5"
              />
            </svg>

            {/* TEXAS pin */}
            <div
              className="absolute flex flex-col items-center"
              style={{ left: "33%", top: "48%" }}
            >
              <div
                className="rounded bg-white px-3.5 py-1.5 font-display text-base font-medium tracking-widest text-brand"
                style={{ boxShadow: "2px 2px 2px rgba(235,33,38,0.15)" }}
              >
                TEXAS
              </div>
              <div
                className="h-0 w-0"
                style={{
                  borderLeft: "8px solid transparent",
                  borderRight: "8px solid transparent",
                  borderTop: "10px solid #fff",
                }}
              />
            </div>

            {/* Location dot */}
            <div
              className="absolute h-2 w-2 rounded-full bg-white"
              style={{ left: "44%", top: "67%", boxShadow: "0 0 0 4px #592329" }}
            />

            {/* Circular badge */}
            <div className="absolute -right-2 top-8 hidden h-[116px] w-[116px] items-center justify-center overflow-hidden rounded-full border border-ink-muted bg-white md:flex">
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ink">
                Custom Tees
              </span>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 lg:pl-20">
            <h2 className="font-display text-3xl font-bold leading-tight text-cream md:text-4xl lg:text-[40px] lg:leading-[48px]">
              Proudly Texas
              <br />
              Locally made since 2011
            </h2>
            <p className="mt-2 font-body text-base leading-7 text-white">
              Get guided, one-on-one assistance from design to delivery.
            </p>

            <ul className="mt-10 flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <TexasContactIcon>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </TexasContactIcon>
                <span className="font-display text-lg leading-7 tracking-wide text-white">
                  +1 972-900-3575
                </span>
              </li>
              <li className="flex items-center gap-3">
                <TexasContactIcon>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </TexasContactIcon>
                <span className="font-display text-lg leading-7 tracking-wide text-white">
                  info@customteesdfw.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TexasContactIcon>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 2a8 8 0 00-8 8c0 5.25 8 13 8 13s8-7.75 8-13a8 8 0 00-8-8z" />
                  </svg>
                </TexasContactIcon>
                <span className="font-display text-lg leading-7 tracking-wide text-white">
                  1225 E. Crosby Rd., Suite A1, Carrollton, TX 75006
                </span>
              </li>
            </ul>

            <Link
              href="#quote"
              className="mt-10 inline-flex h-12 items-center rounded-pill bg-white px-8 font-display text-base font-bold text-wine hover:bg-cream"
            >
              Request A Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
