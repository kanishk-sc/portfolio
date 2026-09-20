import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  ["Work", "work"],
  ["Approach", "approach"],
  ["Experience", "experience"],
  ["Background", "background"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary">
        <Link className="wordmark" to="/" aria-label="Kanishk Singh Chauhan portfolio home">
          <span aria-hidden="true">KSC</span>
          <span className="wordmark-name">Kanishk Singh Chauhan</span>
        </Link>
        <button
          type="button"
          className="menu-button"
          aria-expanded={isOpen}
          aria-controls="primary-links"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
        <div id="primary-links" className={`nav-links ${isOpen ? "is-open" : ""}`}>
          {navItems.map(([label, section]) => (
            <a key={section} href={`/#${section}`} onClick={() => setIsOpen(false)}>{label}</a>
          ))}
          <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
            Résumé<span className="sr-only"> PDF, opens in a new tab</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
