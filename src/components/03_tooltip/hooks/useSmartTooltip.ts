import { RefObject, useCallback, useEffect, useMemo, useState } from 'react';

type Options = {
  minAbovePx?: number;
  marginPx?: number;
};

type Result = {
  showAbove: boolean;
  style: React.CSSProperties;
  handleToggle: (e: React.SyntheticEvent<HTMLDetailsElement>) => void;
};

export function useSmartTooltip(
  detailsRef: RefObject<HTMLDetailsElement>,
  tooltipRef: RefObject<HTMLDivElement>,
  { minAbovePx = 300, marginPx = 12 }: Options = {}
): Result {
  const [isOpen, setIsOpen] = useState(false);
  const [showAbove, setShowAbove] = useState(false);
  const [maxHeightPx, setMaxHeightPx] = useState<number | undefined>(undefined);

  const recalc = useCallback(() => {
    if (!detailsRef.current || !isOpen) return;

    const triggerRect = detailsRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const spaceAbove = Math.max(0, triggerRect.top - marginPx);
    const spaceBelow = Math.max(
      0,
      viewportHeight - triggerRect.bottom - marginPx
    );

    const desired = tooltipRef.current
      ? Math.max(
          tooltipRef.current.scrollHeight,
          tooltipRef.current.getBoundingClientRect().height
        )
      : 0;

    let placeAbove: boolean;
    if (spaceBelow < minAbovePx && spaceAbove >= minAbovePx) {
      placeAbove = true;
    } else if (desired > 0) {
      if (spaceBelow >= desired) placeAbove = false;
      else if (spaceAbove >= desired) placeAbove = true;
      else placeAbove = spaceAbove > spaceBelow;
    } else {
      placeAbove = spaceAbove > spaceBelow;
    }

    setShowAbove(placeAbove);
    setMaxHeightPx(Math.max(0, placeAbove ? spaceAbove : spaceBelow));
  }, [detailsRef, tooltipRef, isOpen, marginPx, minAbovePx]);

  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(recalc, 0);
    const onScroll = () => recalc();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [isOpen, recalc]);

  const handleToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    const target = e.target as HTMLDetailsElement;
    setIsOpen(target.open);
    setTimeout(recalc, 0);
  };

  const style: React.CSSProperties = useMemo(
    () => ({
      position: 'absolute',
      zIndex: 9999,
      minWidth: 400,
      maxWidth: 500,
      top: showAbove ? 'auto' : '100%',
      bottom: showAbove ? '20px' : 'auto',
      left: '50%',
      transform: `translate(-50%, ${showAbove ? '-8px' : '8px'})`,
      maxHeight: showAbove
        ? `${Math.max(minAbovePx, maxHeightPx ?? 0)}px`
        : maxHeightPx !== undefined
        ? `${maxHeightPx}px`
        : undefined,
      minHeight: showAbove ? `${minAbovePx}px` : undefined,
      overflowY:
        (showAbove ? Math.max(minAbovePx, maxHeightPx ?? 0) : maxHeightPx) !==
        undefined
          ? 'auto'
          : 'visible',
    }),
    [showAbove, maxHeightPx, minAbovePx]
  );

  return { showAbove, style, handleToggle };
}
