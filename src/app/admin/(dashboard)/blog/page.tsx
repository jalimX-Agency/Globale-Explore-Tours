import Link from "next/link";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/admin/page-header";
import { BlogTable } from "./blog-table";
import { Plus } from "lucide-react";

export default async function BlogListPage() {
  const posts = await db.blogPost.findMany({
    orderBy: { order: "asc" },
    take: 500,
    select: { id: true, title: true, category: true, author: true, order: true },
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Blog"
        description={`${posts.length} article${posts.length > 1 ? "s" : ""}`}
        action={
          <Button render={<Link href="/admin/blog/new" />} nativeButton={false}>
            <Plus className="size-3.5" />
            Nouvel article
          </Button>
        }
      />
      <BlogTable data={posts} />
    </div>
  );
}
