const facts = [
  { label: "Location", value: "Toronto, Canada" },
  { label: "Work permit", value: "Open" },
  { label: "Focus", value: "Data Science · GenAI Engineering" },
  {
    label: "Open to",
    value: "Remote · Canada-wide · Data Science and GenAI roles",
  },
];

export function RecruiterView() {
  return (
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
  );
}
