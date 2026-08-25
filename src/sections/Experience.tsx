import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Timeline from "../components/Timeline";
import { experience } from "../data/timeline";

export default function Experience() {
  const entries = experience.map((item) => ({
    id: item.id,
    title: item.role,
    subtitle: item.org,
    period: item.period,
    content: <p>{item.description}</p>,
  }));

  return (
    <section id="experience" className="relative py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="05 // Experience"
          title="Where I've Applied It"
          description="Entries below use placeholder organizations — edit src/data/timeline.ts to add real experience."
        />
        <Timeline entries={entries} />
      </Container>
    </section>
  );
}
