import type { SkillGroup } from "../data/skills";
import Reveal from "./Reveal";

export default function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <div className="card-glass group h-full rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]">
        <div className="mono-tag mb-1 text-xs" style={{ color: "var(--color-text-dim)" }}>
          {String(index + 1).padStart(2, "0")}
        </div>
        <h3 className="mb-2 text-lg font-bold text-white">{group.title}</h3>
        <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          {group.description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <li
              key={item}
              className="mono-tag rounded-md border px-2.5 py-1 text-[12px]"
              style={{
                borderColor: "var(--color-border-strong)",
                color: "var(--color-text-muted)",
                background: "var(--color-surface-2)",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
