"use client";

import { useState, type FormEvent } from "react";
import { business } from "@/lib/business";

const services = [
  "Bobcat",
  "Dump Run",
  "Site Clean-Up",
  "Demolition",
  "Junk Removal",
  "Bin Rental",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() ?? "";
    const phone = data.get("phone")?.toString().trim() ?? "";
    const email = data.get("email")?.toString().trim() ?? "";
    const details = data.get("details")?.toString().trim() ?? "";

    const subject = `Free Quote Request — ${service || "General"}`;
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

    setSubmitted(true);
    setService("");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="bg-brand-navy px-9 pb-9 pt-10">
      <div className="mb-[30px] font-display text-[11px] tracking-[0.16em] text-brand-yellow">
        TELL US ABOUT THE JOB
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="sd-name"
            className="font-display text-[10px] tracking-[0.14em] text-white/60"
          >
            NAME
          </label>
          <input
            id="sd-name"
            name="name"
            type="text"
            required
            className="border-0 border-b border-white/35 bg-transparent py-2 text-[17px] text-white outline-none focus:border-brand-yellow focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="sd-phone"
            className="font-display text-[10px] tracking-[0.14em] text-white/60"
          >
            PHONE
          </label>
          <input
            id="sd-phone"
            name="phone"
            type="tel"
            required
            className="border-0 border-b border-white/35 bg-transparent py-2 text-[17px] text-white outline-none focus:border-brand-yellow focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-2">
        <label
          htmlFor="sd-email"
          className="font-display text-[10px] tracking-[0.14em] text-white/60"
        >
          EMAIL
        </label>
        <input
          id="sd-email"
          name="email"
          type="email"
          required
          className="border-0 border-b border-white/35 bg-transparent py-2 text-[17px] text-white outline-none focus:border-brand-yellow focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
        />
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
        className="mt-[34px] w-full bg-brand-yellow px-5 py-5 font-display text-[15px] tracking-[0.1em] text-brand-navy transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
      >
        REQUEST MY FREE QUOTE
      </button>

      {submitted && (
        <p className="mt-[18px] bg-white/[0.08] px-4 py-3.5 text-sm font-semibold leading-[1.55] text-white">
          Thanks! Your email app should now be open with your quote request
          ready to send. Prefer to talk now? Call{" "}
          <a href={`tel:${business.phoneMainTel}`} className="text-brand-yellow">
            {business.phoneMainDisplay}
          </a>
          .
        </p>
      )}
    </form>
  );
}
