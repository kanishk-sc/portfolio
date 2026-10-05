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

## Next visual priorities

1. Add verified screenshots from the actual local applications alongside the illustrative stories. This would make product interface quality easier to judge; screenshots should be captured from reproducible sample data and clearly labeled.
2. Shorten the visible implementation paragraphs in project cards, with technical detail available in the walkthrough or source. Keep the outcome and status visible.
3. Offer optional expanded demo viewing if visitor testing shows the small diagram labels remain hard to read. Do not make the illustrations interactive controls or introduce extra diagram tab stops.
4. Consider merging Approach into project-specific implementation evidence to shorten the page; retain valid section links if navigation is consolidated.

## Verification boundaries

Component tests include axe-core checks, timer cleanup, keyboard tabs, focus restoration, reduced-motion static controls, and a résumé SHA-256 guard. Browser review checks all fifteen frames at 1440, 768, and 390 pixel widths. Automated component axe checks run in jsdom and exclude color contrast; they do not substitute for real-screen contrast review or a screen-reader audit. No Lighthouse score, field Core Web Vitals, live-provider validation, or production deployment of these changes is claimed.
