import Link from "next/link";
import { ChevronRight, PhoneIcon } from "@/components/ui/Icon";

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s-7-7.5-7-13a7 7 0 1 1 14 0c0 5.5-7 13-7 13Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function TexasMap() {
  return (
    <section className="relative isolate overflow-hidden bg-wine py-16 text-cream md:py-20">
      <div className="container-wide grid gap-10 md:grid-cols-2 md:items-center">
        <div className="relative mx-auto w-full max-w-md">
          <svg
            viewBox="0 0 400 400"
            className="h-auto w-full text-cream/10"
            aria-hidden
          >
            <path
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
              d="M70 110 L120 90 L180 100 L210 80 L240 90 L260 70 L300 90 L320 130 L330 160 L335 200 L320 220 L300 240 L290 270 L270 290 L260 310 L240 330 L210 320 L185 340 L160 330 L140 300 L120 270 L100 240 L90 210 L70 190 L60 160 L70 130 Z"
            />
            <circle cx="180" cy="200" r="10" fill="#E51E2A" />
            <circle cx="180" cy="200" r="20" fill="#E51E2A" opacity="0.3" />
            <text
              x="180"
              y="232"
              textAnchor="middle"
              className="fill-cream font-display"
              fontSize="14"
              fontWeight="700"
              letterSpacing="2"
            >
              TEXAS
            </text>
          </svg>
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl lg:text-[2.5rem]">
            Proudly Texas <br />
            <span className="text-cream/85">Locally made since 2011</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/80 md:text-base">
            Get printed, packed and shipped from our Carrollton studio. We're
            proud to be your local print partner — visit our shop anytime.
          </p>

          <ul className="mt-7 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <span className="text-brand"><PhoneIcon size={16} /></span>
              <Link href="tel:+19729003573" className="hover:text-white">
                +1 972-900-3573
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-brand"><MailIcon /></span>
              <Link href="mailto:info@customtees-dfw@gmail.com" className="hover:text-white">
                info@customtees-dfw@gmail.com
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-brand"><PinIcon /></span>
              <span>1225 E. Crosby Rd, Suite A1 Carrollton, TX 75006</span>
            </li>
          </ul>

          <Link
            href="#quote"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-pill bg-ink px-6 text-xs font-semibold uppercase tracking-wide text-white hover:bg-ink/85"
          >
            Get A Quote
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
