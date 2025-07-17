/// <reference types="vitest" />
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import VanillaWrapper from "./vanillaWrapper";
import React from "react";

describe("VanillaWrapper - 통합 테스트", () => {
  it("실제 vanilla JS 라이브러리 시뮬레이션", async () => {
    // 가상의 차트 라이브러리 시뮬레이션
    const mockChartLibrary = {
      create: vi.fn(),
      destroy: vi.fn(),
    };

    const chartInitiator = (element: HTMLDivElement) => {
      // DOM에 차트 요소 추가
      element.innerHTML = `
        <div class="chart-container">
          <canvas id="chart-canvas"></canvas>
          <div class="chart-legend">범례</div>
        </div>
      `;

      // 가상의 차트 생성
      mockChartLibrary.create();

      // cleanup 함수 반환
      return () => {
        mockChartLibrary.destroy();
        element.innerHTML = "";
      };
    };

    const { unmount } = render(
      <VanillaWrapper
        title="차트 예시"
        subTitle="D3.js"
        variant="demo"
        initiator={chartInitiator}
      />
    );

    // 제목 확인
    expect(screen.getByText(/차트 예시/)).toBeInTheDocument();
    expect(screen.getByText(/D3.js/)).toBeInTheDocument();

    // 차트 요소들이 렌더링되었는지 확인
    await waitFor(() => {
      expect(document.querySelector(".chart-container")).toBeInTheDocument();
      expect(document.querySelector("#chart-canvas")).toBeInTheDocument();
      expect(screen.getByText("범례")).toBeInTheDocument();
    });

    // 라이브러리 함수가 호출되었는지 확인
    expect(mockChartLibrary.create).toHaveBeenCalledTimes(1);

    // 언마운트 시 cleanup 확인
    unmount();
    await waitFor(() => {
      expect(mockChartLibrary.destroy).toHaveBeenCalledTimes(1);
    });
  });

  it("인터랙티브 요소 테스트", async () => {
    const clickHandler = vi.fn();

    const interactiveInitiator = (element: HTMLDivElement) => {
      element.innerHTML = `
        <div class="interactive-demo">
          <button id="test-button">클릭해보세요</button>
          <div id="counter">클릭 횟수: 0</div>
        </div>
      `;

      let count = 0;
      const button = element.querySelector("#test-button") as HTMLButtonElement;
      const counter = element.querySelector("#counter") as HTMLDivElement;

      const handleClick = () => {
        count++;
        counter.textContent = `클릭 횟수: ${count}`;
        clickHandler(count);
      };

      button.addEventListener("click", handleClick);

      return () => {
        button.removeEventListener("click", handleClick);
      };
    };

    render(
      <VanillaWrapper
        title="인터랙티브 데모"
        variant="demo"
        initiator={interactiveInitiator}
      />
    );

    // 버튼과 카운터가 렌더링되었는지 확인
    await waitFor(() => {
      expect(screen.getByText("클릭해보세요")).toBeInTheDocument();
      expect(screen.getByText("클릭 횟수: 0")).toBeInTheDocument();
    });

    // 버튼 클릭 테스트
    const button = screen.getByText("클릭해보세요");
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("클릭 횟수: 1")).toBeInTheDocument();
      expect(clickHandler).toHaveBeenCalledWith(1);
    });

    // 여러 번 클릭
    fireEvent.click(button);
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("클릭 횟수: 3")).toBeInTheDocument();
      expect(clickHandler).toHaveBeenCalledTimes(3);
    });
  });

  it("비동기 초기화 테스트", async () => {
    const asyncInitiator = (element: HTMLDivElement) => {
      element.innerHTML = "<div>로딩 중...</div>";

      // 비동기 작업 시뮬레이션
      setTimeout(() => {
        element.innerHTML = "<div>비동기 로딩 완료!</div>";
      }, 100);

      return () => {
        element.innerHTML = "";
      };
    };

    render(<VanillaWrapper title="비동기 테스트" initiator={asyncInitiator} />);

    // 초기 로딩 상태 확인
    await waitFor(() => {
      expect(screen.getByText("로딩 중...")).toBeInTheDocument();
    });

    // 비동기 완료 확인
    await waitFor(
      () => {
        expect(screen.getByText("비동기 로딩 완료!")).toBeInTheDocument();
      },
      { timeout: 200 }
    );
  });

  it("복잡한 DOM 구조 테스트 - 수정된 버전", async () => {
    let componentElement: HTMLElement | null = null;

    const complexInitiator = (element: HTMLDivElement) => {
      const template = `
        <div class="complex-component">
          <header class="component-header">
            <h4>복잡한 컴포넌트</h4>
            <button class="close-btn">×</button>
          </header>
          <main class="component-body">
            <div class="sidebar">
              <ul class="menu">
                <li><a href="#item1">아이템 1</a></li>
                <li><a href="#item2">아이템 2</a></li>
                <li><a href="#item3">아이템 3</a></li>
              </ul>
            </div>
            <div class="content">
              <p>메인 콘텐츠 영역입니다.</p>
              <form class="test-form">
                <input type="text" placeholder="입력해주세요" />
                <button type="submit">제출</button>
              </form>
            </div>
          </main>
          <footer class="component-footer">
            <small>© 2024 테스트 컴포넌트</small>
          </footer>
        </div>
      `;

      element.innerHTML = template;

      // 컴포넌트 요소 저장
      componentElement = element.querySelector(
        ".complex-component"
      ) as HTMLElement;

      // 이벤트 리스너 추가
      const closeBtn = element.querySelector(".close-btn") as HTMLButtonElement;
      const form = element.querySelector(".test-form") as HTMLFormElement;

      const closeHandler = () => {
        if (componentElement) {
          componentElement.style.display = "none";
        }
      };

      const submitHandler = (e: Event) => {
        e.preventDefault();
        const input = form.querySelector("input") as HTMLInputElement;
        console.log("Form submitted with:", input.value);
      };

      closeBtn.addEventListener("click", closeHandler);
      form.addEventListener("submit", submitHandler);

      return () => {
        closeBtn.removeEventListener("click", closeHandler);
        form.removeEventListener("submit", submitHandler);
        componentElement = null;
      };
    };

    render(
      <VanillaWrapper
        title="복잡한 구조"
        variant="demo"
        size="lg"
        initiator={complexInitiator}
      />
    );

    // 모든 요소들이 렌더링되었는지 확인
    await waitFor(() => {
      expect(screen.getByText("복잡한 컴포넌트")).toBeInTheDocument();
      expect(screen.getByText("×")).toBeInTheDocument();
      expect(screen.getByText("아이템 1")).toBeInTheDocument();
      expect(screen.getByText("아이템 2")).toBeInTheDocument();
      expect(screen.getByText("아이템 3")).toBeInTheDocument();
      expect(screen.getByText("메인 콘텐츠 영역입니다.")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("입력해주세요")).toBeInTheDocument();
      expect(screen.getByText("제출")).toBeInTheDocument();
      expect(screen.getByText("© 2024 테스트 컴포넌트")).toBeInTheDocument();
    });

    // 컴포넌트가 처음에는 보이는지 확인
    expect(componentElement).toBeTruthy();
    expect(componentElement!.style.display).not.toBe("none");

    // 인터랙션 테스트 - 닫기 버튼 클릭
    const closeButton = screen.getByText("×");
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(componentElement!.style.display).toBe("none");
    });
  });

  it("여러 VanillaWrapper 인스턴스 동시 사용", async () => {
    const initiator1 = vi.fn((element: HTMLDivElement) => {
      element.innerHTML = '<div data-testid="wrapper1">Wrapper 1</div>';
    });

    const initiator2 = vi.fn((element: HTMLDivElement) => {
      element.innerHTML = '<div data-testid="wrapper2">Wrapper 2</div>';
    });

    const initiator3 = vi.fn((element: HTMLDivElement) => {
      element.innerHTML = '<div data-testid="wrapper3">Wrapper 3</div>';
    });

    render(
      <div>
        <VanillaWrapper title="첫 번째" initiator={initiator1} />
        <VanillaWrapper title="두 번째" variant="code" initiator={initiator2} />
        <VanillaWrapper
          title="세 번째"
          variant="demo"
          loading={true}
          initiator={initiator3}
        />
      </div>
    );

    // 모든 제목이 렌더링되는지 확인
    expect(screen.getByText(/첫 번째/)).toBeInTheDocument();
    expect(screen.getByText(/두 번째/)).toBeInTheDocument();
    expect(screen.getByText(/세 번째/)).toBeInTheDocument();

    // 첫 번째와 두 번째 wrapper의 내용 확인
    await waitFor(() => {
      expect(screen.getByTestId("wrapper1")).toBeInTheDocument();
      expect(screen.getByTestId("wrapper2")).toBeInTheDocument();
    });

    // 세 번째는 로딩 중이므로 내용이 없어야 함
    expect(screen.queryByTestId("wrapper3")).not.toBeInTheDocument();
    expect(screen.getByText("로딩 중...")).toBeInTheDocument();

    // initiator 호출 확인
    expect(initiator1).toHaveBeenCalledTimes(1);
    expect(initiator2).toHaveBeenCalledTimes(1);
    expect(initiator3).not.toHaveBeenCalled(); // 로딩 중이므로 호출되지 않음
  });

  it("DOM 요소 가시성 테스트", async () => {
    const visibilityInitiator = (element: HTMLDivElement) => {
      element.innerHTML = `
        <div class="visibility-test">
          <button id="toggle-btn">토글</button>
          <div id="target-div" style="display: block;">보이는 요소</div>
        </div>
      `;

      const button = element.querySelector("#toggle-btn") as HTMLButtonElement;
      const targetDiv = element.querySelector("#target-div") as HTMLDivElement;

      const toggleHandler = () => {
        targetDiv.style.display =
          targetDiv.style.display === "none" ? "block" : "none";
      };

      button.addEventListener("click", toggleHandler);

      return () => {
        button.removeEventListener("click", toggleHandler);
      };
    };

    render(
      <VanillaWrapper title="가시성 테스트" initiator={visibilityInitiator} />
    );

    await waitFor(() => {
      expect(screen.getByText("토글")).toBeInTheDocument();
      expect(screen.getByText("보이는 요소")).toBeInTheDocument();
    });

    const toggleButton = screen.getByText("토글");
    const targetDiv = document.querySelector("#target-div") as HTMLElement;

    // 초기 상태: 보임
    expect(targetDiv.style.display).toBe("block");

    // 첫 번째 클릭: 숨김
    fireEvent.click(toggleButton);
    expect(targetDiv.style.display).toBe("none");

    // 두 번째 클릭: 다시 보임
    fireEvent.click(toggleButton);
    expect(targetDiv.style.display).toBe("block");
  });
});
