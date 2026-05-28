import type { Metadata } from "next";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { resume, type ExperienceEntry } from "@/lib/resume";

export const metadata: Metadata = {
  title: "Résumé · Rooshikesh Bhatt",
  description: "Data Scientist and GenAI Engineer based in Toronto.",
};

function ResumeSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
        <span className="text-primary">//</span> {heading}
      </h2>
      {children}
    </section>
  );
}

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className="space-y-3 rounded border border-border/60 p-4">
      <header className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <div>
          <h3 className="text-base font-medium leading-tight">{entry.role}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {entry.org}
            {entry.location ? ` · ${entry.location}` : ""}
          </p>
        </div>
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {entry.start} — {entry.end}
        </p>
      </header>
      <ul className="space-y-1.5 pl-4 text-sm leading-relaxed">
        {entry.highlights.map((h, i) => (
          <li key={i} className="list-disc text-muted-foreground marker:text-primary/60">
            {h}
          </li>
        ))}
      </ul>
      {entry.tech && entry.tech.length > 0 && (
        <ul className="flex flex-wrap gap-1.5">
          {entry.tech.map((t) => (
            <li
              key={t}
              className="rounded border border-border/60 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 md:py-20">
      <header className="mb-10 space-y-5">
        <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
          <span className="text-primary">//</span> Résumé
        </p>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Rooshikesh Bhatt
            </h1>
            <p className="mt-2 text-base text-muted-foreground">
              Data Scientist and GenAI Engineer · Toronto, Canada
            </p>
          </div>
          <Button disabled aria-label="Download résumé PDF (coming soon)">
            <Download />
            Download PDF
          </Button>
        </div>
        <p className="text-base leading-relaxed">{resume.summary}</p>
      </header>

      <div className="space-y-12">
        <ResumeSection heading="Experience">
          <div className="space-y-4">
            {resume.experience.map((entry, i) => (
              <ExperienceCard key={i} entry={entry} />
            ))}
          </div>
        </ResumeSection>

        <ResumeSection heading="Education">
          <ul className="space-y-2">
            {resume.education.map((e, i) => (
              <li
                key={i}
                className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 rounded border border-border/60 p-3"
              >
                <div>
                  <p className="font-medium">{e.credential}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {e.institution}
                  </p>
                </div>
                {e.year && (
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {e.year}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection heading="Certifications">
          <ul className="space-y-2">
            {resume.certifications.map((c, i) => (
              <li
                key={i}
                className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 rounded border border-border/60 p-3"
              >
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                    {c.issuer}
                  </p>
                </div>
                {c.year && (
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {c.year}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </ResumeSection>
      </div>

      <p className="mt-10 font-mono text-xs text-muted-foreground">
        <span className="text-primary">//</span> PDF coming soon — drop the file at /public/resume.pdf
      </p>
    </div>
  );
}
