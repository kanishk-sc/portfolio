import { useEffect, useState } from "react";
import { architectureEvidence } from "../data/architectureEvidence";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function usePrefersReducedMotion() {
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

function ConnectorLayer({ plate, selectedStageIndex, layout }) {
  const nodes = new Map(plate.nodes.map((item) => [item.id, item]));
  const coordinate = (item, axis) => {
    if (layout === "mobile") return axis === "x" ? item.mobileX : item.mobileY;
    return item[axis];
  };

  return (
    <svg
      className={`evidence-connectors evidence-connectors-${layout}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {plate.links.map((item) => {
        const from = nodes.get(item.from);
        const to = nodes.get(item.to);
        const path = `M ${coordinate(from, "x")} ${coordinate(from, "y")} L ${coordinate(to, "x")} ${coordinate(to, "y")}`;
        const isReached = item.stage <= selectedStageIndex;
        const isEntering = item.stage === selectedStageIndex;

        return (
          <path
            key={`${item.from}-${item.to}`}
            className={[
              "evidence-path",
              `is-${item.variant}`,
              isReached ? "is-reached" : "",
              isEntering ? "is-entering" : "",
            ].filter(Boolean).join(" ")}
            d={path}
            pathLength="1"
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </svg>
  );
}

function EvidenceNode({ item, selectedStageIndex }) {
  const state = item.stage === selectedStageIndex
    ? "current"
    : item.stage < selectedStageIndex
      ? "reached"
      : "idle";

  return (
    <div
      className={`evidence-node is-${state}`}
      data-state={state}
      data-stage={item.stage}
      style={{
        "--node-x": `${item.x}%`,
        "--node-y": `${item.y}%`,
        "--node-mobile-x": `${item.mobileX}%`,
        "--node-mobile-y": `${item.mobileY}%`,
      }}
    >
      <span className="evidence-symbol" data-kind={item.kind}>
        <span>{item.code}</span>
      </span>
      <span className="evidence-node-title">{item.title}</span>
      <span className="evidence-node-note">{item.note}</span>
    </div>
  );
}

export default function EvidencePlate({ projectSlug, selectedStageIndex, motionIntent }) {
  const plate = architectureEvidence[projectSlug];
  const reducedMotion = usePrefersReducedMotion();
  const shouldAnimate = motionIntent === "pointer" && !reducedMotion;
  const artifact = plate.artifacts[selectedStageIndex];
  const titleId = `${projectSlug}-evidence-title`;
  const descriptionId = `${projectSlug}-evidence-description`;

  return (
    <figure
      className={`evidence-plate ${shouldAnimate ? "is-animated" : ""}`}
      data-testid={`${projectSlug}-evidence-plate`}
      data-active-stage={selectedStageIndex}
      data-motion={reducedMotion ? "reduced" : shouldAnimate ? "animated" : "instant"}
    >
      <div className="evidence-graphic" role="img" aria-labelledby={titleId} aria-describedby={descriptionId}>
        <p id={titleId} className="evidence-caption">Illustrated architecture · not live telemetry</p>
        <p id={descriptionId} className="sr-only">{plate.description}</p>
        <div className="evidence-canvas" aria-hidden="true">
          <ConnectorLayer plate={plate} selectedStageIndex={selectedStageIndex} layout="desktop" />
          <ConnectorLayer plate={plate} selectedStageIndex={selectedStageIndex} layout="mobile" />
          {plate.nodes.map((item) => (
            <EvidenceNode key={item.id} item={item} selectedStageIndex={selectedStageIndex} />
          ))}
        </div>

        <div key={`${projectSlug}-${selectedStageIndex}`} className="evidence-readout" aria-hidden="true">
          <span>Stage {String(selectedStageIndex + 1).padStart(2, "0")}</span>
          <strong>{artifact.label}</strong>
          <span>{artifact.value}</span>
        </div>
      </div>
    </figure>
  );
}
