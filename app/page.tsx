import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import GitHub from "@/components/sections/GitHub";
import CTA from "@/components/sections/CTA";
import Certificates from "@/components/sections/Certificates";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
  <Hero />
  <Stats />
  <About />
  <Skills />
  <Experience />
  <Projects />
  <Certificates />
  <GitHub />
  <CTA />
  <Contact />
</main>

      <Footer />
    </>
  );
}