const contactLinks = [
  { label: "Email", value: "kanishksingh@usf.edu", href: "mailto:kanishksingh@usf.edu" },
  { label: "LinkedIn", value: "kanishksinghchauhan", href: "https://linkedin.com/in/kanishksinghchauhan", external: true },
  { label: "GitHub", value: "kanishk-sc", href: "https://github.com/kanishk-sc", external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="section-shell contact-layout">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let’s talk about the work.</h2>
          <p>For engineering roles and project conversations, use email or one of the verified public profiles below. This site does not collect form submissions.</p>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:kanishksingh@usf.edu">Send an email</a>
            <a className="button button-outline-light" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View résumé<span className="sr-only"> PDF, opens in a new tab</span>
            </a>
          </div>
        </div>
        <dl className="contact-list">
          {contactLinks.map((link) => (
            <div key={link.label}>
              <dt>{link.label}</dt>
              <dd><a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>{link.value}{link.external ? <span className="sr-only"> Opens in a new tab</span> : null}</a></dd>
            </div>
          ))}
        </dl>
      </div>
      <footer className="site-footer section-shell">
        <p>Kanishk Singh Chauhan</p><p>Software · Data · AI Engineering</p>
      </footer>
    </section>
  );
}
