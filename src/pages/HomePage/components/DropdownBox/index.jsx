import { useState, useEffect, useContext } from "react";
import { UserContext } from "src/context/UserContext";
import { usersData, billingData } from "src/data/index";
import cn from "classnames";
import "./DropdownBox.scss";
import CalendarIcon from "src/components/Icons/CalendarIcon";
import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { tr } from "react-date-range/dist/locale";
import DownIcon from "src/components/Icons/DownIcon";
import { FaLock } from "react-icons/fa";

const index = ({ title, initialContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(initialContent);
  const [date, setDate] = useState(null);

  const { department, setDepartment, dateRange, setDateRange, userRole } =
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
    if (isOpen) {
      const dropdownContent = document.querySelector(".dropdown .content");
      dropdownContent.style.animation = "fadeOut 0.5s ease-in-out forwards";
      setTimeout(() => setIsOpen(false), 500); // 500ms is the duration of the animation
    } else {
      setIsOpen(true);
    }
  };

  const renderDepartments = () => {
    const departments = [
      ...new Set(billingData.map((bill) => bill.department))
    ];
    return departments.map((dep, index) => (
      <li
        key={index}
        className={cn("department-item", {
          locked: userRole === "Çalışan" && department !== dep
        })}
        onClick={() => {
          if (userRole !== "Çalışan" || department === dep) {
            setDepartment(dep);
          }
        }}
      >
        {dep}
        {userRole === "Çalışan" && department !== dep && <FaLock />}
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
    <div
      className={`dropdown ${isOpen ? "open" : ""}`}
      onClick={toggleDropdown}
    >
      <div className="title">
        <h3>{title}</h3>
        <h5>{initialContent}</h5>
      </div>

      {title === "Tarih Aralığı" ? <CalendarIcon /> : <DownIcon />}
      {isOpen && title !== "Tarih Aralığı" && (
        <ul className={`content ${isOpen ? "open" : ""}`}>
          {title === "Departman"
            ? renderDepartments()
            : title === "Dönem"
            ? renderDateRanges()
            : null}
        </ul>
      )}
      {title === "Tarih Aralığı" && isOpen && (
        <div
          className={`datePicker ${isOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <DateRangePicker
            showSelectionPreview={false}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={dateRange}
            onChange={handleSelect}
            direction="horizontal"
            minDate={new Date("2020-01-01")}
            maxDate={new Date()}
            locale={tr}
            rangeColors={["#204cc4"]}
          />
        </div>
      )}
    </div>
  );
};

export default index;
