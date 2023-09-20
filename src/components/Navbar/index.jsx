import "./navbar.scss";
import NavProfile from "../NavProfile";
import { FakeDataProvider } from "src/context/useFakeData";
import Logout from "../Logout";
import Dropdown from "../Dropdown";
function index() {
  return (
    <nav className="navbar">
      <FakeDataProvider>
        <NavProfile />
      </FakeDataProvider>
      <div className="navbar-right">
        <Dropdown />
        <Logout />
      </div>
    </nav>
  );
}

export default index;
