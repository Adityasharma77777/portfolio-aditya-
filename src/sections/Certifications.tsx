import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import CertificationCard from "../components/CertificationCard";
import { certifications } from "../data/timeline";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="07 // Certifications"
          title="Certifications"
          description="Placeholder cards below — edit src/data/timeline.ts to add your real certifications."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <CertificationCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
