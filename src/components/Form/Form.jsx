import { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const Form = ({ handleFormVisible }) => {
  const [yourFullName, setYourFullName] = useState("");

  return (
    <div className="main">
      <h1>The best pizza.</h1>
      <p className="subtitle">Straight out of the oven, straight to you.</p>
      <p className="welcome">
        👉 Welcome! Please start by telling us your name:
      </p>
      <Input
        type={"text"}
        className={"input"}
        placeholder={"Your full name"}
        aria_label={"Your full name"}
        value={yourFullName}
        setYourFullName={setYourFullName}
      />
      <Button className={"btn"} onClick={handleFormVisible}>
        Start Order
      </Button>
    </div>
  );
};

export default Form;
