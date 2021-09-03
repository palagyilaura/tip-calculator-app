import "./App.css";
import Calculator from "./components/Calculator";
import Logo from "./images/logo.svg";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <Calculator />
    </div>
  );
}

export default App;
