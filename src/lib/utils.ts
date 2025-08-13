// 디바운싱 함수
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number,
  immediate: boolean = false
): T & { cancel: () => void } => {
  let timeoutId: NodeJS.Timeout | null = null;
  let hasExecuted = false;

  const debounced = ((...args: any[]) => {
    if (immediate && !hasExecuted) {
      func(...args);
      hasExecuted = true;
      return;
    }

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
      hasExecuted = false;
    }, delay);
  }) as T & { cancel: () => void };

  debounced.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    hasExecuted = false;
  };

  return debounced;
};

// 쓰로틀링 함수
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): T => {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;

  return ((...args: any[]) => {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  }) as T;
};

// 깊은 복사 함수
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }

  if (obj instanceof Array) {
    return obj.map(item => deepClone(item)) as T;
  }

  if (typeof obj === 'object') {
    const clonedObj = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }

  return obj;
};

// 날짜 포맷 함수
export const formatDate = (
  date: Date,
  format: string = 'YYYY-MM-DD'
): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
};

// textarea 줄 수 측정 유틸
export const measureLines = (
  textarea: HTMLTextAreaElement,
  value: string
): number => {
  const clone = document.createElement('textarea');
  const cs = getComputedStyle(textarea);

  Object.assign(clone.style, {
    position: 'absolute',
    left: '-9999px',
    top: '0',
    height: 'auto',
    visibility: 'hidden',
    whiteSpace: 'pre-wrap',
    overflow: 'auto',
    width: `${textarea.clientWidth}px`,
  } as CSSStyleDeclaration);

  // 핵심 폰트/간격 스타일 복제
  clone.style.fontFamily = cs.fontFamily;
  clone.style.fontSize = cs.fontSize;
  clone.style.lineHeight = cs.lineHeight;
  clone.style.letterSpacing = cs.letterSpacing;
  clone.style.padding = cs.padding;
  clone.style.border = cs.border;

  clone.rows = 1;
  clone.value = value;
  document.body.appendChild(clone);

  let lineHeightPx = parseFloat(cs.lineHeight);
  if (!lineHeightPx || Number.isNaN(lineHeightPx)) {
    const fontSize = parseFloat(cs.fontSize) || 16;
    lineHeightPx = fontSize * 1.2;
  }

  const lines = Math.max(1, Math.ceil(clone.scrollHeight / lineHeightPx));
  document.body.removeChild(clone);
  return lines;
};
