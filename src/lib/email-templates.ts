// Shared email shell — mirrors the site's own brand tokens (see src/app/globals.css) using
// email-safe fallbacks: Oswald isn't available in most mail clients, so headings use the same
// "Arial Narrow" fallback the site's own .font-display rule already falls back to. Table-based
// markup + inline styles throughout — the only layout approach that renders consistently across
// Gmail, Outlook and Apple Mail.

const BASE_URL = "https://www.globaleexploretours.com";

const COLOR = {
  ink: "#1a1a1a",
  inkSoft: "#5c5c5c",
  paper: "#ffffff",
  sand: "#f6f4ef",
  line: "#e8e4dc",
  accent: "#e93423",
  accentDark: "#c22318",
} as const;

const FONT_DISPLAY = "'Arial Narrow', Arial, sans-serif";
const FONT_BODY = "Helvetica, Arial, sans-serif";

export function emailHeading(text: string): string {
  return `<h1 style="margin:0 0 20px; font-family:${FONT_DISPLAY}; font-weight:700; text-transform:uppercase; letter-spacing:0.04em; font-size:24px; line-height:1.25; color:${COLOR.ink};">${text}</h1>`;
}

export function emailParagraph(text: string): string {
  return `<p style="margin:0 0 16px; font-family:${FONT_BODY}; font-size:15px; line-height:1.65; color:${COLOR.inkSoft};">${text}</p>`;
}

export function emailEyebrow(text: string): string {
  return `<p style="margin:0 0 8px; font-family:${FONT_BODY}; font-weight:600; text-transform:uppercase; letter-spacing:0.12em; font-size:11px; color:${COLOR.accent};">${text}</p>`;
}

// A bulletproof table-based button — background color on the <td>, not the <a>, so it still
// renders as a solid block in Outlook's Word-based rendering engine.
export function emailButton(label: string, href: string): string {
  return `
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 4px;">
  <tr>
    <td style="background-color:${COLOR.ink}; border-radius:3px;">
      <a href="${href}" style="display:inline-block; padding:13px 28px; font-family:${FONT_BODY}; font-weight:600; text-transform:uppercase; letter-spacing:0.08em; font-size:12px; color:${COLOR.paper}; text-decoration:none;">${label}</a>
    </td>
  </tr>
</table>`;
}

// A two-column "receipt" row — reused for booking/contact detail summaries (tour, date,
// guests, phone...). Renders as a definition list even where the client strips table styling.
export function emailDetailRow(label: string, value: string): string {
  return `
<tr>
  <td style="padding:10px 0; border-bottom:1px solid ${COLOR.line}; font-family:${FONT_BODY}; font-weight:600; text-transform:uppercase; letter-spacing:0.06em; font-size:11px; color:${COLOR.inkSoft}; white-space:nowrap; vertical-align:top;">${label}</td>
  <td style="padding:10px 0 10px 16px; border-bottom:1px solid ${COLOR.line}; font-family:${FONT_BODY}; font-size:14px; color:${COLOR.ink}; vertical-align:top;">${value}</td>
</tr>`;
}

export function emailDetailTable(rows: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0;">${rows}</table>`;
}

const FOOTER_TEXT: Record<"fr" | "en" | "es", string> = {
  fr: "Voyages et circuits sur-mesure dans le monde entier",
  en: "Tailor-made trips and tours worldwide",
  es: "Viajes y circuitos a medida en todo el mundo",
};

export function renderEmailShell({
  previewText,
  bodyHtml,
  language = "fr",
}: {
  previewText: string;
  bodyHtml: string;
  language?: "fr" | "en" | "es";
}): string {
  return `<!DOCTYPE html>
<html lang="${language}">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="color-scheme" content="light" />
</head>
<body style="margin:0; padding:0; background-color:${COLOR.sand}; font-family:${FONT_BODY};">
  <!-- Preheader: hidden preview text shown in the inbox list, never in the rendered email -->
  <div style="display:none; max-height:0; overflow:hidden; opacity:0; font-size:1px; line-height:1px; color:${COLOR.sand};">${previewText}</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLOR.sand};">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; background-color:${COLOR.paper}; border-radius:4px; overflow:hidden;">
          <tr><td style="height:4px; background-color:${COLOR.accent}; line-height:4px; font-size:0;">&nbsp;</td></tr>
          <tr>
            <td align="center" style="padding:36px 32px 8px;">
              <img src="${BASE_URL}/logo.png" width="56" height="54" alt="Globale Explore Tours" style="display:block; border:0;" />
            </td>
          </tr>
          <tr>
            <td style="padding:16px 40px 40px;">
              ${bodyHtml}
            </td>
          </tr>
        </table>

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
          <tr>
            <td align="center" style="padding:24px 24px 0; font-family:${FONT_BODY}; font-size:12px; line-height:1.7; color:#9a9a9a;">
              <strong style="color:#7a7a7a;">Globale Explore Tours</strong> — ${FOOTER_TEXT[language]}<br />
              5 Avenue du Sénateur Girard, 59300 Valenciennes, France<br />
              <a href="mailto:contact@globaleexploretours.com" style="color:#9a9a9a; text-decoration:underline;">contact@globaleexploretours.com</a>
              &nbsp;·&nbsp;
              <a href="tel:+33667586462" style="color:#9a9a9a; text-decoration:underline;">+33 6 67 58 64 62</a>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;
}
