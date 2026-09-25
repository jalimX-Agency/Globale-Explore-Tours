import Link from "next/link";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/admin/page-header";
import { AdminBreadcrumb } from "@/components/admin/breadcrumb";
import { BlogTable } from "./blog-table";
import { CalendarDays, Plus } from "lucide-react";

export default async function BlogListPage() {
  const posts = await db.blogPost.findMany({
    orderBy: { order: "asc" },
    take: 500,
    select: { id: true, title: true, category: true, author: true, image: true, order: true },
  });

  return (
    <div className="space-y-6">
      <AdminBreadcrumb items={[{ label: "Tableau de bord", href: "/admin" }, { label: "Blog" }]} />
      <PageHeader
        title="Blog"
        description={`${posts.length} article${posts.length > 1 ? "s" : ""}`}
        action={
          <div className="flex gap-2">
            <Button variant="outline" render={<Link href="/admin/blog/planning" />} nativeButton={false}>
              <CalendarDays className="size-3.5" />
              Planning
            </Button>
            <Button render={<Link href="/admin/blog/new" />} nativeButton={false}>
              <Plus className="size-3.5" />
              Nouvel article
            </Button>
          </div>
        }
      />
      <BlogTable data={posts} />
    </div>
  );
}
