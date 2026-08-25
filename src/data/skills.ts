// ─────────────────────────────────────────────────────────────
// SKILLS DATA
// Add or remove entries from any category as your skillset grows.
// No proficiency percentages are used — items are grouped by category only.
// ─────────────────────────────────────────────────────────────

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    title: "Programming",
    description: "Languages used for systems, tooling and application logic.",
    items: ["Python", "C", "C++", "JavaScript", "Swift"],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Core security domains I actively study and apply.",
    items: [
      "Ethical Hacking",
      "Network Security",
      "Threat Detection",
      "Incident Response",
      "SOC Operations",
      "Digital Forensics",
      "Security Automation",
    ],
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    description: "Platforms and frameworks used to build and ship.",
    items: ["Linux", "Git", "GitHub", "Docker", "FastAPI", "REST APIs", "React"],
  },
  {
    id: "concepts",
    title: "Security Concepts",
    description: "Frameworks and data formats behind detection & response.",
    items: [
      "SIEM",
      "IDS/IPS",
      "Logs & Telemetry",
      "IOC Analysis",
      "Sigma Rules",
      "STIX/TAXII",
      "SOAR",
      "Threat Intelligence",
    ],
  },
];
