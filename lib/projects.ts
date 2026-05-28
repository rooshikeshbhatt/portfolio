export const SECTION_KINDS = [
  "problem",
  "approach",
  "tradeoffs",
  "outcomes",
  "custom",
] as const;

export type SectionKind = (typeof SECTION_KINDS)[number];

export type CaseStudySection = {
  kind: SectionKind;
  heading: string;
  body: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  featured: boolean;
  year?: number;
  role?: string;
  links?: {
    repo?: string;
    live?: string;
  };
  sections: CaseStudySection[];
};

const TODO = "// TODO";

function stubSections(): CaseStudySection[] {
  return [
    { kind: "problem", heading: "Problem", body: [TODO] },
    { kind: "approach", heading: "Approach", body: [TODO] },
    { kind: "tradeoffs", heading: "Tradeoffs", body: [TODO] },
    { kind: "outcomes", heading: "Outcomes", body: [TODO] },
  ];
}

export const projects: Project[] = [
  {
    slug: "rag-document-assistant",
    title: "RAG Document Assistant",
    summary: `${TODO}: longer summary across multiple sentences expected here. Layout should handle 2–4 sentences of description without breaking the card grid or pushing tech badges off-screen.`,
    tech: [],
    featured: true,
    sections: stubSections(),
  },
  {
    slug: "fraud-detection-pipeline",
    title: "Fraud Detection Pipeline",
    summary: `${TODO}: short summary`,
    tech: [],
    featured: true,
    sections: stubSections(),
  },
  {
    slug: "model-launch-framework",
    title: "Standardized Model Launch Framework",
    summary: `${TODO}: medium-length summary that fits in roughly one full sentence of real prose.`,
    tech: [],
    featured: true,
    sections: stubSections(),
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
