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
    icon: <HiUsers />,
    iconActive: <HiOutlineUsers />,
    text: "Ana Sayfa"
  }
];

function index() {
  return sideBarData.map((data) => {
    <div key={data.id}>
      <NavLink to={data.to}>
        <span>{data.text}</span>
      </NavLink>
    </div>;
  });
}

export default index;
