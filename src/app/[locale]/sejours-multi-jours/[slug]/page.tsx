import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Séjour",
};

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="label-eyebrow text-neutral-400">En construction</p>
        <h1 className="font-display text-3xl mt-2">Séjour</h1>
      </div>
    </main>
  );
}
