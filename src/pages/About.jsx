import React from "react";
import { motion } from "framer-motion";

// List of 'Kanishk Singh Chauhan' in various languages/scripts
const names = [
  { text: "Kanishk Singh Chauhan", style: "font-mono text-cyber-accent" },
  { text: "कनिष्क सिंह चौहान", style: "font-mono text-matrix-green" },
  { text: "Канишк Сингх Чаухан", style: "font-mono text-cyber-accent" }, // Russian
  { text: "كانيشك سينغ تشوهان", style: "font-mono text-matrix-green" }, // Arabic
  { text: "カニシュク・シン・チャウハン", style: "font-mono text-cyber-accent" }, // Japanese Katakana
  { text: "Κανίσκ Σινγκ Τσάουχαν", style: "font-mono text-matrix-green" }, // Greek
  { text: "ਕਨਿਸ਼ਕ ਸਿੰਘ ਚੌਹਾਨ", style: "font-mono text-cyber-accent" }, // Punjabi
  { text: "கனிஷ்க் சிங் சௌஹான்", style: "font-mono text-matrix-green" }, // Tamil
  { text: "কনিষ্ক সিংহ চৌহান", style: "font-mono text-cyber-accent" }, // Bengali
  { text: "کنیشک سنگھ چوہان", style: "font-mono text-matrix-green" }, // Urdu
  { text: "กนิษฐ์ ซิงห์ เชาฮาน", style: "font-mono text-cyber-accent" }, // Thai
  { text: "קנישק סינג צ'אוהאן", style: "font-mono text-matrix-green" }, // Hebrew
];

export default function About() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 text-center relative overflow-hidden">
      {/* Animated multilingual name background */}
      <div className="absolute inset-0 z-20 pointer-events-none select-none">
        {names.map((n, i) => {
          // Center the first two rows, spread the rest
          let style = {};
          if (i < 2) {
            style = {
              top: `${8 + i * 7}%`,
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              maxWidth: '80vw',
              opacity: 0.7, // Brighter
              filter: 'drop-shadow(0 0 24px #39FF14)', // Stronger glow
            };
          } else {
            const isLeft = i % 2 === 0;
            const top = 22 + (i - 2) * 6;
            style = {
              top: `${top}%`,
              left: isLeft ? '2%' : '65%',
              textAlign: isLeft ? 'left' : 'right',
              maxWidth: '40vw',
              opacity: 0.32,
            };
          }
          return (
            <motion.div
              key={n.text}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: style.opacity, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              className={`absolute text-2xl md:text-4xl lg:text-5xl font-bold ${n.style} drop-shadow-[0_0_12px_#39FF14]`}
              style={{
                ...style,
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                userSelect: 'none',
                zIndex: 20,
              }}
            >
              {n.text}
            </motion.div>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-cyber-bg/5 backdrop-blur-sm px-8 py-10 rounded-xl shadow-glow space-y-8 flex flex-col items-center border border-matrix-green/30 max-w-2xl relative z-30 mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold code-glow mb-4">About Me</h2>
        <p className="text-lg md:text-xl font-mono text-matrix-green mb-6">
          Hi! I’m Kanishk, an aspiring Data Analyst & Security Enthusiast passionate about uncovering insights and building secure, data-driven solutions. I love exploring new technologies, solving problems, and learning about cybersecurity and analytics.
        </p>
        {/* Animated Skills & Timeline */}
        <div className="w-full flex flex-col md:flex-row gap-8 mt-8">
          {/* Skills */}
          <div className="flex-1 bg-cyber-bg/60 border border-matrix-green/10 rounded-lg p-4">
            <h4 className="font-mono text-cyber-accent text-lg mb-3">Skills</h4>
            <ul className="space-y-2 text-left">
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="text-matrix-green font-mono">Python, JavaScript, C++</motion.li>
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="text-matrix-green font-mono">Data Analysis (Pandas, Power BI, SQL)</motion.li>
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="text-matrix-green font-mono">Security Tools (Wireshark, Nmap, Burp Suite)</motion.li>
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="text-matrix-green font-mono">Machine Learning (K-Means, Logistic Regression, ARIMA)</motion.li>
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="text-matrix-green font-mono">Cloud & ETL (Snowflake, SSIS, AWS)</motion.li>
            </ul>
          </div>
          {/* Timeline */}
          <div className="flex-1 bg-cyber-bg/60 border border-matrix-green/10 rounded-lg p-4">
            <h4 className="font-mono text-cyber-accent text-lg mb-3">Timeline</h4>
            <ul className="space-y-2 text-left">
              <motion.li initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="text-cyber-accent font-mono">2022: Started B.S. in Information Technology at USF</motion.li>
              <motion.li initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="text-cyber-accent font-mono">2023: Built LawyerUp chatbot, Canvas Clone, and analytics dashboards</motion.li>
              <motion.li initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="text-cyber-accent font-mono">2024: Focused on security, ML, and cloud projects</motion.li>
              <motion.li initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="text-cyber-accent font-mono">2026: Expected Graduation</motion.li>
            </ul>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
