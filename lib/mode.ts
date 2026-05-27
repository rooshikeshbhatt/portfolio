export const MODES = ["recruiter", "hiring-manager", "client", "peer"] as const;

export type Mode = (typeof MODES)[number];

const STORAGE_KEY = "portfolio-mode";

function isMode(value: string): value is Mode {
  return (MODES as readonly string[]).includes(value);
}

export function detectModeFromReferrer(
  referrer: string | null | undefined,
): Mode | null {
  if (!referrer) return null;
  try {
    const host = new URL(referrer).hostname;
    if (host.endsWith("linkedin.com")) return "recruiter";
    if (host.endsWith("github.com")) return "peer";
  } catch {
    // invalid referrer URL — ignore
  }
  return null;
}

export function getStoredMode(): Mode | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  if (value && isMode(value)) return value;
  return null;
}

export function setStoredMode(mode: Mode): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, mode);
}
