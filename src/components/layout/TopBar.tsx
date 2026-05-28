import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/ui/Icon";

export function TopBar() {
  return (
    <div className="bg-ink text-white">
      <div className="container-wide flex h-9 items-center justify-between text-xs">
        <p className="hidden sm:block">
          Free shipping on bulk orders ·{" "}
          <span className="text-white/70">No minimums, no setup fees.</span>
        </p>
        <p className="sm:hidden text-white/80">Locally made in Texas since 2011</p>
        <div className="flex items-center gap-4">
          <Link
            href="tel:+18005551234"
            className="hidden items-center gap-1.5 text-white/80 hover:text-white sm:inline-flex"
          >
            <PhoneIcon size={14} />
            <span>(800) 555-1234</span>
          </Link>
          <div className="flex items-center gap-3 text-white/80">
            <Link href="#" aria-label="Facebook" className="hover:text-white">
              <FacebookIcon size={14} />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-white">
              <InstagramIcon size={14} />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-white">
              <TwitterIcon size={14} />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-white">
              <YoutubeIcon size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
