import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import SecurityInterestCard from "../components/SecurityInterestCard";
import { securityInterests } from "../data/interests";

export default function SecurityFocus() {
  return (
    <section className="relative py-24" style={{ background: "var(--color-bg-raised)" }}>
      <div className="grid-backdrop opacity-60" />
      <Container className="relative">
        <SectionHeading
          eyebrow="04 // Research"
          title="Security Research & Interests"
          description="The areas of security I study and build around most consistently."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {securityInterests.map((interest, i) => (
            <SecurityInterestCard key={interest.id} interest={interest} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
