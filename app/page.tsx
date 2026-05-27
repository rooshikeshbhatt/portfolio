import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>
      <h1 className="text-4xl font-semibold tracking-tight">Hello, Phase 1</h1>
      <p className="font-mono text-sm text-muted-foreground">
        <span className="text-primary">//</span> foundation ready
      </p>
    </main>
  );
}
