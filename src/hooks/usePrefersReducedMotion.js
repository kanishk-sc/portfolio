import { useEffect, useState } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export default function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(
    () => globalThis.matchMedia?.(REDUCED_MOTION_QUERY).matches ?? false,
  );

  useEffect(() => {
    const mediaQuery = globalThis.matchMedia?.(REDUCED_MOTION_QUERY);
    if (!mediaQuery) return undefined;

    const updatePreference = (event) => setReducedMotion(event.matches);
    mediaQuery.addEventListener?.("change", updatePreference);
    return () => mediaQuery.removeEventListener?.("change", updatePreference);
  }, []);

  return reducedMotion;
}
