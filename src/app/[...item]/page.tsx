"use client";

import { ROUTE_PATH, isParentRoute, routePaths, routes } from "@/routes";

const ItemPage = ({ params: { item } }: { params: { item: string[] } }) => {
  const path = ["", ...item].join("/") as ROUTE_PATH;
  const route = routes[path];

  if (!routePaths.includes(path)) {
    return <div className="p-4 text-center">존재하지 않는 페이지입니다.</div>;
  }

  if (isParentRoute(route)) {
    return <div className="p-4 text-center">부모 라우트입니다.</div>;
  }

  if (!route.children) {
    return <div className="p-4 text-center">컴포넌트가 없습니다.</div>;
  }

  const Component = route.children;
  return <Component />;
};

export default ItemPage;
