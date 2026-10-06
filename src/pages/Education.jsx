export default function Education() {
  return (
    <article className="background-card education-card">
      <p className="card-label">Education</p>
      <h3>University of South Florida</h3>
      <p className="degree">Bachelor of Science in Information Technology</p>
      <dl className="education-facts">
        <div><dt>Timeline</dt><dd>Aug 2022 – Dec 2026</dd></div>
        <div><dt>Graduation</dt><dd>Expected Dec 2026</dd></div>
        <div><dt>GPA</dt><dd>3.55 / 4.00</dd></div>
      </dl>
      <p className="coursework">Coursework includes data structures and algorithms, software engineering, operating systems, distributed systems, advanced databases, computer networks, and machine learning.</p>
    </article>
  );
}
