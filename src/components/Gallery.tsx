"use client";

import Image from "next/image";
import { useState } from "react";

const photos = [
  {
    src: "/images/gallery/bin-trailer-apartment.webp",
    alt: "Bin trailer service at a Calgary apartment complex",
    caption: "Bin Trailer Service — Apartment Complex",
  },
  {
    src: "/images/gallery/mattress-furniture-bin.webp",
    alt: "Bin loaded with mattress and furniture for removal",
    caption: "Furniture & Mattress Removal",
  },
  {
    src: "/images/gallery/bin-trailer-alley.webp",
    alt: "Bin trailer loaded for pickup in a back alley",
    caption: "Alley Pickup — Loaded & Ready",
  },
  {
    src: "/images/gallery/yard-cleanup-debris.webp",
    alt: "Yard clean-up and debris removal pile",
    caption: "Yard Clean-Up & Debris Removal",
  },
  {
    src: "/images/gallery/scrap-tires-cleanup.webp",
    alt: "Scrap tire and property clean-up job",
    caption: "Scrap Tire & Property Clean-Up",
  },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-display text-3xl text-brand-navy sm:text-4xl">
          Recent Job Photos
        </h2>
        <div className="mx-auto mt-2 h-1.5 w-20 bg-brand-red" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-navy/70">
          A look at real jobs — bins, hauls, and clean-ups across Calgary.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 translate-y-full bg-brand-navy/85 px-2 py-2 text-center text-xs font-semibold text-white transition duration-300 group-hover:translate-y-0">
                {photo.caption}
              </span>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20"
          >
            ×
          </button>
          <div className="relative max-h-[85vh] w-full max-w-3xl">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={photos[openIndex].src}
                alt={photos[openIndex].alt}
                fill
                sizes="90vw"
                className="rounded-lg object-contain"
              />
            </div>
            <p className="mt-3 text-center font-display text-sm text-brand-yellow">
              {photos[openIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
