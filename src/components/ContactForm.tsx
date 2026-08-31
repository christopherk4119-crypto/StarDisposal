"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { business } from "@/lib/business";
import { formspreeEndpoint, usesFormBackend } from "@/lib/forms";

const services = [
  "Bobcat",
  "Dump Run",
  "Site Clean-Up",
  "Demolition",
  "Junk Removal",
  "Bin Rental",
  "Other",
];

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "border-0 border-b border-white/35 bg-transparent py-2 text-[17px] text-white outline-none focus:border-brand-yellow focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [service, setService] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — real people leave this empty. Silently accept and drop.
    if (data.get("_gotcha")) {
      setStatus("sent");
      form.reset();
      return;
    }

    const name = data.get("name")?.toString().trim() ?? "";
    const phone = data.get("phone")?.toString().trim() ?? "";
    const email = data.get("email")?.toString().trim() ?? "";
    const details = data.get("details")?.toString().trim() ?? "";
    const subject = `Quote request — ${service || "General"}`;

    if (usesFormBackend) {
      setStatus("sending");
      try {
        const res = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
        setStatus("sent");
        setService("");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    // Fallback: hand the message to the visitor's mail app.
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service Needed: ${service}`,
      "",
      "Project Details:",
      details,
    ].join("\n");

    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setStatus("sent");
    setService("");
    form.reset();
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="bg-brand-navy px-9 pb-9 pt-10">
      <div className="mb-[30px] font-display text-[11px] tracking-[0.16em] text-brand-yellow">
        TELL US ABOUT THE JOB
      </div>

      {/* Subject line for the notification email. */}
      <input
        type="hidden"
        name="_subject"
        value={`Quote request — ${service || "General"}`}
      />
      {/* Honeypot. Hidden from people, filled in by bots. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="sd-name"
            className="font-display text-[10px] tracking-[0.14em] text-white/60"
          >
            NAME
          </label>
          <input id="sd-name" name="name" type="text" required className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="sd-phone"
            className="font-display text-[10px] tracking-[0.14em] text-white/60"
          >
            PHONE
          </label>
          <input id="sd-phone" name="phone" type="tel" required className={fieldClass} />
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-2">
        <label
          htmlFor="sd-email"
          className="font-display text-[10px] tracking-[0.14em] text-white/60"
        >
          EMAIL
        </label>
        <input id="sd-email" name="email" type="email" required className={fieldClass} />
      </div>

      <div className="mt-[30px]">
        <div className="mb-3 font-display text-[10px] tracking-[0.14em] text-white/60">
          SERVICE NEEDED
        </div>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <label key={s} className="cursor-pointer">
              <input
                type="radio"
                name="service"
                value={s}
                checked={service === s}
                onChange={(e) => setService(e.target.value)}
                required
                className="peer sr-only"
              />
              <span
                className={`inline-block border px-3.5 py-2.5 font-display text-[11px] tracking-[0.08em] transition hover:border-brand-yellow peer-focus-visible:ring-2 peer-focus-visible:ring-brand-yellow peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-brand-navy ${
                  service === s
                    ? "border-brand-yellow bg-brand-yellow text-brand-navy"
                    : "border-white/30 text-white/85"
                }`}
              >
                {s}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-[30px] flex flex-col gap-2">
        <label
          htmlFor="sd-details"
          className="font-display text-[10px] tracking-[0.14em] text-white/60"
        >
          PROJECT DETAILS
        </label>
        <textarea
          id="sd-details"
          name="details"
          rows={4}
          className="resize-y border-0 border-b border-white/35 bg-white/[0.06] p-3 text-base leading-[1.5] text-white outline-none focus:border-brand-yellow focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-[34px] w-full bg-brand-yellow px-5 py-5 font-display text-[15px] tracking-[0.1em] text-brand-navy transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy disabled:cursor-not-allowed disabled:opacity-70"
      >
        {sending ? "SENDING…" : "REQUEST MY FREE QUOTE"}
      </button>

      <p className="mt-3.5 text-[12px] leading-[1.5] text-white/55">
        We use your details to reply to this request and nothing else. See our{" "}
        <Link href="/privacy" className="text-brand-yellow underline underline-offset-2">
          privacy policy
        </Link>
        .
      </p>

      <div aria-live="polite">
        {status === "sent" && (
          <p className="mt-[18px] bg-white/[0.08] px-4 py-3.5 text-sm font-semibold leading-[1.55] text-white">
            {usesFormBackend ? (
              <>
                Thanks — we&rsquo;ve got it. We&rsquo;ll get back to you, usually
                the same day.
              </>
            ) : (
              <>
                Thanks! Your email app should now be open with your quote request
                ready to send.
              </>
            )}{" "}
            Prefer to talk now? Call{" "}
            <a href={`tel:${business.phoneMainTel}`} className="text-brand-yellow">
              {business.phoneMainSub}
            </a>
            .
          </p>
        )}

        {status === "error" && (
          <p className="mt-[18px] border-l-4 border-brand-red bg-white/[0.08] px-4 py-3.5 text-sm font-semibold leading-[1.55] text-white">
            That didn&rsquo;t send — the connection dropped or the form service is
            down. Please call{" "}
            <a href={`tel:${business.phoneMainTel}`} className="text-brand-yellow">
              {business.phoneMainSub}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${business.email}`} className="text-brand-yellow">
              {business.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
