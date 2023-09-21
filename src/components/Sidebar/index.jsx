import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import { HiOutlineHome, HiHome, HiUsers, HiOutlineUsers } from "react-icons/hi";
import { IoReceiptOutline, IoReceiptSharp } from "react-icons/io5";
import { useState } from "react";

const sideBarData = [
  {
    id: 1,
    to: "/",
    icon: <HiOutlineHome />,
    iconActive: <HiHome />,
    text: "Ana Sayfa"
  },
  {
    id: 2,
    to: "/billings",
    icon: <IoReceiptOutline />,
    iconActive: <IoReceiptSharp />,
    text: "Faturalar"
  },
  {
    id: 2,
    to: "/users",
    icon: <HiOutlineUsers />,
    iconActive: <HiUsers />,
    text: "Kullanıcılar"
  }
];

function index() {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <aside className="sidebar">
      {sideBarData.map((data) => (
        <NavLink
          className="sidebarItem"
          to={data.to}
          onClick={() => setActiveLink(data.to)}
        >
          {activeLink === data.to ? data.iconActive : data.icon}
          <span>{data.text}</span>
        </NavLink>
      ))}
    </aside>
  );
}

export default index;
