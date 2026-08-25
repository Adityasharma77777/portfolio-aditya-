import { Radar, Shield, Network, Workflow, Fingerprint, TerminalSquare } from "lucide-react";
import type { SecurityInterest } from "../data/interests";
import Reveal from "./Reveal";

const ICONS = {
  radar: Radar,
  shield: Shield,
  network: Network,
  workflow: Workflow,
  fingerprint: Fingerprint,
  "terminal-square": TerminalSquare,
};

export default function SecurityInterestCard({
  interest,
  index,
}: {
  interest: SecurityInterest;
  index: number;
}) {
  const Icon = ICONS[interest.icon];

  return (
    <Reveal delay={index * 0.07}>
      <div
        className="group relative h-full overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1"
        style={{
          borderColor: "var(--color-border)",
          background:
            "linear-gradient(160deg, var(--color-surface) 0%, var(--color-bg-raised) 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "var(--color-accent)" }}
        />
        <div
          className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border"
          style={{ borderColor: "var(--color-accent)", background: "var(--color-accent-soft)" }}
        >
          <Icon className="h-5 w-5" style={{ color: "var(--color-accent)" }} aria-hidden="true" />
        </div>
        <h3 className="text-lg font-bold text-white">{interest.title}</h3>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          {interest.description}
        </p>
      </div>
    </Reveal>
  );
}
