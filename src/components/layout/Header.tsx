"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import {
  CartIcon,
  ChevronDown,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
  SearchIcon,
} from "@/components/ui/Icon";

const PRIMARY_NAV = [
  { label: "Who we are", href: "#" },
  { label: "Our Services", href: "#" },
  { label: "Shop Apparel", href: "/listing", hasMenu: true },
  { label: "Design Studio", href: "#" },
  { label: "Pages", href: "#", hasMenu: true },
  { label: "Rush Orders", href: "#" },
];

const SEARCH_CATEGORIES = [
  "All Categories",
  "T-Shirts",
  "Polos",
  "Sweatshirts",
  "Hoodies",
  "Hats",
  "Bottoms",
];

function MailIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      {/* Top row: logo + search + actions */}
      <div className="border-b border-line">
        <div className="container-wide flex h-20 items-center gap-4 lg:gap-6">
          <Logo />

          <form
            role="search"
            className="hidden flex-1 items-center overflow-hidden rounded-pill border border-line bg-white pl-1 lg:flex"
          >
            <div className="flex h-12 items-center gap-1.5 border-r border-line pl-4 pr-3 text-sm text-ink">
              <select
                aria-label="Search category"
                className="cursor-pointer appearance-none bg-transparent pr-1 text-sm outline-none"
                defaultValue="All Categories"
              >
                {SEARCH_CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <ChevronDown size={14} className="text-ink-muted" />
            </div>
            <input
              type="search"
              placeholder="What are you looking for today?"
              aria-label="Search products"
              className="h-12 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-ink-subtle"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex h-12 w-12 items-center justify-center text-ink hover:text-brand"
            >
              <SearchIcon size={18} />
            </button>
          </form>

          <div className="ml-auto flex items-center gap-2 sm:gap-4 lg:gap-5">
            <Link
              href="tel:+19729003573"
              className="hidden items-center gap-2 text-sm font-medium text-ink hover:text-brand md:inline-flex"
            >
              <PhoneIcon size={18} className="text-brand" />
              <span>Call Us</span>
            </Link>
            <Link
              href="mailto:info@customtees-dfw@gmail.com"
              className="hidden items-center gap-2 text-sm font-medium text-ink hover:text-brand md:inline-flex"
            >
              <span className="text-brand">
                <MailIcon size={18} />
              </span>
              <span>Email Us</span>
            </Link>
            <Link
              href="#quote"
              className="hidden h-11 items-center gap-2 rounded-pill bg-brand px-5 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-600 md:inline-flex"
            >
              Request Quote
            </Link>
            <Link
              href="/cart"
              aria-label="Cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-surface md:hidden"
            >
              <CartIcon size={22} />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-surface lg:hidden"
            >
              <MenuIcon size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom row: nav + Contact Us */}
      <nav className="hidden border-b border-line lg:block">
        <div className="container-wide flex h-12 items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              type="button"
              aria-label="Browse all categories"
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink hover:bg-surface"
            >
              <MenuIcon size={18} />
            </button>
            <ul className="flex items-center gap-7 text-sm font-medium text-ink">
              {PRIMARY_NAV.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 py-1 transition-colors hover:text-brand"
                  >
                    {link.label}
                    {link.hasMenu && (
                      <ChevronDown size={12} className="text-ink-muted" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="#contact"
            className="inline-flex h-9 items-center gap-2 rounded-pill bg-brand px-5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-brand-600"
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="container-wide flex h-20 items-center justify-between border-b border-line">
            <Logo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-surface"
            >
              <CloseIcon size={22} />
            </button>
          </div>
          <div className="container-wide py-6">
            <form
              role="search"
              className="mb-6 flex items-center overflow-hidden rounded-pill border border-line"
            >
              <input
                type="search"
                placeholder="Search products..."
                className="h-12 flex-1 bg-transparent px-4 text-sm outline-none"
              />
              <button
                type="submit"
                className="m-1 flex h-10 items-center justify-center rounded-pill bg-brand px-4 text-white"
              >
                <SearchIcon size={18} />
              </button>
            </form>
            <ul className="space-y-1">
              {PRIMARY_NAV.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-surface"
                  >
                    {link.label}
                    <span className="text-ink-subtle">›</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
              <Link href="tel:+19729003573" className="inline-flex items-center gap-2 text-sm text-ink">
                <PhoneIcon size={16} className="text-brand" />
                Call Us · (972) 900-3573
              </Link>
              <Link href="mailto:info@customtees-dfw@gmail.com" className="inline-flex items-center gap-2 text-sm text-ink">
                <span className="text-brand"><MailIcon size={16} /></span>
                Email Us
              </Link>
              <Link
                href="#quote"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex h-11 items-center justify-center rounded-pill bg-brand px-5 text-sm font-semibold uppercase tracking-wide text-white"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
