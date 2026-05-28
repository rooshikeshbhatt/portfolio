// Feature flag: services section is currently hidden because focus is full-time hiring,
// not freelancing. Flip to true to re-enable the services chip + section.
const SHOW_SERVICES = false;

export type SectionConfig = {
  id: string;
  label: string;
  enabled: boolean;
};

export const sections: SectionConfig[] = [
  { id: "overview", label: "overview", enabled: true },
  { id: "projects", label: "projects", enabled: true },
  { id: "notes", label: "notes", enabled: true },
  { id: "now", label: "now", enabled: true },
  { id: "services", label: "services", enabled: SHOW_SERVICES },
];

export const visibleSections = sections.filter((s) => s.enabled);
