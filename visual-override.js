/*
 * Hirundo — override.css generator
 * Publii concatenates this AFTER the built-in GDPR cookie-popup CSS, so it is
 * the right place to re-skin the cookie banner. We only redefine the popup's
 * own --pcb-* tokens (plus fonts / pill buttons) using the theme's brand
 * variables, so the banner tracks the colour-pickers automatically.
 */
var generateOverride = function () {
    return `
/* ---------- Cookie banner (Publii GDPR popup) — Hirundo brand ---------- */
:root {
   --pcb-bg: #ffffff;
   --pcb-overlay: rgba(27, 36, 52, 0.72);
   --pcb-text-color: #2a2d35;
   --pcb-headings-color: var(--navy);
   --pcb-border-color: var(--ink-line);
   --pcb-bg-light: var(--navy-soft);

   --pcb-btn-primary-bg: var(--navy-soft);
   --pcb-btn-primary-bg-hover: var(--navy-line);
   --pcb-btn-primary-text: var(--navy);
   --pcb-btn-primary-text-hover: var(--navy);

   --pcb-btn-secondary-bg: var(--gold);
   --pcb-btn-secondary-bg-hover: var(--gold-600);
   --pcb-btn-secondary-text: var(--navy-900);
   --pcb-btn-secondary-text-hover: var(--navy-900);

   --pcb-btn-link: var(--navy);
   --pcb-btn-link-hover: var(--gold-700);

   --pcb-badge-bg: var(--navy);
   --pcb-badge-bg-hover: var(--navy-800);
   --pcb-badge-color: var(--gold);
   --pcb-badge-color-hover: var(--gold);

   --pcb-border-radius: 12px;
}
.pcb { font-family: var(--font-sans); }
.pcb__title, .pcb__popup__heading {
   font-family: var(--font-serif); font-weight: 500; letter-spacing: -0.01em;
}
.pcb__btn { border-radius: 999px; font-weight: 600; }
.pcb__badge { box-shadow: 0 10px 26px -10px rgba(27, 36, 52, 0.5); }
`;
};

module.exports = generateOverride;
