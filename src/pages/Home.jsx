import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-cyber-bg/80 backdrop-blur-lg px-4 py-6 sm:px-8 sm:py-10 rounded-xl shadow-glow space-y-8 flex flex-col items-center border border-matrix-green/20 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl min-w-0"
      >
        <h1 className="text-4xl md:text-5xl font-mono font-bold code-glow select-none">
          Kanishk Singh Chauhan
        </h1>
        {/* Typing effect for role: fade-in on mobile, typing on desktop */}
        {/* Mobile: fade-in */}
        <motion.p
          className="block sm:hidden text-sm text-matrix-green font-mono mt-2 mb-4 w-full text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Aspiring Data Analyst &amp; Security Enthusiast
        </motion.p>
        {/* Desktop: typing effect */}
        <p className="hidden sm:block text-base md:text-lg text-matrix-green font-mono mt-2 mb-4 text-center">
          <span className="typing-effect" style={{ display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            Aspiring Data Analyst &amp; Security Enthusiast
          </span>
        </p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="mt-6 px-4 py-3 sm:px-8 rounded-full bg-matrix-green text-cyber-bg font-mono font-bold shadow-glow border border-matrix-green/60 hover:bg-cyber-accent hover:text-cyber-bg transition-all animate-glow text-base sm:text-lg w-full sm:w-auto">
            View Resume
          </button>
        </a>
      </motion.div>
      {/* Typing effect CSS */}
      <style>{`
        .typing-effect {
          border-right: .15em solid #39FF14;
          white-space: nowrap;
          overflow: hidden;
          animation: typing 2.5s steps(30, end), blink-caret .75s step-end infinite;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #39FF14; }
        }
      `}</style>
    </main>
  );
}
