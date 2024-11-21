import "./input.css";
const Input = ({ type, className, placeholder, aria_label }) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      aria-label={aria_label}
    />
  );
};

export default Input;
