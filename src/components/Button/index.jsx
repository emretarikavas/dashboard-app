import "./button.scss";
import cn from "classnames";
function Button({ children, full, onClick, type }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(full && "fullWidth", "button")}
    >
      {children}
    </button>
  );
}

export default Button;
