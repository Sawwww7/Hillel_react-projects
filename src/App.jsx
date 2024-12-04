import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import PageNotFound from "./pages/PageNotFound";
import cartItems from "./data/data-order";
import { createContext, useState } from "react";

export const NameContext = createContext(null);

function App() {
  const [userName, setUserName] = useState("");

  const austUser = {
    userName,
    setUserName,
  };
  return (
    <div className="container">
      <NameContext.Provider value={austUser}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/basket" element={<Cart cartItems={cartItems} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </NameContext.Provider>
    </div>
  );
}

export default App;
