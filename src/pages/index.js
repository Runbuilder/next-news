import { useEffect, useState } from 'react';

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('/api/news');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Fetching news failed:', error);
      }
    }

    fetchNews();
  }, []);

  return (
    <div>
      <h1>카드 뉴스2</h1>
      {news.map(item => (
        <div key={item.id} className="card">
          <h2>{item.제목}</h2>
          <p>{item.내용}</p>
          <p>카테고리: {item.카테고리}</p>
          <p>날짜: {item.날짜}</p>
        </div>
      ))}
    </div>
  );
}