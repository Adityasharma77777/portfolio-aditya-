// ─────────────────────────────────────────────────────────────
// PROJECTS DATA
// Add a new object to this array for every project you want featured.
// Set `github` / `demo` to "" to hide that button on a card.
// ─────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  demo: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "automated-soc",
    title: "Automated SOC — Real-Time Threat Detection & Response",
    description:
      "A cybersecurity platform designed to collect security telemetry, correlate events, detect suspicious behavior, prioritize incidents and automate response actions.",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "Sigma-style Rules",
      "Threat Intelligence",
      "STIX/TAXII",
      "Docker",
      "Linux",
      "REST APIs",
    ],
    features: [
      "Real-time event monitoring",
      "Threat detection engine",
      "Incident prioritization",
      "IOC enrichment",
      "Automated response playbooks",
      "Security dashboard",
    ],
    github: "https://github.com/GITHUB_USERNAME/automated-soc", // TODO: replace
    demo: "",
    featured: true,
  },
  {
    id: "symbol-table",
    title: "Symbol Table Implementation",
    description:
      "A C-based compiler-design project implementing core symbol table operations used during lexical and semantic analysis phases of compilation.",
    tech: ["C", "Data Structures", "Compiler Design"],
    features: ["Insert", "Delete", "Search", "Display"],
    github: "https://github.com/GITHUB_USERNAME/symbol-table", // TODO: replace
    demo: "",
    featured: false,
  },
  {
    id: "char-frequency",
    title: "Character Frequency Analyzer",
    description:
      "A programming utility that analyzes an input string and calculates the frequency of each character, useful as a building block for text-processing and pattern-analysis tasks.",
    tech: ["C / C++", "Data Structures", "String Processing"],
    features: ["Frequency counting", "Character mapping", "Console output"],
    github: "https://github.com/GITHUB_USERNAME/char-frequency-analyzer", // TODO: replace
    demo: "",
    featured: false,
  },
  {
    id: "dsa-collection",
    title: "Data Structures & Algorithms Projects",
    description:
      "An ongoing collection of DSA implementations and problem solutions, covering foundational data structures and classic algorithmic techniques.",
    tech: ["Linked Lists", "Stacks", "Queues", "Trees", "Graphs", "Searching", "Sorting", "LeetCode"],
    features: [
      "Linked list operations",
      "Stack & queue implementations",
      "Tree & graph traversal",
      "Searching & sorting algorithms",
      "LeetCode problem solutions",
    ],
    github: "https://github.com/GITHUB_USERNAME/dsa", // TODO: replace
    demo: "",
    featured: false,
  },
];
