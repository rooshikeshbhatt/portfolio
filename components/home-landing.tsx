"use client";

import { useState } from "react";

import { SectionChipStrip } from "@/components/section-chip-strip";
import { NotesSection } from "@/components/sections/notes-section";
import { NowSection } from "@/components/sections/now-section";
import { OverviewSection } from "@/components/sections/overview-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { visibleSections } from "@/lib/sections";

const sectionComponents: Record<string, React.ComponentType> = {
  overview: OverviewSection,
  projects: ProjectsSection,
  notes: NotesSection,
  now: NowSection,
  services: ServicesSection,
};

export function HomeLanding() {
  const [activeId, setActiveId] = useState<string>(
    visibleSections[0]?.id ?? "overview",
  );
  const Active = sectionComponents[activeId];

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center gap-10 px-6 py-12 md:py-20">
      <header className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Rooshikesh Bhatt
        </h1>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          Data Scientist and GenAI Engineer — analyst instincts, engineer
          execution.
        </p>
      </header>
      <SectionChipStrip value={activeId} onChange={setActiveId} />
      <div className="w-full">{Active && <Active />}</div>
    </div>
  );
}
