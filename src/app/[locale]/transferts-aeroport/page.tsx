import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transferts aéroport",
};

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="label-eyebrow text-neutral-400">En construction</p>
        <h1 className="font-display text-3xl mt-2">Transferts aéroport</h1>
      </div>
    </main>
  );
}
