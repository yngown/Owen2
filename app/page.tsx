import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About, Booking, Footer, Marquee, Sound } from "@/components/site/sections";
import { Contact } from "@/components/site/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Sound />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
