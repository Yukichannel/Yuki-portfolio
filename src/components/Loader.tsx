"use client";

import { motion } from "framer-motion";
import { Code, Zap, Terminal, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Loader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Predefined positions to avoid hydration issues
  const codeElements = [
    { code: '</>', x: 15, y: 20 },
    { code: '{}', x: 85, y: 15 },
    { code: '[]', x: 25, y: 80 },
    { code: '()', x: 75, y: 85 },
    { code: '&&', x: 45, y: 30 },
    { code: '||', x: 65, y: 60 },
    { code: '=>', x: 35, y: 70 },
    { code: 'fn', x: 55, y: 40 }
  ];

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Tech Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Floating Code Elements */}
      {mounted && (
        <div className="absolute inset-0">
          {codeElements.map((element, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-500/20 text-xs font-mono"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
              }}
              initial={{ 
                opacity: 0
              }}
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
              {element.code}
            </motion.div>
          ))}
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Main Logo Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30"
              whileHover={{ scale: 1.1 }}
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(0,255,255,0.3)",
                  "0 0 40px rgba(147,51,234,0.3)",
                  "0 0 20px rgba(0,255,255,0.3)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Terminal className="h-8 w-8 text-cyan-400" />
            </motion.div>
            <div>
              <motion.h1 
                className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                BALJIR
              </motion.h1>
              <motion.div 
                className="text-sm font-semibold text-gray-400 tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                FULLSTACK DEVELOPER
              </motion.div>
            </div>
          </div>
          
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-cyan-500/30 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-mono text-sm">helloBrainCode.init()</span>
          </motion.div>
        </motion.div>

        {/* Advanced Loading Animation */}
        <div className="relative w-32 h-32">
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 border-2 border-transparent rounded-full"
            style={{
              background: "conic-gradient(from 0deg, transparent, rgba(0,255,255,0.8), transparent)",
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Middle Ring */}
          <motion.div
            className="absolute inset-2 border-2 border-transparent rounded-full"
            style={{
              background: "conic-gradient(from 180deg, transparent, rgba(147,51,234,0.8), transparent)",
            }}
            animate={{ rotate: -360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Inner Ring */}
          <motion.div
            className="absolute inset-4 border-2 border-transparent rounded-full"
            style={{
              background: "conic-gradient(from 90deg, transparent, rgba(255,255,255,0.6), transparent)",
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Center Icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/20 backdrop-blur-sm">
              <Cpu className="h-6 w-6 text-white" />
            </div>
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.p 
            className="text-gray-400 font-mono text-sm mb-2"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Initializing development environment...
          </motion.p>
          
          {/* Progress Dots */}
          <div className="flex gap-1 justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-cyan-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Indicators */}
        <motion.div
          className="flex gap-6 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {[
            { icon: Code, label: "React" },
            { icon: Zap, label: "Next.js" },
            { icon: Terminal, label: "Node.js" }
          ].map((tech, i) => (
            <motion.div
              key={tech.label}
              className="flex flex-col items-center gap-1"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            >
              <tech.icon className="h-4 w-4 text-gray-500" />
              <span className="text-xs text-gray-600 font-mono">{tech.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
