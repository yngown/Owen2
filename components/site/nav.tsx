"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { InstagramIcon } from "./icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#sound", label: "Sound" },
  { href: "#booking", label: "Booking info" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="font-display text-2xl tracking-wider">
          {site.name}
          <span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden size-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            <InstagramIcon className="size-5" />
          </a>
          <a
            href="#contact"
            className="hidden rounded-md bg-primary px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            Book now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-11 items-center justify-center rounded-md md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-border px-4 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-3xl uppercase tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-primary py-3 text-center font-mono text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground"
            >
              Book now
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
