import axios from "axios";
import "./navProfile.scss";
import { useFakeData } from "src/context/useFakeData";
import { useEffect, useState } from "react";

function Index() {
  const { users } = useFakeData();
  const loggedInUserEmail = localStorage.getItem("email");

  const loggedInUser = users.find((user) => user.email === loggedInUserEmail);

  if (loggedInUser) {
    const name = `${loggedInUser.first_name}+${loggedInUser.last_name}`;
    const avatar = `https://ui-avatars.com/api/?name=${name}&background=646cff&color=f3f3f3&rounded=true&size=40&bold=true&format=svg&font-size=0.40`;

    if (loggedInUser) {
      return (
        <div className="navProfile">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="profile">
            <h3 className="name">
              {loggedInUser.first_name} {loggedInUser.last_name}
            </h3>
            <h6>Departman: {loggedInUser.department}</h6>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Index;