import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import cn from "classnames";
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
      {sideBarData.map((data, i) => (
        <NavLink key={i} to={data.to} onClick={() => setActiveLink(data.to)}>
          <div className="sidebarItemContainer">
            <div
              className={cn("sidebarItem", {
                activeLink: activeLink === data.to
              })}
            >
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
