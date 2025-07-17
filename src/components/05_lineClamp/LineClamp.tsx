"use client";

const LineClamp = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">여러줄 말줄임</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2">1줄 말줄임</h3>
          <p className="truncate bg-gray-100 p-3 rounded">
            이것은 매우 긴 텍스트입니다. 이 텍스트는 한 줄을 넘어가면 말줄임표로
            표시됩니다. 이것은 매우 긴 텍스트입니다.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">2줄 말줄임</h3>
          <p className="line-clamp-2 bg-gray-100 p-3 rounded">
            이것은 매우 긴 텍스트입니다. 이 텍스트는 두 줄을 넘어가면 말줄임표로
            표시됩니다. 이것은 매우 긴 텍스트입니다. 이것은 매우 긴
            텍스트입니다. 이것은 매우 긴 텍스트입니다.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">3줄 말줄임</h3>
          <p className="line-clamp-3 bg-gray-100 p-3 rounded">
            이것은 매우 긴 텍스트입니다. 이 텍스트는 세 줄을 넘어가면 말줄임표로
            표시됩니다. 이것은 매우 긴 텍스트입니다. 이것은 매우 긴
            텍스트입니다. 이것은 매우 긴 텍스트입니다. 이것은 매우 긴
            텍스트입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LineClamp;
