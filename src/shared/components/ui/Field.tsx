import { ReactNode } from "react";

export function FieldError({ id, children }: { id: string; children?: ReactNode }) {
  if (!children) return null;
  return <p id={id} role="alert" className="mt-1 text-xs text-destructive">{children}</p>;
}

export function FieldHint({ id, children }: { id: string; children?: ReactNode }) {
  if (!children) return null;
  return <p id={id} className="mt-1 text-xs text-muted-foreground">{children}</p>;
}

export function FieldRow({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>;
}

export function SectionCard({ title, icon, children }: { title: string; icon?: ReactNode; children: ReactNode }) {
  return (
    <section className="mt-6 rounded-xl border border-border/60 bg-card/40 p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        {icon}
        <h3 className="text-base font-semibold leading-none tracking-tight">{title}</h3>
      </div>
      {children}
    </section>
  );
}

export function Prefix({ children }: { children: ReactNode }) {
  return (
    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
      {children}
    </span>
  );
}

export function InputShell({ children }: { children: ReactNode }) {
  return <div className="relative">{children}</div>;
}
