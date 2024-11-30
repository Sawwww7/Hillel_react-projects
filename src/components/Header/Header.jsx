import { useState } from "react";
import "./header.css";
import Input from "../UI/Input/Input";

import { Link } from "react-router-dom";

const Header = () => {
  const [yourSearchValue, setYourSearchValue] = useState("");

  return (
    <div className="header">
      <div className="logo">PIZZA DAY</div>
      <Input
        type={"text"}
        className={"search-bar"}
        placeholder={"Search for the order #"}
        aria_label={"Search for the order"}
        value={yourSearchValue}
        setInputValue={setYourSearchValue}
      />
      <div>
        <Link className={"heder_link"} to="/menu">
          Menu
        </Link>
        <Link className={"heder_link"} to="/basket">
          Basket
        </Link>
      </div>
      <div className="username">ANDRII</div>
    </div>
  );
};

export default Header;
