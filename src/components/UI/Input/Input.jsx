import "./input.css";
const Input = ({
  type,
  className,
  placeholder,
  aria_label,
  value,
  setYourFullName,
}) => {
  const handleChangeInput = (event) => {
    console.log(event.target.value);
    setYourFullName(event.target.value);
  };

  const handleClickInput = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      aria-label={aria_label}
      value={value}
      onChange={handleChangeInput}
      onClick={handleClickInput}
    />
  );
};

export default Input;
