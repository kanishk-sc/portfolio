import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="relative py-16 px-6 min-h-screen flex items-center justify-center bg-cyber-bg/60 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center"
      >
        <img
          src="/usf-logo.png"
          alt="USF Logo"
          className="w-40 md:w-56 mb-8 drop-shadow-[0_0_16px_#39FF14] filter grayscale contrast-200 brightness-150"
          style={{ filter: 'drop-shadow(0 0 16px #39FF14) grayscale(1) contrast(2) brightness(1.5)' }}
        />
        <div className="bg-cyber-bg/40 backdrop-blur-lg rounded-xl shadow-glow max-w-3xl mx-auto p-8 border border-matrix-green/30">
          <h2 className="text-3xl font-mono font-bold code-glow text-matrix-green text-center mb-4">Education</h2>
          <h3 className="text-xl font-mono font-bold text-cyber-accent">University of South Florida</h3>
          <p className="text-matrix-green mt-2 font-mono">B.S. in Information Technology</p>
          <p className="text-cyber-accent">Expected Graduation: May 2026</p>
          <p className="text-cyber-accent mt-4 font-mono">
            Passionate about data analytics, cloud technologies, and scalable systems.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
