import { Github, Code2, GitCommitHorizontal, ArrowUpRight } from "lucide-react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { profile } from "../data/profile";

export default function CodingProfile() {
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeading eyebrow="09 // Code" title="Code. Build. Secure." />

        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass group flex h-full flex-col justify-between rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-lg border"
                    style={{ borderColor: "var(--color-border-strong)", background: "var(--color-surface-2)" }}
                  >
                    <Github className="h-5 w-5 text-white" />
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ color: "var(--color-accent)" }}
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">GitHub Profile</h3>
                <p className="mt-1 text-sm" style={{ color: "var(--color-text-muted)" }}>
                  {profile.social.github.replace("https://", "")}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t pt-5" style={{ borderColor: "var(--color-border)" }}>
                {[
                  { label: "Repositories", value: "—" },
                  { label: "Contributions", value: "—" },
                  { label: "Streak", value: "—" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="mono-tag text-lg font-bold text-white">{stat.value}</div>
                    <div className="mono-tag text-[11px]" style={{ color: "var(--color-text-dim)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={profile.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass group flex h-full flex-col justify-between rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-lg border"
                    style={{ borderColor: "var(--color-accent)", background: "var(--color-accent-soft)" }}
                  >
                    <Code2 className="h-5 w-5" style={{ color: "var(--color-accent)" }} />
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ color: "var(--color-accent)" }}
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">LeetCode Profile</h3>
                <p className="mt-1 text-sm" style={{ color: "var(--color-text-muted)" }}>
                  {profile.social.leetcode.replace("https://", "")}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t pt-5" style={{ borderColor: "var(--color-border)" }}>
                {[
                  { label: "Solved", value: "—" },
                  { label: "Rank", value: "—" },
                  { label: "Contests", value: "—" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="mono-tag text-lg font-bold text-white">{stat.value}</div>
                    <div className="mono-tag text-[11px]" style={{ color: "var(--color-text-dim)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-5">
          <div className="card-glass rounded-xl p-6 sm:p-7">
            <div className="mb-4 flex items-center gap-2">
              <GitCommitHorizontal className="h-4 w-4" style={{ color: "var(--color-accent-2)" }} />
              <span className="mono-tag text-xs uppercase" style={{ color: "var(--color-text-dim)" }}>
                Contribution Activity
              </span>
            </div>
            <div
              className="grid gap-1 overflow-x-auto"
              style={{ gridTemplateColumns: "repeat(52, minmax(0, 1fr))" }}
              aria-hidden="true"
            >
              {Array.from({ length: 364 }).map((_, i) => {
                const intensity = (i * 37) % 5;
                const shades = [
                  "var(--color-surface-2)",
                  "#123522",
                  "#1c5636",
                  "#279e5f",
                  "var(--color-accent)",
                ];
                return (
                  <div
                    key={i}
                    className="h-2.5 w-2.5 rounded-[2px]"
                    style={{ background: shades[intensity] }}
                  />
                );
              })}
            </div>
            <p className="mono-tag mt-4 text-[11px]" style={{ color: "var(--color-text-dim)" }}>
              Placeholder pattern — connect a live GitHub contribution API to make this graph real.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
