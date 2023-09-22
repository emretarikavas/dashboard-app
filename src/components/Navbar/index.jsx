import "./navbar.scss";
import NavProfile from "../NavProfile";
import Logout from "../Logout";
import Dropdown from "../Dropdown";
function index() {
  return (
    <nav className="navbar">
      <NavProfile />

      <div className="navbar-right">
        <Dropdown />
        <Logout />
      </div>
    </nav>
  );
}

export default index;
