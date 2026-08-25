import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import type { Project } from "../data/projects";
import Reveal from "./Reveal";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <div
        className={`card-glass group flex h-full flex-col rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
          project.featured ? "lg:col-span-2" : ""
        }`}
        style={{ borderColor: "var(--color-border)" }}
      >
        {project.featured && (
          <span
            className="mono-tag mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px]"
            style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
          >
            FEATURED PROJECT
          </span>
        )}

        <h3 className="text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed sm:text-base" style={{ color: "var(--color-text-muted)" }}>
          {project.description}
        </p>

        {project.features.length > 0 && (
          <ul className={`mt-5 grid gap-2 ${project.featured ? "sm:grid-cols-2" : ""}`}>
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--color-accent)" }} />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="mono-tag rounded-md border px-2.5 py-1 text-[11px]"
              style={{
                borderColor: "var(--color-border-strong)",
                color: "var(--color-accent-2)",
                background: "var(--color-surface-2)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 pt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium text-white transition-colors hover:border-[var(--color-accent)]"
              style={{ borderColor: "var(--color-border-strong)" }}
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-black"
              style={{ background: "var(--color-accent)" }}
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}
