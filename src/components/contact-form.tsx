"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { ArrowRight, Mail, WhatsApp } from "@/components/icons";

type Status = "idle" | "sent";

export function ContactForm({ context }: { context?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim() || "Website enquiry";
    const message = String(data.get("message") ?? "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      context ? `Interested in: ${context}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      context ? `[${context}] ${subject}` : subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setStatus("sent");
  }

  const inputClass =
    "w-full rounded-2xl border border-line bg-white/[0.02] px-4 py-3.5 text-sm text-fg placeholder:text-muted/70 transition-colors focus:border-brand/60 focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Your name
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputClass} placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          required
          className={inputClass}
          placeholder={context ? `${context} enquiry` : "How can I help?"}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClass} resize-y`}
          placeholder="Tell me a little about your project, school or the young person you have in mind…"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-brand-dark"
        >
          Send message
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-brand/60 hover:text-brand"
        >
          <WhatsApp className="h-4 w-4" width={16} height={16} />
          WhatsApp instead
        </a>
      </div>

      {status === "sent" ? (
        <p className="flex items-start gap-2 rounded-2xl border border-brand/30 bg-brand/5 p-4 text-sm text-fg">
          <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" width={16} height={16} />
          Your email app should now be open with the message ready to send. If it did not open,
          email me directly at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-brand underline">
            {site.email}
          </a>
          .
        </p>
      ) : (
        <p className="text-xs leading-relaxed text-muted">
          This form opens your email app with everything pre-filled — no data is sent to a third
          party. You can also reach me directly at{" "}
          <a href={`mailto:${site.email}`} className="text-brand underline">
            {site.email}
          </a>{" "}
          or {site.phone}.
        </p>
      )}
    </form>
  );
}
