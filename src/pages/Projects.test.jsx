import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axe from "axe-core";
import { describe, expect, it, vi } from "vitest";
import { VIGNETTE_DISCLOSURE, VIGNETTE_FRAME_DURATION_MS } from "../data/vignetteData";
import Projects from "./Projects";

const openProject = async (user, project) => {
  await user.click(screen.getByRole("button", { name: `Explore system for ${project}` }));
};

describe("project product walkthrough", () => {
  it("has no automated accessibility violations when closed or expanded for every project", async () => {
    const user = userEvent.setup();
    const { container } = render(<Projects />);
    const jsdomAxeOptions = { rules: { "color-contrast": { enabled: false } } };

    expect((await axe.run(container, jsdomAxeOptions)).violations).toEqual([]);

    for (const project of ["PulseForge", "FreightIQ", "ApplyPilot"]) {
      await openProject(user, project);
      expect((await axe.run(container, jsdomAxeOptions)).violations).toEqual([]);
      await user.click(screen.getByRole("button", { name: "Close walkthrough" }));
    }
  });

  it("renders a meaningful first frame for every project without autoplay", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const expectations = [
      ["PulseForge", "pulseforge", /versioned event envelopes enter Kafka partition lanes/],
      ["FreightIQ", "freightiq", /freight invoice labeled SAMPLE/],
      ["ApplyPilot", "applypilot", /fictional résumé and generic role description/],
    ];

    for (const [project, slug, description] of expectations) {
      await openProject(user, project);
      const vignette = screen.getByTestId(`${slug}-vignette`);
      expect(vignette).toHaveAttribute("data-active-stage", "0");
      expect(vignette).toHaveAttribute("data-playback", "idle");
      expect(screen.getByRole("img", { name: new RegExp(`${project}.*demonstration`, "i") }))
        .toHaveAccessibleDescription(description);
      expect(screen.getByText(VIGNETTE_DISCLOSURE)).toBeVisible();
      await user.click(screen.getByRole("button", { name: "Close walkthrough" }));
    }
  });

  it("plays, pauses, resumes, completes and replays the five-frame story", async () => {
    vi.useFakeTimers();
    render(<Projects />);
    fireEvent.click(screen.getByRole("button", { name: "Explore system for PulseForge" }));

    fireEvent.click(screen.getByRole("button", { name: "Play demo" }));
    expect(screen.getByTestId("pulseforge-vignette")).toHaveAttribute("data-playback", "playing");

    await act(() => vi.advanceTimersByTimeAsync(VIGNETTE_FRAME_DURATION_MS));
    expect(screen.getByRole("button", { name: /Process Current/ })).toHaveAttribute("aria-current", "step");

    fireEvent.click(screen.getByRole("button", { name: "Pause demo" }));
    expect(screen.getByTestId("pulseforge-vignette")).toHaveAttribute("data-playback", "paused");
    await act(() => vi.advanceTimersByTimeAsync(VIGNETTE_FRAME_DURATION_MS * 4));
    expect(screen.getByRole("button", { name: /Process Current/ })).toBeVisible();

    fireEvent.click(screen.getByRole("button", { name: "Resume demo" }));
    for (let frame = 0; frame < 3; frame += 1) {
      await act(() => vi.advanceTimersByTimeAsync(VIGNETTE_FRAME_DURATION_MS));
    }
    expect(screen.getByRole("button", { name: /Serve Current/ })).toHaveAttribute("aria-current", "step");
    expect(screen.getByTestId("pulseforge-vignette")).toHaveAttribute("data-playback", "complete");

    fireEvent.click(screen.getByRole("button", { name: "Replay demo" }));
    expect(screen.getByRole("button", { name: /Ingest Current/ })).toHaveAttribute("aria-current", "step");
    expect(screen.getByTestId("pulseforge-vignette")).toHaveAttribute("data-playback", "playing");
    vi.useRealTimers();
  });

  it("manual stages and Previous or Next cancel active playback", async () => {
    vi.useFakeTimers();
    render(<Projects />);
    fireEvent.click(screen.getByRole("button", { name: "Explore system for FreightIQ" }));
    const stages = screen.getByRole("list", { name: "FreightIQ system stages" });

    fireEvent.click(screen.getByRole("button", { name: "Play demo" }));
    fireEvent.click(within(stages).getByRole("button", { name: "Audit" }));
    expect(screen.getByTestId("freightiq-vignette")).toHaveAttribute("data-playback", "idle");
    expect(within(stages).getByRole("button", { name: /Audit Current/ })).toHaveAttribute("aria-current", "step");

    fireEvent.click(screen.getByRole("button", { name: "Play demo" }));
    await act(() => vi.advanceTimersByTimeAsync(VIGNETTE_FRAME_DURATION_MS));
    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(screen.getByTestId("freightiq-vignette")).toHaveAttribute("data-playback", "idle");
    expect(within(stages).getByRole("button", { name: /Extract Current/ })).toHaveAttribute("aria-current", "step");

    fireEvent.click(screen.getByRole("button", { name: "Play demo" }));
    await act(() => vi.advanceTimersByTimeAsync(VIGNETTE_FRAME_DURATION_MS));
    fireEvent.click(screen.getByRole("button", { name: "Previous" }));
    expect(screen.getByTestId("freightiq-vignette")).toHaveAttribute("data-playback", "idle");
    expect(within(stages).getByRole("button", { name: /Upload Current/ })).toHaveAttribute("aria-current", "step");
    vi.useRealTimers();
  });

  it("project switching and closing cancel playback while preserving focus", async () => {
    const user = userEvent.setup();
    render(<Projects />);
    const openFreightIQ = screen.getByRole("button", { name: "Explore system for FreightIQ" });
    await user.click(openFreightIQ);
    await waitFor(() => expect(screen.getByRole("heading", { name: "Project walkthrough" })).toHaveFocus());

    await user.click(screen.getByRole("button", { name: "Play demo" }));
    await user.click(screen.getByRole("tab", { name: "ApplyPilot" }));
    expect(screen.getByTestId("applypilot-vignette")).toHaveAttribute("data-playback", "idle");
    expect(screen.getByRole("button", { name: /Parse Current/ })).toHaveAttribute("aria-current", "step");

    await user.click(screen.getByRole("button", { name: "Play demo" }));
    await user.click(screen.getByRole("button", { name: "Close walkthrough" }));
    expect(screen.queryByRole("heading", { name: "Project walkthrough" })).not.toBeInTheDocument();
    expect(openFreightIQ).toHaveFocus();
    expect(openFreightIQ).toHaveAttribute("aria-expanded", "false");
  });

  it("cleans up playback timers when the walkthrough unmounts", async () => {
    vi.useFakeTimers();
    const clearTimeoutSpy = vi.spyOn(globalThis, "clearTimeout");
    const { unmount } = render(<Projects />);
    fireEvent.click(screen.getByRole("button", { name: "Explore system for ApplyPilot" }));
    fireEvent.click(screen.getByRole("button", { name: "Play demo" }));
    expect(vi.getTimerCount()).toBeGreaterThan(0);
    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalled();
    clearTimeoutSpy.mockRestore();
    vi.useRealTimers();
  });

  it("preserves keyboard tabs and exposes truthful project-specific content", async () => {
    const user = userEvent.setup();
    render(<Projects />);
    await openProject(user, "PulseForge");

    const pulseForgeTab = screen.getByRole("tab", { name: "PulseForge" });
    pulseForgeTab.focus();
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "FreightIQ" })).toHaveFocus();
    expect(screen.getByText("Sample invoice → structured record → deterministic finding")).toBeVisible();

    await user.click(screen.getByRole("button", { name: "Store & queue" }));
    expect(screen.getByRole("img", { name: /FreightIQ sample invoice demonstration/ }))
      .toHaveAccessibleDescription(/PostgreSQL separately owns durable queued job state/);

    await user.click(screen.getByRole("tab", { name: "ApplyPilot" }));
    await user.click(screen.getByRole("button", { name: "Compare" }));
    const applyPilotIllustration = screen.getByRole("img", { name: /ApplyPilot résumé-to-role demonstration/ });
    expect(applyPilotIllustration).toHaveAccessibleDescription(/complete résumé representation.*complete job representation/);
    expect(applyPilotIllustration).not.toHaveAccessibleDescription(/nearest-neighbor|section-level retrieval/i);
    expect(screen.getByText("Résumé + role → explainable evidence and gaps")).toBeVisible();
    expect(applyPilotIllustration.querySelectorAll("button, a, [tabindex], svg [tabindex]")).toHaveLength(0);
  });

  it("disables automatic playback under reduced motion while keeping static stages usable", async () => {
    vi.stubGlobal("matchMedia", vi.fn().mockReturnValue({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));
    const user = userEvent.setup();
    render(<Projects />);
    await openProject(user, "ApplyPilot");

    expect(screen.queryByRole("button", { name: "Play demo" })).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Show final result" }));
    expect(screen.getByRole("button", { name: /Explain Current/ })).toHaveAttribute("aria-current", "step");
    expect(screen.getByTestId("applypilot-vignette")).toHaveAttribute("data-motion", "reduced");
    expect(screen.getByRole("button", { name: "Show first frame" })).toBeVisible();

    await user.click(screen.getByRole("button", { name: "Previous" }));
    expect(screen.getByRole("button", { name: /Score Current/ })).toHaveAttribute("aria-current", "step");
  });

  it("keeps the published résumé byte-for-byte unchanged", () => {
    const resume = readFileSync(resolve("public/resume.pdf"));
    expect(createHash("sha256").update(resume).digest("hex").toUpperCase())
      .toBe("3A10F3C237E10D27B030F40C84F43ED98BCF965AA18562F2CB34E581648FFE3A");
  });
});
