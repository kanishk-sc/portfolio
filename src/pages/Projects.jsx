import { useEffect, useRef, useState } from "react";
import ArchitectureWalkthrough from "../components/ArchitectureWalkthrough";

const projects = [
  {
    slug: "pulseforge",
    title: "PulseForge",
    category: "Streaming analytics platform",
    outcome: "Turns synthetic commerce and logistics events into tested warehouse models and an operations dashboard.",
    implemented: "Versioned event production, Kafka and Spark processing, idempotent PostgreSQL sinks, dbt marts, Airflow orchestration, typed FastAPI endpoints, and the React dashboard.",
    tech: ["Kafka", "Spark", "PostgreSQL", "dbt", "Airflow", "FastAPI", "React"],
    status: "Reproducible with Docker Compose using synthetic data. No hosted deployment or benchmark claim.",
    source: "https://github.com/kanishk-sc/pulseforge",
    trace: ["Events", "Process", "Model", "Serve"],
    stages: [
      { title: "Ingest", description: "Kafka receives versioned synthetic commerce and logistics events." },
      { title: "Process", description: "Spark validates and transforms streaming records, preserving rejected evidence with explicit failure reasons." },
      { title: "Persist", description: "PostgreSQL stores idempotent structured results while MinIO keeps lossless raw and validated object data." },
      { title: "Model", description: "dbt produces analytical models and Airflow coordinates scheduled analytics, quality, and retention workflows." },
      { title: "Serve", description: "Typed FastAPI endpoints, the React dashboard, and API observability surfaces expose operational state." },
    ],
    walkthroughStatus: "Locally verified platform implementation using synthetic data. No hosted cloud environment or benchmark is claimed.",
  },
  {
    slug: "freightiq",
    title: "FreightIQ",
    category: "Document intelligence workflow",
    outcome: "Turns freight-invoice PDFs into validated, reviewable records with durable job states and an operator-facing review flow.",
    implemented: "FastAPI upload API, Celery job lifecycle, typed Claude extraction boundary, deterministic invoice audit, PostgreSQL and MinIO persistence, and a React reviewer.",
    tech: ["FastAPI", "PostgreSQL", "Celery", "MinIO", "TypeScript", "React", "Docker"],
    status: "Runs locally with Docker Compose; extraction requires a user-supplied Claude API key. No hosted demo.",
    source: "https://github.com/kanishk-sc/freightiq",
    trace: ["Upload", "Extract", "Audit", "Review"],
    stages: [
      { title: "Upload", description: "The FastAPI application accepts a freight-invoice PDF and creates a processing job." },
      { title: "Store & queue", description: "MinIO stores the document, Redis brokers work to Celery, and PostgreSQL keeps durable job state." },
      { title: "Extract", description: "The Claude integration converts document text into schema-validated structured invoice fields." },
      { title: "Audit", description: "Deterministic application logic validates invoice arithmetic and identifies discrepancies for review." },
      { title: "Review", description: "PostgreSQL persists results and job state for the API and React review interface." },
    ],
    walkthroughStatus: "The provider boundary and workflow are implemented and tested. No production deployment or accuracy claim is made here.",
  },
  {
    slug: "applypilot",
    title: "ApplyPilot",
    category: "Evidence-grounded AI assistant",
    outcome: "Compares a résumé with a role using explainable coverage signals and vector similarity, then grounds optional generation in résumé evidence.",
    implemented: "FastAPI parsing and matching services, pgvector similarity, explicit hybrid scoring, grounded drafts, and a Streamlit client.",
    tech: ["FastAPI", "pgvector", "PostgreSQL", "Streamlit", "Docker"],
    status: "Runs locally with Docker Compose. Tests mock OpenAI calls; no hosted demo or ATS-accuracy claim.",
    source: "https://github.com/kanishk-sc/applypilot",
    trace: ["Parse", "Represent", "Score", "Explain"],
    stages: [
      { title: "Parse", description: "The application parses résumé files into text and sections, and accepts structured job-description content." },
      { title: "Represent", description: "The OpenAI provider client creates fixed-dimension semantic representations for each résumé and job." },
      { title: "Compare", description: "PostgreSQL with pgvector compares the stored résumé and job embeddings using cosine similarity." },
      { title: "Score", description: "Hybrid matching combines semantic similarity with skills, keyword, and experience-alignment signals." },
      { title: "Explain", description: "The result exposes matched and missing evidence; optional generated drafts are grounded in parsed résumé sections." },
    ],
    walkthroughStatus: "Locally verified matching workflow with mocked provider calls in tests. No ATS-accuracy or production claim is made here.",
  },
];

export default function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const [motionIntent, setMotionIntent] = useState("instant");
  const originButtonRef = useRef(null);
  const walkthroughHeadingRef = useRef(null);
  const shouldFocusWalkthroughRef = useRef(false);

  useEffect(() => {
    if (selectedProjectIndex === null || !shouldFocusWalkthroughRef.current) return;
    shouldFocusWalkthroughRef.current = false;
    walkthroughHeadingRef.current?.focus({ preventScroll: true });
    walkthroughHeadingRef.current?.scrollIntoView({ block: "nearest" });
  }, [selectedProjectIndex]);

  const openWalkthrough = (projectIndex, button) => {
    originButtonRef.current = button;
    shouldFocusWalkthroughRef.current = true;
    setMotionIntent("instant");
    setSelectedStageIndex(0);
    setSelectedProjectIndex(projectIndex);
  };

  const selectProject = (projectIndex, intent = "instant") => {
    setMotionIntent(intent);
    setSelectedProjectIndex(projectIndex);
    setSelectedStageIndex(0);
  };

  const selectStage = (stageIndex, intent = "instant") => {
    setMotionIntent(intent);
    setSelectedStageIndex(stageIndex);
  };

  const closeWalkthrough = () => {
    setSelectedProjectIndex(null);
    originButtonRef.current?.focus();
  };

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
                <div className="project-trace">
                  <h4>System trace</h4>
                  <ol aria-label={`${project.title} system trace`}>
                    {project.trace.map((stage) => <li key={stage}>{stage}</li>)}
                  </ol>
                </div>
                <div>
                  <h4>Core stack</h4>
                  <ul className="tag-list" aria-label={`${project.title} core stack`}>
                    {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                </div>
              </div>
              <footer className="project-footer">
                <p><span className="status-dot" aria-hidden="true" />{project.status}</p>
                <div className="project-actions">
                  <a href={project.source} target="_blank" rel="noopener noreferrer">
                    View source<span className="sr-only"> for {project.title}, opens in a new tab</span>
                  </a>
                  <button
                    type="button"
                    aria-expanded={selectedProjectIndex === index}
                    aria-controls="architecture-walkthrough"
                    onClick={(event) => openWalkthrough(index, event.currentTarget)}
                  >
                    Explore system<span className="sr-only"> for {project.title}</span>
                  </button>
                </div>
              </footer>
            </article>
          ))}
        </div>
        {selectedProjectIndex !== null ? (
          <ArchitectureWalkthrough
            projects={projects}
            selectedProjectIndex={selectedProjectIndex}
            selectedStageIndex={selectedStageIndex}
            headingRef={walkthroughHeadingRef}
            onClose={closeWalkthrough}
            onProjectChange={selectProject}
            onStageChange={selectStage}
            motionIntent={motionIntent}
          />
        ) : null}
      </div>
    </section>
  );
}
