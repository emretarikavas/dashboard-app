import "./input.scss";
import cn from "classnames";

function index({ type, full, placeholder, name, value, required, onChange }) {
  return (
    <input
      name={name}
      required={required}
      type={type}
      value={value}
      className={cn(full && "fullWidth", "input")}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default index;
