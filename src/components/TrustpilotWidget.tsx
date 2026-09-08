// Trustpilot's own "Automate review invitations" integration key — public by design (visible
// in any page's source once installed), same reasoning as the hardcoded GTM_ID in
// GoogleTagManager.tsx, so no env var indirection here either.
const TRUSTPILOT_KEY = "3z5MogxXOObBEKq8";

// Deliberately NOT next/script: Trustpilot's domain-verification crawler fetches the raw HTML
// and looks for a literal <script> tag — it does not execute JavaScript, so next/script's
// afterInteractive strategy (which ships the tag inside the RSC payload and injects it into
// the DOM only after client-side hydration) is invisible to it. This renders as a genuine
// <script> element already present in the server-sent HTML, matching Trustpilot's own install
// instructions ("add this code to the <head> of your website's HTML source").
export function TrustpilotWidgetScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},
a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;f=d.getElementsByTagName(s)[0];
f.parentNode.insertBefore(a,f)})(window,document,'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp');
tp('register', '${TRUSTPILOT_KEY}');`,
      }}
    />
  );
}
