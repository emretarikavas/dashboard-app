import "./input.scss";
import cn from "classnames";

function index(type, full, placeholder, name, value, required) {
  return (
    <>
      <input
        name={name}
        required={required}
        type={type}
        value={value}
        className={cn(full && "fullWidth", "input")}
        placeholder={placeholder}
      />
    </>
  );
}

export default index;
