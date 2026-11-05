import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site-config";
import "./globals.css";

const anton = Anton({ variable: "--font-anton", weight: "400", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: site.fullTitle,
  description: `${site.name} — ${site.genre} DJ. ${site.tagline} Booking & contact.`,
  openGraph: {
    title: site.fullTitle,
    description: site.tagline,
    images: [site.images.hero],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${anton.variable} ${inter.variable} ${mono.variable} grain`}>
        {children}
      </body>
    </html>
  );
}
