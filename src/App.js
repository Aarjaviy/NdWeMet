import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components.js/navbar";
import Collapse from "./components.js/collapse";
import Otherpolls from "./components.js/otherpolls";
import Dropdown from "./components.js/dropdown";

function App() {
  return (
    <>
    <Navbar/>
    <Collapse/>
    <Dropdown/>
    <Otherpolls/>
    </>
  );
}

export default App;
