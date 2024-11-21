import Header from "./components/Header/Header";
//import Form from "./components/Form";
import Menu from "./components/Menu/Menu";
import pizzas from "./data/data";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu pizzas={pizzas} />
    </div>
  );
}

export default App;
