import Link from "next/link";

import { AvailabilityPill } from "@/components/availability-pill";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="font-mono text-sm transition-colors hover:text-primary"
          >
            <span className="text-primary">$</span> rooshikesh
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/projects"
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="/resume"
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              Résumé
            </Link>
            <Link
              href="/contact"
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
          <AvailabilityPill />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
