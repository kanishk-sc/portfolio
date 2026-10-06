const skillGroups = [
  { label: "Languages", items: "Python · SQL · Java · TypeScript · JavaScript · C#" },
  { label: "Full-stack & backend", items: "React · FastAPI · Spring Boot · REST APIs · SQLAlchemy · HTML/CSS · Authentication · API integration" },
  { label: "Data & AI", items: "PostgreSQL · MySQL · MongoDB · Redis · Pandas · NumPy · scikit-learn · Spark · Kafka · Airflow · dbt · pgvector · OpenAI API · Claude API" },
  { label: "Cloud & DevOps", items: "AWS EC2/S3 · Azure · Docker · Linux · Git · GitHub Actions · CI/CD" },
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
