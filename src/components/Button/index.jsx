import "./button.scss";
import cn from "classnames";
function Button({ children, full, onClick }) {
  return (
    <button onClick={onClick} className={cn(full && "fullWidth", "button")}>
      {children}
    </button>
  );
}

export default Button;
