import type { Metadata, Viewport } from "next";
import { Urbanist, Open_Sans } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyConnect } from "@/components/layout/StickyConnect";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://customtees.example.com"),
  title: {
    default: "Custom Tees DFW — Custom T-Shirts For Groups, Events & Businesses",
    template: "%s | Custom Tees DFW",
  },
  description:
    "Premium custom t-shirts, polos, sweatshirts and apparel. Locally printed in DFW Texas with no minimums, no setup fees, and free artwork review.",
  keywords: [
    "custom t-shirts",
    "custom apparel DFW",
    "screen printing Dallas",
    "embroidery Carrollton",
    "team uniforms Texas",
    "DTG DTF printing",
  ],
  openGraph: {
    type: "website",
    title: "Custom Tees DFW — Locally Made Custom Apparel",
    description:
      "Premium custom apparel printed and shipped from DFW Texas since 2011.",
    siteName: "Custom Tees DFW",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Tees DFW — Locally Made Custom Apparel",
    description:
      "Premium custom apparel printed and shipped from DFW Texas since 2011.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#EB2127",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${urbanist.variable} ${openSans.variable}`}>
      <body>
        <TopBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyConnect />
      </body>
    </html>
  );
}
