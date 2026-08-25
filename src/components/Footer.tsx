import { Github, Linkedin, Mail, ShieldCheck } from "lucide-react";
import Container from "./Container";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="relative border-t py-10" style={{ borderColor: "var(--color-border)" }}>
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <div className="mono-tag flex items-center gap-2 text-sm font-bold text-white">
            <ShieldCheck className="h-4 w-4" style={{ color: "var(--color-accent)" }} />
            {profile.name}
          </div>
          <p className="mono-tag text-xs" style={{ color: "var(--color-text-dim)" }}>
            Cybersecurity • Development • Research
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <Github className="h-5 w-5 transition-colors hover:text-[var(--color-accent)]" style={{ color: "var(--color-text-muted)" }} />
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <Linkedin className="h-5 w-5 transition-colors hover:text-[var(--color-accent)]" style={{ color: "var(--color-text-muted)" }} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Send an email">
            <Mail className="h-5 w-5 transition-colors hover:text-[var(--color-accent)]" style={{ color: "var(--color-text-muted)" }} />
          </a>
        </div>

        <p className="mono-tag text-xs" style={{ color: "var(--color-text-dim)" }}>
          © 2026 {profile.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
