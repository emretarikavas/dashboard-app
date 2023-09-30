import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import { HiOutlineHome, HiHome, HiUsers, HiOutlineUsers } from "react-icons/hi";
import { IoReceiptOutline, IoReceiptSharp } from "react-icons/io5";
import { useState } from "react";
import HomeIcon from "src/components/Icons/HomeIcon";
import BillIcon from "src/components/Icons/BillIcon";
import UserIcon from "src/components/Icons/UserIcon";

const sideBarData = [
  {
    id: 1,
    to: "/",
    icon: <HomeIcon />,
    text: "Ana Sayfa"
  },
  {
    id: 2,
    to: "/billings",
    icon: <BillIcon />,
    text: "Faturalar"
  },
  {
    id: 2,
    to: "/users",
    icon: <UserIcon />,
    text: "Kullanıcılar"
  }
];

function index() {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <aside className="sidebar">
      {sideBarData.map((data) => (
        <NavLink to={data.to} onClick={() => setActiveLink(data.to)}>
          <div className="sidebarItemContainer">
            <div className="sidebarItem">
              {data.icon}
              <span>{data.text}</span>
            </div>
          </div>
        </NavLink>
      ))}
    </aside>
  );
}

export default index;
