# Portfolio visual and demo audit

Reviewed the public portfolio and its three illustrative project stories at desktop, tablet, and mobile widths. The visual direction remains a restrained engineering portfolio; project facts and the public résumé are unchanged.

## Improvements in this review

- Removed the full-viewport hero minimum so selected work appears sooner.
- Made project walkthrough buttons a clear primary action and removed card lifting/shadows.
- Replaced the tall mobile stage list with a compact two-column selector, retaining accessible current-stage text and project-tab keyboard behavior.
- Put Previous/Next next to playback controls, above the illustration.
- Increased automatic frame duration from 1.65 to 3.5 seconds. Manual selection, pause, resume, replay, reduced-motion controls, and synthetic-data disclosure remain available.
- Raised small secondary demo labels and corrected the narrow Spark validation layout.
- Scroll the full walkthrough header into view when opening, while focusing its heading and restoring the originating button on close.

## Real interface evidence

Captured the actual local interfaces at 1440 × 1100 on October 5, 2026. These are interface captures, not evidence of public deployments or newly verified provider workflows.

| Capture | Provenance and boundary |
| --- | --- |
| PulseForge | Existing local dashboard image connected to the local API. Retained synthetic records; the dashboard's stale-analytics warning remains visible. No fresh-data or benchmark claim. |
| FreightIQ | Local frontend upload screen in its initial state. No document submitted, provider called, or audit result asserted. |
| ApplyPilot | Existing local Streamlit image, Analyze screen in its initial state. No résumé uploaded or provider/matching result asserted. |

Project cards now use concise architecture summaries and one project-specific engineering decision. Full implementation descriptions remain in the walkthrough. The repeated Approach section and navigation item were consolidated into this evidence; `/approach` and `/#approach` still lead to selected work. Outcomes, status, personal facts, source links, and the résumé are preserved.

## Next visual priority

Offer optional expanded demo viewing if visitor testing shows the small diagram labels remain hard to read. Do not make the illustrations interactive controls or introduce extra diagram tab stops. The new application screenshots can already be opened at full resolution.

## Verification boundaries

Component tests include axe-core checks, timer cleanup, keyboard tabs, focus restoration, reduced-motion static controls, and a résumé SHA-256 guard. Browser review checks all fifteen frames at 1440, 768, and 390 pixel widths. Automated component axe checks run in jsdom and exclude color contrast; they do not substitute for real-screen contrast review or a screen-reader audit. No Lighthouse score, field Core Web Vitals, live-provider validation, or production deployment of these changes is claimed.
