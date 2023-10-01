import { useState, useEffect, useContext } from "react";
import { UserContext } from "src/context/UserContext";
import usersData from "src/data/usersData.json";
import cn from "classnames";
import "./DropdownBox.scss";
import CalendarIcon from "src/components/Icons/CalendarIcon";
import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { tr } from "react-date-range/dist/locale";
import DownIcon from "src/components/Icons/DownIcon";

const index = ({ title, initialContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(initialContent);
  const [date, setDate] = useState(null);

  const { userRole, department, dateRange, setDateRange } =
    useContext(UserContext);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".dropdown")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

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
    }
    setIsOpen(true);
  };

  const renderDateRanges = () => {
    const dateRanges = [
      { label: "Son 7 Gün", days: 7 },
      { label: "Son 30 Gün", days: 30 },
      { label: "Son 1 Yıl", days: 365 }
    ];

    return dateRanges.map((range, index) => (
      <li
        key={index}
        className="date-range-item"
        onClick={() => {
          const endDate = new Date();
          const startDate = new Date();
          startDate.setDate(endDate.getDate() - range.days);
          handleSelect({
            selection: {
              startDate,
              endDate,
              key: "selection"
            }
          });
        }}
      >
        {range.label}
      </li>
    ));
  };

  return (
    <div className="dropdown" onClick={toggleDropdown}>
      <div className="title">
        <h3>{title}</h3>
        <h5>{initialContent}</h5>
      </div>

      {title === "Tarih Aralığı" ? <CalendarIcon /> : <DownIcon />}
      {isOpen && title !== "Tarih Aralığı" && (
        <ul className="content">
          <li>
            {title === "Departman"
              ? renderDepartments()
              : title === "Dönem"
              ? renderDateRanges()
              : null}
          </li>
        </ul>
      )}
      {title === "Tarih Aralığı" && isOpen && (
        <div className="datePicker">
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
            date={date}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default index;
