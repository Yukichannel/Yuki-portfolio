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
      const particleCount = 15; // Reduced for performance

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: -10,
          size: Math.random() * 3 + 2,
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 15,
          opacity: Math.random() * 0.3 + 0.1,
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
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden bg-line-grid">
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
            <path
              d="M12 2C12 2 8 6 8 10C8 14 12 18 12 18C12 18 16 14 16 10C16 6 12 2 12 2Z"
              fill="rgba(255, 182, 193, 0.6)"
              opacity={particle.opacity}
            />
            <path
              d="M12 6C12 6 16 10 20 10C24 10 20 14 20 14C20 14 16 10 12 10C8 10 4 14 4 14C4 14 0 10 4 10C8 10 12 6 12 6Z"
              fill="rgba(255, 192, 203, 0.4)"
              opacity={particle.opacity * 0.8}
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
        transition={{ delay: 2, duration: 2 }}
        className="absolute top-4 right-4 text-xs text-gray-400 bg-black/20 px-2 py-1 rounded backdrop-blur-sm"
      >
        Press Ctrl+S to toggle sakura
      </motion.div>
    </div>
  );
};

export default FallingSakura;
