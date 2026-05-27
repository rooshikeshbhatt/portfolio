import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm transition-colors hover:text-primary"
        >
          <span className="text-primary">$</span> rooshikesh
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
