import React from "react";
import "./About.css";
import aks1 from '../images/article1.webp'
export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>درباره ما</h2>
          <p>
            ما یک تیم پرانرژی از توسعه‌دهندگان و طراحان وب هستیم ✨
            هدف ما اینه که با تولید مقالات، آموزش‌ها و پروژه‌های کاربردی
            مسیر یادگیری برنامه‌نویسی رو برای همه ساده‌تر و جذاب‌تر کنیم 🚀
          </p>
          <p>
            این وبسایت پر از مقالات آموزشی در حوزه‌های <strong>برنامه‌نویسی وب</strong>،
            <strong>رابط کاربری</strong> و <strong>طراحی</strong> هست.  
            امیدواریم که بتونیم با شما همراه بشیم و دانشمون رو به اشتراک بذاریم ❤️
          </p>
        </div>

        <div className="about-image">
          <img
            src={aks1}
            alt="درباره ما"
          />
        </div>
      </div>
    </section>
  );
}
