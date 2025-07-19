import React from "react";
import TabMenuConditional from "./1_conditional";
import TabMenuDisplay from "./2_display";
import TabMenuAnimated from "./3_animated";
import TabMenuVanilla from "./4_vanilla";
import TabMenuRadio from "./5_radio";
import TabMenuSearchable from "./6_searchable";
import TabMenuMultiple from "./7_multiple";
import TabMenu from "./TabMenu";
import { tabData } from "./data";

const TabMenuCollection = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "hsl(var(--background))",
        padding: "32px 16px",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "16px",
            letterSpacing: "-0.025em",
          }}
        >
          탭메뉴 컴포넌트 모음
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "hsl(var(--muted-foreground))",
            fontWeight: "400",
            maxWidth: "600px",
            margin: "0 auto 48px auto",
            lineHeight: "1.6",
            transition: "color 0.3s ease",
          }}
        >
          vanilla-extract + CVA로 구현한 7가지 탭메뉴 예시들
        </p>

        {/* 기본 탭메뉴 컴포넌트 */}
        <div
          style={{
            marginBottom: "48px",
            padding: "32px 24px",
            backgroundColor: "hsl(var(--card))",
            borderRadius: "16px",
            boxShadow:
              "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid hsl(var(--border))",
            transition:
              "background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              marginBottom: "24px",
              color: "hsl(var(--foreground))",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "color 0.3s ease",
            }}
          >
            <span
              style={{
                content: '""',
                width: "4px",
                height: "24px",
                background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                borderRadius: "6px",
              }}
            ></span>
            기본 탭메뉴 컴포넌트
          </h2>
          <TabMenu
            data={tabData}
            onTabChange={(id) => console.log("탭 변경:", id)}
          />
        </div>

        {/* 다양한 구현 방식들 */}
        <TabMenuConditional />
        <TabMenuDisplay />
        <TabMenuAnimated />
        <TabMenuVanilla />
        <TabMenuRadio />
        <TabMenuSearchable />
        <TabMenuMultiple />

        {/* 구현 방식별 특징 */}
        <div
          style={{
            marginTop: "48px",
            padding: "32px 24px",
            backgroundColor: "hsl(var(--muted))",
            borderRadius: "16px",
            border: "1px solid hsl(var(--border))",
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            transition: "background-color 0.3s ease, border-color 0.3s ease",
          }}
        >
          <h3
            style={{
              color: "hsl(var(--foreground))",
              fontSize: "1.5rem",
              fontWeight: "700",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "color 0.3s ease",
            }}
          >
            <span style={{ fontSize: "1.25rem" }}>🔍</span>
            구현 방식별 특징
          </h3>
          <ul
            style={{
              lineHeight: "1.8",
              color: "hsl(var(--muted-foreground))",
              fontSize: "1rem",
              transition: "color 0.3s ease",
            }}
          >
            <li
              style={{
                marginBottom: "8px",
                paddingLeft: "16px",
                position: "relative",
              }}
            >
              <span
                style={{
                  color: "#3b82f6",
                  fontWeight: "bold",
                  position: "absolute",
                  left: "0",
                }}
              >
                •
              </span>
              <strong>조건부 렌더링:</strong> 현재 활성 탭만 렌더링하여 메모리
              효율적
            </li>
            <li
              style={{
                marginBottom: "8px",
                paddingLeft: "16px",
                position: "relative",
              }}
            >
              <span
                style={{
                  color: "#3b82f6",
                  fontWeight: "bold",
                  position: "absolute",
                  left: "0",
                }}
              >
                •
              </span>
              <strong>CSS Display:</strong> 모든 탭을 렌더링하고 CSS로 숨김/표시
            </li>
            <li
              style={{
                marginBottom: "8px",
                paddingLeft: "16px",
                position: "relative",
              }}
            >
              <span
                style={{
                  color: "#3b82f6",
                  fontWeight: "bold",
                  position: "absolute",
                  left: "0",
                }}
              >
                •
              </span>
              <strong>애니메이션:</strong> 부드러운 전환 효과와 시각적 피드백
            </li>
            <li
              style={{
                marginBottom: "8px",
                paddingLeft: "16px",
                position: "relative",
              }}
            >
              <span
                style={{
                  color: "#3b82f6",
                  fontWeight: "bold",
                  position: "absolute",
                  left: "0",
                }}
              >
                •
              </span>
              <strong>Vanilla JS:</strong> React 없이 순수 JavaScript로 구현
            </li>
            <li
              style={{
                marginBottom: "8px",
                paddingLeft: "16px",
                position: "relative",
              }}
            >
              <span
                style={{
                  color: "#3b82f6",
                  fontWeight: "bold",
                  position: "absolute",
                  left: "0",
                }}
              >
                •
              </span>
              <strong>라디오 버튼:</strong> HTML 기본 기능을 활용한 접근성 우수
            </li>
            <li
              style={{
                marginBottom: "8px",
                paddingLeft: "16px",
                position: "relative",
              }}
            >
              <span
                style={{
                  color: "#3b82f6",
                  fontWeight: "bold",
                  position: "absolute",
                  left: "0",
                }}
              >
                •
              </span>
              <strong>검색 가능:</strong> 탭 내용 검색 및 필터링 기능
            </li>
            <li
              style={{
                marginBottom: "8px",
                paddingLeft: "16px",
                position: "relative",
              }}
            >
              <span
                style={{
                  color: "#3b82f6",
                  fontWeight: "bold",
                  position: "absolute",
                  left: "0",
                }}
              >
                •
              </span>
              <strong>다중 선택:</strong> 여러 탭을 동시에 활성화 가능
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TabMenuCollection;
