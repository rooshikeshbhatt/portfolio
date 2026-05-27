"use client";

import { MODES, type Mode } from "@/lib/mode";
import { cn } from "@/lib/utils";

const labels: Record<Mode, string> = {
  recruiter: "Recruiter",
  "hiring-manager": "Hiring Manager",
  client: "Client",
  peer: "Peer",
};

type Props = {
  value: Mode;
  onChange: (mode: Mode) => void;
};

export function ModeSelector({ value, onChange }: Props) {
  return (
    <div
      role="tablist"
      aria-label="Choose a view"
      className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs"
    >
      {MODES.map((mode) => {
        const isActive = mode === value;
        return (
          <button
            key={mode}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(mode)}
            className={cn(
              "rounded border px-3 py-1 transition-colors",
              isActive
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-muted-foreground hover:text-foreground",
            )}
          >
            {labels[mode]}
          </button>
        );
      })}
    </div>
  );
}
