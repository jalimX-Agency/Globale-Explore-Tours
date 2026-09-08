import Script from "next/script";

// Trustpilot's own "Automate review invitations" integration key — public by design (visible
// in any page's source once installed), same reasoning as the hardcoded GTM_ID in
// GoogleTagManager.tsx, so no env var indirection here either.
const TRUSTPILOT_KEY = "3z5MogxXOObBEKq8";

// Trustpilot's official snippet, ported to next/script. Trustpilot's own docs say to place
// this "as high in <head> as possible" — same placement logic as GoogleTagManagerScript, so
// it lives next to it in the root layout's <head>.
export function TrustpilotWidgetScript() {
  return (
    <Script id="trustpilot-widget" strategy="afterInteractive">
      {`(function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},
a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;f=d.getElementsByTagName(s)[0];
f.parentNode.insertBefore(a,f)})(window,document,'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp');
tp('register', '${TRUSTPILOT_KEY}');`}
    </Script>
  );
}
