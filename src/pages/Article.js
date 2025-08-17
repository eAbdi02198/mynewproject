import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Article.css';

export default function Article() {
  const { id } = useParams();             // گرفتن id از پارامتر URL
  const [articleData, setArticleData] = useState(null); // مقدار اولیه null

  useEffect(() => {
    // fetch فقط مقاله مربوط به id مشخص را می‌گیره
    fetch(`https://68a1e6ee6f8c17b8f5db0df3.mockapi.io/articles/${id}`)
      .then(res => res.json())
      .then(data => setArticleData(data))
      .catch(err => console.error("Error fetching article:", err));
  }, [id]);

  // نمایش لودینگ تا داده آماده نشه
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
