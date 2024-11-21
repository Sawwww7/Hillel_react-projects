import Button from "../UI/Button/Button";
import "./counter.css";

const Counter = ({ count, setCount }) => {
  const handleClickDecrementButton = () => {
    setCount(--count);
  };
  const handleClickIncrementButton = () => {
    setCount(++count);
  };
  return (
    <div className="counter">
      <Button
        className={"counter_button"}
        onClick={handleClickDecrementButton}
        aria_label={"Decrease quantity"}
      >
        -
      </Button>
      <span> {count} </span>
      <Button
        className={"counter_button"}
        onClick={handleClickIncrementButton}
        aria_label={"Increase quantity"}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
