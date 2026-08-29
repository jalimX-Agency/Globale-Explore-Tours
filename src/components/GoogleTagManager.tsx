import Script from "next/script";

// GTM-K63W6HCH — client-provided container ID, installed directly (GTM IDs are public by
// design, always visible in any page's source, so no env var indirection needed here).
const GTM_ID = "GTM-K63W6HCH";

// Next.js's own recommended pattern for GTM: a `next/script` tag with `afterInteractive`
// fires early enough to match GTM's "as high in <head> as possible" requirement while still
// participating in Next's script-loading/hydration lifecycle — see
// https://nextjs.org/docs/app/guides/third-party-libraries#google-tag-manager
export function GoogleTagManagerScript() {
  return (
    <Script id="gtm-script" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}

// The <noscript> fallback must be genuine markup right after <body> opens — it can't be
// injected by next/script (which is JS-driven), so it's rendered directly in the layout.
export function GoogleTagManagerNoscript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
