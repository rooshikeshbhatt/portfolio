import { Download, Mail } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/lib/projects";

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

export function OverviewSection() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="space-y-10">
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

      <div className="space-y-5">
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
      </div>

      <div className="space-y-3">
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
      </div>

      {featuredProjects.length > 0 && (
        <div className="space-y-4">
          <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
            <span className="text-primary">//</span> Featured projects
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}

      <div className="space-y-3">
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
      </div>
    </section>
  );
}
