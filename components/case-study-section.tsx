import type { CaseStudySection as Section } from "@/lib/projects";

export function CaseStudySection({ section }: { section: Section }) {
  return (
    <section className="space-y-3">
      <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
        <span className="text-primary">//</span> {section.heading}
      </h2>
      <div className="space-y-3">
        {section.body.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
