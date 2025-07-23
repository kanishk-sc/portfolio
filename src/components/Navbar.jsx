import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cyber-bg shadow-lg px-4 py-3 fixed top-0 left-0 w-full z-50 border-b border-matrix-green/30 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-mono font-bold code-glow select-none">Kanishk's Portfolio</h1>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-6 text-lg font-mono">
          <Link to="/" className="hover:text-cyber-accent transition-colors">Home</Link>
          <Link to="/about" className="hover:text-cyber-accent transition-colors">About</Link>
          <Link to="/projects" className="hover:text-cyber-accent transition-colors">Projects</Link>
          <Link to="/education" className="hover:text-cyber-accent transition-colors">Education</Link>
          <Link to="/skills" className="hover:text-cyber-accent transition-colors">Skills</Link>
          <Link to="/certifications" className="hover:text-cyber-accent transition-colors">Certifications</Link>
          <Link to="/contact" className="hover:text-cyber-accent transition-colors">Contact</Link>
        </div>

        {/* Resume Button */}
        <a
          href="/public/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-4 py-2 rounded-lg bg-matrix-green text-cyber-bg font-mono font-bold shadow-glow hover:bg-cyber-accent hover:text-cyber-bg transition-all animate-glow hidden lg:inline-block border border-matrix-green/60"
        >
          Download Resume
        </a>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden focus:outline-none ml-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7 text-matrix-green drop-shadow-glow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col mt-4 space-y-4 text-lg font-mono text-center bg-cyber-bg/95 p-4 rounded-xl border border-matrix-green/20 shadow-glow animate-fade-in">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-cyber-accent transition-colors">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-cyber-accent transition-colors">About</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-cyber-accent transition-colors">Projects</Link>
          <Link to="/education" onClick={() => setIsOpen(false)} className="hover:text-cyber-accent transition-colors">Education</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)} className="hover:text-cyber-accent transition-colors">Skills</Link>
          <Link to="/certifications" onClick={() => setIsOpen(false)} className="hover:text-cyber-accent transition-colors">Certifications</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-cyber-accent transition-colors">Contact</Link>
          <a
            href="/public/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-2 rounded-lg bg-matrix-green text-cyber-bg font-mono font-bold shadow-glow hover:bg-cyber-accent hover:text-cyber-bg transition-all border border-matrix-green/60"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
