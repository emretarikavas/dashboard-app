import { useState, useContext } from "react";
import { UserContext } from "src/context/UserContext";
import usersData from "src/data/usersData.json";
import cn from "classnames";
import "./DropdownBox.scss";
import DownIcon from "src/components/Icons/DownIcon";

const DropdownBox = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { userRole, department } = useContext(UserContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const renderDepartments = () => {
    const departments = [...new Set(usersData.map((user) => user.department))]; // Departman listesi
    return departments.map((dep, index) => (
      <li
        key={index}
        className={cn("department-item", {
          locked: userRole !== "Müdür" && department !== dep
        })}
      >
        {dep}
        {userRole !== "Müdür" && department !== dep && (
          <span className="lock-icon">🔒</span>
        )}
      </li>
    ));
  };

  const renderDateRanges = () => {
    const dateRanges = ["Son 7 Gün", "Son 30 Gün", "Son 1 Yıl"]; // Tarih aralığı listesi
    return dateRanges.map((range, index) => (
      <li key={index} className="date-range-item">
        {range}
      </li>
    ));
  };

  return (
    <div className="dropdown" onClick={toggleDropdown}>
      <div className="title">
        <h3>{children.title}</h3>
        <h5>{children.content}</h5>
      </div>
      <DownIcon />
      {isOpen && (
        <ul className="content">
          <li>
            {children.title === "Departman"
              ? renderDepartments()
              : renderDateRanges()}
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownBox;
