import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TabMenu from "./TabMenu";
import { tabData } from "./data";

describe("TabMenu", () => {
  it("renders without crashing", () => {
    render(<TabMenu data={tabData} onTabChange={() => {}} />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
  });

  it("renders all tabs", () => {
    render(<TabMenu data={tabData} onTabChange={() => {}} />);
    tabData.forEach((tab) => {
      expect(screen.getByText(tab.title)).toBeInTheDocument();
    });
  });

  it("shows first tab content by default", () => {
    render(<TabMenu data={tabData} onTabChange={() => {}} />);
    expect(screen.getByText(tabData[0].description)).toBeInTheDocument();
  });
});
