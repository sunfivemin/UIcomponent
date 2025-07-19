import React, { useEffect, useRef } from "react";

interface VanillaWrapperProps {
  title: string;
  initiator: (wrapper: HTMLDivElement) => void;
  className?: string;
}

const VanillaWrapper = ({
  title,
  initiator,
  className = "",
}: VanillaWrapperProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      // 기존 내용 제거
      wrapper.innerHTML = "";

      // 초기화 함수 실행
      initiator(wrapper);
    }
  }, [initiator]);

  return (
    <div className={`vanilla-wrapper ${className}`}>
      <h3>{title}</h3>
      <div ref={wrapperRef} />
    </div>
  );
};

export default VanillaWrapper;
