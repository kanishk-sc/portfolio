import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const legacyRoutes = {
  "/about": "experience",
  "/projects": "work",
  "/approach": "work",
  "/education": "background",
  "/skills": "background",
  "/contact": "contact",
};

function HashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (!hash) {
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }

      const section = hash === "#approach" ? "work" : hash.slice(1);
      document.getElementById(section)?.scrollIntoView({ block: "start", behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hash, pathname]);

  return null;
}

export default function App() {
  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <HashScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {Object.entries(legacyRoutes).map(([path, section]) => (
          <Route key={path} path={path} element={<Navigate replace to={`/#${section}`} />} />
        ))}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}
