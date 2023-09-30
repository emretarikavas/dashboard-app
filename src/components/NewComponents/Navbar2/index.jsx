import "./navbar.scss";
import NavProfile2 from "../NavProfile2";
import Logout2 from "../Logout2";
function index() {
  return (
    <nav className="navbar">
      <NavProfile2 />
      <div className="navbar-right">
        <Logout2 />
      </div>
    </nav>
  );
}

export default index;
