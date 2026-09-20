import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["Python", "SQL", "Java", "TypeScript", "JavaScript", "C#"] },
  { category: "Backend & Full Stack", items: ["FastAPI", "React", "REST APIs", "SQLAlchemy", "PostgreSQL", "MySQL", "MongoDB", "Authentication", "API Integration"] },
  { category: "Data & AI", items: ["Apache Spark", "Airflow", "dbt", "Pandas", "NumPy", "scikit-learn", "ETL/ELT", "Data Modeling", "OpenAI API", "Claude API", "LangChain", "NLP"] },
  { category: "Cloud & DevOps", items: ["AWS (EC2, S3)", "Azure", "Docker", "Git", "GitHub", "GitHub Actions", "CI/CD", "Linux", "Redis", "Kafka", "RabbitMQ", "Celery"] },
];

export default function Skills() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10 text-center relative overflow-hidden mt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-mono font-bold code-glow mb-8">Skills</h1>
        <div className="space-y-8">
          {skills.map((cat) => (
            <div key={cat.category} className="bg-cyber-bg/80 border border-matrix-green/20 rounded-xl shadow-glow p-6">
              <h2 className="text-xl font-mono font-bold text-cyber-accent mb-4">{cat.category}</h2>
              <ul className="flex flex-wrap justify-center gap-3" aria-label={`${cat.category} skills`}>
                {cat.items.map((skill, i) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="rounded bg-cyber-accent/20 px-3 py-2 font-mono text-sm text-cyber-accent"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
