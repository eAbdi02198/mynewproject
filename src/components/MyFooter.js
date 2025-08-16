import React from "react";
import "./MyFooter.css";

export default function MyFooter() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* بخش درباره ما */}
        <div className="footer-section">
          <h3>درباره ما</h3>
          <p>
            این وبسایت برای آموزش و انتشار مقالات برنامه‌نویسی ساخته شده.
            تلاش می‌کنیم بهترین منابع رو در اختیار شما قرار بدیم 🚀
          </p>
        </div>

        {/* لینک‌ها */}
        <div className="footer-section">
          <h3>لینک‌های سریع</h3>
          <ul>
            <li><a href="/">خانه</a></li>
            <li><a href="/articles">مقالات</a></li>
            <li><a href="/courses">دوره‌ها</a></li>
            <li><a href="/contact">تماس با ما</a></li>
          </ul>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div className="footer-section">
          <h3>ما را دنبال کنید</h3>
          <div className="socials">
            <a href="#">🌐 اینستاگرام</a>
            <a href="#">🐦 توییتر</a>
            <a href="#">📘 فیسبوک</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} تمامی حقوق محفوظ است | ساخته شده با ❤️ توسط الهه</p>
      </div>
    </footer>
  );
}
