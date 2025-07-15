import * as React from "react";
import Accordion from "@/components/Accordion";
import TabMenu from "@/components/TabMenu";
import Tooltip from "@/components/Tooltip";
import TextBox from "@/components/TextBox";
import LineClamp from "@/components/LineClamp";
import LazyLoading from "@/components/LazyLoading";
import InfiniteScroll from "@/components/InfiniteScroll";
import Placeholder from "@/components/Placeholder";

export const routePaths = [
  "/",
  "/accordion",
  "/tabMenu",
  "/tooltip",
  "/textBox",
  "/lineClamp",
  "/lazyLoading",
  "/infiniteScroll",
  "/scrollBox",
  "/scrollSpy",
  "/snackbar",
  "/modal",
  "/popover",
  "/imageSlide",
  "/carousel",
  "/gallery",
  "/selectBox",
  "/autoComplete",
  "/dnd",
] as const;
export type ROUTE_PATH = (typeof routePaths)[number];

type BaseRoute = {
  key: ROUTE_PATH;
  link: ROUTE_PATH;
  name: string;
};
export type ParentRoute = BaseRoute & {
  children: ROUTE_PATH[];
};
export type ChildRoute = BaseRoute & {
  children: React.ComponentType<any> | null;
};
export type ROUTE = ParentRoute | ChildRoute;

export const routes: Record<ROUTE_PATH, ROUTE> = {
  "/": {
    key: "/",
    link: "/",
    name: "root",
    children: [
      "/accordion",
      "/tabMenu",
      "/tooltip",
      "/textBox",
      "/lineClamp",
      "/lazyLoading",
      "/infiniteScroll",
      "/scrollBox",
      "/scrollSpy",
      "/snackbar",
      "/modal",
      "/popover",
      "/imageSlide",
      "/carousel",
      "/gallery",
      "/selectBox",
      "/autoComplete",
      "/dnd",
    ],
  },
  "/accordion": {
    key: "/accordion",
    link: "/accordion",
    name: "01. 아코디언",
    children: Accordion,
  },
  "/tabMenu": {
    key: "/tabMenu",
    link: "/tabMenu",
    name: "02. 탭메뉴",
    children: TabMenu,
  },
  "/tooltip": {
    key: "/tooltip",
    link: "/tooltip",
    name: "03. 툴팁",
    children: Tooltip,
  },
  "/textBox": {
    key: "/textBox",
    link: "/textBox",
    name: "04. 반응형 텍스트박스",
    children: TextBox,
  },
  "/lineClamp": {
    key: "/lineClamp",
    link: "/lineClamp",
    name: "05. 여러줄 말줄임",
    children: LineClamp,
  },
  "/lazyLoading": {
    key: "/lazyLoading",
    link: "/lazyLoading",
    name: "06. 지연 로딩",
    children: LazyLoading,
  },
  "/infiniteScroll": {
    key: "/infiniteScroll",
    link: "/infiniteScroll",
    name: "07. 무한 스크롤",
    children: InfiniteScroll,
  },
  "/scrollBox": {
    key: "/scrollBox",
    link: "/scrollBox",
    name: "08. 횡 스크롤 박스",
    children: () =>
      React.createElement(Placeholder, { name: "08. 횡 스크롤 박스" }),
  },
  "/scrollSpy": {
    key: "/scrollSpy",
    link: "/scrollSpy",
    name: "09. 스크롤 스파이",
    children: () =>
      React.createElement(Placeholder, { name: "09. 스크롤 스파이" }),
  },
  "/snackbar": {
    key: "/snackbar",
    link: "/snackbar",
    name: "10. 스낵바",
    children: () => React.createElement(Placeholder, { name: "10. 스낵바" }),
  },
  "/modal": {
    key: "/modal",
    link: "/modal",
    name: "11. 모달",
    children: () => React.createElement(Placeholder, { name: "11. 모달" }),
  },
  "/popover": {
    key: "/popover",
    link: "/popover",
    name: "12. 팝오버",
    children: () => React.createElement(Placeholder, { name: "12. 팝오버" }),
  },
  "/imageSlide": {
    key: "/imageSlide",
    link: "/imageSlide",
    name: "13. 이미지 슬라이드",
    children: () =>
      React.createElement(Placeholder, { name: "13. 이미지 슬라이드" }),
  },
  "/carousel": {
    key: "/carousel",
    link: "/carousel",
    name: "14. 캐러셀",
    children: () => React.createElement(Placeholder, { name: "14. 캐러셀" }),
  },
  "/gallery": {
    key: "/gallery",
    link: "/gallery",
    name: "15. 갤러리",
    children: () => React.createElement(Placeholder, { name: "15. 갤러리" }),
  },
  "/selectBox": {
    key: "/selectBox",
    link: "/selectBox",
    name: "16. 셀렉트 박스",
    children: () =>
      React.createElement(Placeholder, { name: "16. 셀렉트 박스" }),
  },
  "/autoComplete": {
    key: "/autoComplete",
    link: "/autoComplete",
    name: "17. 자동 완성",
    children: () => React.createElement(Placeholder, { name: "17. 자동 완성" }),
  },
  "/dnd": {
    key: "/dnd",
    link: "/dnd",
    name: "18. D&D 리스트",
    children: () =>
      React.createElement(Placeholder, { name: "18. D&D 리스트" }),
  },
};

export const isParentRoute = (route: ROUTE): route is ParentRoute =>
  Array.isArray(route.children);

export const gnbRootList = (routes["/"] as ParentRoute).children.map(
  (r) => routes[r]
);
