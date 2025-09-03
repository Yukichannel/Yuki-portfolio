"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  ChevronDown,
  Facebook,
  Instagram,
  MapPin,
} from "lucide-react";

import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

import { personalInfo, socialLinks } from "../../config/portfolio-config";
import Image from "next/image";

interface Position {
  x: number;
  y: number;
}

// Fix TypeScript interface for predefined positions
export default function Hero() {
  const predefinedPositions: Position[] = [
    { x: 10, y: 20 },
    { x: 80, y: 10 },
    { x: 15, y: 70 },
    { x: 85, y: 60 },
    { x: 50, y: 15 },
    { x: 20, y: 85 },
    { x: 75, y: 25 },
    { x: 30, y: 90 },
    { x: 90, y: 40 },
    { x: 5, y: 50 },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Enhanced Grid Background with mixed patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-line-grid" />
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-dot-grid-sm" />
      </div>

      {/* Floating Code Elements matching loading screen */}
      <div className="absolute inset-0">
        {predefinedPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-500/20 text-xs font-mono"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            {[
              "</>",
              "{}",
              "[]",
              "()",
              "&&",
              "||",
              "=>",
              "fn",
              "var",
              "let",
            ][i]}
          </motion.div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left lg:pr-12"
          >
            {/* HelloBrainCode Badge matching loading screen */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-cyan-500/30 backdrop-blur-sm mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-mono text-sm">helloBrainCode.init()</span>
            </motion.div>

            {/* Main Heading */}
            <div className="mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
              >
                <span className="text-white font-normal">Hi, I&apos;m </span>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="block sm:inline-block mt-2 sm:mt-0"
                >
                  <TypeAnimation
                    sequence={[personalInfo.nickname.toUpperCase(), 3000, "バルジル", 3000, "FULLSTACK DEV", 3000]}
                    className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                    wrapper="span"
                    speed={50}
                    repeat={Number.POSITIVE_INFINITY}
                  />
                </motion.div>
                
                {/* Subtitle matching loading screen */}
                <motion.div 
                  className="text-sm font-semibold text-gray-400 tracking-wider mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  SENIOR FULL-STACK DEVELOPER
                </motion.div>
              </motion.h1>

              {/* Dynamic Text Animation */}
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-400/90 h-14 sm:h-16 lg:h-20 mb-6 font-mono">
                <TypeAnimation
                  sequence={[
                    "> Initializing neural networks...",
                    2000,
                    "> Compiling quantum algorithms...",
                    2000,
                    "> Deploying to the matrix...",
                    2000,
                    "> Hacking the mainframe...",
                    2000,
                    "> System online. Ready to code.",
                    2000,
                    "> Welcome to cyberspace",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                  className="font-medium tracking-wide"
                />
              </div>

              {/* Bio */}
              <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 mt-4 lg:mt-6 mb-8 leading-relaxed">
                {personalInfo.bio}
              </p>

              {/* Location */}
              <div className="flex items-center justify-center lg:justify-start text-white/60 mb-8">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{personalInfo.location}</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  size="lg"
                  className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-transparent backdrop-blur-sm"
                >
                  Download CV
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
                {socialLinks.github && (
                  <Link 
                    href={socialLinks.github} 
                    target="_blank"
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-110"
                  >
                    <Github className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </Link>
                )}
                {socialLinks.facebook && (
                  <Link 
                    href={socialLinks.facebook} 
                    target="_blank"
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-110"
                  >
                    <Facebook className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </Link>
                )}
                {socialLinks.instagram && (
                  <Link 
                    href={socialLinks.instagram} 
                    target="_blank"
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-110"
                  >
                    <Instagram className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 lg:flex-none relative"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gray-900" />
              </div>
              
              {/* Profile Image */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-gray-800">
                <Image
                  src="/portfolio.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating 3D Element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 opacity-30">
                <Suspense fallback={<div className="w-full h-full bg-purple-500/20 rounded-full animate-pulse" />}>
                  <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[0, 0, 5]} />
                    <Sphere args={[1, 100, 200]} scale={1.5}>
                      <MeshDistortMaterial
                        color="#8b5cf6"
                        attach="material"
                        distort={0.3}
                        speed={2}
                      />
                    </Sphere>
                    <OrbitControls enableZoom={false} autoRotate />
                  </Canvas>
                </Suspense>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2 font-medium">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <button onClick={() => scrollToSection("about")}>
                <ChevronDown className="w-6 h-6 hover:text-cyan-400 transition-colors cursor-pointer" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
