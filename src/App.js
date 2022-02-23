import logo from "./logo.svg";
import "./App.css";
import Namelist from "./components/pages/listarea/Namelist";
import Headercustom from "./components/pages/listarea/Header/Headercustom";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Headercustom />

      <Namelist />
    </div>
  );
}

export default App;
