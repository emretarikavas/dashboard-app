import "./navProfile.scss";
import { useContext } from "react";
import { UserContext } from "src/context/UserContext";
import { usersData } from "src/data/index";

function Index() {
  const { userId } = useContext(UserContext);

  const loggedInUser = usersData.find((user) => user.id === userId);

  if (loggedInUser) {
    const name = `${loggedInUser.first_name}+${loggedInUser.last_name}`;
    const avatar = `https://ui-avatars.com/api/?name=${name}&background=fff&color=204CC4&rounded=true&size=48&bold=false&format=svg&font-size=0.38`;

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
            <h6>{loggedInUser.department}</h6>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Index;
