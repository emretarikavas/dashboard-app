import DownIcon from "src/components/Icons/DownIcon";
import "./DropdownBox.scss";
const index = ({ children }) => {
  return (
    <div className="dropdown">
      <div className="left">
        <h3>{children.title}</h3>
        <h5>{children.content}</h5>
      </div>
      <DownIcon />
    </div>
  );
};

export default index;
