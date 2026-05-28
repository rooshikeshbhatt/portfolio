import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects · Rooshikesh Bhatt",
  description: "Selected work in Data Science and GenAI Engineering.",
};

export default function ProjectsIndex() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 md:py-20">
      <header className="mb-10 space-y-3">
        <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
          <span className="text-primary">//</span> Projects
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Selected work
        </h1>
      </header>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
