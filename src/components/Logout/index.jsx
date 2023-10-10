import "./logout.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "src/context/UserContext";
import NavButton from "../NavButton";
import LogoutButton from "src/components/LogoutButton";

function Logout() {
  const navigate = useNavigate();
  const { setDepartment, setUserId, setUserRole } = useContext(UserContext);

  function handleLogout() {
    setUserId(null);
    setDepartment(null);
    setUserRole(null);
    navigate("/login");
  }
  return <LogoutButton onClick={handleLogout} />;
}

export default Logout;
