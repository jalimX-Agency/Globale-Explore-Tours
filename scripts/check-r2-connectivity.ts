// `export {}` forces TS to treat this file as a module (its own scope) rather than a global
// script — without it, `main` below would be a *global* declaration, colliding with any other
// script in this folder that also has no top-level static import and its own `main`.
export {};

// ESM hoists static `import` statements above any other top-level code in this file — so a
// static import of a module that reads `process.env.*` at its own top level (like
// src/lib/r2.ts) would evaluate BEFORE loadEnvFile() below ever runs, no matter where the
// import line appears in this file's source. Dynamic `import()` is a real expression
// evaluated at its exact point in control flow, so it's the only reliable way to guarantee
// env vars are loaded first. Every entry-point script in this folder should follow this
// same pattern.
process.loadEnvFile(".env");

async function main() {
  const { uploadToR2, deleteFromR2 } = await import("../src/lib/r2");
  const key = `_connectivity-check/${Date.now()}.txt`;
  console.log(`Uploading test key: ${key}`);
  await uploadToR2(key, Buffer.from("connectivity check"), "text/plain", "no-store");
  console.log("Upload OK. Deleting...");
  await deleteFromR2(key);
  console.log("Delete OK. R2 write access confirmed from this environment.");
}

main().catch((err) => {
  console.error("R2 connectivity check FAILED:", err);
  process.exit(1);
});
