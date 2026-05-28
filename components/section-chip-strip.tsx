"use client";

import { visibleSections } from "@/lib/sections";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  onChange: (id: string) => void;
};

export function SectionChipStrip({ value, onChange }: Props) {
  return (
    <div
      role="tablist"
      aria-label="Choose a section"
      className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs"
    >
      {visibleSections.map((section) => {
        const isActive = section.id === value;
        return (
          <button
            key={section.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(section.id)}
            className={cn(
              "rounded border px-3 py-1 transition-colors",
              isActive
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-muted-foreground hover:text-foreground",
            )}
          >
            {section.label}
          </button>
        );
      })}
    </div>
  );
}
