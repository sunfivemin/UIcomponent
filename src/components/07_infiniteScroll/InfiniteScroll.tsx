"use client";

import { useState, useEffect, useRef } from "react";

const InfiniteScroll = () => {
  const [items, setItems] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement>(null);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const newItems = Array.from(
        { length: 10 },
        (_, i) => items.length + i + 1
      );
      setItems((prev) => [...prev, ...newItems]);
      setLoading(false);
      if (items.length + 10 >= 50) {
        setHasMore(false);
      }
    }, 500);
  };

  useEffect(() => {
    loadMore();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, loading, items.length]);

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">무한 스크롤</h2>
      <div className="space-y-2 max-h-96 overflow-y-auto">
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
        {!hasMore && (
          <p className="text-center text-gray-600 py-4">
            모든 아이템을 불러왔습니다.
          </p>
        )}
        <div ref={observerRef} className="h-4"></div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
