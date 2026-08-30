import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Star Disposal Services",
    short_name: "Star Disposal",
    description:
      "Calgary & Airdrie junk removal, bin rentals, dump runs, bobcat work, demolition & site clean-up since 1996.",
    start_url: "/",
    display: "standalone",
    background_color: "#1E2A5E",
    theme_color: "#1E2A5E",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
