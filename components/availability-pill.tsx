"use client";

import { useEffect, useState } from "react";

type Status = "available" | "limited" | "unavailable";

type StatusResponse = {
  status: Status;
  message: string;
};

const dotColor: Record<Status, string> = {
  available: "bg-emerald-500",
  limited: "bg-amber-500",
  unavailable: "bg-rose-500",
};

export function AvailabilityPill() {
  const [data, setData] = useState<StatusResponse | null>(null);

  useEffect(() => {
    fetch("/api/status")
      .then((r) => r.json())
      .then((d: StatusResponse) => setData(d))
      .catch(() =>
        setData({ status: "unavailable", message: "status unavailable" }),
      );
  }, []);

  return (
    <div className="hidden items-center gap-2 font-mono text-xs text-muted-foreground sm:flex">
      <span
        className={`h-2 w-2 rounded-full ${
          data ? `${dotColor[data.status]} animate-pulse` : "bg-muted-foreground/30"
        }`}
        aria-hidden="true"
      />
      <span>{data?.message ?? "..."}</span>
    </div>
  );
}
