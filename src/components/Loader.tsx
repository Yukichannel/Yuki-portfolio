"use client";

import { Terminal } from "lucide-react";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="text-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
              <Terminal className="h-8 w-8 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                BALJIR
              </h1>
              <div className="text-sm font-semibold text-gray-400 tracking-wider">
                FULLSTACK DEVELOPER
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 font-mono text-sm mb-2">
            Initializing development environment...
          </p>
          <div className="flex gap-1 justify-center">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
