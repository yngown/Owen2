import Image from "next/image";
import { AudioWaveform, Calendar, Clock, Gauge, Headphones, MapPin } from "lucide-react";
import { site } from "@/lib/site-config";
import { InstagramIcon } from "./icons";

function Eyebrow({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
      <span className="text-muted-foreground">{index}</span>
      <span className="h-px w-8 bg-primary" />
      {children}
    </p>
  );
}

export function Marquee() {
  const items = [...site.sound.tags, site.sound.bpm];
  const row = [...items, ...items];
  return (
    <div className="relative -mt-24 overflow-hidden border-y border-border bg-primary py-4 md:-mt-40">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[...row, ...row].map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-2xl uppercase tracking-wide text-primary-foreground md:text-4xl"
          >
            {t}
            <span aria-hidden>✕</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 md:px-6 md:py-36">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-zinc-900">
            <Image
              src={site.images.about}
              alt={`${site.name} on stage`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
          </div>
        </div>
        <div className="md:col-span-7 md:pt-8">
          <Eyebrow index="01">About</Eyebrow>
          <h2 className="mt-6 font-display text-5xl uppercase leading-[0.95] md:text-7xl">
            Built for the <span className="text-primary">peak</span> of the night.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            {site.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 font-mono text-sm uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary"
          >
            <InstagramIcon className="size-5" />
            {site.instagram.handle}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Sound() {
  const pillars = [
    {
      icon: Gauge,
      title: "Fast & physical",
      text: `${site.sound.bpm} with distorted, driving kicks that keep the floor locked in.`,
    },
    {
      icon: AudioWaveform,
      title: "Industrial textures",
      text: "Raw, metallic sound design and hypnotic loops — dark, but never monotonous.",
    },
    {
      icon: Headphones,
      title: "Read from the floor",
      text: "No pre-planned sets. Every journey is built live around the room and the moment.",
    },
  ];
  return (
    <section id="sound" className="scroll-mt-20 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <Eyebrow index="02">Sound</Eyebrow>
        <h2 className="mt-6 max-w-3xl font-display text-5xl uppercase leading-[0.95] md:text-7xl">
          Hard techno, no compromises.
        </h2>
        <ul className="mt-8 flex flex-wrap gap-2">
          {site.sound.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card p-8 md:p-10">
              <Icon className="size-7 text-primary" />
              <h3 className="mt-6 font-display text-2xl uppercase tracking-wide">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {site.images.gallery.map((src, i) => (
            <div
              key={src}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-zinc-900 sm:aspect-square"
            >
              <Image
                src={src}
                alt={`Live impression ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Booking() {
  const factIcons = [Clock, Calendar, Gauge, MapPin];
  return (
    <section id="booking" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 md:px-6 md:py-32">
      <Eyebrow index="03">For bookers</Eyebrow>
      <h2 className="mt-6 font-display text-5xl uppercase leading-[0.95] md:text-7xl">
        Booking info
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{site.availability}.</p>

      <dl className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {site.bookingFacts.map((f, i) => {
          const Icon = factIcons[i % factIcons.length];
          return (
            <div key={f.label} className="rounded-lg border border-border bg-card p-6">
              <Icon className="size-5 text-primary" />
              <dt className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {f.label}
              </dt>
              <dd className="mt-1 font-display text-2xl uppercase tracking-wide">{f.value}</dd>
            </div>
          );
        })}
      </dl>

      <div className="mt-6 rounded-lg border border-border p-6 md:p-8">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Tech rider
        </h3>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {site.techRider.map((r) => (
            <li key={r} className="flex gap-3 text-foreground">
              <span className="mt-2 size-1.5 shrink-0 bg-primary" />
              {r}
            </li>
          ))}
        </ul>
      </div>

      {site.upcomingDates.length > 0 && (
        <div className="mt-16">
          <h3 className="font-display text-3xl uppercase">Upcoming dates</h3>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {site.upcomingDates.map((d) => (
              <li
                key={`${d.date}-${d.venue}`}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="font-mono text-sm text-primary">
                  {new Date(d.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span className="font-display text-2xl uppercase">{d.venue}</span>
                <span className="text-muted-foreground">{d.city}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="font-display text-2xl tracking-wider">
          {site.name}
          <span className="text-primary">.</span>
        </p>
        <ul className="flex flex-wrap gap-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <li>
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              Instagram
            </a>
          </li>
          {site.extraLinks.map((l) => (
            <li key={l.url}>
              <a href={l.url} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${site.bookingEmail}`} className="hover:text-foreground">
              Email
            </a>
          </li>
        </ul>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
