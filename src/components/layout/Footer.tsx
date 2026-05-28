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
    links: [
      "About Custom Tees",
      "Our Story",
      "Portfolio",
      "Blog / News",
    ],
  },
  {
    title: "Services",
    links: [
      "Design Studio",
      "Screen Printing",
      "Digital Printing (DTG)",
      "Direct to Film (DTF)",
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
      "Job",
      "Holiday / Christmas",
      "Homecoming",
      "Family Vacation",
      "Church Fundraising",
      "Boys / Run / Walk",
      "Bachelorette Party",
    ],
  },
  {
    title: "Cities Served",
    links: [
      "Fort Worth, TX",
      "Dallas, TX",
      "Carrollton, TX",
      "Plano, TX",
      "Frisco, TX",
      "Garland, TX",
      "Farmers Branch, TX",
      "Coppell, TX",
      "The Colony, TX",
      "Grand Prairie, TX",
      "Richardson, TX",
      "Irving, TX",
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-white">
      {/* Newsletter + columns */}
      <div className="border-t border-line">
        <div className="container-wide grid gap-12 py-14 lg:grid-cols-[1fr_2.2fr]">
          <div>
            <Logo />
            <h2 className="mt-6 font-display text-2xl font-bold text-ink md:text-3xl">
              Join Our Newsletter
            </h2>
            <form className="mt-5 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Enter your email address"
                className="h-12 flex-1 rounded-pill border border-line bg-white px-5 text-sm outline-none placeholder:text-ink-subtle focus:border-brand"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-pill bg-ink px-6 text-sm font-semibold uppercase tracking-wide text-white hover:bg-ink/85"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-ink-subtle">
              By submitting your email, you agree to our{" "}
              <Link href="#" className="underline">Terms of Service</Link> and{" "}
              <Link href="#" className="underline">Privacy Policy</Link>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-labelledby={`footer-${col.title}`}>
                <h3
                  id={`footer-${col.title}`}
                  className="font-display text-sm font-semibold uppercase tracking-wider text-ink"
                >
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link
                        href="#"
                        className="text-ink-muted transition-colors hover:text-brand"
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
      </div>

      {/* Bottom strip */}
      <div className="border-t border-line bg-white">
        <div className="container-wide flex flex-col items-center justify-between gap-4 py-5 text-xs text-ink-muted md:flex-row">
          <div className="flex items-center gap-4">
            <label className="flex h-9 items-center gap-2 rounded-pill border border-line bg-white px-3 text-sm text-ink">
              <span>🇺🇸</span>
              <span>United States (US) $</span>
            </label>
          </div>
          <p>© {new Date().getFullYear()} Custom Tees DFW · Powered by Custom Tees</p>
          <div className="flex items-center gap-5">
            <ul className="flex items-center gap-4 text-xs">
              <li><Link href="#" className="hover:text-brand">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-brand">Privacy Policy</Link></li>
            </ul>
            <ul className="flex items-center gap-2 text-ink">
              {[FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon].map((I, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    aria-label="Social link"
                    className="flex h-8 w-8 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-surface hover:text-brand"
                  >
                    <I size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
