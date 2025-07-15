"use client";

import { useState } from "react";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const Accordion = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const items: AccordionItem[] = [
    {
      id: 1,
      title: "아코디언 제목 1",
      content: "아코디언 내용 1입니다. 여기에 긴 내용이 들어갈 수 있습니다.",
    },
    {
      id: 2,
      title: "아코디언 제목 2",
      content: "아코디언 내용 2입니다. 여러 줄의 텍스트가 들어갈 수 있습니다.",
    },
    {
      id: 3,
      title: "아코디언 제목 3",
      content: "아코디언 내용 3입니다. 마지막 아이템입니다.",
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">아코디언 컴포넌트</h2>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="font-medium">{item.title}</span>
              <span
                className={`transform transition-transform ${
                  openItems.includes(item.id) ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openItems.includes(item.id) && (
              <div className="px-4 py-3 bg-white border-t border-gray-200">
                <p className="text-gray-700">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
