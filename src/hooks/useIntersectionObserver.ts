import { RefObject, useEffect, useRef, useState } from 'react';

type Elem = Element | null;

const useIntersectionObserver = (
  elemRef: RefObject<Elem>,
  options: IntersectionObserverInit = { threshold: 0 },
  onIntersect?: (entry: IntersectionObserverEntry) => void
) => {
  const observerRef = useRef<IntersectionObserver>();
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

  useEffect(() => {
    const node = elemRef.current;
    if (!node) return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      setEntries(entries);

      const entry = entries[0];
      if (entry?.isIntersecting && onIntersect) {
        onIntersect(entry);
        observerRef.current?.disconnect();
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);
    observerRef.current.observe(node);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [elemRef, options, onIntersect]);

  return {
    entries,
    observerRef,
  };
};

export default useIntersectionObserver;
