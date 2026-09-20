import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Education", "/education"],
  ["Skills", "/skills"],
  ["Certifications", "/certifications"],
  ["Contact", "/contact"],
];

function navLinkClass({ isActive }) {
  return `transition-colors hover:text-cyber-accent ${isActive ? "text-cyber-accent" : ""}`;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      aria-label="Primary"
      className="bg-cyber-bg shadow-lg px-2 py-2 md:px-4 md:py-3 fixed top-0 left-0 w-full z-50 border-b border-matrix-green/30 backdrop-blur-md"
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link
          to="/"
          className="text-2xl font-mono font-bold code-glow select-none"
          aria-label="Kanishk Singh Chauhan portfolio home"
        >
          Kanishk&apos;s Portfolio
        </Link>

        <div className="hidden lg:flex space-x-6 text-lg font-mono">
          {navItems.map(([label, path]) => (
            <NavLink key={path} to={path} className={navLinkClass} end={path === "/"}>
              {label}
            </NavLink>
          ))}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-4 py-2 rounded-lg bg-matrix-green text-cyber-bg font-mono font-bold shadow-glow hover:bg-cyber-accent hover:text-cyber-bg transition-all animate-glow hidden lg:inline-block border border-matrix-green/60"
        >
          View resume
          <span className="sr-only"> (PDF, opens in a new tab)</span>
        </a>

        <button
          type="button"
          className="lg:hidden ml-2 rounded p-2"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <svg
            aria-hidden="true"
            className="w-7 h-7 text-matrix-green drop-shadow-glow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="lg:hidden flex flex-col mt-4 space-y-4 text-lg font-mono text-center bg-cyber-bg/95 p-4 rounded-xl border border-matrix-green/20 shadow-glow animate-fade-in"
        >
          {navItems.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={navLinkClass}
              end={path === "/"}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-2 rounded-lg bg-matrix-green text-cyber-bg font-mono font-bold shadow-glow hover:bg-cyber-accent hover:text-cyber-bg transition-all border border-matrix-green/60"
          >
            View resume
            <span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
        </div>
      ) : null}
    </nav>
  );
}
