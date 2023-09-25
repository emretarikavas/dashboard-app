import "./navbar.scss";
import NavProfile from "../NavProfile";
import Logout from "../Logout";
import Dropdown from "../Dropdown";
import Dropdown2 from "../Dropdown2";
function index() {
  return (
    <nav className="navbar">
      <NavProfile />

      <div className="navbar-right">
        <Dropdown />
        <Dropdown2 />
        <Logout />
      </div>
    </nav>
  );
}

export default index;
