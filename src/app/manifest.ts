import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: business.name,
    short_name: "Star Disposal",
    description:
      "Calgary & Airdrie junk removal, bin rentals, dump runs, bobcat work, demolition & site clean-up since 1996.",
    start_url: "/",
    display: "standalone",
    background_color: "#1E2A5E",
    theme_color: "#1E2A5E",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      { src: "/apple-icon-180.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
