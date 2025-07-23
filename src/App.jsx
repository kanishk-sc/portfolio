import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";

// MatrixRainBackground component (copied from Home)
function MatrixRainBackground() {
  const canvasRef = React.useRef(null);
  const isPaused = React.useRef(false);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const fontSize = 18;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);
    const matrixChars = "अआइईउऊऋएऐओऔकखगघचछजझटठडढतथदधनपफबभमयरलवशषसहABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789कनिष्कसिंहचौहान";

    let frame = 0;
    const speed = 1; // Lower = faster
    function draw() {
      ctx.fillStyle = "rgba(15, 17, 26, 0.15)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = fontSize + "px Fira Mono, monospace";
      ctx.fillStyle = "#39FF14";
      if (!isPaused.current) {
        for (let i = 0; i < drops.length; i++) {
          const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          if (frame % speed === 0) {
            drops[i]++;
          }
        }
        frame++;
      }
      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', handleResize);

    function handleMouseDown() {
      isPaused.current = true;
    }
    function handleMouseUp() {
      isPaused.current = false;
    }
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-bg"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none', opacity: 0.25 }}
    />
  );
}

export default function App() {
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="dark bg-cyber-bg min-h-screen relative">
      <MatrixRainBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
