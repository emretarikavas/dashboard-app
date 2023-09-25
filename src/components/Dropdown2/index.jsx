import { useState, useContext } from "react";

import { Calendar, DateRangePicker, DefinedRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import NavButton from "../NavButton";
import DropdownIcon from "../Icons/DropdownIcon";
import { UserContext } from "src/context/UserContext";
export default function index() {
  const [open, setOpen] = useState(false);
  const { dateRange, setDateRange } = useContext(UserContext);

  const handleSelect = (ranges) => {
    console.log(ranges.selection); // Bu satırı ekleyin
    setDateRange({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate
    });
  };
  return (
    <div>
      <NavButton onClick={() => setOpen(!open)}>
        <DropdownIcon />
      </NavButton>

      {open && (
        <DateRangePicker
          showSelectionPreview={true}
          moveRangeOnFirstSelection={true}
          months={1}
          ranges={[dateRange]}
          onChange={handleSelect}
          direction="horizontal"
          minDate={new Date("2020-01-01")}
          maxDate={new Date()}
        />
      )}
    </div>
  );
}
