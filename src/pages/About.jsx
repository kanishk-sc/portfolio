import { motion } from "framer-motion";

const names = [
  { text: "Kanishk Singh Chauhan", style: "font-mono text-cyber-accent" },
  { text: "कनिष्क सिंह चौहान", style: "font-mono text-matrix-green" },
  { text: "Канишк Сингх Чаухан", style: "font-mono text-cyber-accent" },
  { text: "كانيشك سينغ تشوهان", style: "font-mono text-matrix-green" },
  { text: "カニシュク・シン・チャウハン", style: "font-mono text-cyber-accent" },
  { text: "Κανίσκ Σινγκ Τσάουχαν", style: "font-mono text-matrix-green" },
  { text: "ਕਨਿਸ਼ਕ ਸਿੰਘ ਚੌਹਾਨ", style: "font-mono text-cyber-accent" },
  { text: "கனிஷ்க் சிங் சௌஹான்", style: "font-mono text-matrix-green" },
  { text: "কনিষ্ক সিংহ চৌহান", style: "font-mono text-cyber-accent" },
  { text: "کنیشک سنگھ چوہان", style: "font-mono text-matrix-green" },
  { text: "กนิษฐ์ ซิงห์ เชาฮาน", style: "font-mono text-cyber-accent" },
  { text: "קנישק סינג צ'אוהאן", style: "font-mono text-matrix-green" },
];

const experience = [
  {
    role: "AI & Data Engineering Intern",
    organization: "Eximiuz Technologies",
    dates: "Jun 2026 - Aug 2026",
    description: "Built Python, FastAPI, and SQL-backed services, integrated OpenAI and Claude APIs for structured workflows, and supported delivery through automated tests and GitHub Actions.",
  },
  {
    role: "Incoming Student AV Technician",
    organization: "University of South Florida - Information Technology",
    dates: "Oct 2026 - Dec 2026",
    description: "Selected for a 20-hour-per-week internship supporting classroom technology, audio-visual operations, and technical incident response.",
  },
  {
    role: "Student Engagement Leader",
    organization: "Digital Engagement Center",
    dates: "Aug 2023 - May 2026",
    description: "Supported a 70+ member operation and built Python automation that reduced recurring manual effort by approximately 25%.",
  },
];

const focusAreas = [
  "Backend APIs with explicit validation and error handling",
  "Streaming, warehouse modeling, and orchestrated data workflows",
  "AI-assisted extraction with deterministic business checks",
  "Containerized delivery with automated lint, build, and test gates",
];

export default function About() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 text-center relative overflow-hidden mt-24">
      <div className="absolute inset-0 z-20 pointer-events-none select-none" aria-hidden="true">
        {names.map((name, index) => {
          let style;
          if (index < 2) {
            style = {
              top: `${8 + index * 7}%`,
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              maxWidth: "80vw",
              opacity: 0.7,
              filter: "drop-shadow(0 0 24px #39FF14)",
            };
          } else {
            const isLeft = index % 2 === 0;
            style = {
              top: `${22 + (index - 2) * 6}%`,
              left: isLeft ? "2%" : "65%",
              textAlign: isLeft ? "left" : "right",
              maxWidth: "40vw",
              opacity: 0.32,
            };
          }

          return (
            <motion.div
              key={name.text}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: style.opacity, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              className={`absolute text-2xl md:text-4xl lg:text-5xl font-bold ${name.style} drop-shadow-[0_0_12px_#39FF14]`}
              style={{ ...style, whiteSpace: "nowrap", zIndex: 20 }}
            >
              {name.text}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-cyber-bg/10 sm:bg-cyber-bg/30 backdrop-blur-sm px-5 sm:px-8 py-10 rounded-xl shadow-glow space-y-8 flex flex-col items-center border border-matrix-green/30 max-w-5xl relative z-30 mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-mono font-bold code-glow">About Me</h1>
        <p className="text-lg md:text-xl font-mono text-matrix-green max-w-3xl">
          I&apos;m a software engineer focused on backend, data, and AI systems. I build testable APIs,
          reproducible data workflows, and AI-assisted applications with validation around important decisions.
        </p>

        <div className="w-full grid gap-8 lg:grid-cols-2 text-left">
          <section className="bg-cyber-bg/60 border border-matrix-green/10 rounded-lg p-5">
            <h2 className="font-mono text-cyber-accent text-xl mb-4">Experience</h2>
            <div className="space-y-5">
              {experience.map((item, index) => (
                <motion.article
                  key={`${item.organization}-${item.role}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="font-mono font-bold text-matrix-green">{item.role}</h3>
                  <p className="font-mono text-sm text-cyber-accent">{item.organization} | {item.dates}</p>
                  <p className="mt-2 text-sm text-matrix-green">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="bg-cyber-bg/60 border border-matrix-green/10 rounded-lg p-5">
            <h2 className="font-mono text-cyber-accent text-xl mb-4">Engineering Focus</h2>
            <ul className="space-y-3">
              {focusAreas.map((area, index) => (
                <motion.li
                  key={area}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="font-mono text-matrix-green"
                >
                  {area}
                </motion.li>
              ))}
            </ul>
          </section>
        </div>
      </motion.div>
    </main>
  );
}
