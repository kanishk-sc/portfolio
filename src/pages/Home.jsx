import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";

const principles = [
  { index: "01", title: "Trace the data path", copy: "Make inputs, transformations, storage boundaries, and outputs inspectable from end to end." },
  { index: "02", title: "Validate model output", copy: "Keep business rules deterministic and use AI where it adds leverage—not where certainty is required." },
  { index: "03", title: "Design for failure", copy: "Expose job states, validation errors, and recovery paths instead of hiding them behind a happy path." },
  { index: "04", title: "Ship reproducibly", copy: "Keep environments containerized and verification close to the source with automated quality gates." },
];

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Software · Data · AI Engineering</p>
          <h1 id="hero-title">Kanishk Singh Chauhan</h1>
          <p className="hero-statement">I build reliable systems that turn messy inputs into explainable, testable workflows.</p>
          <p className="hero-summary">
            My work spans streaming data, asynchronous document processing, and evidence-grounded AI—implemented
            with explicit validation, observable failure states, and reproducible local environments.
          </p>
          <div className="hero-actions" role="group" aria-label="Primary actions">
            <a className="button button-primary" href="#work">View flagship work</a>
            <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Open résumé<span className="sr-only"> PDF, opens in a new tab</span>
            </a>
          </div>
        </div>
        <aside className="hero-brief" aria-label="Engineering profile">
          <p className="brief-label">Current focus</p>
          <p className="brief-title">Systems with evidence built in.</p>
          <dl className="brief-list">
            <div><dt>Build</dt><dd>Backend services, data platforms, AI-assisted products</dd></div>
            <div><dt>Prioritize</dt><dd>Clear contracts, deterministic checks, durable state</dd></div>
            <div><dt>Work with</dt><dd>Python, FastAPI, PostgreSQL, React, streaming systems</dd></div>
          </dl>
        </aside>
      </section>

      <Projects />

      <section id="approach" className="section section-muted" aria-labelledby="approach-title">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Engineering approach</p><h2 id="approach-title">Evidence over spectacle.</h2></div>
            <p>The work is organized around explicit system behavior: what enters, what changes, what can fail, and how the result is verified.</p>
          </div>
          <ol className="principles-grid">
            {principles.map((principle) => (
              <li key={principle.index}>
                <span className="principle-index">{principle.index}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </li>
            ))}
          </ol>
          <p className="scope-note">These are source-available portfolio systems designed for local reproduction; none is presented as a production deployment.</p>
        </div>
      </section>

      <About />

      <section id="background" className="section section-muted" aria-labelledby="background-title">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Background</p><h2 id="background-title">Education and technical range.</h2></div>
            <p>A compact view of the academic foundation and tools reflected across the work above.</p>
          </div>
          <div className="background-grid"><Education /><Skills /></div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
