import logo from "./logo.svg";
import "./App.css";
import NamelistItem from "./components/listarea/NamelistItem";
import Namelist from "./components/listarea/Namelist";
import Headercustom from "./components/Header/Headercustom";

function App() {
  return (
    <div>
      <Headercustom />

      <Namelist />
    </div>
  );
}

export default App;
