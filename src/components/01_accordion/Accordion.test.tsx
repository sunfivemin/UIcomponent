/// <reference types="vitest" />
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Accordion from "./Accordion";
import React from "react";

describe("Accordion - 단계별 디버깅", () => {
  it("1단계: 컴포넌트가 렌더링되는지 확인", () => {
    const { container } = render(<Accordion />);
    console.log("Rendered HTML:", container.innerHTML);
    expect(container.firstChild).toBeTruthy();
  });

  it("2단계: DOM 구조 출력", () => {
    render(<Accordion />);
    screen.debug(); // 전체 DOM 구조를 콘솔에 출력
    expect(true).toBe(true); // 일단 통과
  });

  it("3단계: 모든 텍스트 찾기", () => {
    render(<Accordion />);

    // 모든 텍스트 출력
    const allText = document.body.textContent;
    console.log("All text:", allText);

    // 제목들이 있는지 확인
    const hasTitle1 = allText?.includes("아코디언 제목 1");
    const hasTitle2 = allText?.includes("아코디언 제목 2");
    const hasTitle3 = allText?.includes("아코디언 제목 3");

    console.log("Has title 1:", hasTitle1);
    console.log("Has title 2:", hasTitle2);
    console.log("Has title 3:", hasTitle3);

    expect(hasTitle1 || hasTitle2 || hasTitle3).toBe(true);
  });

  it("4단계: 버튼 요소들 찾기", () => {
    render(<Accordion />);

    const buttons = screen.queryAllByRole("button");
    const allButtons = document.querySelectorAll("button");

    console.log("buttons by role:", buttons.length);
    console.log("buttons by querySelector:", allButtons.length);

    allButtons.forEach((btn, idx) => {
      console.log(`Button ${idx}:`, btn.textContent);
    });

    expect(buttons.length + allButtons.length).toBeGreaterThan(0);
  });

  it("5단계: 클릭 가능한 요소들 찾기", () => {
    render(<Accordion />);

    const clickableElements = document.querySelectorAll(
      '[onclick], button, [role="button"], .cursor-pointer'
    );

    console.log("Clickable elements:", clickableElements.length);

    clickableElements.forEach((el, idx) => {
      console.log(`Clickable ${idx}:`, el.tagName, el.textContent);
    });

    expect(clickableElements.length).toBeGreaterThanOrEqual(0);
  });
});
