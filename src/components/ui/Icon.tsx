import { cn } from "@/lib/cn";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

const base = (size = 20, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: cn("shrink-0", className),
  "aria-hidden": true,
});

export const SearchIcon = ({ size, className, ...rest }: IconProps) => (
  <svg {...base(size, className)} {...rest}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const CartIcon = ({ size, className, ...rest }: IconProps) => (
  <svg {...base(size, className)} {...rest}>
    <path d="M3 4h2l2.4 11.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.5L21 8H6" />
    <circle cx="9" cy="20" r="1.5" />
    <circle cx="17" cy="20" r="1.5" />
  </svg>
);

export const UserIcon = ({ size, className, ...rest }: IconProps) => (
  <svg {...base(size, className)} {...rest}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

export const ChevronRight = ({ size, className, ...rest }: IconProps) => (
  <svg {...base(size, className)} {...rest}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const ChevronDown = ({ size, className, ...rest }: IconProps) => (
  <svg {...base(size, className)} {...rest}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ChevronLeft = ({ size, className, ...rest }: IconProps) => (
  <svg {...base(size, className)} {...rest}>
    <path d="m15 6-6 6 6 6" />
  </svg>
);

export const MenuIcon = ({ size, className, ...rest }: IconProps) => (
  <svg {...base(size, className)} {...rest}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const CloseIcon = ({ size, className, ...rest }: IconProps) => (
  <svg {...base(size, className)} {...rest}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const StarIcon = ({
  size = 16,
  className,
  filled = true,
  ...rest
}: IconProps & { filled?: boolean }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinejoin="round"
    className={cn("shrink-0", className)}
    aria-hidden
    {...rest}
  >
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2Z" />
  </svg>
);

export const PhoneIcon = ({ size, className, ...rest }: IconProps) => (
  <svg {...base(size, className)} {...rest}>
    <path d="M22 16.92V21a1 1 0 0 1-1.1 1 19 19 0 0 1-8.3-3 19 19 0 0 1-6-6A19 19 0 0 1 3.6 4.7 1 1 0 0 1 4.6 3.6h4.1a1 1 0 0 1 1 .76l.6 2.4a1 1 0 0 1-.27 1l-1.7 1.7a16 16 0 0 0 6 6l1.7-1.7a1 1 0 0 1 1-.27l2.4.6a1 1 0 0 1 .76 1Z" />
  </svg>
);

export const TruckIcon = ({ size, className, ...rest }: IconProps) => (
  <svg {...base(size, className)} {...rest}>
    <path d="M3 17V6h11v11" />
    <path d="M14 9h4l3 4v4h-7" />
    <circle cx="7.5" cy="17.5" r="2" />
    <circle cx="17.5" cy="17.5" r="2" />
  </svg>
);

export const HeartIcon = ({ size, className, ...rest }: IconProps) => (
  <svg {...base(size, className)} {...rest}>
    <path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 0 0-7.1 7.1l1.7 1.7L12 21l7-7.1 1.8-1.8a5 5 0 0 0 0-6.5Z" />
  </svg>
);

export const PlusIcon = ({ size, className, ...rest }: IconProps) => (
  <svg {...base(size, className)} {...rest}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const MinusIcon = ({ size, className, ...rest }: IconProps) => (
  <svg {...base(size, className)} {...rest}>
    <path d="M5 12h14" />
  </svg>
);

export const TShirtIcon = ({ size, className, ...rest }: IconProps) => (
  <svg {...base(size, className)} {...rest}>
    <path d="M4 7 8 4l4 2 4-2 4 3-2 4-2-1v10H6V10L4 11 4 7Z" />
  </svg>
);

export const FacebookIcon = ({ size, className, ...rest }: IconProps) => (
  <svg
    width={size ?? 18}
    height={size ?? 18}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    className={className}
    {...rest}
  >
    <path d="M13 22v-8h3l.5-4H13V7.5c0-1.2.3-2 2-2H17V2.2A29 29 0 0 0 14.2 2C11.4 2 10 3.7 10 6.9V10H7v4h3v8h3Z" />
  </svg>
);

export const InstagramIcon = ({ size, className, ...rest }: IconProps) => (
  <svg {...base(size ?? 18, className)} {...rest}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

export const TwitterIcon = ({ size, className, ...rest }: IconProps) => (
  <svg
    width={size ?? 18}
    height={size ?? 18}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    className={className}
    {...rest}
  >
    <path d="M17.5 3h3l-6.6 7.5L22 21h-6.1l-4.8-6.3L5.4 21H2.4l7.1-8.1L2 3h6.2l4.4 5.8L17.5 3Zm-1.1 16h1.7L7.7 5H6L16.4 19Z" />
  </svg>
);

export const YoutubeIcon = ({ size, className, ...rest }: IconProps) => (
  <svg
    width={size ?? 18}
    height={size ?? 18}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    className={className}
    {...rest}
  >
    <path d="M22 8.2A2.6 2.6 0 0 0 20.2 6.4C18.6 6 12 6 12 6s-6.6 0-8.2.4A2.6 2.6 0 0 0 2 8.2 28 28 0 0 0 1.6 12 28 28 0 0 0 2 15.8 2.6 2.6 0 0 0 3.8 17.6C5.4 18 12 18 12 18s6.6 0 8.2-.4A2.6 2.6 0 0 0 22 15.8 28 28 0 0 0 22.4 12 28 28 0 0 0 22 8.2ZM10 15V9l5.2 3L10 15Z" />
  </svg>
);
