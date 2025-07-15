"use client";

import { useState } from "react";

const TextBox = () => {
  const [text, setText] = useState("");

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">반응형 텍스트박스</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            텍스트 입력
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="여기에 텍스트를 입력하세요"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            입력된 텍스트
          </label>
          <div className="p-3 bg-gray-50 border border-gray-200 rounded-md min-h-[40px]">
            {text || "텍스트가 입력되지 않았습니다."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBox;
