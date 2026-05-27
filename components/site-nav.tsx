import Link from "next/link";

import { AvailabilityPill } from "@/components/availability-pill";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-mono text-sm transition-colors hover:text-primary"
          >
            <span className="text-primary">$</span> rooshikesh
          </Link>
          <AvailabilityPill />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
