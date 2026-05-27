"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="rounded border border-border px-3 py-1 font-mono text-sm text-muted-foreground"
      >
        [theme]
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="rounded border border-border px-3 py-1 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {isDark ? "[light]" : "[dark]"}
    </button>
  );
}
