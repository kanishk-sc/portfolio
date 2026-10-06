import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./Home";

describe("current résumé content", () => {
  it("reflects the current experience, contact and technical skills", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: "IT Support Intern – Classroom Technology" })).toBeVisible();
    expect(screen.getByText("Oct 2026 – Present")).toBeVisible();
    expect(screen.queryByText("Incoming Student AV Technician")).not.toBeInTheDocument();
    expect(screen.queryByText("Student Engagement Leader")).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Send an email" })).toHaveAttribute("href", "mailto:kanishksinghchauhan5@gmail.com");
    expect(screen.getByText(/Spring Boot/)).toBeVisible();
    expect(screen.getByText(/Codex · Claude Code · Cursor/)).toBeVisible();
    expect(screen.getByText(/open to relocation across the U.S./)).toBeVisible();
  });
});
