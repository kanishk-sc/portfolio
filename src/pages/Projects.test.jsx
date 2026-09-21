import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axe from "axe-core";
import { describe, expect, it, vi } from "vitest";
import Projects from "./Projects";

describe("project architecture walkthrough", () => {
  it("has no automated accessibility violations when closed or expanded for every project", async () => {
    const user = userEvent.setup();
    const { container } = render(<Projects />);

    const jsdomAxeOptions = { rules: { "color-contrast": { enabled: false } } };
    expect((await axe.run(container, jsdomAxeOptions)).violations).toEqual([]);

    for (const project of ["PulseForge", "FreightIQ", "ApplyPilot"]) {
      await user.click(screen.getByRole("button", { name: `Explore system for ${project}` }));
      expect((await axe.run(container, jsdomAxeOptions)).violations).toEqual([]);
      await user.click(screen.getByRole("button", { name: "Close walkthrough" }));
    }
  });

  it("opens the requested project, exposes the current stage, and restores focus on close", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const openFreightIQ = screen.getByRole("button", { name: "Explore system for FreightIQ" });
    expect(openFreightIQ).toHaveAttribute("aria-expanded", "false");

    await user.click(openFreightIQ);

    await waitFor(() => expect(screen.getByRole("heading", { name: "Architecture walkthrough" })).toHaveFocus());
    expect(openFreightIQ).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("tab", { name: "FreightIQ" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("button", { name: /Upload Current/ })).toHaveAttribute("aria-current", "step");
    expect(screen.getByText(/accepts a freight-invoice PDF/)).toBeVisible();

    await user.click(screen.getByRole("button", { name: "Next" }));
    expect(screen.getByRole("button", { name: /Store & queue Current/ })).toHaveAttribute("aria-current", "step");
    expect(screen.getByText(/Redis brokers work to Celery/)).toBeVisible();

    await user.click(screen.getByRole("button", { name: "Close walkthrough" }));
    expect(screen.queryByRole("heading", { name: "Architecture walkthrough" })).not.toBeInTheDocument();
    expect(openFreightIQ).toHaveFocus();
    expect(openFreightIQ).toHaveAttribute("aria-expanded", "false");
  });

  it("switches projects and stages with keyboard-operable controls", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const openPulseForge = screen.getByRole("button", { name: "Explore system for PulseForge" });
    openPulseForge.focus();
    await user.keyboard("{Enter}");

    const pulseForgeTab = screen.getByRole("tab", { name: "PulseForge" });
    pulseForgeTab.focus();
    await user.keyboard("{ArrowRight}");

    const freightIQTab = screen.getByRole("tab", { name: "FreightIQ" });
    expect(freightIQTab).toHaveFocus();
    expect(freightIQTab).toHaveAttribute("aria-selected", "true");

    await user.keyboard("{ArrowRight}");
    const applyPilotTab = screen.getByRole("tab", { name: "ApplyPilot" });
    expect(applyPilotTab).toHaveFocus();

    const stageList = screen.getByRole("list", { name: "ApplyPilot system stages" });
    const scoreStage = within(stageList).getByRole("button", { name: "Score" });
    scoreStage.focus();
    await user.keyboard(" ");

    expect(scoreStage).toHaveAttribute("aria-current", "step");
    expect(screen.getByText(/semantic similarity with skills, keyword/)).toBeVisible();
    expect(screen.getByTestId("applypilot-evidence-plate")).toHaveAttribute("data-motion", "instant");

    await user.click(screen.getByRole("button", { name: "Previous" }));
    expect(within(stageList).getByRole("button", { name: /Compare Current/ })).toHaveAttribute("aria-current", "step");
  });

  it("renders a distinct, non-interactive evidence plate for every project", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    await user.click(screen.getByRole("button", { name: "Explore system for PulseForge" }));
    const pulseForgePlate = screen.getByRole("img", { name: "Illustrated architecture · not live telemetry" });
    const pulseForgeFigure = screen.getByTestId("pulseforge-evidence-plate");
    expect(pulseForgePlate).toHaveAccessibleDescription(/partitioned Kafka ingestion/);
    expect(pulseForgeFigure).toHaveAttribute("data-active-stage", "0");
    expect(pulseForgePlate.querySelectorAll("button, a, [tabindex]")).toHaveLength(0);

    await user.click(screen.getByRole("tab", { name: "FreightIQ" }));
    const freightIQPlate = screen.getByTestId("freightiq-evidence-plate");
    expect(screen.getByRole("img", { name: "Illustrated architecture · not live telemetry" }))
      .toHaveAccessibleDescription(/PostgreSQL owns durable job state/);
    expect(freightIQPlate).toHaveTextContent("Illustrated architecture · not live telemetry");

    await user.click(screen.getByRole("tab", { name: "ApplyPilot" }));
    const applyPilotPlate = screen.getByRole("img", { name: "Illustrated architecture · not live telemetry" });
    expect(applyPilotPlate).toHaveAccessibleDescription(/one provider-generated embedding/);
    expect(applyPilotPlate).toHaveAccessibleDescription(/pgvector compares those two representations/);
  });

  it("updates plate state for direct selection and Previous or Next", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    await user.click(screen.getByRole("button", { name: "Explore system for FreightIQ" }));
    const plate = screen.getByTestId("freightiq-evidence-plate");
    const stageList = screen.getByRole("list", { name: "FreightIQ system stages" });

    await user.click(within(stageList).getByRole("button", { name: "Audit" }));
    expect(plate).toHaveAttribute("data-active-stage", "3");
    expect(plate).toHaveAttribute("data-motion", "animated");
    expect(plate.querySelectorAll('.evidence-node[data-state="current"]')).toHaveLength(2);

    await user.click(screen.getByRole("button", { name: "Previous" }));
    expect(plate).toHaveAttribute("data-active-stage", "2");
    await user.click(screen.getByRole("button", { name: "Next" }));
    expect(plate).toHaveAttribute("data-active-stage", "3");
  });

  it("suppresses plate animation when reduced motion is requested", async () => {
    vi.stubGlobal("matchMedia", vi.fn().mockReturnValue({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));
    const user = userEvent.setup();
    render(<Projects />);

    await user.click(screen.getByRole("button", { name: "Explore system for ApplyPilot" }));
    const plate = screen.getByTestId("applypilot-evidence-plate");
    await user.click(screen.getByRole("button", { name: "Represent" }));

    expect(plate).toHaveAttribute("data-motion", "reduced");
    expect(plate).not.toHaveClass("is-animated");
  });
});
