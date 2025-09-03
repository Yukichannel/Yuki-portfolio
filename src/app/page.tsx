"use client";

import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import Loader from "@/components/Loader";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about-clean";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}