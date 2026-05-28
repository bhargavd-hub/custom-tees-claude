import { Logo } from "@/components/layout/Logo";

export function NewsletterCta() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container-wide">
        <div className="grid gap-8 rounded-2xl bg-cream px-6 py-10 md:grid-cols-[auto_1fr] md:items-center md:gap-12 md:px-12 lg:py-12">
          <div className="flex items-center gap-4 md:flex-col md:items-start">
            <Logo />
            <p className="text-sm text-ink-muted md:max-w-xs">
              Locally made custom apparel since 2011.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Join Our Newsletter
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              Get exclusive deals, restock alerts and design inspiration in your inbox.
            </p>
            <form className="mt-5 flex flex-col gap-3 sm:flex-row">
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
              <button type="submit" className="btn-primary h-12 px-7">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
