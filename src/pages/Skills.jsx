import React from "react";
import { motion } from "framer-motion";

const skills = [
  { category: "Data Analysis", items: [
    { name: "Excel", level: 90 },
    { name: "Pandas", level: 80 },
    { name: "SQL", level: 75 },
  ]},
  { category: "Programming", items: [
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 70 },
    { name: "C++", level: 60 },
  ]},
  { category: "Security Tools", items: [
    { name: "Wireshark", level: 65 },
    { name: "Nmap", level: 60 },
    { name: "Burp Suite", level: 50 },
  ]},
];

export default function Skills() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10 text-center relative overflow-hidden mt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold code-glow mb-8">Skills</h2>
        <div className="space-y-8">
          {skills.map((cat, idx) => (
            <div key={cat.category} className="bg-cyber-bg/80 border border-matrix-green/20 rounded-xl shadow-glow p-6">
              <h3 className="text-xl font-mono font-bold text-cyber-accent mb-4">{cat.category}</h3>
              <div className="space-y-4">
                {cat.items.map((skill, i) => (
                  <div key={skill.name} className="text-left">
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-matrix-green">{skill.name}</span>
                      <span className="font-mono text-cyber-accent">{skill.level}%</span>
                    </div>
                    <motion.div
                      className="h-3 rounded bg-cyber-bg border border-matrix-green/30 overflow-hidden"
                      initial={{ width: 0 }}
                      animate={{ width: skill.level + '%' }}
                      transition={{ duration: 1 + i * 0.2 }}
                      style={{ background: 'linear-gradient(90deg, #39FF14 60%, #00ffe7 100%)' }}
                    >
                      <div style={{ width: skill.level + '%', height: '100%' }} />
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
} 