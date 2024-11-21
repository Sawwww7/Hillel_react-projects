import "./header.css";
import Input from "../UI/Input/Input";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">PIZZA DAY</div>
      <Input
        type={"text"}
        className={"search-bar"}
        placeholder={"Search for the order #"}
      />
      <div className="username">ANDRII</div>
    </div>
  );
};

export default Header;
