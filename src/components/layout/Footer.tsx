import Link from "next/link";
import { NewsletterCta } from "@/components/sections/NewsletterCta";
import { Logo } from "./Logo";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/ui/Icon";

const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Our Story", href: "#" },
      { label: "Locations", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Screen Printing", href: "#" },
      { label: "Embroidery", href: "#" },
      { label: "Heat Transfer", href: "#" },
      { label: "DTG Printing", href: "#" },
      { label: "Promo Products", href: "#" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Order Tracking", href: "#" },
      { label: "Shipping Info", href: "#" },
      { label: "Returns & Exchanges", href: "#" },
      { label: "Size Guide", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "T-Shirts", href: "/listing" },
      { label: "Polos", href: "/listing?cat=polos" },
      { label: "Sweatshirts", href: "/listing?cat=sweatshirts" },
      { label: "Outerwear", href: "/listing?cat=outerwear" },
      { label: "Headwear", href: "/listing?cat=headwear" },
      { label: "Accessories", href: "/listing?cat=accessories" },
    ],
  },
];

const PAYMENT_BADGES = ["VISA", "MC", "AMEX", "DISC", "PAYPAL", "APPLE"];

export function Footer() {
  return (
    <>
      <NewsletterCta />
      <footer className="bg-ink text-white/80">
        <div className="container-wide grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Premium custom apparel printed and shipped from Texas. No minimums,
              no setup fees, just great gear with a little extra love.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon].map((I, idx) => (
                <Link
                  key={idx}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
                >
                  <I size={16} />
                </Link>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} aria-labelledby={`footer-${col.title}`}>
              <h3
                id={`footer-${col.title}`}
                className="font-display text-sm font-semibold uppercase tracking-wider text-white"
              >
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-white/65 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-white/10">
          <div className="container-wide flex flex-col items-center justify-between gap-4 py-5 text-xs text-white/55 md:flex-row">
            <p>© {new Date().getFullYear()} Custom Tees. All rights reserved.</p>
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white">Accessibility</Link></li>
              <li><Link href="#" className="hover:text-white">Sitemap</Link></li>
            </ul>
            <ul className="flex items-center gap-2">
              {PAYMENT_BADGES.map((b) => (
                <li
                  key={b}
                  className="rounded bg-white/10 px-2 py-1 text-[10px] font-bold tracking-wide text-white/80"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
