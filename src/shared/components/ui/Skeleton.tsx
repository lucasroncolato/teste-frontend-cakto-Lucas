type Props = { className?: string };

export function Skeleton({ className = "" }: Props) {
  return (
    <div
      className={[
        "animate-pulse rounded-md",
        "bg-white/10 dark:bg-white/5",
        className,
      ].join(" ")}
      aria-hidden
    />
  );
}
