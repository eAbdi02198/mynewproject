import React, { useState } from 'react';
import './AddArticle.css';

const API_URL = "https://68a1e6ee6f8c17b8f5db0df3.mockapi.io/articles";

export default function AddArticle() {
  const [addarticledatas, setAddarticledatas] = useState({});

  const changehandler = (e) => {
    setAddarticledatas({ ...addarticledatas, [e.target.name]: e.target.value });
  };

  const submittaddarticlehandler = (e) => {
    e.preventDefault(); // جلوی رفرش صفحه

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addarticledatas)
    })
      .then(res => res.json())
      .then(data => {
        console.log("مقاله ثبت شد:", data);
        setAddarticledatas({}); // پاک کردن فرم
      })
      .catch(err => console.error("خطا در ثبت مقاله:", err));
  };

  return (
    <div className="add-article-container">
      <h2>افزودن مقاله جدید</h2>
      <form className="add-article-form" onSubmit={submittaddarticlehandler}>
        <div className="form-group">
          <label>نام مقاله:</label>
          <input
            type="text"
            placeholder="نام مقاله را وارد کنید"
            onChange={changehandler}
            name='title'
            value={addarticledatas.title || ''}
            required
          />
        </div>

        <div className="form-group">
          <label>عنوان مقاله:</label>
          <input
            type="text"
            placeholder="عنوان مقاله را وارد کنید"
            onChange={changehandler}
            name='category'
            value={addarticledatas.category || ''}
            required
          />
        </div>

        <div className="form-group">
          <label>توضیح کوتاه:</label>
          <input
            placeholder="توضیح کوتاه مقاله"
            onChange={changehandler}
            name='desc'
            value={addarticledatas.desc || ''}
            required
          />
        </div>

        <div className="form-group">
          <label>نویسنده مقاله:</label>
          <input
            type="text"
            placeholder="نام نویسنده را وارد کنید"
            name='writter'
            value={addarticledatas.writter || ''}
            onChange={changehandler}
            required
          />
        </div>

        <div className="form-group">
          <label>آدرس عکس مقاله:</label>
          <input
            type="text"
            placeholder="لینک عکس مقاله"
            onChange={changehandler}
            value={addarticledatas.image || ''}
            name='image'
            required
          />
        </div>

        <div className="form-group">
          <label>مدت زمان خواندن (دقیقه):</label>
          <input
            type="number"
            placeholder="مثلاً ۵"
            onChange={changehandler}
            value={addarticledatas.readingTime || ''}
            name='readingTime'
            required
          />
        </div>

        <button type="submit">ثبت مقاله</button>
      </form>
    </div>
  );
}
