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
    setYourFullName(event.target.value);
  };
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      aria-label={aria_label}
      value={value}
      onChange={handleChangeInput}
    />
  );
};

export default Input;
