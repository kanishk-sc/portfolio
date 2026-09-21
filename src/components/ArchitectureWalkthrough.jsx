import { useRef } from "react";

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
    onSelect(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="walkthrough-tabs" role="tablist" aria-label="Choose a project architecture">
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
          onClick={() => onSelect(index)}
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

  return (
    <section
      id="architecture-walkthrough"
      className="walkthrough-panel"
      aria-labelledby="architecture-walkthrough-title"
    >
      <header className="walkthrough-header">
        <div>
          <p className="eyebrow">System trace</p>
          <h3 id="architecture-walkthrough-title" ref={headingRef} tabIndex={-1}>
            Architecture walkthrough
          </h3>
        </div>
        <button type="button" className="walkthrough-close" onClick={onClose}>
          Close walkthrough
        </button>
      </header>

      <ProjectTabs
        projects={projects}
        selectedIndex={selectedProjectIndex}
        onSelect={onProjectChange}
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
                  onClick={() => onStageChange(index)}
                >
                  <span className="stage-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item.title}</span>
                  {isCurrent ? <span className="stage-current">Current</span> : null}
                </button>
              </li>
            );
          })}
        </ol>

        <div className="walkthrough-detail-grid">
          <div
            id="walkthrough-stage-detail"
            className="walkthrough-detail"
            aria-live="polite"
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
            onClick={() => onStageChange(selectedStageIndex - 1)}
          >
            Previous
          </button>
          <button
            type="button"
            disabled={isLastStage}
            onClick={() => onStageChange(selectedStageIndex + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
