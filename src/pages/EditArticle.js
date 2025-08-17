import React, { useEffect, useState } from 'react';
import './EditArticle.css';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditArticle() {
  const { id } = useParams();
  const articleId = +id;
  const navigate = useNavigate();
  
  const [editArticleData, setEditArticleData] = useState({
    title: '',
    category: '',
    desc: '',
    writter: '',
    image: '',
    readingTime: ''
  });

  useEffect(() => {
    fetch(`https://68a1e6ee6f8c17b8f5db0df3.mockapi.io/articles/${articleId}`)
      .then(res => res.json())
      .then(data => setEditArticleData(data))
      .catch(err => console.error(err));
  }, [articleId]);

  const changeHandler = (e) => {
    setEditArticleData({ ...editArticleData, [e.target.name]: e.target.value });
  };

  const submitEditHandler = (e) => {
    e.preventDefault();
    // ارسال درخواست PUT به سرور
    fetch(`https://68a1e6ee6f8c17b8f5db0df3.mockapi.io/articles/${articleId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editArticleData)
    })
      .then(res => res.json())
      .then(data => {
        alert('مقاله با موفقیت ویرایش شد!');
        navigate(`/Article/${articleId}`); // بعد از ویرایش برگردیم به صفحه مقاله
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <h1>ویرایش مقاله</h1>
      <div>
        <form className="eddit-article-form" onSubmit={submitEditHandler}>
          <div className="form-group">
            <label>نام مقاله:</label>
            <input
              type="text"
              placeholder="نام مقاله را وارد کنید"
              name="title"
              value={editArticleData.title}
              onChange={changeHandler}
              required
            />
          </div>

          <div className="form-group">
            <label>دسته‌بندی مقاله:</label>
            <input
              type="text"
              placeholder="دسته‌بندی مقاله را وارد کنید"
              name="category"
              value={editArticleData.category}
              onChange={changeHandler}
              required
            />
          </div>

          <div className="form-group">
            <label>توضیح کوتاه:</label>
            <input
              type="text"
              placeholder="توضیح کوتاه مقاله"
              name="desc"
              value={editArticleData.desc}
              onChange={changeHandler}
              required
            />
          </div>

          <div className="form-group">
            <label>نویسنده مقاله:</label>
            <input
              type="text"
              placeholder="نام نویسنده را وارد کنید"
              name="writter"
              value={editArticleData.writter}
              onChange={changeHandler}
              required
            />
          </div>

          <div className="form-group">
            <label>آدرس عکس مقاله:</label>
            <input
              type="text"
              placeholder="لینک عکس مقاله"
              name="image"
              value={editArticleData.image}
              onChange={changeHandler}
              required
            />
          </div>

          <div className="form-group">
            <label>مدت زمان خواندن (دقیقه):</label>
            <input
              type="number"
              placeholder="مثلاً ۵"
              name="readingTime"
              value={editArticleData.readingTime}
              onChange={changeHandler}
              required
            />
          </div>

          <button type="submit">ویرایش مقاله</button>
        </form>
      </div>
    </>
  );
}
