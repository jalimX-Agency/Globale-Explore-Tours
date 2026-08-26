import Link from "next/link";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/admin/page-header";
import { AdminBreadcrumb } from "@/components/admin/breadcrumb";
import { ExperiencesTable } from "./experiences-table";
import { Plus } from "lucide-react";

export default async function ExperiencesListPage() {
  const experienceTypes = await db.experienceType.findMany({
    where: { parentId: null },
    orderBy: { order: "asc" },
    take: 500,
    select: {
      id: true,
      slug: true,
      heroTitle: true,
      kind: true,
      travelerTypeKey: true,
      filterTheme: true,
      cardImage: true,
      order: true,
      updatedAt: true,
      _count: { select: { children: true } },
    },
  });

  return (
    <div className="space-y-6">
      <AdminBreadcrumb items={[{ label: "Tableau de bord", href: "/admin" }, { label: "Expériences" }]} />
      <PageHeader
        title="Expériences"
        description={`${experienceTypes.length} expériences`}
        action={
          <Button render={<Link href="/admin/experiences/new" />} nativeButton={false}>
            <Plus className="size-3.5" />
            Nouvelle expérience
          </Button>
        }
      />

      <ExperiencesTable data={experienceTypes} />
    </div>
  );
}
