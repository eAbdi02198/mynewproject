import { Link } from "react-router-dom";
import "./MyNavbar.css"; // فایل CSS جداگانه

function MyNavbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        MyLogo
      </div>
      <ul className="nav-links">
        <li><Link to="/Home">صفحه اصلی</Link></li>
        <li><Link to="/AddArticle">ساخت مقاله</Link></li>
        <li><Link to="/About">درباره ما</Link></li>
      </ul>
    </nav>
  );
}

export default MyNavbar;
