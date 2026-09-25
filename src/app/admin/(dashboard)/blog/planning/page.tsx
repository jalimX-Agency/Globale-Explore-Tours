import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import { AdminBreadcrumb } from "@/components/admin/breadcrumb";
import { PlanningClient, type TopicRow } from "./planning-client";

// The editorial calendar the daily publishing routine works through — see the BlogTopic model.
export default async function BlogPlanningPage() {
  let topics: TopicRow[] | null = null;
  try {
    topics = await db.blogTopic.findMany({ orderBy: [{ order: "asc" }, { createdAt: "asc" }] });
  } catch (err) {
    // P2021: the BlogTopic table doesn't exist yet — the schema was deployed without running
    // `prisma db push` against this database.
    if (!(err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2021")) throw err;
  }

  const planned = topics?.filter((t) => t.status === "planned").length ?? 0;
  const published = topics?.filter((t) => t.status === "published").length ?? 0;

  return (
    <div className="space-y-6">
      <AdminBreadcrumb
        items={[{ label: "Tableau de bord", href: "/admin" }, { label: "Blog", href: "/admin/blog" }, { label: "Planning" }]}
      />
      <PageHeader
        title="Planning du blog"
        description={
          topics
            ? `${planned} sujet${planned > 1 ? "s" : ""} à venir · ${published} publié${published > 1 ? "s" : ""} · un article publié automatiquement chaque jour à 7h00`
            : "Configuration requise"
        }
      />
      {topics ? (
        <PlanningClient topics={topics} />
      ) : (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
          La table du planning n&apos;existe pas encore dans la base de données. Exécutez une fois{" "}
          <code className="rounded bg-amber-100 px-1.5 py-0.5">npx prisma db push</code> avec le{" "}
          <code className="rounded bg-amber-100 px-1.5 py-0.5">DATABASE_URL</code> de production, puis rechargez cette page.
        </div>
      )}
    </div>
  );
}
