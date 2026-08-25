import { Target, Compass, Radar, Flag } from "lucide-react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const PROFILE_ROWS = [
  { icon: Target, label: "Focus", value: "Cybersecurity & Software Development" },
  { icon: Compass, label: "Mindset", value: "Learn • Build • Secure" },
  { icon: Radar, label: "Interests", value: "SOC • Threat Detection • Networking" },
  { icon: Flag, label: "Goal", value: "Become a skilled Cybersecurity Professional" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="01 // About"
          title="Understanding systems to defend them"
        />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed sm:text-lg" style={{ color: "var(--color-text-muted)" }}>
              <p>
                I'm a Computer Science and Cybersecurity student who enjoys understanding
                how systems actually work — from the way packets move across a network to
                the way an application can quietly fail under the wrong input. That
                curiosity is what pulled me toward security: finding the gap before
                someone else does, and then closing it.
              </p>
              <p>
                My day-to-day interests sit across ethical hacking, security operations,
                threat detection, network security and security automation, alongside a
                steady foundation in software development. I like building things that
                work reliably and thinking about how they could be broken — which usually
                makes the final result stronger on both fronts.
              </p>
              <p>
                Right now that means studying detection pipelines, practicing
                vulnerability assessment, and writing code that turns repetitive security
                work into something automated and dependable.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="card-glass rounded-xl p-6 sm:p-7">
              <div className="mono-tag mb-5 flex items-center justify-between text-xs" style={{ color: "var(--color-text-dim)" }}>
                <span>security_profile.yaml</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-accent)" }} />
                  active
                </span>
              </div>
              <dl className="space-y-5">
                {PROFILE_ROWS.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border"
                      style={{ borderColor: "var(--color-border-strong)", background: "var(--color-surface-2)" }}
                    >
                      <Icon className="h-4 w-4" style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                    </div>
                    <div>
                      <dt className="mono-tag text-[11px] uppercase" style={{ color: "var(--color-text-dim)" }}>
                        {label}
                      </dt>
                      <dd className="mt-0.5 text-sm font-medium text-white sm:text-base">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
