import React from "react";
import LogoutIcon from "../Icons/LogoutIcon";
import "./LogoutButton.scss";
const index = ({ onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      <div className="sign-out">
        <LogoutIcon />
      </div>
      <div className="text">Çıkış Yap</div>
    </button>
  );
};

export default index;
