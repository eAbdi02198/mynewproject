// routes.js
import Home from "./Home";
import About from "./About";
import AddArticle from "./AddArticle";
import EditArticle from "./EditArticle";
import Article from "./Article";

const routes = [
  { path: "Home", element: <Home /> },
  { path: "About", element: <About /> },
  { path: "AddArticle", element: <AddArticle /> },
  { path: "EditArticle/:id", element: <EditArticle /> },
  { path: "Article/:id", element: <Article /> },
];

export default routes;
