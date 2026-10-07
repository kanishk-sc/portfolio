import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./Home";

describe("current résumé content", () => {
  it("reflects the current experience, contact and technical skills", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: "IT Support Intern – Classroom Technology" })).toBeVisible();
    expect(screen.getByText("Oct 2026 – Present")).toBeVisible();
    expect(screen.queryByRole("heading", { name: "Incoming Student AV Technician" })).not.toBeInTheDocument();
    expect(screen.queryByText("Oct 2026 – Dec 2026")).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Student Engagement Leader" })).toBeVisible();
    expect(screen.getByText("Digital Engagement Center")).toBeVisible();
    expect(screen.getByText("Aug 2023 – May 2026")).toBeVisible();
    expect(screen.getByRole("link", { name: "Send an email" })).toHaveAttribute("href", "mailto:kanishksingh@usf.edu");
    expect(screen.getByRole("link", { name: "kanishksinghchauhan5@gmail.com" })).toHaveAttribute("href", "mailto:kanishksinghchauhan5@gmail.com");
    for (const skill of ["LangChain", "RabbitMQ", "Celery", "ETL/ELT"]) {
      expect(screen.getByText(new RegExp(skill), { selector: "dd" })).toBeVisible();
    }
    expect(screen.getByText(/computer networks/)).toBeVisible();
    expect(screen.getByText(/Spring Boot/)).toBeVisible();
    expect(screen.getByText(/Codex · Claude Code · Cursor/)).toBeVisible();
    expect(screen.getByText(/open to relocation across the U.S./)).toBeVisible();
  });
});
