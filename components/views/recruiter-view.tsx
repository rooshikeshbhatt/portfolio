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
    </div>
  );
}
