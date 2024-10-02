export default function Card({ title, content, category, date }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
        <p className="text-gray-600 text-sm">카테고리: {category}</p>
        <p className="text-gray-600 text-sm">날짜: {date}</p>
      </div>
    </div>
  );
}
