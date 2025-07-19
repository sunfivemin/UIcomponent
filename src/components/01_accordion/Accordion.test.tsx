import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Accordion from "./Accordion";

const mockItems = [
  {
    id: "1",
    title: "Test Accordion 1",
    description: "Test description 1",
  },
  {
    id: "2",
    title: "Test Accordion 2",
    description: "Test description 2",
  },
];

describe("Accordion", () => {
  it("renders without crashing", () => {
    render(<Accordion items={mockItems} />);
    expect(screen.getByText("Test Accordion 1")).toBeInTheDocument();
  });

  it("renders all accordion items", () => {
    render(<Accordion items={mockItems} />);
    mockItems.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
