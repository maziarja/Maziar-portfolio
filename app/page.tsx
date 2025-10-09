"use client";

import Contact from "./_components/Contact";
import About from "./_components/About";
import Hero from "./_components/Hero";
import Stack from "./_components/Stack";
import Footer from "./_components/Footer";
import Portfolio from "./_components/Portfolio";
import Navbar from "./_components/Navbar";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stack />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default page;
