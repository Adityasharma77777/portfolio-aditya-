import { Trophy } from "lucide-react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { achievements } from "../data/timeline";

export default function Achievements() {
  return (
    <section className="relative py-24" style={{ background: "var(--color-bg-raised)" }}>
      <Container>
        <SectionHeading
          eyebrow="08 // Achievements"
          title="Achievements"
          description="Hackathons, competitions, CTFs and academic recognition — edit src/data/timeline.ts to add real entries."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <div className="card-glass flex h-full flex-col gap-3 rounded-xl p-6">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4" style={{ color: "var(--color-warn)" }} />
                  <span className="mono-tag text-[11px] uppercase" style={{ color: "var(--color-text-dim)" }}>
                    {item.category}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
