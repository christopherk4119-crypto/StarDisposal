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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Star Disposal Services | Calgary Junk Removal & Bin Rentals Since 1996",
  description:
    "Calgary's trusted junk removal, hauling, and bin rental company since 1996. Bobcat work, dump runs, site clean-up, demolition, junk removal & all size bins. Starting at $50. Call 403-50WASTE.",
  keywords: [
    "junk removal Calgary",
    "bin rental Calgary",
    "dumpster rental Calgary",
    "bobcat services Calgary",
    "demolition Calgary",
    "dump runs Calgary",
    "site clean up Calgary",
  ],
  openGraph: {
    title: "Star Disposal Services | Calgary Junk Removal & Bin Rentals Since 1996",
    description:
      "Bobcat Work, Dump Runs, Site Clean-Up, Demolition, Junk Removal & All Size Bins — Starting at $50. Serving Calgary since 1996.",
    url: siteUrl,
    siteName: "Star Disposal Services",
    locale: "en_CA",
    type: "website",
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
