import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://customtees.example.com"),
  title: {
    default: "Custom Tees — Locally Made Custom Apparel Since 2011",
    template: "%s | Custom Tees",
  },
  description:
    "Premium custom t-shirts, polos, sweatshirts and apparel. Locally printed in Texas with a no-minimums promise and a little extra love on every order.",
  keywords: [
    "custom t-shirts",
    "custom apparel",
    "screen printing",
    "embroidery",
    "Texas screen printing",
    "team uniforms",
  ],
  openGraph: {
    type: "website",
    title: "Custom Tees — Locally Made Custom Apparel",
    description:
      "Premium custom apparel printed and shipped from Texas since 2011.",
    siteName: "Custom Tees",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Tees — Locally Made Custom Apparel",
    description:
      "Premium custom apparel printed and shipped from Texas since 2011.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#E51E2A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <TopBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
