// ─────────────────────────────────────────────────────────────
// SECURITY RESEARCH & INTERESTS DATA
// ─────────────────────────────────────────────────────────────

export interface SecurityInterest {
  id: string;
  title: string;
  description: string;
  icon: "radar" | "shield" | "network" | "workflow" | "fingerprint" | "terminal-square";
}

export const securityInterests: SecurityInterest[] = [
  {
    id: "threat-detection",
    title: "Threat Detection",
    description: "Understanding suspicious behavior, security events and attack patterns.",
    icon: "radar",
  },
  {
    id: "soc-operations",
    title: "SOC Operations",
    description: "Monitoring alerts, analyzing incidents and improving security response.",
    icon: "shield",
  },
  {
    id: "network-security",
    title: "Network Security",
    description: "Understanding network traffic, protocols, vulnerabilities and defensive mechanisms.",
    icon: "network",
  },
  {
    id: "security-automation",
    title: "Security Automation",
    description: "Using Python, APIs and automation workflows to reduce repetitive security operations.",
    icon: "workflow",
  },
  {
    id: "threat-intelligence",
    title: "Threat Intelligence",
    description: "Working with indicators of compromise, threat feeds and enrichment.",
    icon: "fingerprint",
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking",
    description: "Learning vulnerability assessment, penetration testing and defensive security techniques.",
    icon: "terminal-square",
  },
];
