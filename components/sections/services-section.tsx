// services — packaged offerings + process timeline. Currently disabled;
// flip SHOW_SERVICES in lib/sections.ts to re-enable.

import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

const offerings = [
  {
    title: "// TODO: offering 1",
    body: "// TODO: outcome-led description — what the client gets, not what I do",
  },
  {
    title: "// TODO: offering 2",
    body: "// TODO: outcome-led description",
  },
  {
    title: "// TODO: offering 3",
    body: "// TODO: outcome-led description",
  },
];

const process = [
  { step: "01", label: "// TODO: discovery — scope, constraints, success criteria" },
  { step: "02", label: "// TODO: design — approach, milestones, risks surfaced" },
  { step: "03", label: "// TODO: build — iterative delivery with weekly check-ins" },
  { step: "04", label: "// TODO: handoff — documentation, monitoring, transition support" },
];

export function ServicesSection() {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
          <span className="text-primary">//</span> What I deliver
        </h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="space-y-2 rounded border border-border p-4"
            >
              <h3 className="text-base font-medium leading-tight">
                {offering.title}
              </h3>
              <p className="text-sm text-muted-foreground">{offering.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
          <span className="text-primary">//</span> How we&apos;ll work
        </h2>
        <ol className="space-y-2">
          {process.map((step) => (
            <li
              key={step.step}
              className="flex items-start gap-3 rounded border border-border/60 p-3"
            >
              <span className="font-mono text-xs text-primary">{step.step}</span>
              <span className="text-sm text-muted-foreground">{step.label}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-3">
        <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
          <span className="text-primary">//</span> Start a project
        </h2>
        <Button asChild>
          <a href="mailto:rooshikeshbhatt@gmail.com?subject=Project%20enquiry">
            <Mail />
            Book a call
          </a>
        </Button>
      </div>
    </section>
  );
}
