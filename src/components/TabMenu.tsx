"use client";

import { useState } from "react";

interface TabItem {
  id: string;
  label: string;
  content: string;
}

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs: TabItem[] = [
    {
      id: "tab1",
      label: "첫 번째 탭",
      content: "첫 번째 탭의 내용입니다.",
    },
    {
      id: "tab2",
      label: "두 번째 탭",
      content: "두 번째 탭의 내용입니다.",
    },
    {
      id: "tab3",
      label: "세 번째 탭",
      content: "세 번째 탭의 내용입니다.",
    },
  ];

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">탭 메뉴 컴포넌트</h2>
      <div className="border border-gray-200 rounded-lg">
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-4">
          <p className="text-gray-700">
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabMenu;
