import React from "react";
import { motion } from "framer-motion";
import { Ghost } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-lg mx-auto bg-cyber-bg/80 backdrop-blur-lg px-8 py-10 rounded-xl shadow-glow border border-matrix-green/20"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold code-glow mb-8">Contact</h2>
        <div className="flex justify-center gap-8 mt-8">
          <a href="https://www.linkedin.com/in/kanishksinghchauhan/" target="_blank" rel="noopener noreferrer" className="text-cyber-accent hover:text-matrix-green transition text-3xl">
            <svg width="1em" height="1em" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0a53.6 53.6 0 0 1 53.6 53.6c0 29.6-24.09 53.7-53.36 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-242.1 0-267.1h92.4v37.9c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.7 39.7 106.7 125.2V448z"/>
            </svg>
          </a>
          <a href="https://github.com/kanishk-sc" target="_blank" rel="noopener noreferrer" className="text-cyber-accent hover:text-matrix-green transition text-3xl">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
          </a>
          <a href="https://www.instagram.com/kanishk.singh.chauhan" target="_blank" rel="noopener noreferrer" className="text-cyber-accent hover:text-matrix-green transition text-3xl">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
          </a>
          <a href="https://www.snapchat.com/add/kanishk2669" target="_blank" rel="noopener noreferrer" className="text-cyber-accent hover:text-matrix-green transition text-3xl">
            <Ghost size={32} strokeWidth={2.2} />
          </a>
        </div>
      </motion.div>
    </main>
  );
}
