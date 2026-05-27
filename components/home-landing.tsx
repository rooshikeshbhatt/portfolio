"use client";

import { useEffect, useState } from "react";

import {
  detectModeFromReferrer,
  getStoredMode,
  setStoredMode,
  type Mode,
} from "@/lib/mode";
import { ModeSelector } from "@/components/mode-selector";
import { RecruiterView } from "@/components/views/recruiter-view";
import { HiringManagerView } from "@/components/views/hiring-manager-view";
import { ClientView } from "@/components/views/client-view";
import { PeerView } from "@/components/views/peer-view";

const views: Record<Mode, React.ComponentType> = {
  recruiter: RecruiterView,
  "hiring-manager": HiringManagerView,
  client: ClientView,
  peer: PeerView,
};

export function HomeLanding() {
  const [mode, setMode] = useState<Mode>("recruiter");

  useEffect(() => {
    const stored = getStoredMode();
    if (stored) {
      setMode(stored);
      return;
    }
    const detected = detectModeFromReferrer(document.referrer);
    if (detected) {
      setMode(detected);
      setStoredMode(detected);
    }
  }, []);

  const handleChange = (next: Mode) => {
    setMode(next);
    setStoredMode(next);
  };

  const View = views[mode];

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center gap-10 px-6 py-12 md:py-20">
      <header className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Rooshikesh Bhatt
        </h1>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          Data Scientist and GenAI Engineer — analyst instincts, engineer execution.
        </p>
      </header>
      <ModeSelector value={mode} onChange={handleChange} />
      <div className="w-full">
        <View />
      </div>
    </div>
  );
}
