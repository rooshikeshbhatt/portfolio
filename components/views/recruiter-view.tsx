import { Download, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="size-4"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.13c-3.2.69-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.15 1.18a10.95 10.95 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.74.11 3.03.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.79.56C20.71 21.39 24 17.08 24 12c0-6.35-5.15-11.5-12-11.5z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="size-4"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.73V1.73C24 .78 23.21 0 22.23 0z" />
    </svg>
  );
}

const facts = [
  { label: "Location", value: "Toronto, Canada" },
  { label: "Work permit", value: "Open" },
  { label: "Focus", value: "Data Science · GenAI Engineering" },
  {
    label: "Open to",
    value: "Remote · Canada-wide · Data Science and GenAI roles",
  },
];

const skillGroups = [
  {
    label: "Data Science",
    items: [
      "Python (pandas, NumPy)",
      "SQL (PostgreSQL, MySQL)",
      "R",
      "scikit-learn, XGBoost",
      "Data viz (Plotly, Power BI, Tableau)",
    ],
  },
  {
    label: "GenAI Engineering",
    items: [
      "LLM APIs (OpenAI, Anthropic, Gemini)",
      "LangChain / LlamaIndex",
      "Hugging Face Transformers",
      "Vector DBs (pgvector, Pinecone, FAISS, ChromaDB)",
    ],
  },
  {
    label: "Tools & Infra",
    items: [
      "FastAPI / Flask",
      "Docker",
      "Streamlit / Hugging Face Spaces",
      "AWS / Azure / GCP",
      "Git / GitHub, Jupyter",
    ],
  },
];

const capabilities = [
  "EDA & data cleaning",
  "Feature engineering",
  "Statistical modeling & A/B testing",
  "Classification, regression, clustering",
  "Time series forecasting",
  "Dashboarding & reporting",
  "NLP / text classification",
  "Embeddings & semantic search",
  "RAG architecture",
  "Prompt engineering",
  "LLM evaluation",
  "Production deployment & monitoring",
];

export function RecruiterView() {
  return (
    <div className="space-y-10">
      <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {facts.map((fact) => (
          <div key={fact.label} className="rounded border border-border p-3">
            <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {fact.label}
            </dt>
            <dd className="mt-1 text-sm">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <section className="space-y-5">
        <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
          <span className="text-primary">//</span> Skills
        </h2>
        <div className="space-y-4">
          {skillGroups.map((group) => (
            <div key={group.label} className="space-y-2">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground/70">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-border px-2.5 py-1 font-mono text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
          <span className="text-primary">//</span> Capabilities
        </h2>
        <ul className="flex flex-wrap gap-2">
          {capabilities.map((item) => (
            <li
              key={item}
              className="rounded border border-border/60 px-2 py-0.5 font-mono text-xs text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
          <span className="text-primary">//</span> Contact
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled aria-label="Download résumé (coming soon)">
            <Download />
            Résumé
          </Button>
          <Button asChild variant="outline">
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
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">//</span> PDF coming soon
        </p>
      </section>
    </div>
  );
}
