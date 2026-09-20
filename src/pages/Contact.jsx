import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:kanishksingh@usf.edu",
    description: "Send a direct professional inquiry.",
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kanishksinghchauhan",
    description: "Connect for professional conversations and opportunities.",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/kanishk-sc",
    description: "Review the source, tests, and engineering decisions behind my work.",
    external: true,
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-24 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl mx-auto bg-cyber-bg/80 backdrop-blur-lg px-6 sm:px-8 py-10 rounded-xl shadow-glow border border-matrix-green/20"
      >
        <h1 className="text-3xl md:text-4xl font-mono font-bold code-glow mb-4">Contact</h1>
        <p className="text-cyber-accent font-mono mb-8">
          The site does not collect form submissions. Use email or one of these verified public profiles.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="rounded-lg border border-matrix-green/30 bg-cyber-bg/60 p-5 text-left transition hover:border-cyber-accent hover:bg-cyber-accent/10"
            >
              <span className="block text-xl font-bold text-matrix-green">{link.label}</span>
              <span className="mt-2 block text-sm text-cyber-accent">{link.description}</span>
              {link.external ? <span className="sr-only"> Opens in a new tab.</span> : null}
            </a>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
