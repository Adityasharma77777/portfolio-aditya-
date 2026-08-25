import { Award } from "lucide-react";
import type { CertificationItem } from "../data/timeline";
import Reveal from "./Reveal";

export default function CertificationCard({ cert, index }: { cert: CertificationItem; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <div
        className="card-glass flex h-full flex-col gap-4 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
      >
        <div
          className="flex h-11 w-11 items-center justify-center rounded-lg border"
          style={{ borderColor: "var(--color-accent-2)", background: "var(--color-accent-2-soft)" }}
        >
          <Award className="h-5 w-5" style={{ color: "var(--color-accent-2)" }} aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-base font-bold text-white sm:text-lg">{cert.title}</h3>
          <p className="mt-1 text-sm" style={{ color: "var(--color-text-muted)" }}>
            {cert.issuer}
          </p>
        </div>
        <span
          className="mono-tag mt-auto w-fit rounded-md border px-2.5 py-1 text-[11px]"
          style={{ borderColor: "var(--color-border-strong)", color: "var(--color-text-dim)" }}
        >
          {cert.year}
        </span>
      </div>
    </Reveal>
  );
}
