import Input from "./Input/Input";
import Button from "./Buttom/Button";
const Form = () => {
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
      />
      <Button className={"btn"}>Start Order</Button>
    </div>
  );
};

export default Form;
