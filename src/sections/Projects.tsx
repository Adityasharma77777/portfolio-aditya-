import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="03 // Projects"
          title="Featured Work"
          description="A mix of security tooling and foundational computer science projects."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
