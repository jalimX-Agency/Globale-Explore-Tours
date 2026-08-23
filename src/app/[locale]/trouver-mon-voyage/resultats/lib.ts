// Plain helpers shared by page.tsx (server) and actions.ts ("use server") — kept out of
// actions.ts because a "use server" file may only export async functions; everything else
// (constants, types, sync helpers) has to live elsewhere.
export const TRIP_FINDER_PAGE_SIZE = 12;

export type TripFinderSort = "recommended" | "price-asc" | "price-desc";

export function tripFinderWhere(feeling?: string, when?: string) {
  return {
    ...(feeling && { feeling }),
    ...(when && { OR: [{ bestMonths: "" }, { bestMonths: { contains: when } }] }),
  };
}

export function tripFinderOrderBy(sort: TripFinderSort) {
  if (sort === "price-asc") return [{ price: "asc" as const }];
  if (sort === "price-desc") return [{ price: "desc" as const }];
  return [{ order: "asc" as const }];
}
