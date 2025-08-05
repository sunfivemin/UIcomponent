import React, { useEffect, useRef } from 'react';

interface VanillaWrapperProps {
  title: string;
  initiator: (wrapper: HTMLDivElement) => void;
  className?: string;
}

const VanillaWrapper = ({
  title,
  initiator,
  className = '',
}: VanillaWrapperProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      // 기존 내용 제거
      wrapper.innerHTML = '';

      // 초기화 함수 실행
      initiator(wrapper);
    }
  }, [initiator]);

  return (
    <div className={`vanilla-wrapper ${className}`}>
      <div className="vanilla-wrapper-header">
        <span className="vanilla-wrapper-icon">⚡</span>
        {title}
      </div>
      <div ref={wrapperRef} />
    </div>
  );
};

export default VanillaWrapper;
