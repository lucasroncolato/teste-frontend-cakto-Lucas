import { Skeleton } from "../ui/Skeleton";


export function ProductFormSkeleton() {
    return (
        <div className="mt-4 space-y-6">
            <section className="rounded-xl border border-border/60 bg-card/40 p-5 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-5 w-28" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    
                    <div>
                        <Skeleton className="h-4 w-24 mb-2" />
                        <Skeleton className="h-10 w-full rounded-lg" />
                    </div>
                    
                    <div>
                        <Skeleton className="h-4 w-16 mb-2" />
                        <Skeleton className="h-10 w-full rounded-lg" />
                    </div>

                    <div className="sm:col-span-2">
                        <Skeleton className="h-4 w-10 mb-2" />
                        <Skeleton className="h-10 w-full rounded-lg" />
                    </div>
                </div>

                {/* Termos */}
                <div className="mt-4 rounded-lg border border-border/60 bg-background/40 p-3">
                    <div className="flex items-start gap-3">
                        <Skeleton className="h-4 w-4 rounded-[4px]" />
                        <div className="space-y-1">
                            <Skeleton className="h-4 w-40" />
                            <Skeleton className="h-3 w-56" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="rounded-xl border border-border/60 bg-card/40 p-5 shadow-sm">
                <Skeleton className="h-5 w-32 mb-4" />
                <div className="space-y-3">
                    <Skeleton className="h-12 w-full rounded-lg" />
                    <Skeleton className="h-12 w-full rounded-lg" />
                </div>
                <Skeleton className="mt-4 h-14 w-full rounded-lg" />
            </section>

            <section className="rounded-xl border border-border/60 bg-card/40 p-5 shadow-sm">
                <Skeleton className="h-5 w-36 mb-4" />
                <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-20" />
                    </div>
                    <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-16" />
                    </div>
                    <div className="mt-2 border-t border-border/60 pt-2 flex items-center justify-between">
                        <Skeleton className="h-4 w-12" />
                        <Skeleton className="h-5 w-24" />
                    </div>
                    <Skeleton className="mt-3 h-10 w-full rounded-lg" />
                </div>

                <Skeleton className="mt-4 h-12 w-full rounded-lg" />
                <div className="mt-2 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-3 w-20" />
                </div>
            </section>
        </div>
    );
}
