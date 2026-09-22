# Kanishk's Portfolio

A focused engineering portfolio for evaluating Kanishk Singh Chauhan's backend, data, and
AI work. The site presents PulseForge, FreightIQ, and ApplyPilot with their outcomes,
architecture, implementation scope, source repositories, and current limitations.

## Implemented experience

- A single recruiter-focused narrative: positioning, flagship work, engineering approach,
  experience, education, technical range, and contact options
- Detailed project cards with direct links to the corresponding public source repositories
- User-controlled product vignettes that demonstrate each flagship project's synthetic
  input, implemented transformation boundaries, and representative result without backend calls
- A stable `/resume.pdf` download and verified email, LinkedIn, and GitHub links
- Legacy route redirects for `/projects`, `/about`, `/education`, `/skills`, and `/contact`
- Responsive layouts, semantic landmarks, visible keyboard focus, and reduced-motion support
- A reproducible locked installation plus CI-enforced lint and production builds

## Stack

React 18, React Router, Vite, ESLint, and maintainable plain CSS.

The application is client-only. It has no server, database, analytics integration, contact
form, or message relay.

## Local setup

Use Node.js 20.19 or newer.

```sh
npm ci
npm run dev
```

Vite prints the local development URL. The checked-in `package-lock.json` is the source of
truth for clean installations.

## Verification

```sh
npm run lint
npm test
npm run build
npm audit --audit-level=low
```

The GitHub Actions workflow runs the same clean installation, lint, component-test, and
production-build path for pull requests and pushes to `main`.

## Accessibility

The page uses semantic sections and heading order, provides a skip link, keeps controls keyboard
operable, exposes clear focus states, and removes nonessential motion when the operating system
requests reduced motion. Each product vignette is user-controlled, has a concise accessible title
and stage-specific description, and retains the complete textual stage explanation as its
alternative. Reduced-motion visitors use static first/final frames instead of automatic playback.
Layout checks cover desktop, tablet, and mobile widths.

## Limitations

- The featured systems are source-available portfolio projects designed for local reproduction;
  the site does not claim hosted deployments, production usage, or benchmark results.
- The checked-in Netlify redirect provides the single-page-application fallback; other static
  hosts need an equivalent rewrite for nested routes.
- Focused component tests cover the project walkthrough and playback state machine; the portfolio does not yet have
  a broader end-to-end browser suite.
- Résumé, education, experience, and skill content is maintained by the repository owner and is
  not independently validated by the application.
