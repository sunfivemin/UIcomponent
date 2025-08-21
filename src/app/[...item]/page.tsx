'use client';

import { ROUTE_PATH, isParentRoute, routePaths, routes } from '@/routes';
import LazyLoadings from '@/components/06_lazyLoading/index';
import InfiniteScrollIndex from '@/components/07_infiniteScroll/index';

const ItemPage = ({ params: { item } }: { params: { item: string[] } }) => {
  const path = ['', ...item].join('/') as ROUTE_PATH;
  const route = routes[path];

  if (!routePaths.includes(path)) {
    return <div className="p-4 text-center">존재하지 않는 페이지입니다.</div>;
  }

  if (isParentRoute(route)) {
    // 부모 라우트에 해당하는 인덱스 컴포넌트를 렌더링
    const parentRouteMap: Record<string, React.ComponentType> = {
      '/lazyLoading': LazyLoadings,
      '/infiniteScroll': InfiniteScrollIndex,
    };

    const IndexComponent = parentRouteMap[path];
    if (IndexComponent) {
      return <IndexComponent />;
    }

    return <div className="p-4 text-center">부모 라우트입니다.</div>;
  }

  if (!route.children) {
    return <div className="p-4 text-center">컴포넌트가 없습니다.</div>;
  }

  const Component = route.children;
  return <Component />;
};

export default ItemPage;
