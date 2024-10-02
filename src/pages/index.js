import { useEffect, useState } from 'react';
import Card from '@/components/Card';

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
    <div className="flex flex-wrap justify-center">
      <h1 className="text-3xl font-bold mb-4">카드 뉴스css</h1>
      {news.map(item => (
        <Card 
          key={item.id} 
          title={item.제목} 
          content={item.내용} 
          category={item.카테고리} 
          date={item.날짜} 
        />
      ))}
    </div>
  );
}