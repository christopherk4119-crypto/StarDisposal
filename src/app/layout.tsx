import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { business, siteUrl } from "@/lib/business";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const title = "Junk Removal Calgary | Star Disposal Services";
const description =
  "Calgary & Airdrie junk removal, bin rentals, dump runs, bobcat work, demolition & site clean-up since 1996. From $50 — call 403-509-2783.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    // Interior pages set their own full title; this appends brand where useful.
    template: `%s`,
  },
  description,
  applicationName: business.name,
  authors: [{ name: business.name, url: siteUrl }],
  creator: business.name,
  publisher: business.name,
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon-180.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: business.name,
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/about/truck-signage.webp",
        alt: `${business.name} truck in Calgary`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/about/truck-signage.webp"],
  },
  formatDetection: { telephone: true },
  category: "Waste Management",
};

export const viewport = {
  themeColor: "#1E2A5E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${inter.variable} ${archivoBlack.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocalBusinessSchema />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand-yellow focus:px-4 focus:py-3 focus:font-display focus:text-sm focus:text-brand-navy"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
