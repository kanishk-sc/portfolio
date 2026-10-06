const skillGroups = [
  { label: "Languages", items: "Python · SQL · Java · TypeScript · JavaScript · C#" },
  { label: "Backend & product", items: "FastAPI · React · REST APIs · SQLAlchemy · PostgreSQL · MySQL · MongoDB · Authentication · Spring Boot · HTML/CSS · API integration" },
  { label: "Data & AI", items: "Spark · Airflow · dbt · Pandas · NumPy · scikit-learn · ETL/ELT · Data modeling · OpenAI · Claude · LangChain · pgvector" },
  { label: "Cloud & delivery", items: "AWS EC2/S3 · Azure · Docker · GitHub Actions · Linux · Redis · Kafka · RabbitMQ · Celery · Git · CI/CD" },
  { label: "Engineering & AI tools", items: "Automated and integration testing · Data modeling · Logging · Debugging · Root-cause analysis · Technical documentation · Codex · Claude Code · Cursor" },
];

export default function Skills() {
  return (
    <article className="background-card skills-card">
      <p className="card-label">Technical range</p>
      <h3>Tools used to build and operate the work.</h3>
      <dl className="skills-list">
        {skillGroups.map((group) => <div key={group.label}><dt>{group.label}</dt><dd>{group.items}</dd></div>)}
      </dl>
    </article>
  );
}
