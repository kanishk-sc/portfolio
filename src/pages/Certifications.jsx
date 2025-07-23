import React from "react";
import { motion } from "framer-motion";

const certifications = [
  { name: "LinkedIn Learning: Data Science", status: "Completed" },
  { name: "CompTIA Security+", status: "In Progress" },
  { name: "Google Data Analytics", status: "Completed" },
];

export default function Certifications() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold code-glow mb-8">Certifications</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.2 }}
              className={`px-6 py-4 rounded-xl border shadow-glow font-mono text-lg font-bold ${cert.status === 'Completed' ? 'bg-cyber-bg/80 border-matrix-green/40 text-matrix-green' : 'bg-cyber-bg/60 border-cyber-accent/40 text-cyber-accent animate-pulse'}`}
            >
              <span>{cert.name}</span>
              <div className="text-xs mt-2">{cert.status}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
} 