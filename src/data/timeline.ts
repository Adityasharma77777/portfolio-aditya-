// ─────────────────────────────────────────────────────────────
// EXPERIENCE / EDUCATION / CERTIFICATIONS / ACHIEVEMENTS
// All entries below are placeholders — replace with real details.
// Nothing here is a fabricated fact; every entry is clearly marked.
// ─────────────────────────────────────────────────────────────

export interface ExperienceItem {
  id: string;
  role: string;
  org: string; // PLACEHOLDER
  period: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    id: "exp-internship",
    role: "Cybersecurity Internship",
    org: "Organization Name", // TODO: replace with real organization
    period: "2026",
    description:
      "Worked on cybersecurity concepts, security analysis, networking and practical security projects.",
  },
  {
    id: "exp-research",
    role: "Research / Technical Work",
    org: "Independent / Academic", // TODO: replace with real organization if applicable
    period: "2026",
    description:
      "Explored cybersecurity, unmanned systems, network security and emerging security technologies.",
  },
];

export interface EducationItem {
  id: string;
  degree: string;
  institution: string; // PLACEHOLDER
  period: string;
  cgpa: string; // PLACEHOLDER
  coursework: string[];
}

export const education: EducationItem[] = [
  {
    id: "edu-btech",
    degree: "Bachelor's Degree — Computer Science / Cybersecurity",
    institution: "University / College Name", // TODO: replace with real institution
    period: "202X – Present",
    cgpa: "X.XX / 10", // TODO: replace with real CGPA
    coursework: [
      "Computer Networks",
      "Database Management Systems",
      "Theory of Computation",
      "Microprocessors & Interfaces",
      "Discrete Mathematics",
      "Cybersecurity Fundamentals",
    ],
  },
];

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string; // PLACEHOLDER
  year: string;
}

export const certifications: CertificationItem[] = [
  {
    id: "cert-cyber",
    title: "Cybersecurity Certification",
    issuer: "Issuing Organization", // TODO: replace
    year: "Year", // TODO: replace
  },
  {
    id: "cert-network",
    title: "Networking Certification",
    issuer: "Issuing Organization", // TODO: replace
    year: "Year", // TODO: replace
  },
  {
    id: "cert-ethical",
    title: "Ethical Hacking Certification",
    issuer: "Issuing Organization", // TODO: replace
    year: "Year", // TODO: replace
  },
];

export interface AchievementItem {
  id: string;
  category: "Hackathons" | "Cybersecurity Competitions" | "CTFs" | "Technical Events" | "Research" | "Academic";
  title: string; // PLACEHOLDER
  description: string; // PLACEHOLDER
}

export const achievements: AchievementItem[] = [
  {
    id: "ach-hackathon",
    category: "Hackathons",
    title: "Hackathon name", // TODO: replace
    description: "Brief description of your participation or result.", // TODO: replace
  },
  {
    id: "ach-ctf",
    category: "CTFs",
    title: "CTF / competition name", // TODO: replace
    description: "Brief description of your participation or result.", // TODO: replace
  },
  {
    id: "ach-academic",
    category: "Academic",
    title: "Academic achievement", // TODO: replace
    description: "Brief description of the achievement.", // TODO: replace
  },
];
