import React from "react";
import { Link } from "react-router-dom";
import "./ArticleItem.css";

export default function ArticleItem({
  id,
  image,
  title,
  desc,
  writter,
  category = "عمومی",
  readingTime,
  onDelete
}) {
  return (
    <div className="article-card">
      <img src={image} alt={title} className="article-image" />

      <div className="article-content">
        <h3 className="article-title">
          <Link to={`/Article/${id}`}>{title}</Link>
        </h3>
        <p className="article-desc">{desc}</p>

        <div className="article-info">
          <span>✍️ {writter}</span>
          <span>📂 {category}</span>
          <span>⏱ {readingTime} دقیقه</span>
        </div>

        <button className="delete-btn" onClick={onDelete}>حذف</button>
      </div>
    </div>
  );
}
