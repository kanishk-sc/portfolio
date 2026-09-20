const projects = [
  {
    title: "PulseForge",
    category: "Streaming analytics platform",
    outcome: "Turns synthetic commerce and logistics events into tested warehouse models and an operations dashboard.",
    implemented: "Versioned event production, Kafka and Spark processing, idempotent PostgreSQL sinks, dbt marts, Airflow orchestration, typed FastAPI endpoints, and the React dashboard.",
    tech: ["Kafka", "Spark", "PostgreSQL", "dbt", "Airflow", "FastAPI", "React"],
    status: "Reproducible with Docker Compose using synthetic data. No hosted deployment or benchmark claim.",
    source: "https://github.com/kanishk-sc/pulseforge",
  },
  {
    title: "FreightIQ",
    category: "Document intelligence workflow",
    outcome: "Turns freight-invoice PDFs into validated, reviewable records with durable job states and an operator-facing review flow.",
    implemented: "FastAPI upload API, Celery job lifecycle, typed Claude extraction boundary, deterministic invoice audit, PostgreSQL and MinIO persistence, and a React reviewer.",
    tech: ["FastAPI", "PostgreSQL", "Celery", "MinIO", "TypeScript", "React", "Docker"],
    status: "Runs locally with Docker Compose; extraction requires a user-supplied Claude API key. No hosted demo.",
    source: "https://github.com/kanishk-sc/freightiq",
  },
  {
    title: "ApplyPilot",
    category: "Evidence-grounded AI assistant",
    outcome: "Compares a résumé with a role using explainable coverage signals and vector similarity, then grounds optional generation in résumé evidence.",
    implemented: "FastAPI parsing and matching services, pgvector similarity, explicit hybrid scoring, grounded drafts, and a Streamlit client.",
    tech: ["FastAPI", "pgvector", "PostgreSQL", "Streamlit", "Docker"],
    status: "Runs locally with Docker Compose. Tests mock OpenAI calls; no hosted demo or ATS-accuracy claim.",
    source: "https://github.com/kanishk-sc/applypilot",
  },
];

export default function Projects() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="section-shell">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Selected systems</p><h2 id="work-title">Three problems, built end to end.</h2></div>
          <p>Each project emphasizes a different systems problem while keeping architecture, validation, and operating constraints visible in the source.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <header className="project-header">
                <span className="project-number">0{index + 1}</span>
                <p>{project.category}</p>
                <h3>{project.title}</h3>
              </header>
              <div className="project-body">
                <div><h4>Outcome</h4><p className="project-outcome">{project.outcome}</p></div>
                <div><h4>Implemented</h4><p>{project.implemented}</p></div>
                <div>
                  <h4>Core stack</h4>
                  <ul className="tag-list" aria-label={`${project.title} core stack`}>
                    {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                </div>
              </div>
              <footer className="project-footer">
                <p><span className="status-dot" aria-hidden="true" />{project.status}</p>
                <a href={project.source} target="_blank" rel="noopener noreferrer">
                  View source<span className="sr-only"> for {project.title}, opens in a new tab</span>
                </a>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
