const skillGroups = [
  { label: "Languages", items: "Python · SQL · Java · TypeScript · JavaScript · C#" },
  { label: "Backend & product", items: "FastAPI · React · REST APIs · SQLAlchemy · PostgreSQL · MySQL · MongoDB · Authentication" },
  { label: "Data & AI", items: "Spark · Airflow · dbt · Pandas · NumPy · scikit-learn · ETL/ELT · Data modeling · OpenAI · Claude · LangChain" },
  { label: "Cloud & delivery", items: "AWS EC2/S3 · Azure · Docker · GitHub Actions · Linux · Redis · Kafka · RabbitMQ · Celery" },
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
