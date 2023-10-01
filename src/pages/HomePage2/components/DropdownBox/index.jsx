import { useState, useContext } from "react";
import { UserContext } from "src/context/UserContext";
import usersData from "src/data/usersData.json";
import cn from "classnames";
import "./DropdownBox.scss";
import CalendarIcon from "src/components/Icons/CalendarIcon";
import { DateRangePicker } from "react-date-range";
import { tr } from "react-date-range/dist/locale";

const index = ({ title, initialContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(initialContent);

  const { userRole, department, dateRange, setDateRange } =
    useContext(UserContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const renderDepartments = () => {
    const departments = [...new Set(usersData.map((user) => user.department))];
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

  const handleSelect = (ranges) => {
    if (ranges.selection) {
      setDateRange([ranges.selection]);
      setContent(
        `${ranges.selection.startDate.toLocaleDateString()} - ${ranges.selection.endDate.toLocaleDateString()}`
      );
    } else {
      console.error("Unexpected format of ranges object:", ranges);
    }
  };

  const renderDateRanges = () => {
    const dateRanges = ["Son 7 Gün", "Son 30 Gün", "Son 1 Yıl"];
    return dateRanges.map((range, index) => (
      <li
        key={index}
        className="date-range-item"
        onClick={() => handleSelect(range)}
      >
        {range}
      </li>
    ));
  };

  return (
    <div className="dropdown" onClick={toggleDropdown}>
      <div className="title">
        <h3>{title}</h3>
        <h5>{initialContent}</h5>
      </div>
      <CalendarIcon />
      {isOpen && (
        <ul className="content">
          <li>
            {title === "Departman"
              ? renderDepartments()
              : title === "Dönem"
              ? renderDateRanges()
              : title === "Tarih Aralığı" && (
                  <DateRangePicker
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={1}
                    ranges={dateRange}
                    onChange={handleSelect}
                    direction="horizontal"
                    minDate={new Date("2020-01-01")}
                    maxDate={new Date()}
                    locale={tr}
                    rangeColors={"red"}
                  />
                )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default index;
