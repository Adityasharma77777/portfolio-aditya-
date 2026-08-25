import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24" style={{ background: "var(--color-bg-raised)" }}>
      <Container>
        <SectionHeading
          eyebrow="02 // Skills"
          title="Toolkit"
          description="Grouped by domain — from core programming to the concepts behind modern detection and response."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.id} group={group} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
