"use client";

import { useState, useEffect } from "react";

const LazyLoading = () => {
  const [items, setItems] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const newItems = Array.from(
        { length: 5 },
        (_, i) => items.length + i + 1
      );
      setItems((prev) => [...prev, ...newItems]);
      setLoading(false);
      if (items.length + 5 >= 20) {
        setHasMore(false);
      }
    }, 1000);
  };

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">지연 로딩</h2>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item} className="p-4 bg-gray-100 rounded border">
            아이템 {item}
          </div>
        ))}
        {loading && (
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
            <p className="mt-2 text-gray-600">로딩 중...</p>
          </div>
        )}
        {hasMore && !loading && (
          <button
            onClick={loadMore}
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            더 보기
          </button>
        )}
        {!hasMore && (
          <p className="text-center text-gray-600 py-4">
            모든 아이템을 불러왔습니다.
          </p>
        )}
      </div>
    </div>
  );
};

export default LazyLoading;
