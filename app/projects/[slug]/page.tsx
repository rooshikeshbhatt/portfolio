import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { CaseStudySection } from "@/components/case-study-section";
import { getProject, projects } from "@/lib/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} · Rooshikesh Bhatt`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 md:py-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3" />
        All projects
      </Link>
      <header className="mt-6 space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {project.title}
        </h1>
        <p className="text-base text-muted-foreground">{project.summary}</p>
        {project.tech.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
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
      </header>
      <div className="mt-10 space-y-10">
        {project.sections.map((section, i) => (
          <CaseStudySection key={`${section.kind}-${i}`} section={section} />
        ))}
      </div>
    </article>
  );
}
