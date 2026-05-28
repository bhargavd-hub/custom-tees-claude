import Link from "next/link";

export function StickyConnect() {
  return (
    <Link
      href="#contact"
      className="fixed right-0 top-1/2 z-[60] hidden h-auto items-center gap-2 rounded-t-md bg-brand px-4 py-2 text-sm font-bold text-white shadow-card-deep hover:bg-brand-600 lg:flex"
      style={{
        transform: "translateY(-50%) rotate(-90deg)",
        transformOrigin: "100% 50%",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
      Let&apos;s connect
    </Link>
  );
}
