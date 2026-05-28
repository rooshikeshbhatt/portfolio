export type ExperienceEntry = {
  role: string;
  org: string;
  location?: string;
  start: string;
  end: string;
  highlights: string[];
  tech?: string[];
};

export type EducationEntry = {
  credential: string;
  institution: string;
  year?: string;
  highlights?: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  year?: string;
  url?: string;
};

export type Resume = {
  summary: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  certifications: Certification[];
};

const TODO = "// TODO";

export const resume: Resume = {
  summary: `${TODO}: 2–3 sentence professional summary — what you do, who you do it for, what's distinctive about how you do it`,
  experience: [
    {
      role: `${TODO}: role title`,
      org: `${TODO}: organization`,
      location: `${TODO}: city / remote`,
      start: `${TODO}: YYYY-MM`,
      end: "Present",
      highlights: [
        `${TODO}: outcome-led bullet — what changed because of you`,
        `${TODO}: scope/impact bullet with a number where possible`,
        `${TODO}: a technical bullet showing depth`,
      ],
      tech: [],
    },
    {
      role: `${TODO}: previous role`,
      org: `${TODO}: organization`,
      start: `${TODO}: YYYY-MM`,
      end: `${TODO}: YYYY-MM`,
      highlights: [
        `${TODO}: bullet`,
        `${TODO}: bullet`,
      ],
    },
  ],
  education: [
    {
      credential: `${TODO}: degree`,
      institution: `${TODO}: institution`,
      year: `${TODO}: YYYY`,
    },
  ],
  certifications: [
    {
      name: "IBM Professional Data Science",
      issuer: "IBM",
      year: `${TODO}: YYYY`,
    },
    {
      name: "IBM Data Analyst",
      issuer: "IBM",
      year: `${TODO}: YYYY`,
    },
  ],
};
