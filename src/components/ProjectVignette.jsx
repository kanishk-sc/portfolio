import ApplyPilotVignette from "./vignettes/ApplyPilotVignette";
import FreightIQVignette from "./vignettes/FreightIQVignette";
import PulseForgeVignette from "./vignettes/PulseForgeVignette";
import { VIGNETTE_DISCLOSURE, vignetteData } from "../data/vignetteData";

const VIGNETTES = {
  pulseforge: PulseForgeVignette,
  freightiq: FreightIQVignette,
  applypilot: ApplyPilotVignette,
};

export default function ProjectVignette({ project, selectedStageIndex, playbackStatus, reducedMotion }) {
  const VignetteScene = VIGNETTES[project.slug];
  const vignette = vignetteData[project.slug];
  const stage = project.stages[selectedStageIndex];
  const titleId = `${project.slug}-vignette-title`;
  const descriptionId = `${project.slug}-vignette-description`;
  const canAnimate = !reducedMotion && ["playing", "paused"].includes(playbackStatus);

  return (
    <figure
      className={`project-vignette ${canAnimate ? "is-animated" : ""} ${playbackStatus === "paused" ? "is-paused" : ""}`.trim()}
      data-testid={`${project.slug}-vignette`}
      data-active-stage={selectedStageIndex}
      data-playback={playbackStatus}
      data-motion={reducedMotion ? "reduced" : canAnimate ? "animated" : "instant"}
    >
      <div className="vignette-heading">
        <p className="vignette-disclosure">{VIGNETTE_DISCLOSURE}</p>
        <p className="vignette-progress"><strong>{selectedStageIndex + 1} of {project.stages.length}</strong> · {stage.title}</p>
      </div>
      <div
        className="vignette-canvas"
        role="img"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        <p id={titleId} className="sr-only">{vignette.title}</p>
        <p id={descriptionId} className="sr-only">{vignette.descriptions[selectedStageIndex]}</p>
        <div className="vignette-progress-rule" aria-hidden="true"><span style={{ width: `${((selectedStageIndex + 1) / project.stages.length) * 100}%` }} /></div>
        <div className="vignette-scene-shell" aria-hidden="true">
          <VignetteScene key={`${project.slug}-${selectedStageIndex}`} stage={selectedStageIndex} />
        </div>
      </div>
      <figcaption>{vignette.caption}</figcaption>
    </figure>
  );
}
