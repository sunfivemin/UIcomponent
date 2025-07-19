"use client";

interface PlaceholderProps {
  name: string;
}

const Placeholder = ({ name }: PlaceholderProps) => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">{name}</h2>
      <div className="text-center text-gray-600">
        <p>이 컴포넌트는 아직 개발 중입니다.</p>
        <p className="mt-2">곧 업데이트될 예정입니다!</p>
      </div>
    </div>
  );
};

export default Placeholder;
