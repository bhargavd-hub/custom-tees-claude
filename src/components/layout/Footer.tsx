import Link from "next/link";
import { Logo } from "./Logo";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/ui/Icon";

const COLUMNS = [
  {
    title: "Company",
    links: ["About Custom Tees", "Our Story", "Portfolio", "Blog / News"],
  },
  {
    title: "Services",
    links: [
      "Design Studio",
      "Screen Printing",
      "Digital Printing (DTG)",
      "Direct to Film (DFT) Printing",
      "Vinyl Printing",
      "Embroidery",
    ],
  },
  {
    title: "Special Niches",
    links: [
      "Family Reunion",
      "Graduation",
      "Birthday Party",
      "VBS",
      "Homecoming",
      "In Loving Memory",
      "Bachelorette Party",
      "Race / Run / Walk",
      "Baby Shower",
      "Family Vacation",
    ],
  },
  {
    title: "Cities Served",
    links: [
      "Dallas, TX",
      "Carrollton, TX",
      "Lewisville, TX",
      "Plano, TX",
      "DFW, TX",
      "Arlington, TX",
      "Farmers Branch, TX",
      "Grand Prairie, TX",
      "Grapevine, TX",
      "Irving, TX",
    ],
  },
];

const PAYMENTS = ["VISA", "MC", "AMEX", "PAYPAL", "DINERS", "DISCOVER"];

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-white px-4 pb-8 pt-16 md:px-12">
      <div className="container-wide">
        {/* Top: brand + 4 cols */}
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-[444px] md:shrink-0">
            <Logo />
            <h3 className="mt-10 font-display text-2xl font-bold leading-tight text-ink md:text-[28px] md:leading-[38px]">
              Join Our Newsletter
            </h3>
            <form className="mt-3 flex max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-12 w-full rounded-pill bg-[#EDEDED] px-5 font-body text-[15px] text-ink outline-none placeholder:text-ink/50"
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded-pill bg-ink px-8 font-display text-[15px] font-bold text-white hover:bg-ink-soft"
              >
                Sign up
              </button>
            </form>
            <p className="mt-2.5 font-body text-sm leading-relaxed text-ink-muted">
              By subscribing you agree to the{" "}
              <Link href="#" className="underline">Terms of Services</Link> and{" "}
              <Link href="#" className="underline">Privacy Policy.</Link>
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-4">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-labelledby={`footer-${col.title}`}>
                <h4
                  id={`footer-${col.title}`}
                  className="pb-3 font-display text-lg font-bold leading-7 text-ink"
                >
                  {col.title}
                </h4>
                <ul className="flex flex-col">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link
                        href="#"
                        className="block font-body text-[15px] leading-8 text-[#4D4D4D] hover:text-ink"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-5 border-t border-line pt-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 font-body text-sm text-ink"
              >
                <span className="text-lg">🇺🇸</span>
                <span>United States (USD $)</span>
                <span className="text-[10px]">▲</span>
              </button>

              <ul className="flex flex-wrap items-center gap-2">
                {PAYMENTS.map((p) => (
                  <li
                    key={p}
                    className="flex h-6 items-center rounded border border-line bg-white px-2 font-display text-[10px] font-bold tracking-wider text-[#333]"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="flex items-center gap-3">
              {[
                { Icon: FacebookIcon, title: "Facebook" },
                { Icon: TwitterIcon, title: "X / Twitter" },
                { Icon: InstagramIcon, title: "Instagram" },
                { Icon: TikTokIcon, title: "TikTok" },
                { Icon: YoutubeIcon, title: "YouTube" },
              ].map(({ Icon, title }) => (
                <li key={title}>
                  <Link
                    href="#"
                    aria-label={title}
                    title={title}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CCCCCC] bg-white text-ink hover:border-ink hover:bg-ink hover:text-white"
                  >
                    <Icon size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
            <p className="font-body text-[15px] text-ink">
              © 2026 <Link href="#" className="text-ink no-underline">Customtees DFW</Link>. <Link href="#" className="text-ink no-underline">Powered by Custom Tees</Link>
            </p>
            <ul className="flex items-center gap-6">
              <li><Link href="#" className="font-display text-[15px] text-ink hover:underline">Terms of Service</Link></li>
              <li><Link href="#" className="font-display text-[15px] text-ink hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
