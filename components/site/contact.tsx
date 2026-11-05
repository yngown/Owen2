"use client";
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { site } from "@/lib/site-config";
import { InstagramIcon } from "./icons";

const fieldClass =
  "mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none";
const labelClass = "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground";

/**
 * No backend needed: the form composes a pre-filled email in the booker's
 * mail app, addressed to site.bookingEmail.
 */
export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const subject = `Booking request: ${get("event") || "Event"} – ${get("date") || "date tbc"}`;
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Event / Venue: ${get("event")}`,
      `Date: ${get("date")}`,
      `City: ${get("city")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${site.bookingEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-24 md:grid-cols-12 md:px-6 md:py-32">
        <div className="md:col-span-5">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            <span className="text-muted-foreground">04</span>
            <span className="h-px w-8 bg-primary" />
            Contact
          </p>
          <h2 className="mt-6 font-display text-5xl uppercase leading-[0.95] md:text-7xl">
            Book {site.name}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Clubs, raves, festivals or private events — send a request and you&apos;ll get a
            direct reply. No agency in between.
          </p>

          <div className="mt-10 space-y-3">
            <a
              href={`mailto:${site.bookingEmail}`}
              className="flex items-center gap-4 rounded-lg border border-border bg-background p-5 transition-colors hover:border-primary"
            >
              <Mail className="size-6 shrink-0 text-primary" />
              <span className="min-w-0">
                <span className={labelClass}>Email</span>
                <span className="block truncate text-lg">{site.bookingEmail}</span>
              </span>
            </a>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg border border-border bg-background p-5 transition-colors hover:border-primary"
            >
              <InstagramIcon className="size-6 shrink-0 text-primary" />
              <span>
                <span className={labelClass}>Instagram DM</span>
                <span className="block text-lg">{site.instagram.handle}</span>
              </span>
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-5 md:col-span-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Name *</span>
              <input name="name" required autoComplete="name" className={fieldClass} />
            </label>
            <label className="block">
              <span className={labelClass}>Email *</span>
              <input name="email" type="email" required autoComplete="email" className={fieldClass} />
            </label>
          </div>
          <label className="block">
            <span className={labelClass}>Event / Venue *</span>
            <input name="event" required className={fieldClass} placeholder="Club, festival or party name" />
          </label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Date</span>
              <input name="date" type="date" className={fieldClass} />
            </label>
            <label className="block">
              <span className={labelClass}>City</span>
              <input name="city" className={fieldClass} />
            </label>
          </div>
          <label className="block">
            <span className={labelClass}>Message *</span>
            <textarea
              name="message"
              required
              rows={5}
              className={fieldClass}
              placeholder="Slot, set length, capacity, fee range…"
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            Send booking request <Send className="size-4" />
          </button>
          <p role="status" className="text-sm text-muted-foreground">
            {sent
              ? "Your email app should open with the request pre-filled. If not, write directly to the address on the left."
              : "Submitting opens your email app with everything pre-filled."}
          </p>
        </form>
      </div>
    </section>
  );
}
