"use client";

import Image from "next/image";
import { useState } from "react";

const photos = [
  {
    src: "/images/gallery/bin-trailer-alley.webp",
    alt: "Bin trailer loaded for pickup in a Calgary back alley",
    caption: "Alley Pickup — Loaded & Ready",
    number: "01",
    span: "lg:col-span-7",
    height: "h-[280px] lg:h-[470px]",
    objectPosition: "",
  },
  {
    src: "/images/gallery/bin-trailer-apartment.webp",
    alt: "Bin trailer rental service at a Calgary apartment complex",
    caption: "Bin Trailer Service — Apartment Complex",
    number: "02",
    span: "lg:col-span-5",
    height: "h-[280px] lg:h-[470px]",
    objectPosition: "object-[55%_50%]",
  },
  {
    src: "/images/gallery/mattress-furniture-bin.webp",
    alt: "Bin loaded with mattress and furniture for removal",
    caption: "Furniture & Mattress Removal",
    number: "03",
    span: "col-span-1 lg:col-span-4",
    height: "h-[220px] lg:h-[280px]",
    objectPosition: "",
  },
  {
    src: "/images/gallery/yard-cleanup-debris.webp",
    alt: "Yard clean-up and debris removal pile in Calgary",
    caption: "Yard Clean-Up & Debris Removal",
    number: "04",
    span: "col-span-1 lg:col-span-4",
    height: "h-[220px] lg:h-[280px]",
    objectPosition: "",
  },
  {
    src: "/images/gallery/scrap-tires-cleanup.webp",
    alt: "Scrap tire and property clean-up job in Calgary",
    caption: "Scrap Tire & Property Clean-Up",
    number: "05",
    span: "col-span-2 lg:col-span-4",
    height: "h-[220px] lg:h-[280px]",
    objectPosition: "",
  },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-[#f5f5f1] px-8 pb-[104px] pt-24 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-12">
          <div>
            <div className="mb-[18px] flex items-center gap-2.5">
              <span className="h-2 w-2 bg-brand-yellow" />
              <span className="font-display text-[11px] uppercase tracking-[0.18em] text-brand-navy/55">
                Our work
              </span>
            </div>
            <h2 className="font-display text-[52px] leading-none tracking-[-0.02em] text-brand-navy">
              Recent Job Photos
            </h2>
          </div>
          <p className="max-w-[380px] text-base leading-[1.6] text-brand-navy/72">
            A look at real jobs — bins, hauls, and clean-ups across Calgary
            and Airdrie.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-12">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setOpenIndex(index)}
              className={`group relative overflow-hidden bg-brand-navy ${photo.span} ${photo.height}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 90vw"
                className={`object-cover transition duration-400 group-hover:scale-105 ${photo.objectPosition}`}
              />
              <span className="absolute bottom-0 left-0 flex items-center gap-3 bg-brand-navy/90 px-4 py-3">
                <span className="font-display text-[11px] tracking-[0.14em] text-brand-yellow">
                  {photo.number}
                </span>
                <span className="font-display text-[13px] text-white">
                  {photo.caption}
                </span>
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
                className="object-contain"
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
