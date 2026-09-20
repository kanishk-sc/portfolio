# Kanishk's Portfolio

A responsive React portfolio that presents selected engineering work through a small,
inspectable static application. The current project view links directly to PulseForge,
FreightIQ and ApplyPilot so visitors can evaluate the source, tests and technical decisions
behind each product.

## Implemented experience

- Route-based pages for the profile, projects, education, skills, certifications and contact details
- Responsive desktop and mobile navigation with visible keyboard focus and a skip link
- Direct, working links to the resume and the three featured GitHub repositories
- A contact page that points to public LinkedIn and GitHub profiles without collecting visitor data
- Reduced-motion support for the animated interface and matrix background
- A reproducible locked installation plus CI-enforced lint and production builds

## Stack

React 18, React Router, Framer Motion, Tailwind CSS, Vite and ESLint.

The application is client-only. It has no server, database, analytics integration or message relay.

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
npm run build
```

The GitHub Actions workflow runs the same clean installation, lint and production-build path
for pull requests and pushes to `main`.

## Accessibility

Navigation is keyboard operable, icon-only controls have accessible names, headings follow the
page structure, focus remains visible, and motion is reduced when the operating system requests
it. The responsive layout has also been checked at desktop and 390-pixel mobile widths.

## Limitations

- No production URL is documented in the repository, and this maintenance work does not claim that a hosted environment is current or supported.
- Hosts must provide a single-page-application fallback for direct navigation to nested routes.
- There is no automated component or end-to-end test suite; current automation covers linting and production builds.
- Resume, education, skill and certification content is maintained by the repository owner and is not independently validated by the application.
