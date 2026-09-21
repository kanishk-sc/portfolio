import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axe from "axe-core";
import { describe, expect, it } from "vitest";
import Projects from "./Projects";

describe("project architecture walkthrough", () => {
  it("has no automated accessibility violations when closed or expanded", async () => {
    const user = userEvent.setup();
    const { container } = render(<Projects />);

    const jsdomAxeOptions = { rules: { "color-contrast": { enabled: false } } };
    expect((await axe.run(container, jsdomAxeOptions)).violations).toEqual([]);

    await user.click(screen.getByRole("button", { name: "Explore system for PulseForge" }));
    expect((await axe.run(container, jsdomAxeOptions)).violations).toEqual([]);
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

    await user.click(screen.getByRole("button", { name: "Previous" }));
    expect(within(stageList).getByRole("button", { name: /Compare Current/ })).toHaveAttribute("aria-current", "step");
  });
});
