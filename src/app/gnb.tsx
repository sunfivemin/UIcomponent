"use client";
import {
  ChildRoute,
  ParentRoute,
  ROUTE_PATH,
  gnbRootList,
  isParentRoute,
  routes,
} from "@/routes";
import { ROUTE } from "../routes";
import Link from "next/link";
import classNames from "classnames";
import { useParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// 간단한 아이콘 컴포넌트
const ChevronRight = ({ className = "" }: { className?: string }) => (
  <span className={`toggle-arrow ${className}`}>▶</span>
);

// 상태 관리 훅
const useGnbState = () => {
  const [openItems, setOpenItems] = useState<ROUTE_PATH[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const currentRoute = pathname as ROUTE_PATH;
    const parentRoutes = gnbRootList
      .filter(isParentRoute)
      .filter((parentRoute) => parentRoute.children.includes(currentRoute));

    const newOpenItems = parentRoutes.map((parentRoute) => parentRoute.link);
    setOpenItems((prev) => [...new Set([...prev, ...newOpenItems])]);
  }, [pathname]);

  const toggleItem = (path: ROUTE_PATH) => {
    setOpenItems((prev) =>
      prev.includes(path)
        ? prev.filter((item) => item !== path)
        : [...prev, path]
    );
  };

  return { openItems, toggleItem };
};

// ParentGnbItem 컴포넌트
const ParentGnbItem = ({
  route: { name, link, children },
  currentPath,
  isOpen,
  onToggle,
}: {
  route: ParentRoute;
  currentPath: ROUTE_PATH;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const hasActivePage = children.includes(currentPath);

  return (
    <li
      className={classNames("parent", `items-${children.length}`, {
        open: isOpen,
        "has-active": hasActivePage,
      })}
    >
      {/* 기존 스타일 구조 유지하면서 개선 */}
      <div style={{ position: "relative" }}>
        <Link href={link}>{name}</Link>
        <button
          className="toggle-button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggle();
          }}
          aria-expanded={isOpen}
          aria-label={`${name} 메뉴 ${isOpen ? "접기" : "펼치기"}`}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            color: "inherit",
            cursor: "pointer",
            padding: "2px",
          }}
        >
          <ChevronRight className={isOpen ? "open" : ""} />
        </button>
      </div>

      <ul className="subRoutes">
        {children.map((childPath) => {
          const childRoute = routes[childPath];
          return (
            <GnbItem
              route={childRoute}
              currentPath={currentPath}
              key={childRoute.key}
              level={1}
            />
          );
        })}
      </ul>
    </li>
  );
};

// ChildGnbItem 컴포넌트
const ChildGnbItem = ({
  route: routeData, // 'route'를 'routeData'로 변경하여 충돌 방지
  currentPath,
  level = 0,
}: {
  route: ChildRoute;
  currentPath: ROUTE_PATH;
  level?: number;
}) => {
  const { name, link, children } = routeData;
  const isActive = link === currentPath;
  const isDisabled = !children;

  if (isDisabled) {
    return (
      <li className="disabled">
        <span className={`level-${level}`}>
          {name}
          <span style={{ fontSize: "11px", marginLeft: "8px", opacity: 0.6 }}>
            (준비중)
          </span>
        </span>
      </li>
    );
  }

  return (
    <li className={classNames({ active: isActive })}>
      <Link href={link} className={`level-${level}`}>
        {name}
        {/* 새로운 컴포넌트 표시 - route 대신 routeData 사용 */}
        {(routeData as any).isNew && <span className="badge new">NEW</span>}
      </Link>
    </li>
  );
};

// GnbItem 컴포넌트
const GnbItem = ({
  route,
  currentPath,
  level = 0,
  openItems,
  onToggle,
}: {
  route: ROUTE;
  currentPath: ROUTE_PATH;
  level?: number;
  openItems?: ROUTE_PATH[];
  onToggle?: (path: ROUTE_PATH) => void;
}) => {
  if (isParentRoute(route)) {
    const isOpen = openItems?.includes(route.link) || false;
    const handleToggle = () => onToggle?.(route.link);

    return (
      <ParentGnbItem
        route={route}
        currentPath={currentPath}
        isOpen={isOpen}
        onToggle={handleToggle}
      />
    );
  }

  return <ChildGnbItem route={route} currentPath={currentPath} level={level} />;
};

// 메인 Gnb 컴포넌트
const Gnb = () => {
  const { item = [] } = useParams();
  const currentPath = ["", ...item].join("/") as ROUTE_PATH;
  const { openItems, toggleItem } = useGnbState();

  return (
    <aside>
      {/* 헤더 */}
      <h1>
        <Link href="/">
          UI 요소 모음
          <sub>FE</sub>
        </Link>
      </h1>

      {/* 네비게이션 - 기존 구조 유지 */}
      <nav style={{ height: "calc(100vh - 120px)", overflowY: "auto" }}>
        <ul className="mainRoutes">
          {gnbRootList.map((r) => (
            <GnbItem
              route={r}
              currentPath={currentPath}
              key={r.key}
              openItems={openItems}
              onToggle={toggleItem}
            />
          ))}
        </ul>
      </nav>

      {/* 현재 경로 표시 푸터 */}
      <div className="footer">
        <div style={{ fontSize: "11px", color: "#999" }}>현재 경로:</div>
        <div className="current-path">{currentPath || "/"}</div>
      </div>
    </aside>
  );
};

export default Gnb;
