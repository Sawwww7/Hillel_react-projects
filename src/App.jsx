import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Menu from "./components/Menu/Menu";
import cartItems from "./data/data-order";
import "./App.css";

function App() {
  const [isShowForm, setIsShowForm] = useState(false);

  const handleFormVisible = () => {
    setIsShowForm(!isShowForm);
  };
  return (
    <div className="container">
      <Header />
      {!isShowForm && <Form handleFormVisible={handleFormVisible} />}
      {isShowForm && <Menu cartItems={cartItems} />}
    </div>
  );
}

export default App;
