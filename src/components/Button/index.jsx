import "./button.scss";
import cn from "classnames";
function Button({ children, full }) {
  return (
    <button className={cn(full && "fullWidth", "button")}>{children}</button>
  );
}

export default Button;
