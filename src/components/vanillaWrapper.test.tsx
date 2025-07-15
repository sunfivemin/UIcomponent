import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import VanillaWrapper from "./vanillaWrapper";

describe("VanillaWrapper", () => {
  it("renders without title", () => {
    const mockInitiator = vi.fn();
    render(<VanillaWrapper initiator={mockInitiator} />);

    expect(mockInitiator).toHaveBeenCalled();
  });

  it("renders with title and subtitle", () => {
    const mockInitiator = vi.fn();
    render(
      <VanillaWrapper
        title="Test Component"
        subTitle="Example"
        initiator={mockInitiator}
      />
    );

    expect(screen.getByText("Test Component. Vanilla")).toBeInTheDocument();
    expect(screen.getByText("Example")).toBeInTheDocument();
  });

  it("renders with different variants", () => {
    const mockInitiator = vi.fn();
    const { rerender } = render(
      <VanillaWrapper variant="code" initiator={mockInitiator} />
    );

    let wrapper = screen.getByText("Test Component. Vanilla").closest("div");
    expect(wrapper).toHaveClass("font-mono");

    rerender(<VanillaWrapper variant="demo" initiator={mockInitiator} />);

    wrapper = screen.getByText("Test Component. Vanilla").closest("div");
    expect(wrapper).toHaveClass("border-dashed");
  });

  it("calls initiator with wrapper element", () => {
    const mockInitiator = vi.fn();
    render(<VanillaWrapper initiator={mockInitiator} />);

    expect(mockInitiator).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it("only calls initiator once", () => {
    const mockInitiator = vi.fn();
    const { rerender } = render(<VanillaWrapper initiator={mockInitiator} />);

    expect(mockInitiator).toHaveBeenCalledTimes(1);

    rerender(<VanillaWrapper initiator={mockInitiator} />);
    expect(mockInitiator).toHaveBeenCalledTimes(1);
  });
});
