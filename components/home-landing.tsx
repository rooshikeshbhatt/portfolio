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
    <div className="flex flex-1 flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-semibold tracking-tight">Hello, Phase 1</h1>
      <ModeSelector value={mode} onChange={handleChange} />
      <View />
    </div>
  );
}
