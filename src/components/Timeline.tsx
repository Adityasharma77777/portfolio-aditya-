import type { ReactNode } from "react";
import Reveal from "./Reveal";

export interface TimelineEntry {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  content: ReactNode;
}

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative space-y-10 border-l pl-8" style={{ borderColor: "var(--color-border-strong)" }}>
      {entries.map((entry, i) => (
        <li key={entry.id} className="relative">
          <Reveal delay={i * 0.1}>
            <span
              className="absolute -left-[38px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2"
              style={{ borderColor: "var(--color-accent)", background: "var(--color-bg)" }}
              aria-hidden="true"
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-accent)" }} />
            </span>

            <div className="mono-tag mb-1 text-xs" style={{ color: "var(--color-accent-2)" }}>
              {entry.period}
            </div>
            <h3 className="text-lg font-bold text-white sm:text-xl">{entry.title}</h3>
            <p className="mt-0.5 text-sm font-medium" style={{ color: "var(--color-text-muted)" }}>
              {entry.subtitle}
            </p>
            <div className="mt-3 text-sm leading-relaxed sm:text-base" style={{ color: "var(--color-text-muted)" }}>
              {entry.content}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
