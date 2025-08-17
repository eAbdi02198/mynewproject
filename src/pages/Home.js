// Home.js
import React, { useEffect, useState } from "react";
import ArticleItem from "../components/ArticleItem";
import './Home.css'
const API_URL = "https://68a1e6ee6f8c17b8f5db0df3.mockapi.io/articles";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const deleteArticle = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setArticles(articles.filter((article) => article.id !== id));
          console.log("مقاله حذف شد");
        } else {
          console.error("مشکل در حذف مقاله");
        }
      })
      .catch((err) => console.error("Error deleting article:", err));
  };

  return (
    <div className="home-container">
      <h2>لیست مقالات</h2>
      <div className="articles-container">
        {articles.map((article) => (
          <ArticleItem
            key={article.id}
            {...article}
            onDelete={() => deleteArticle(article.id)}
          />
        ))}
      </div>
    </div>
  );
}
