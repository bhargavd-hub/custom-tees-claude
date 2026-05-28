"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import {
  CartIcon,
  ChevronDown,
  CloseIcon,
  HeartIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "@/components/ui/Icon";

const NAV_LINKS = [
  { label: "T-Shirts", href: "/listing" },
  { label: "Polos", href: "/listing?cat=polos" },
  { label: "Sweatshirts", href: "/listing?cat=sweatshirts" },
  { label: "Outerwear", href: "/listing?cat=outerwear" },
  { label: "Accessories", href: "/listing?cat=accessories" },
  { label: "Headwear", href: "/listing?cat=headwear" },
  { label: "Bags", href: "/listing?cat=bags" },
  { label: "Sale", href: "/listing?sale=true" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-white">
      <div className="container-wide flex h-20 items-center gap-4 lg:gap-8">
        <Logo />

        <form
          role="search"
          className="hidden flex-1 max-w-2xl items-center overflow-hidden rounded-pill border border-line bg-white pl-1 lg:flex"
        >
          <div className="flex items-center gap-1 border-r border-line px-4 text-sm text-ink">
            <span>All Categories</span>
            <ChevronDown size={14} className="text-ink-muted" />
          </div>
          <input
            type="search"
            placeholder="Search for custom apparel..."
            aria-label="Search products"
            className="h-12 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-ink-subtle"
          />
          <button
            type="submit"
            className="m-1 flex h-10 items-center gap-2 rounded-pill bg-brand px-5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-600"
          >
            <SearchIcon size={16} />
            <span>Search</span>
          </button>
        </form>

        <div className="ml-auto flex items-center gap-1 sm:gap-3">
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-surface lg:hidden"
          >
            <SearchIcon size={20} />
          </button>
          <Link
            href="#"
            aria-label="Account"
            className="hidden h-10 items-center gap-2 rounded-full px-3 text-sm font-medium text-ink hover:bg-surface md:inline-flex"
          >
            <UserIcon size={20} />
            <span className="hidden xl:inline">Sign in</span>
          </Link>
          <Link
            href="#"
            aria-label="Wishlist"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-surface md:inline-flex"
          >
            <HeartIcon size={20} />
          </Link>
          <Link
            href="/cart"
            aria-label="Cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-surface"
          >
            <CartIcon size={22} />
            <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-brand text-[11px] font-bold text-white">
              3
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-surface lg:hidden"
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </div>

      <nav className="hidden border-t border-line lg:block">
        <div className="container-wide flex h-12 items-center justify-between">
          <ul className="flex items-center gap-8 text-sm font-medium text-ink">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="relative py-1 transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/listing"
            className="text-xs font-semibold uppercase tracking-wider text-brand hover:underline"
          >
            Browse Full Catalog →
          </Link>
        </div>
      </nav>

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
              {NAV_LINKS.map((link) => (
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
          </div>
        </div>
      )}
    </header>
  );
}
