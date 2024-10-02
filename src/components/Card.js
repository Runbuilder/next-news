import { useState } from 'react';

export default function Card({ title, category, date, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer" onClick={handleOpen}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-600 text-sm">카테고리: {category}</p>
        <p className="text-gray-600 text-sm">날짜: {date}</p>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <p>{content}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleClose}>
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
