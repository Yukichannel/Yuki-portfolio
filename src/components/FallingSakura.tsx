"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

const FallingSakura = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Create particles
    const createParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = 35; // Even more particles for better visual effect

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: -10,
          size: Math.random() * 5 + 4, // Larger petals (4-9px)
          delay: Math.random() * 10, // More varied timing
          duration: Math.random() * 8 + 10, // Slower fall
          opacity: Math.random() * 0.6 + 0.4, // Very visible (0.4-1.0)
        });
      }
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  // Toggle visibility based on user preference
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "s" && e.ctrlKey) {
        e.preventDefault();
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          initial={{
            y: -20,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "100vh",
            opacity: [0, particle.opacity, particle.opacity, 0],
            rotate: 360,
            x: [0, 20, -20, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Sakura Petal SVG */}
          <svg
            width={particle.size}
            height={particle.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main petal shape */}
            <path
              d="M12 2C12 2 8 6 8 10C8 14 12 18 12 18C12 18 16 14 16 10C16 6 12 2 12 2Z"
              fill="rgba(255, 182, 193, 1)"
              opacity={particle.opacity}
            />
            {/* Cross petals */}
            <path
              d="M12 6C12 6 16 10 20 10C24 10 20 14 20 14C20 14 16 10 12 10C8 10 4 14 4 14C4 14 0 10 4 10C8 10 12 6 12 6Z"
              fill="rgba(255, 105, 180, 0.9)"
              opacity={particle.opacity}
            />
            {/* Center highlight */}
            <circle
              cx="12"
              cy="12"
              r="2"
              fill="rgba(255, 255, 255, 0.8)"
              opacity={particle.opacity}
            />
          </svg>
        </motion.div>
      ))}

      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none" />
      
      {/* Toggle hint (only visible for a few seconds) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 2, duration: 3 }}
        className="absolute top-4 right-4 text-sm text-cyan-300 bg-black/40 px-3 py-2 rounded-lg backdrop-blur-sm border border-cyan-400/30 shadow-lg"
      >
        Press Ctrl+S to toggle sakura 🌸
      </motion.div>
    </div>
  );
};

export default FallingSakura;
