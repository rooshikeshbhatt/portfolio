import type { Metadata } from "next";
import { Mail } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact · Rooshikesh Bhatt",
  description: "Get in touch about roles, projects, or technical conversations.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 md:py-20">
      <header className="mb-10 space-y-3">
        <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
          <span className="text-primary">//</span> Contact
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Let&apos;s talk
        </h1>
        <p className="max-w-prose text-base text-muted-foreground">
          Best for: role conversations, project enquiries, technical
          discussions. I respond within a few business days.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
          <span className="text-primary">//</span> Direct
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild>
            <a href="mailto:rooshikeshbhatt@gmail.com">
              <Mail />
              Email
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://www.linkedin.com/in/rooshikesh-bhatt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://github.com/rooshikeshbhatt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              GitHub
            </a>
          </Button>
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
            <span className="text-primary">//</span> Send a message
          </h2>
          <span className="font-mono text-xs text-muted-foreground">
            // form goes live in Phase 4 — use email above for now
          </span>
        </div>
        <form
          aria-disabled="true"
          className="space-y-4 rounded border border-border/60 p-4 opacity-60"
        >
          <div className="space-y-1.5">
            <label
              htmlFor="contact-name"
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              disabled
              className="w-full rounded border border-border bg-muted/40 px-3 py-2 text-sm placeholder:text-muted-foreground/50"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="contact-email"
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              disabled
              className="w-full rounded border border-border bg-muted/40 px-3 py-2 text-sm placeholder:text-muted-foreground/50"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="contact-message"
              className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              disabled
              rows={5}
              className="w-full resize-none rounded border border-border bg-muted/40 px-3 py-2 text-sm placeholder:text-muted-foreground/50"
              placeholder="What's on your mind?"
            />
          </div>
          <Button type="submit" disabled>
            Send — coming soon
          </Button>
        </form>
      </section>
    </div>
  );
}
