import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded border border-border p-4 transition-colors hover:border-primary/60 focus-visible:border-primary focus-visible:outline-none"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-medium leading-tight">{project.title}</h3>
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
        />
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
      {project.tech.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((item) => (
            <li
              key={item}
              className="rounded border border-border/60 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}
