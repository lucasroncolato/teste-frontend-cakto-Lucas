import { Skeleton } from "@/shared/components/ui/Skeleton";

export function ProductInfoSkeleton() {
  return (
    <section className="mt-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        {/* imagem */}
        <div className="relative w-full sm:w-64 rounded-xl overflow-hidden ring-1 ring-white/10">
          <div className="aspect-[4/3]">
            <Skeleton className="w-full h-full rounded-xl" />
          </div>
        </div>

        {/* texto */}
        <div className="flex flex-1 flex-col">
          <div className="flex gap-2 mb-2">
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-28 rounded-full" />
          </div>

          <Skeleton className="h-6 w-64 rounded-md" />
          <Skeleton className="mt-2 h-5 w-32 rounded-md" />

          <div className="mt-3 space-y-2">
            <Skeleton className="h-4 w-24 rounded-md" />
            <Skeleton className="h-8 w-40 rounded-md" />
            <Skeleton className="h-4 w-48 rounded-md" />
            <Skeleton className="h-4 w-60 rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
