# Verification Summary

## Current information architecture

- Section order: Experience → Certifications → Writing → Capabilities → About → Contact.
- The Work / Selected Work section, anchor, navigation item, component, and related styles have been removed.
- LinkedIn is the only direct contact method.

## Experience

- Four public-safe records appear in reverse chronological order.
- Display labels are timezone-safe fixed calendar months:
  - TD Bank: Feb 2026 – Present
  - BDO Digital: Jan 2024 – Jan 2026
  - Canada Life: Jan 2023 – May 2023
  - Citicorp Services: Aug 2020 – Aug 2022
- Each record uses semantic `time` elements, an official employer link, one summary, and two compact scope/focus bullets.

## Certifications and writing

- Certifications remain text-only. No Google or Microsoft trademark asset is displayed without a safely sourced local asset and documented source.
- Writing contains three verified Medium articles. The GCP multi-agent article is the featured record.
- External employer and Medium links open in a new tab with `rel="noreferrer"` and descriptive accessible names.

## Accessibility and presentation

- The skip link targets the focusable main landmark.
- Interactive controls have visible focus states and 44px minimum targets where required.
- Light/dark theme preference persists in local storage and defaults to the system preference.
- Reduced-motion rules disable nonessential animation and transitions.
- The editorial layout has no content cards, shadows, or gradients.

## Build

- `npm run build` passed from `apps/web` after the Experience-first revision.
- Manual browser checks remain appropriate for Firefox, Safari, screen readers, external destinations subject to anti-bot controls, 320px width, and 200% zoom.
