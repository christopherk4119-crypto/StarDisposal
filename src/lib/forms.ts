/**
 * Quote form delivery.
 *
 * The form POSTs to Formspree and the visitor never leaves the page. If the
 * form ID is ever blanked out, it falls back to opening the visitor's mail
 * app with a pre-filled message.
 *
 * That fallback is the risky path — on a phone with no mail client configured
 * it silently does nothing and the lead is lost — which is why the real form
 * ID ships as the default below rather than living only in Vercel.
 */
/**
 * The business's live Formspree form. Not a secret — the endpoint is visible
 * in any page that posts to it — so it ships as the default rather than
 * depending on an environment variable someone has to remember to set.
 * NEXT_PUBLIC_FORMSPREE_ID still overrides it, e.g. a throwaway form for
 * preview deployments.
 */
export const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "mdawrdyw";

export const formspreeEndpoint = formspreeId
  ? `https://formspree.io/f/${formspreeId}`
  : "";

/** True when submissions are delivered server-side rather than via mailto. */
export const usesFormBackend = Boolean(formspreeId);

/**
 * Maps a service page onto one of the quote form's radio options, so the
 * form arrives pre-filled with what the visitor was actually reading.
 * One less field to fill in is one less reason to abandon it.
 */
export function quoteCategoryFor(hub: string, slug: string): string {
  if (slug === "dump-runs") return "Dump Run";
  if (hub === "junk-removal") return "Junk Removal";
  if (hub === "bin-rentals") return "Bin Rental";
  if (slug === "demolition") return "Demolition";
  if (slug === "bobcat-services") return "Bobcat";
  if (slug === "site-cleanup") return "Site Clean-Up";
  if (slug === "construction-waste-removal") return "Bin Rental";
  return "";
}
