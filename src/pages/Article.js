import React, { useEffect, useState } from 'react';
import './Article.css';
import { useParams } from 'react-router-dom';

export default function Article() {
  const { id } = useParams(); // گرفتن id از URL
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        const article = data.articles.find((item) => item.id === +id);
        setArticleData(article);
      })
      .catch((err) => console.error("Error fetching article:", err));
  }, [id]);


  if (!articleData) {
    return <p>در حال بارگذاری ...</p>;
  }

  return (
    <div className="article-page">
      <h2>{articleData.title}</h2>
      <img src={articleData.image} alt={articleData.title} />
      <p>{articleData.desc}</p>
      <p><b>✍️ نویسنده:</b> {articleData.writter}</p>
      <p><b>📂 دسته‌بندی:</b> {articleData.category}</p>
      <p><b>⏱ مدت زمان مطالعه:</b> {articleData.readingTime} دقیقه</p>
  
    </div>
  );
}
