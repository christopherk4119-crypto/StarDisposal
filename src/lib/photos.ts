/**
 * The real job photos we have, with alt text describing what is actually in
 * each frame. Alt text stays literal — it is reused everywhere the photo
 * appears, so it must be true on every page rather than tuned to one.
 *
 * There are only seven photos and roughly seventy body sections, so a photo
 * is reused across pages. `sectionPhotos` guarantees no repeat *within* a
 * page, which is the only repetition a visitor can actually see. More real
 * job photos would improve this — see the README.
 */
export type Photo = { src: string; alt: string };

export const photos: Photo[] = [
  {
    src: "/images/gallery/mattress-furniture-bin.webp",
    alt: "Star Disposal bin loaded with a mattress, furniture and household junk on a Calgary property",
  },
  {
    src: "/images/gallery/bin-trailer-alley.webp",
    alt: "Loaded Star Disposal bin trailer parked in a Calgary back alley, ready for pickup",
  },
  {
    src: "/images/gallery/yard-cleanup-debris.webp",
    alt: "Yard waste and construction debris cleared from a Calgary property",
  },
  {
    src: "/images/gallery/bin-trailer-apartment.webp",
    alt: "Star Disposal bin trailer positioned at a Calgary apartment complex",
  },
  {
    src: "/images/gallery/scrap-tires-cleanup.webp",
    alt: "Scrap tires and accumulated material cleared during a Calgary property clean-up",
  },
  {
    src: "/images/about/truck-signage.webp",
    alt: "Star Disposal Services truck with its 403-50 WASTE signage in Calgary",
  },
  {
    src: "/images/about/heritage-bin.webp",
    alt: "An older Star Disposal bin from the company's earlier years in Calgary",
  },
];

/** Stable small hash so a given page always gets the same photos across builds. */
function seedOf(key: string): number {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return h;
}

/**
 * `count` photos for a page's body sections — distinct from each other, and
 * varied between pages so neighbouring pages don't open with the same image.
 * Falls back to repeating only if a page ever needs more than seven.
 */
export function sectionPhotos(key: string, count: number): Photo[] {
  const start = seedOf(key) % photos.length;
  // Co-prime with 7 so the walk visits every photo before repeating.
  const step = 1 + (seedOf(key + "step") % (photos.length - 1));
  const out: Photo[] = [];
  for (let i = 0; i < count; i++) {
    out.push(photos[(start + i * step) % photos.length]);
  }
  return out;
}
