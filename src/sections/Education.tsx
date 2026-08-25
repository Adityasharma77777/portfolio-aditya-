import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Timeline from "../components/Timeline";
import { education } from "../data/timeline";

export default function Education() {
  const entries = education.map((item) => ({
    id: item.id,
    title: item.degree,
    subtitle: `${item.institution} · CGPA: ${item.cgpa}`,
    period: item.period,
    content: (
      <div>
        <p className="mono-tag mb-2 text-xs uppercase" style={{ color: "var(--color-text-dim)" }}>
          Relevant Coursework
        </p>
        <ul className="flex flex-wrap gap-2">
          {item.coursework.map((course) => (
            <li
              key={course}
              className="mono-tag rounded-md border px-2.5 py-1 text-[12px]"
              style={{ borderColor: "var(--color-border-strong)", background: "var(--color-surface-2)" }}
            >
              {course}
            </li>
          ))}
        </ul>
      </div>
    ),
  }));

  return (
    <section id="education" className="relative py-24" style={{ background: "var(--color-bg-raised)" }}>
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="06 // Education"
          title="Academic Background"
          description="Institution and CGPA are placeholders — edit src/data/timeline.ts with your real details."
        />
        <Timeline entries={entries} />
      </Container>
    </section>
  );
}
