import { useState } from "react";
import "./dropdown.scss";
import DropdownIcon from "../Icons/DropdownIcon";

export default function index() {
  const [open, setOpen] = useState(false);
  const Filter = ["Son 7 Gün", "Son 30 Gün", "Son 1 Yıl"];
  return (
    <div className="dropdownContainer">
      <button onClick={() => setOpen(!open)} className="Btn dropdownButton">
        <DropdownIcon size={28} />
      </button>

      {
        <ul className={`dropdown ${open ? "open" : ""}`}>
          {Filter.map((item, key) => (
            <li className="dropdownItem" key={key}>
              {item}
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
