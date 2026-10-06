const experience = [
  { role: "IT Support Intern – Classroom Technology", organization: "University of South Florida · Information Technology", dates: "Oct 2026 – Present", description: "Troubleshoot classroom technology, collaboration software, audio/video systems, and connectivity issues for faculty and students. Monitor alerts, investigate failures, document recurring issues and resolutions, and coordinate with Classroom AV Operations to restore services." },
  { role: "AI & Data Engineering Intern", organization: "Eximiuz Technologies", dates: "Jun 2026 – Aug 2026", description: "Built Python, FastAPI, and SQL-backed services, integrated OpenAI and Claude APIs for structured workflows, and supported delivery through automated tests and GitHub Actions. Worked remotely on REST APIs, validation logic, and ETL workflows; debugged services using logs, SQL, tests, and root-cause analysis. Automated testing and deployment and documented implementation decisions. The updated résumé also describes collaboration with staff and a 70+ member organization on Python automation that reduced recurring manual effort by approximately 25%." },
  { role: "Student Engagement Leader", organization: "Digital Engagement Center", dates: "Aug 2023 – May 2026", description: "Supported a 70+ member operation and built Python automation that reduced recurring manual effort by approximately 25%." },
];

export default function About() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="section-shell experience-layout">
        <div className="section-heading experience-intro">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-title">Building across software and operations.</h2>
          <p>Practical experience developing data-backed services, integrating AI APIs, automating recurring work, and supporting technical operations.</p>
        </div>
        <ol className="timeline">
          {experience.map((item) => (
            <li key={`${item.organization}-${item.role}`}>
              <div className="timeline-meta"><span>{item.dates}</span></div>
              <div className="timeline-copy">
                <h3>{item.role}</h3>
                <p className="organization">{item.organization}</p>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
