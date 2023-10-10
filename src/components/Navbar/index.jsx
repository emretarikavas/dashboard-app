import "./navbar.scss";
import NavProfile from "../NavProfile";
import Logout from "../Logout";
function index() {
  return (
    <nav className="navbar">
      <NavProfile />
      <div className="navbar-right">
        <Logout />
      </div>
    </nav>
  );
}

export default index;
