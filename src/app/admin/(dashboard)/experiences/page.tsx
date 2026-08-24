import Link from "next/link";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/admin/page-header";
import { ExperiencesTable } from "./experiences-table";
import { Plus } from "lucide-react";

export default async function ExperiencesListPage() {
  const experienceTypes = await db.experienceType.findMany({
    orderBy: { order: "asc" },
    take: 500,
    select: {
      id: true,
      slug: true,
      heroTitle: true,
      kind: true,
      parentId: true,
      travelerTypeKey: true,
      filterTheme: true,
      filterMonths: true,
      filterDestination: { select: { name: true } },
      order: true,
      _count: { select: { contentBlocks: true, faqs: true } },
    },
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Expériences"
        description={`${experienceTypes.length} pages « Qui voyage », « Que faire » et « Voyage privé »`}
        action={
          <Button render={<Link href="/admin/experiences/new" />} nativeButton={false}>
            <Plus className="size-3.5" />
            Nouvelle page
          </Button>
        }
      />

      <ExperiencesTable data={experienceTypes} />
    </div>
  );
}
