import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import { profile } from "../data/profile";

const CONTACT_LINKS = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "View Profile", href: profile.social.linkedin },
  { icon: Github, label: "GitHub", value: "View Profile", href: profile.social.github },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24" style={{ background: "var(--color-bg-raised)" }}>
      <Container>
        <SectionHeading eyebrow="10 // Contact" title="Let's Build Something Secure" align="left" />

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="space-y-4">
              {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="card-glass flex items-center gap-4 rounded-xl p-5 transition-colors hover:border-[var(--color-accent)]">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border"
                      style={{ borderColor: "var(--color-border-strong)", background: "var(--color-surface-2)" }}
                    >
                      <Icon className="h-4 w-4" style={{ color: "var(--color-accent)" }} />
                    </div>
                    <div>
                      <div className="mono-tag text-[11px] uppercase" style={{ color: "var(--color-text-dim)" }}>
                        {label}
                      </div>
                      <div className="text-sm font-medium text-white">{value}</div>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
