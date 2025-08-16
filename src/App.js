import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./pages/routesapp";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import { useEffect } from "react";

function App() {
  let rotis = useRoutes(routes);


  return (
    <div className="App">
      <MyNavbar />
      {rotis}
      <MyFooter />
    </div>
  );
}

export default App;
