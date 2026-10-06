import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Software · Data · AI Engineering</p>
          <h1 id="hero-title">Kanishk Singh Chauhan</h1>
          <p className="hero-statement">I build reliable systems that turn messy inputs into explainable, testable workflows.</p>
          <p className="hero-summary">
            My work spans full-stack applications, streaming data platforms, and explainable AI workflows—with
            validation, automated tests, and clear failure handling. Based in Tampa, FL, and open to relocation across the U.S.
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
