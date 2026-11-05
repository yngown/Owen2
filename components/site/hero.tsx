"use client";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { site } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="relative flex flex-col overflow-hidden pt-16">
      {/* red glow behind the title */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />
      <ContainerScroll
        titleComponent={
          <div className="relative px-2">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary md:text-sm">
              {site.genre} DJ
            </p>
            <h1 className="mt-4 font-display text-[22vw] uppercase leading-[0.85] tracking-tight text-white md:text-[11rem]">
              {site.name}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              {site.tagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 pb-16 md:pb-20">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Booking request <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-mono text-sm uppercase tracking-[0.15em] text-foreground transition-colors hover:border-foreground"
              >
                Learn more
              </a>
            </div>
          </div>
        }
      >
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-zinc-900">
          <Image
            src={site.images.hero}
            alt={`${site.name} performing behind the decks`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover grayscale contrast-125"
            draggable={false}
          />
          {/* red duotone + bottom fade for legibility */}
          <div className="absolute inset-0 bg-primary/25 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 md:flex-row md:items-end md:justify-between md:p-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/70">
                Now booking
              </p>
              <p className="mt-1 font-display text-3xl uppercase text-white md:text-5xl">
                {site.sound.bpm}
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/80">
              <MapPin className="size-4 text-primary" />
              {site.location} · Worldwide
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
