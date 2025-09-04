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
import FallingSakura from "@/components/FallingSakura";

/**
 * Үндсэн хуудас - Портфолиогийн бүх хэсгүүдийг агуулсан компонент
 * Main page component containing all portfolio sections
 */
export default function Home() {
  // Хуудас ачаалагдаж байгаа эсэхийг хянах төлөв / Loading state management
  const [isLoading, setIsLoading] = useState(true);

  // Компонент эхлэх үед ачаалах хугацаа тохируулах / Set loading duration on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Хэрэв ачаалагдаж байвал loader харуулах / Show loader while loading
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Falling Sakura Animation / 桜の花びらアニメーション */}
      <FallingSakura />
      
      {/* Навигацийн толгой хэсэг / Navigation header */}
      <Header />
      
      {/* Үндсэн танилцуулга хэсэг / Hero introduction section */}
      <Hero />
      
      {/* Миний тухай хэсэг / About me section */}
      <About />
      
      {/* Төслүүдийн хэсэг / Projects section */}
      <Projects />
      
      {/* Ур чадварын хэсэг / Skills section */}
      <Skills />
      
      {/* Холбоо барих хэсэг / Contact section */}
      <Contact />
      
      {/* Хөл хэсэг / Footer section */}
      <Footer />
      
      {/* Мэдэгдлийн систем / Notification system */}
      <Toaster position="top-right" />
    </div>
  );
}