import { useEffect, useState } from 'react';
import Card from '@/components/Card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
      <Header />
      <div className="flex flex-wrap justify-center">
        {news.map(item => (
          <Card 
            key={item.id} 
            title={item.제목} 
            category={item.카테고리} 
            date={item.날짜} 
            content={item.내용} 
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}