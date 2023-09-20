import "./button.scss";
import cn from "classnames";
function Button({ children, full, onSubmit, onClick, type }) {
  return (
    <button
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      className={cn(full && "fullWidth", "button")}
    >
      {children}
    </button>
  );
}

export default Button;
