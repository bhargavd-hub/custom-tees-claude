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
  UserIcon,
} from "@/components/ui/Icon";

const SUB_NAV = [
  { label: "Our Services", href: "#", hasMenu: true },
  { label: "Shop Apparel", href: "/listing", hasMenu: true },
  { label: "Design Studio", href: "#", hasMenu: true },
  { label: "Pages", href: "#", hasMenu: true },
  { label: "Contact Us", href: "#contact", red: true },
];

function MailIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function QuoteDocIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" aria-hidden>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      {/* Top row */}
      <div className="border-b border-line/60">
        <div className="container-wide flex h-20 items-center gap-4 lg:gap-6">
          <Logo />

          <form
            role="search"
            className="hidden h-12 flex-1 max-w-[630px] items-center overflow-hidden rounded-pill bg-cream lg:flex"
          >
            <button
              type="button"
              className="flex h-full items-center gap-1.5 border-r border-black/10 px-6 text-[15px] font-bold text-ink"
            >
              All Categories
              <ChevronDown size={11} className="text-ink" />
            </button>
            <input
              type="search"
              placeholder="What are you looking for?"
              aria-label="Search products"
              className="h-full flex-1 bg-transparent px-4 text-[15px] font-body outline-none placeholder:text-ink/50"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex h-full w-12 items-center justify-center text-ink hover:text-brand"
            >
              <SearchIcon size={18} />
            </button>
          </form>

          <div className="ml-auto flex items-center gap-3">
            <button
              type="button"
              className="hidden h-10 items-center gap-1.5 rounded-pill px-3 text-base font-medium text-ink hover:bg-cream md:inline-flex"
            >
              <PhoneIcon size={20} className="text-ink-muted" />
              <span>Call Us</span>
            </button>
            <button
              type="button"
              className="hidden h-10 items-center gap-1.5 rounded-pill px-3 text-base font-medium text-ink hover:bg-cream md:inline-flex"
            >
              <span className="text-ink-muted"><MailIcon size={20} /></span>
              <span>Email Us</span>
            </button>
            <span className="hidden h-7 w-px bg-black/10 md:block" />
            <Link
              href="#quote"
              className="hidden h-10 items-center gap-1.5 rounded-pill bg-brand px-4 text-base font-bold text-white hover:bg-brand-600 md:inline-flex"
            >
              <QuoteDocIcon size={18} />
              Request Quote
            </Link>
            <button
              type="button"
              aria-label="Account"
              className="hidden h-[42px] w-[42px] items-center justify-center rounded-full border border-ink-muted/60 text-ink-muted md:inline-flex hover:border-ink hover:text-ink"
            >
              <UserIcon size={20} />
            </button>
            <Link
              href="/cart"
              aria-label="Cart"
              className="hidden h-[42px] w-[42px] items-center justify-center rounded-full border border-ink-muted/60 text-ink-muted md:inline-flex hover:border-ink hover:text-ink"
            >
              <CartIcon size={20} />
            </Link>

            {/* Mobile */}
            <Link
              href="/cart"
              aria-label="Cart"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-cream md:hidden"
            >
              <CartIcon size={22} />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-cream lg:hidden"
            >
              <MenuIcon size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Sub-nav */}
      <div className="hidden border-b border-line/60 lg:block">
        <div className="container-wide flex h-11 items-center">
          <ul className="flex items-center gap-0">
            {SUB_NAV.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={[
                    "inline-flex h-8 items-center gap-1.5 rounded px-4 text-[15px] font-bold transition-colors",
                    link.red ? "text-brand hover:bg-brand/5" : "text-ink hover:bg-black/[0.04]",
                  ].join(" ")}
                >
                  {link.label}
                  {link.hasMenu && (
                    <span className="text-[10px] opacity-60">▾</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="container-wide flex h-20 items-center justify-between border-b border-line">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-cream"
            >
              <CloseIcon size={22} />
            </button>
          </div>
          <div className="container-wide py-6">
            <form
              role="search"
              className="mb-6 flex items-center overflow-hidden rounded-pill bg-cream"
            >
              <input
                type="search"
                placeholder="What are you looking for?"
                className="h-12 flex-1 bg-transparent px-5 text-[15px] outline-none"
              />
              <button
                type="submit"
                aria-label="Search"
                className="flex h-12 w-12 items-center justify-center text-ink"
              >
                <SearchIcon size={18} />
              </button>
            </form>
            <ul className="space-y-1">
              {SUB_NAV.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={[
                      "flex items-center justify-between rounded-lg px-3 py-3 text-base font-bold",
                      link.red ? "text-brand" : "text-ink",
                      "hover:bg-cream",
                    ].join(" ")}
                  >
                    {link.label}
                    <span className="text-ink-subtle">›</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3 border-t border-line pt-6">
              <Link href="tel:+19729003575" className="inline-flex items-center gap-2 text-sm">
                <PhoneIcon size={16} className="text-ink-muted" />
                +1 972-900-3575
              </Link>
              <Link
                href="#quote"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-3 w-full"
              >
                <QuoteDocIcon size={18} />
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
