import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});

const siteUrl = "https://stardisposalservices.ca";

const title =
  "Star Disposal Services | Calgary Junk Removal & Bin Rentals Since 1996";
const description =
  "Calgary & Airdrie junk removal, appliance pickup, bin rentals (10-20 yd), dump runs, bobcat work, demolition and site clean-up since 1996. Same-day service, jobs start at $50. Call 403-50WASTE.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "junk removal Calgary",
    "junk removal Airdrie",
    "bin rental Calgary",
    "dumpster rental Calgary",
    "appliance removal Calgary",
    "bobcat services Calgary",
    "demolition Calgary",
    "dump runs Calgary",
    "site clean up Calgary",
    "same day junk removal Calgary",
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description:
      "Junk Removal, Bin Rentals, Dump Runs, Bobcat Work, Demolition & Site Clean-Up — Starting at $50. Serving Calgary & Airdrie since 1996.",
    url: siteUrl,
    siteName: "Star Disposal Services",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivoBlack.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
