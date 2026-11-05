/**
 * All editable site content lives here.
 * Lines marked TODO are placeholders — replace them with your real details.
 */

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const site = {
  name: "OWEN",
  fullTitle: "OWEN — Hard Techno DJ",
  genre: "Hard Techno",
  tagline: "Relentless kicks. Raw energy. No breaks.",
  location: "Germany", // TODO: your city, e.g. "Berlin, Germany"
  availability: "Available for clubs, raves & festivals worldwide",

  // TODO: your real booking address — the contact form sends to this email.
  bookingEmail: "booking@your-domain.com",

  instagram: {
    handle: "@owen.hardtechno",
    url: "https://www.instagram.com/owen.hardtechno/",
  },

  // Optional: add links here and they appear in the footer + mixes section.
  // TODO: e.g. { label: "SoundCloud", url: "https://soundcloud.com/..." }
  extraLinks: [] as { label: string; url: string }[],

  // TODO: replace with your own press photos (put files in /public and use "/my-photo.jpg").
  images: {
    hero: unsplash("photo-1470225620780-dba8ba36b745", 2000),
    about: unsplash("photo-1516450360452-9312f5e86fc7", 1200),
    gallery: [
      unsplash("photo-1493225457124-a3eb161ffa5f", 1000),
      unsplash("photo-1429962714451-bb934ecdc4ec", 1000),
      unsplash("photo-1514525253161-7a46d19cd819", 1000),
    ],
  },

  // TODO: rewrite in your own words.
  bio: [
    "OWEN is a hard techno DJ who plays for the moment the room stops thinking and starts moving as one. His sets are built on driving, distorted kicks, industrial textures and hypnotic loops — fast, physical and uncompromising.",
    "Every set is read from the floor, not pre-planned: he builds pressure step by step, rides the peak and knows when to push harder. The result is a night that bookers remember and crowds talk about afterwards.",
  ],

  // TODO: adjust to your actual style.
  sound: {
    bpm: "150 – 165 BPM",
    tags: ["Hard Techno", "Industrial", "Schranz", "Hardgroove", "Rave"],
  },

  bookingFacts: [
    { label: "Set length", value: "60 – 180 min" }, // TODO
    { label: "Slots", value: "Warm-up · Peak time · Closing" }, // TODO
    { label: "Tempo", value: "150 – 165 BPM" }, // TODO
    { label: "Based in", value: "Germany" }, // TODO
  ],

  // TODO: your tech rider.
  techRider: [
    "3–4× Pioneer CDJ-3000 (linked)",
    "Pioneer DJM-900NXS2 / DJM-V10 / Allen & Heath Xone:96",
    "2× booth monitors, controllable from the mixer",
    "Stable, vibration-free DJ table",
  ],

  // Optional: upcoming dates. The section is hidden while this list is empty.
  // Example: { date: "2026-12-12", venue: "Club Name", city: "Berlin" }
  upcomingDates: [] as { date: string; venue: string; city: string }[],
};

export type Site = typeof site;
