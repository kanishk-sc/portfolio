import { useEffect, useReducer, useRef } from "react";
import ProjectVignette from "./ProjectVignette";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { VIGNETTE_FRAME_DURATION_MS } from "../data/vignetteData";

const initialPlayback = { status: "idle", announcement: "", run: 0 };

function playbackReducer(state, action) {
  switch (action.type) {
    case "play":
      return { status: "playing", announcement: action.resume ? "Demo resumed." : "Demo started.", run: state.run + 1 };
    case "pause":
      return { status: "paused", announcement: "Demo paused.", run: state.run };
    case "complete":
      return { status: "complete", announcement: action.announcement ?? "Demo complete. Final result shown.", run: state.run };
    case "reset":
      return { status: "idle", announcement: action.announcement ?? "", run: state.run + 1 };
    default:
      return state;
  }
}

function ProjectTabs({ projects, selectedIndex, onSelect }) {
  const tabRefs = useRef([]);

  const selectFromKeyboard = (event, index) => {
    const lastIndex = projects.length - 1;
    let nextIndex;

    if (event.key === "ArrowRight") nextIndex = index === lastIndex ? 0 : index + 1;
    else if (event.key === "ArrowLeft") nextIndex = index === 0 ? lastIndex : index - 1;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = lastIndex;
    else return;

    event.preventDefault();
    onSelect(nextIndex, "keyboard");
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="walkthrough-tabs" role="tablist" aria-label="Choose a project demonstration">
      {projects.map((project, index) => (
        <button
          key={project.slug}
          ref={(node) => { tabRefs.current[index] = node; }}
          id={`walkthrough-tab-${project.slug}`}
          type="button"
          role="tab"
          aria-selected={selectedIndex === index}
          aria-controls="walkthrough-project-panel"
          tabIndex={selectedIndex === index ? 0 : -1}
          onClick={(event) => onSelect(index, event.detail > 0 ? "pointer" : "keyboard")}
          onKeyDown={(event) => selectFromKeyboard(event, index)}
        >
          {project.title}
        </button>
      ))}
    </div>
  );
}

export default function ArchitectureWalkthrough({
  projects,
  selectedProjectIndex,
  selectedStageIndex,
  headingRef,
  onClose,
  onProjectChange,
  onStageChange,
}) {
  const project = projects[selectedProjectIndex];
  const stage = project.stages[selectedStageIndex];
  const isFirstStage = selectedStageIndex === 0;
  const isLastStage = selectedStageIndex === project.stages.length - 1;
  const reducedMotion = usePrefersReducedMotion();
  const [playback, dispatchPlayback] = useReducer(playbackReducer, initialPlayback);
  const timerRef = useRef(null);
  const deadlineRef = useRef(0);
  const remainingTimeRef = useRef(VIGNETTE_FRAME_DURATION_MS);
  const onStageChangeRef = useRef(onStageChange);

  useEffect(() => {
    onStageChangeRef.current = onStageChange;
  }, [onStageChange]);

  useEffect(() => {
    if (playback.status !== "playing" || reducedMotion) return undefined;

    if (isLastStage) {
      dispatchPlayback({ type: "complete" });
      return undefined;
    }

    const delay = remainingTimeRef.current;
    deadlineRef.current = Date.now() + delay;
    timerRef.current = globalThis.setTimeout(() => {
      remainingTimeRef.current = VIGNETTE_FRAME_DURATION_MS;
      onStageChangeRef.current(selectedStageIndex + 1, "playback");
    }, delay);

    return () => globalThis.clearTimeout(timerRef.current);
  }, [isLastStage, playback.run, playback.status, reducedMotion, selectedStageIndex]);

  useEffect(() => () => globalThis.clearTimeout(timerRef.current), []);

  const cancelPlayback = (announcement = "") => {
    globalThis.clearTimeout(timerRef.current);
    remainingTimeRef.current = VIGNETTE_FRAME_DURATION_MS;
    dispatchPlayback({ type: "reset", announcement });
  };

  const handlePlay = () => {
    if (reducedMotion) {
      onStageChange(project.stages.length - 1, "reduced");
      dispatchPlayback({ type: "complete", announcement: "Automatic playback is disabled. Final result shown." });
      return;
    }

    if (playback.status === "paused") {
      dispatchPlayback({ type: "play", resume: true });
      return;
    }

    if (!isFirstStage) onStageChange(0, "playback");
    remainingTimeRef.current = VIGNETTE_FRAME_DURATION_MS;
    dispatchPlayback({ type: "play" });
  };

  const handlePause = () => {
    remainingTimeRef.current = Math.max(0, deadlineRef.current - Date.now());
    globalThis.clearTimeout(timerRef.current);
    dispatchPlayback({ type: "pause" });
  };

  const handleReplay = () => {
    globalThis.clearTimeout(timerRef.current);
    remainingTimeRef.current = VIGNETTE_FRAME_DURATION_MS;
    onStageChange(0, "playback");
    dispatchPlayback({ type: "play" });
  };

  const handleReducedMotionAction = () => {
    if (isLastStage) {
      onStageChange(0, "reduced");
      dispatchPlayback({ type: "reset", announcement: "Automatic playback is disabled. First frame shown." });
    } else {
      handlePlay();
    }
  };

  const handleProjectChange = (projectIndex, intent) => {
    cancelPlayback();
    onProjectChange(projectIndex, intent);
  };

  const handleStageChange = (stageIndex, intent = "instant") => {
    cancelPlayback(playback.status === "playing" || playback.status === "paused" ? "Automatic playback stopped." : "");
    onStageChange(stageIndex, intent);
  };

  const handleClose = () => {
    cancelPlayback();
    onClose();
  };

  return (
    <section
      id="architecture-walkthrough"
      className="walkthrough-panel"
      aria-labelledby="architecture-walkthrough-title"
    >
      <header className="walkthrough-header">
        <div>
          <p className="eyebrow">Illustrative product demo</p>
          <h3 id="architecture-walkthrough-title" ref={headingRef} tabIndex={-1}>
            Project walkthrough
          </h3>
        </div>
        <button type="button" className="walkthrough-close" onClick={handleClose}>
          Close walkthrough
        </button>
      </header>

      <ProjectTabs
        projects={projects}
        selectedIndex={selectedProjectIndex}
        onSelect={handleProjectChange}
      />

      <div
        id="walkthrough-project-panel"
        className="walkthrough-project"
        role="tabpanel"
        aria-labelledby={`walkthrough-tab-${project.slug}`}
      >
        <ol className="walkthrough-stages" aria-label={`${project.title} system stages`}>
          {project.stages.map((item, index) => {
            const isCurrent = selectedStageIndex === index;
            return (
              <li key={item.title}>
                <button
                  type="button"
                  aria-current={isCurrent ? "step" : undefined}
                  aria-controls="walkthrough-stage-detail"
                  onClick={(event) => handleStageChange(index, event.detail > 0 ? "pointer" : "keyboard")}
                >
                  <span className="stage-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item.title}</span>
                  {isCurrent ? <span className="stage-current">Current</span> : null}
                </button>
              </li>
            );
          })}
        </ol>

        <div className="vignette-toolbar">
          <div className="vignette-playback-controls" aria-label={`${project.title} demo playback`}>
            {reducedMotion ? (
              <button type="button" onClick={handleReducedMotionAction}>
                {isLastStage ? "Show first frame" : "Show final result"}
              </button>
            ) : null}
            {!reducedMotion && playback.status === "idle" ? (
              <button type="button" onClick={handlePlay}>Play demo</button>
            ) : null}
            {!reducedMotion && playback.status === "playing" ? (
              <button type="button" onClick={handlePause}>Pause demo</button>
            ) : null}
            {!reducedMotion && playback.status === "paused" ? (
              <button type="button" onClick={handlePlay}>Resume demo</button>
            ) : null}
            {!reducedMotion && playback.status !== "idle" ? (
              <button type="button" className="button-secondary" onClick={handleReplay}>Replay demo</button>
            ) : null}
          </div>
          <p className="playback-status" aria-hidden="true">
            {reducedMotion ? "Automatic playback disabled" : playback.status === "idle" ? "Ready" : playback.status}
          </p>
          <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{playback.announcement}</p>
        </div>

        <ProjectVignette
          project={project}
          selectedStageIndex={selectedStageIndex}
          playbackStatus={playback.status}
          reducedMotion={reducedMotion}
        />

        <div className="walkthrough-detail-grid">
          <div
            id="walkthrough-stage-detail"
            className="walkthrough-detail"
            aria-live={playback.status === "playing" ? "off" : "polite"}
            aria-atomic="true"
          >
            <p className="detail-count">Stage {selectedStageIndex + 1} of {project.stages.length}</p>
            <h4>{stage.title}</h4>
            <p>{stage.description}</p>
          </div>

          <div className="walkthrough-meta">
            <p className="walkthrough-status"><strong>Project status.</strong> {project.walkthroughStatus}</p>
            <a href={project.source} target="_blank" rel="noopener noreferrer">
              View source<span className="sr-only"> for {project.title}, opens in a new tab</span>
            </a>
          </div>
        </div>

        <div className="walkthrough-controls" aria-label="Walkthrough stage controls">
          <button
            type="button"
            disabled={isFirstStage}
            onClick={(event) => handleStageChange(
              selectedStageIndex - 1,
              event.detail > 0 ? "pointer" : "keyboard",
            )}
          >
            Previous
          </button>
          <button
            type="button"
            disabled={isLastStage}
            onClick={(event) => handleStageChange(
              selectedStageIndex + 1,
              event.detail > 0 ? "pointer" : "keyboard",
            )}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
