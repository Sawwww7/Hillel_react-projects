import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import cartItems from "./data/data-order";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/basket" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </div>
  );
}

export default App;
