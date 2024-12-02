"use client";

import React from "react";
import { motion } from "framer-motion";

export function WorldMap() {
  // Create a grid of dots to represent the world map
  const dots = [];
  const rows = 25;
  const cols = 50;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      dots.push({
        x: j * 20 + 10,
        y: i * 20 + 10,
        delay: (i + j) * 0.01,
      });
    }
  }

  return (
    <div className="h-full w-full bg-slate-950 relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      <svg className="w-full h-full text-blue-500" viewBox="0 0 1000 500">
        {dots.map((dot, index) => (
          <motion.circle
            key={index}
            cx={dot.x}
            cy={dot.y}
            r="2"
            fill="currentColor"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0.8],
              scale: [0, 1, 0.8],
            }}
            transition={{
              duration: 2,
              delay: dot.delay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </svg>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-30" />
    </div>
  );
}
