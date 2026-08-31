/**
 * Quote form delivery.
 *
 * With `NEXT_PUBLIC_FORMSPREE_ID` set, the form POSTs to Formspree and the
 * visitor never leaves the page. Without it, the form falls back to opening
 * the visitor's mail app with a pre-filled message.
 *
 * The fallback is the risky path: on a phone with no mail client configured
 * it silently does nothing and the lead is lost. Set the env var in
 * production.
 */
export const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";

export const formspreeEndpoint = formspreeId
  ? `https://formspree.io/f/${formspreeId}`
  : "";

/** True when submissions are delivered server-side rather than via mailto. */
export const usesFormBackend = Boolean(formspreeId);
