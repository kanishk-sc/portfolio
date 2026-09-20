import { motion } from "framer-motion";

const projects = [
  {
    title: "PulseForge",
    description: "A reproducible real-time operations platform that carries synthetic commerce and logistics events through streaming, modeling, APIs, and an operations dashboard.",
    tech: ["Kafka", "Spark", "FastAPI", "dbt", "React"],
    source: "https://github.com/kanishk-sc/pulseforge",
  },
  {
    title: "FreightIQ",
    description: "An asynchronous freight-invoice review workflow with typed extraction, deterministic arithmetic checks, durable job states, and object storage.",
    tech: ["FastAPI", "PostgreSQL", "Celery", "React", "Docker"],
    source: "https://github.com/kanishk-sc/freightiq",
  },
  {
    title: "ApplyPilot",
    description: "An explainable resume-to-role matching workflow that separates deterministic scoring from optional, evidence-grounded generation.",
    tech: ["FastAPI", "pgvector", "Streamlit", "PostgreSQL", "Docker"],
    source: "https://github.com/kanishk-sc/applypilot",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10 text-center relative overflow-hidden mt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-mono font-bold code-glow mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="bg-cyber-bg/80 border border-matrix-green/20 rounded-xl shadow-glow p-4 sm:p-6 flex flex-col items-start text-left hover:shadow-2xl hover:border-cyber-accent transition-all w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto"
            >
              <h2 className="text-xl sm:text-2xl font-mono font-bold code-glow mb-2">{project.title}</h2>
              <p className="text-matrix-green font-mono mb-3 text-sm sm:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5" aria-label={`${project.title} technology`}>
                {project.tech.map((technology) => (
                  <span key={technology} className="px-2 py-1 bg-cyber-accent/20 text-cyber-accent font-mono rounded text-xs">
                    {technology}
                  </span>
                ))}
              </div>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto font-mono font-bold text-cyber-accent underline decoration-transparent underline-offset-4 hover:decoration-current"
              >
                View source
                <span className="sr-only"> for {project.title} (opens in a new tab)</span>
              </a>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
